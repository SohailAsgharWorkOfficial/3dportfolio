import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const characterRef = useRef<THREE.Object3D | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (!canvasDiv.current) return;
    const canvasElement = canvasDiv.current;

    const scene = sceneRef.current;
    const rect = canvasElement.getBoundingClientRect();
    const container = { width: rect.width, height: rect.height };
    const aspect = container.width / container.height;
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.width, container.height, false);
    renderer.setPixelRatio(pixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    canvasElement.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    let headBone: THREE.Object3D | null = null;
    let screenLight: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | undefined;
    let removeHoverHandlers: (() => void) | undefined;
    let introTimeout = 0;
    let frameId = 0;
    let resizeRafId: number | null = null;
    let unmounted = false;

    const clock = new THREE.Clock();
    const light = setLighting(scene);
    const progress = setProgress((value) => setLoading(value));
    const { loadCharacter } = setCharacter(renderer, scene, camera);

    loadCharacter().then((gltf) => {
      if (!gltf || unmounted) return;

      const animations = setAnimations(gltf);
      if (hoverDivRef.current) {
        removeHoverHandlers = animations.hover(gltf, hoverDivRef.current);
      }

      mixer = animations.mixer;
      const character = gltf.scene;
      characterRef.current = character;
      scene.add(character);
      headBone = character.getObjectByName("spine006") || null;
      screenLight = character.getObjectByName("screenlight") || null;

      progress.loaded().then(() => {
        if (unmounted) return;
        introTimeout = window.setTimeout(() => {
          light.turnOnLights();
          animations.startIntro();
        }, 2500);
      });
    });

    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.1, y: 0.2 };

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => (mouse = { x, y }));
    };
    const onTouchMove = (event: TouchEvent) => {
      handleTouchMove(event, (x, y) => (mouse = { x, y }));
    };
    const onTouchEnd = () => {
      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    const landingDiv = document.getElementById("landingDiv");
    landingDiv?.addEventListener("touchmove", onTouchMove, { passive: true });
    landingDiv?.addEventListener("touchend", onTouchEnd);

    const onResize = () => {
      if (resizeRafId !== null) {
        window.cancelAnimationFrame(resizeRafId);
      }
      resizeRafId = window.requestAnimationFrame(() => {
        handleResize(renderer, camera, canvasDiv);
      });
    };
    window.addEventListener("resize", onResize, { passive: true });

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (document.hidden) {
        clock.getDelta();
        return;
      }

      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp
        );
        light.setPointLight(screenLight);
      }

      const delta = clock.getDelta();
      mixer?.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      unmounted = true;
      window.clearTimeout(introTimeout);
      progress.clear();
      window.cancelAnimationFrame(frameId);
      if (resizeRafId !== null) {
        window.cancelAnimationFrame(resizeRafId);
      }

      document.removeEventListener("mousemove", onMouseMove);
      landingDiv?.removeEventListener("touchmove", onTouchMove);
      landingDiv?.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      removeHoverHandlers?.();

      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.isMesh) {
          mesh.geometry?.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => mat.dispose());
          } else {
            mesh.material?.dispose();
          }
        }
      });
      scene.clear();
      renderer.dispose();

      if (canvasElement.contains(renderer.domElement)) {
        canvasElement.removeChild(renderer.domElement);
      }
    };
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim"></div>
        <div className="character-hover" ref={hoverDivRef}></div>
      </div>
    </div>
  );
};

export default Scene;
