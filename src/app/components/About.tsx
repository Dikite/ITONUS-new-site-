"use client";
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRightAlt, Star, CheckCircle } from "@mui/icons-material";

export default function AboutUs() {
  return (
   <Box
  id="about"
  sx={{
    position: "relative",
    overflow: "hidden",
    py: { xs: 10, md: 16 },

    background: `
      url('/images/bg-about.jpg') center/cover no-repeat
    `,
    

    // Remove overlay blend to avoid messing with your colors
    backgroundBlendMode: "normal",

    // 🔥 IMAGE OPACITY LAYER (adjust here)
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.86)", // <--- change this (0 = no darkening, 1 = fully dark)
      zIndex: 0,
    },

    // Your existing colored effects
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 50% 95%, rgba(52, 211, 153, 0.25) 0%, transparent 50%)
      `,
      zIndex: 1,
    },
  }}
>

      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [100, -100, 100],
            x: Math.random() * 100 - 50
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: "#fff",
            borderRadius: "50%",
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            zIndex: 1,
          }}
        />
      ))}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1, position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50px",
                px: 2,
                py: 1,
                mb: 3,
              }}
            >
              <Star sx={{ fontSize: 16, color: "#60a5fa", mr: 1 }} />
              <Typography
                variant="caption"
                sx={{
                  color: "#e0f2fe",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "0.75rem",
                }}
              >
                Trusted Technology Partner
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "Clash Display, sans-serif",
                fontWeight: 700,
                mb: 3,
                letterSpacing: "-0.5px",
                background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1,
              }}
            >
              About Us
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontFamily: "Clash Display, sans-serif",
                fontWeight: 600,
                mb: 4,
                color: "#ffffff",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -8,
                  width: "60%",
                  height: "4px",
                  background: "linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%)",
                  borderRadius: "2px",
                  transition: "width 0.4s ease",
                },
                "&:hover::after": { width: "100%" },
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              ITONUS TECH PVT LTD
            </Typography>

            {/* Content with icons */}
         {/* Content with icons */}
<Box sx={{ mb: 4 }}>

  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
    <CheckCircle sx={{ color: "#4ade80", mr: 2, mt: 0.5, fontSize: "1.2rem" }} />
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Satoshi, sans-serif",
        color: "#e2e8f0",
        lineHeight: 1.8,
        fontSize: "1.1rem",
      }}
    >
      <strong style={{ color: "#ffffff" }}>ITONUS TECH PVT LTD</strong> is the
      sister company of <strong style={{ color: "#ffffff" }}>MOSSAD SERVICES PTE LTD</strong>,
      Singapore. The group is led by <strong style={{ color: "#ffffff" }}>Mr. EDMUND TEO</strong>,
      a founding director with <strong style={{ color: "#ffffff" }}>25+ years of proven
      expertise</strong> delivering large-scale turnkey installation projects
      across government, education, healthcare, and marine port infrastructure.
    </Typography>
  </Box>

  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
    <CheckCircle sx={{ color: "#60a5fa", mr: 2, mt: 0.5, fontSize: "1.2rem" }} />
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Satoshi, sans-serif",
        color: "#e2e8f0",
        lineHeight: 1.8,
        fontSize: "1.1rem",
      }}
    >
      In Singapore, <strong style={{ color: "#ffffff" }}>MOSSAD SERVICES PTE LTD</strong> is
      recognised as a trusted provider of <strong style={{ color: "#ffffff" }}>Enterprise IT Network &
      Infrastructure solutions</strong> and <strong style={{ color: "#ffffff" }}>specialized IT manpower
      services</strong> for regional and global enterprises.
    </Typography>
  </Box>

  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
    <CheckCircle sx={{ color: "#f59e0b", mr: 2, mt: 0.5, fontSize: "1.2rem" }} />
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Satoshi, sans-serif",
        color: "#e2e8f0",
        lineHeight: 1.8,
        fontSize: "1.1rem",
      }}
    >
      Expanding across the <strong style={{ color: "#ffffff" }}>Asia Pacific region</strong>, we
      established <strong style={{ color: "#ffffff" }}>ITONUS TECH PVT LTD</strong> in India to deliver
      high-performance IT network and infrastructure solutions while maintaining
      the same precision, reliability, and execution excellence across borders.
    </Typography>
  </Box>

</Box>


            {/* Stats */}
            <Box sx={{ display: "flex", gap: 4, mb: 4, flexWrap: "wrap" }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#60a5fa",
                    fontWeight: 700,
                    fontFamily: "Clash Display, sans-serif",
                  }}
                >
                  25+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#cbd5e1", fontWeight: 500 }}
                >
                  Years of Experience
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#4ade80",
                    fontWeight: 700,
                    fontFamily: "Clash Display, sans-serif",
                  }}
                >
                  50+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#cbd5e1", fontWeight: 500 }}
                >
                  Projects Completed
                </Typography>
              </Box>
       
<Box sx={{ mt: 2 }}>
  <Typography
    variant="h5"
    sx={{
      color: "#ffffff",
      fontWeight: 700,
      fontFamily: "Clash Display, sans-serif",
      mb: 2,
      textAlign: { xs: "center", md: "left" },
    }}
  >
    Our Global Presence
  </Typography>

{/* Countries Grid */}
<Box sx={{
  display: "grid",
  gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
  gap: 2,
  mt: 2,
}}>


  {[
    "Singapore",
    "India",
    "Malaysia",
    "Vietnam",
    "Thailand",
    "Indonesia",
    "Philippines",
    "China",
    "Korea",
    "Japan",
    "New Zealand",
    "Australia",
  ].map((country, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{
        border: "1px solid rgba(255,255,255,0.2)",
        padding: "8px 12px",
        borderRadius: "8px",
        textAlign: "center",
        background: "rgba(255,255,255,0.08)",
        color: "#fff",
        fontSize: "0.9rem",
        fontWeight: 600,
        backdropFilter: "blur(8px)",
      }}
    >
      {country}
    </motion.div>
  ))}
</Box>

</Box>


            </Box>

          
          </motion.div>
        </Box>

        {/* Right Side - Visual Element */}
        <Box sx={{ flex: 1, display: { xs: "none", lg: "block" } }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: "relative" }}
          >
          <motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  style={{
    position: "absolute",
    top: "20%",
    right: "10%",
    width: "200px",
    height: "120px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    padding: "16px",
    zIndex: 2,

    // 🔥 prevents rotation or parent transform override
    transform: "translateZ(0)",
  }}
>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    mr: 1,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "#e2e8f0", fontWeight: 600 }}
                >
                  Innovation
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#cbd5e1", fontSize: "0.75rem" }}>
                Cutting-edge technology solutions
              </Typography>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{
                position: "absolute",
                bottom: "30%",
                right: "30%",
                width: "180px",
                height: "100px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                padding: "16px",
                zIndex: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#60a5fa",
                    mr: 1,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "#e2e8f0", fontWeight: 600 }}
                >
                  Reliability
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#cbd5e1", fontSize: "0.75rem" }}>
                Trusted by global clients
              </Typography>
            </motion.div>

            {/* Main visual circle */}
            <Box
              sx={{
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "300px",
                  height: "300px",
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}