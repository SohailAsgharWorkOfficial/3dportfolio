let fontsReadyPromise: Promise<void> | null = null;

function getFontSet() {
  if (typeof document === "undefined" || !("fonts" in document)) return null;
  return document.fonts;
}

export function areFontsReady() {
  const fontSet = getFontSet();
  return !fontSet || fontSet.status === "loaded";
}

export function waitForFonts() {
  const fontSet = getFontSet();
  if (!fontSet || fontSet.status === "loaded") {
    return Promise.resolve();
  }

  if (!fontsReadyPromise) {
    fontsReadyPromise = fontSet.ready.then(() => undefined);
  }

  return fontsReadyPromise;
}
