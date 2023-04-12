// based on https://github.com/paulirish/lite-youtube-embed

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./YouTubeFacade.css";

function YouTubeFacade(props) {
  const [preconnected, setPreconnected] = useState(false);
  const [activated, setActivated] = useState(false);

  // useMemo prevents unnecessary rerenders
  const params = useMemo(() => {
    const givenParams = new URLSearchParams(props.params || []);
    givenParams.append("autoplay", 1); // comment to mimic browsers that don't support autoplay
    givenParams.append("playsinline", 1);
    return givenParams;
  }, [props.params]);

  const playLabel = props.playLabel || "Play";
  const needsYTApiForAutoplay = navigator.vendor.includes('Apple') || navigator.userAgent.includes('Mobi');
  // const needsYTApiForAutoplay = true; // uncomment to mimic browsers that don't support autoplay

  const container = useRef(null);

  useEffect(() => {
    let ytApiPromise;
    
    const fetchYTPlayerApi = () => {
      if (window.YT || (window.YT && window.YT.Player)) return;

      ytApiPromise = new Promise((res, rej) => {
        const el = document.createElement("script");
        el.src = "https://www.youtube.com/iframe_api";
        el.async = true;
        el.onload = _ => {
          window.YT.ready(res);
        };
        el.onerror = rej;
        container.current.append(el);
      });
    }

    const addYTPlayerIframe = async () => {
      fetchYTPlayerApi();
      await ytApiPromise;

      const videoPlaceholderEl = document.createElement("div");
      container.current.append(videoPlaceholderEl);

      const paramsObj = Object.fromEntries(params.entries());

      new window.YT.Player(videoPlaceholderEl, {
        width: "100%",
        videoId: props.videoId,
        playerVars: paramsObj,
        events: {
          "onReady": event => {
            event.target.playVideo();
          }
        }
      });
    };

    if (activated && needsYTApiForAutoplay) addYTPlayerIframe();
  }, [activated, needsYTApiForAutoplay, params, props.videoId]);

  return (
    <div
      className={"ytf " + props.className + (activated ? " ytf-activated" : "")}
      onPointerOver={() => setPreconnected(true)}
      onClick={() => setActivated(true)}
      ref={container}
      style={{backgroundImage: `url("https://i.ytimg.com/vi/${props.videoId}/sddefault.jpg")`}}
      {...props.containerProps}
    >
      {preconnected && (
        <>
          <link rel="preconnect" href="https://www.youtube-nocookie.com" />
          <link rel="preconnect" href="https://www.google.com" />
          <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
          <link rel="preconnect" href="https://static.doubleclick.net" />
        </>
      )}
      <button className="ytf-playbtn">
        <span className="ytf-visually-hidden">{playLabel}</span>
      </button>
      {activated && !needsYTApiForAutoplay && (
        <iframe
          width={560}
          height={315}
          title={playLabel}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(props.videoId)}?${params.toString()}`}
          onLoad={(event) => {event.target.focus(); console.log("focused")}}
        ></iframe>
      )}
    </div>
  )
}

export default YouTubeFacade;