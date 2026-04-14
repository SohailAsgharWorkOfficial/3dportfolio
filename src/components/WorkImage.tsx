import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  priority?: boolean;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  useEffect(() => {
    return () => {
      if (video.startsWith("blob:")) {
        URL.revokeObjectURL(video);
      }
    };
  }, [video]);

  const handleMouseEnter = async () => {
    if (!props.video) return;

    setIsVideo(true);
    if (video) return;

    const response = await fetch(`src/assets/${props.video}`);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    setVideo(blobUrl);
  };

  const handleMouseLeave = () => {
    setIsVideo(false);
    if (video.startsWith("blob:")) {
      URL.revokeObjectURL(video);
      setVideo("");
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        rel="noreferrer"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img
          src={props.image}
          alt={props.alt}
          loading={props.priority ? "eager" : "lazy"}
          decoding="async"
        />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
