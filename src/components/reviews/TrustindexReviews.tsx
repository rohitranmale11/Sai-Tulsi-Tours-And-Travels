import { useEffect, useRef } from "react";

const trustindexScriptSrc =
  "https://cdn.trustindex.io/loader.js?58a6d4477d3919335936857772a";

let trustindexScriptMounted = false;

export const TrustindexReviews = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${trustindexScriptSrc}"]`,
    );

    if (existingScript || trustindexScriptMounted) {
      trustindexScriptMounted = true;
      return;
    }

    const script = document.createElement("script");
    script.src = trustindexScriptSrc;
    script.async = true;
    script.defer = true;
    script.dataset.trustindexLoader = "true";

    container.appendChild(script);
    trustindexScriptMounted = true;
  }, []);

  return (
    <div ref={containerRef} aria-label="Google reviews powered by Trustindex" />
  );
};
