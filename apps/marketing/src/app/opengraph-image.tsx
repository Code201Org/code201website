import { ImageResponse } from "next/og";

export const alt = "Code201 — Healthcare operations, engineered properly";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#14120b",
          color: "#edecec",
        }}
      >
        {/* pulse tile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 18,
            backgroundColor: "#edecec",
            marginBottom: 36,
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#14120b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 12h4l2-5 3 10 2.5-7.5L15 13h7" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Code201
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 30,
            color: "rgba(237, 236, 236, 0.6)",
          }}
        >
          Healthcare operations, engineered properly
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 20,
            color: "#8bc4f8",
            letterSpacing: "0.2em",
          }}
        >
          CRM · AUTOMATION · ANALYTICS · AI
        </div>

        {/* ECG trace */}
        <svg
          width="900"
          height="60"
          viewBox="0 0 1200 60"
          fill="none"
          style={{ marginTop: 40 }}
        >
          <path
            d="M0 30h180l12-18 14 34 12-24 10 8h90l14-30 16 52 14-38 10 8h220l12-18 14 34 12-24 10 8h180l14-30 16 52 14-38 10 8h194"
            stroke="#8bc4f8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
