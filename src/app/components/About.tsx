"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 16 },
        backgroundColor: "#ECF4E8",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          zIndex: 0,
        },

        zIndex: 1,
      }}
    >
      {/* Decorative gradients */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60%",
          height: "150%",
          background:
            "radial-gradient(circle at 20% 40%, rgba(56,189,248,0.15), transparent 70%)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "40%",
          height: "80%",
          background:
            "radial-gradient(circle at 80% 60%, rgba(147,197,253,0.18), transparent 70%)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 12 },
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* MAIN HEADING */}
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Clash Display, sans-serif",
                fontWeight: 700,
                mb: 2,
                letterSpacing: "-0.5px",
                background: "linear-gradient(135deg, #1e3a8a, #1d4ed8)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Us
            </Typography>

            {/* SUB-HEADING */}
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Clash Display, sans-serif",
                fontWeight: 600,
                mb: 3,
                color: "#1e3a8a",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -6,
                  width: "50%",
                  height: 3,
                  background:
                    "linear-gradient(90deg, #2563eb 0%, #1e3a8a 100%)",
                  borderRadius: 2,
                  transition: "width 0.4s ease",
                },
                "&:hover::after": { width: "100%" },
              }}
            >
              ITONUS TECH PVT LTD
            </Typography>

            {/* PARAGRAPH 1 */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Satoshi, sans-serif",
                color: "#334155",
                lineHeight: 1.9,
                fontSize: "1.1rem",
                mb: 2,
              }}
            >
              <strong style={{ color: "#0f172a" }}>ITONUS TECH PVT LTD</strong>{" "}
              operates as the sister company of{" "}
              <strong style={{ color: "#0f172a" }}>
                MOSSAD SERVICES PTE LTD
              </strong>{" "}
              based in Singapore. Our team is led by{" "}
              <strong style={{ color: "#0f172a" }}>Mr. EDMUND TEO</strong>, a
              founding director with over 25 years of experience managing
              large-scale turnkey installation projects across government,
              education, healthcare, and marine infrastructure sectors.
            </Typography>

            {/* PARAGRAPH 2 */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Satoshi, sans-serif",
                color: "#334155",
                lineHeight: 1.9,
                fontSize: "1.1rem",
                mb: 2,
              }}
            >
              In Singapore,{" "}
              <strong style={{ color: "#0f172a" }}>
                MOSSAD SERVICES PTE LTD
              </strong>{" "}
              has earned a strong reputation as a trusted provider of enterprise
              IT network and infrastructure solutions, along with comprehensive
              manpower services for global enterprises.
            </Typography>

            {/* PARAGRAPH 3 */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Satoshi, sans-serif",
                color: "#334155",
                lineHeight: 1.9,
                fontSize: "1.1rem",
                mb: 4,
              }}
            >
              With our expansion into India through{" "}
              <strong style={{ color: "#0f172a" }}>ITONUS TECH PVT LTD</strong>,
              we bring a legacy of innovation, reliability, and excellence —
              empowering businesses with world-class technology solutions.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
