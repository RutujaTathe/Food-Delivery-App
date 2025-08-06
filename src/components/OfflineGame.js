import React, { useState, useEffect } from "react";

function OfflineGame() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [jump, setJump] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Jump logic
  useEffect(() => {
    if (jump) {
      const timeout = setTimeout(() => setJump(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [jump]);

  if (isOnline) return null; // Show game only when offline

  return (
    <div
      style={{
        background: "#f2f2f2",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>🚫 You are offline</h2>
      <p>Play the Dino Game while you wait!</p>

      <div
        style={{
          position: "relative",
          width: "600px",
          height: "200px",
          border: "2px solid #333",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Dino */}
        <div
          style={{
            position: "absolute",
            bottom: jump ? "80px" : "0",
            left: "50px",
            width: "40px",
            height: "40px",
            background: "green",
            transition: "bottom 0.3s",
          }}
        ></div>

        {/* Obstacle */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "30px",
            height: "50px",
            background: "brown",
            animation: "move 3s linear infinite",
          }}
        ></div>
      </div>

      <button
        onClick={() => setJump(true)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#333",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Jump
      </button>

      <style>{`
        @keyframes move {
          from { right: -30px; }
          to { right: 100%; }
        }
      `}</style>
    </div>
  );
}

export default OfflineGame;
