"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box
    
      sx={{
        
        background: "linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #2C3E50 100%)",
        color: "white",
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3 },
            pt: { xs: "100px", sm: "100px" }, // ✅ FIX: pushes content below navbar

        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(0, 191, 255, 0.1) 0%, transparent 60%)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: { xs: 2, md: 3 },
              lineHeight: { xs: 1.2, md: 1.1 },
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3.5rem" },
              textAlign: { xs: "center", md: "left" },
              background: "linear-gradient(45deg, #ce2727ff 30%, #00BFFF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: "0 2px 10px rgba(0, 191, 255, 0.2)",
            }}
          >
            Empowering Your Business with{" "}
            <Box
              component="span"
              sx={{
                color: "transparent",
                background: "linear-gradient(45deg, #00BFFF 30%, #0099CC 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                display: "inline-block",
              }}
            >
              Tailored IT Solutions
            </Box>
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "rgba(255,255,255,0.9)",
              mb: { xs: 2, md: 3 },
              lineHeight: { xs: 1.6, md: 1.8 },
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              fontWeight: 300,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            At{" "}
            <Box component="strong" sx={{ color: "#00BFFF", fontWeight: 600 }}>
              ITONUS
            </Box>
            , we are committed to your business by delivering customised IT
            solutions. Our professional services range from provisioning
            industry-leading integrated IT products and services to IT
            consultation — addressing your unique challenges.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.8)",
              mb: { xs: 3, md: 4 },
              fontSize: { xs: "0.875rem", md: "1rem" },
              fontWeight: 300,
              borderLeft: { xs: "none", md: "3px solid #00BFFF" },
              borderTop: { xs: "3px solid #00BFFF", md: "none" },
              pl: { xs: 0, md: 2 },
              pt: { xs: 1, md: 0.5 },
              textAlign: { xs: "center", md: "left" },
              mx: { xs: "auto", md: 0 },
              maxWidth: { xs: "90%", md: "100%" },
            }}
          >
            Embracing innovation and security is the foundation of ITONUS —
            driving sustainable success at every level.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: { xs: 3, md: 0 },
            }}
          >
          
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            width: "100%",
            maxWidth: { xs: 300, sm: 400, md: 520 },
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Image
            src="/images/it-hero.png"
            alt="IT Solutions Illustration"
            width={520}
            height={440}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            priority
          />
        </Box>
      </Container>
    </Box>
  );
}
