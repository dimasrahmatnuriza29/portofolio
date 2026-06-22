import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const alt = `${siteConfig.name} — Senior AI/ML Engineer & IT Consultant`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #07111F 0%, #0D1B2A 50%, #13283F 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow accents */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-100px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.28), transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #3B82F6, #22D3EE)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                fontWeight: 900,
                color: "#07111F",
              }}
            >
              D
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "white", fontSize: "28px", fontWeight: 700 }}>
                {siteConfig.name}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "16px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                AI · ML · IT Consulting
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(34,211,238,0.35)",
              background: "rgba(34,211,238,0.08)",
              color: "#22D3EE",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            ● Available for Engagements
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "white",
              maxWidth: "1000px",
              letterSpacing: "-0.02em",
            }}
          >
            Building AI-Powered
            <br />
            Digital Solutions{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #22D3EE, #3B82F6)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              That Scale
            </span>
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "24px",
              maxWidth: "820px",
              lineHeight: 1.4,
            }}
          >
            Senior AI/ML Engineer, IT Consultant & Full Stack Developer helping enterprises
            transform data into intelligent solutions.
          </div>
        </div>

        {/* Bottom: clients */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <div
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "14px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Trusted by
          </div>
          {siteConfig.clients.map((c) => (
            <div
              key={c}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
