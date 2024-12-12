// AnimatedBackground.js
import React from "react";

export default function AnimatedBackground({
  video,
  children,
}) {
  return (
    <div style={styles.videoContainer}>
      <video autoPlay muted loop style={styles.video}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>{children}</div>
    </div>
  );
}

const styles = {
  videoContainer: {
    width: "90vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "-1",
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  heading: {
    fontSize: "3rem",
    textAlign: "center",
  },
};
