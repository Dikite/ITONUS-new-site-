"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/partners/anixer.png", alt: "Anixer" },
  { src: "/partners/apc.png", alt: "APC" },
  { src: "/partners/aten.png", alt: "Aten" },
  { src: "/partners/cablofil.png", alt: "Cablofil" },
  { src: "/partners/commscope.png", alt: "Commscope" },
  { src: "/partners/comstor.png", alt: "Comstor" },
  { src: "/partners/corning.png", alt: "Corning" },
  { src: "/partners/ibm.png", alt: "IBM" },
  { src: "/partners/level-one.png", alt: "Level One" },
  { src: "/partners/ncs.png", alt: "NCS" },
  { src: "/partners/nexans.png", alt: "Nexans" },
  { src: "/partners/nexwave.png", alt: "Nexwave" },
  { src: "/partners/panduit.png", alt: "Panduit" },
  { src: "/partners/plantronics.png", alt: "Plantronics" },
  { src: "/partners/polycom.png", alt: "Polycom" },
  { src: "/partners/sunpage.png", alt: "Sunpage" },
];

const duplicatedLogos = [...logos, ...logos];

export default function OurPartners() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [slideWidth, setSlideWidth] = useState(1200);

  // ✅ Fix SSR issue with window.innerWidth
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSlideWidth(window.innerWidth);
    }
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(99,102,241,0.06), transparent 60%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 800,
              color: "transparent",
              background: "linear-gradient(135deg, #1e293b, #6366f1)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              mb: 2,
              letterSpacing: "-0.02em",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Our Partners
          </Typography>

          <Typography
            align="center"
            sx={{
              color: "#475569",
              fontWeight: 400,
              mb: 8,
              maxWidth: 650,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", md: "1.15rem" },
            }}
          >
            Proudly collaborating with leading innovators and trusted brands
            around the world.
          </Typography>
        </motion.div>
{/* ✅ Universal Sliding Logos (Desktop + Mobile) */}

<Box
  sx={{
    position: "relative",
    overflow: "hidden",
    py: { xs: 3, md: 5 },
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      width: { xs: "40px", md: "100px" },
      zIndex: 2,
    },
    "&::before": {
      left: 0,
      background: "linear-gradient(90deg, #f8fafc, transparent)",
    },
    "&::after": {
      right: 0,
      background: "linear-gradient(90deg, transparent, #f8fafc)",
    },
  }}
>
  <motion.div
    animate={{
      x: [-slideWidth, 0],
    }}
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: isMobile ? 25 : 40,
        ease: "linear",
      },
    }}
    style={{
      display: "flex",
      gap: isMobile ? "1.5rem" : "2.5rem",
      width: "max-content",
    }}
  >
    {duplicatedLogos.map((logo, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Box
          sx={{
            p: { xs: 1.5, md: 3 },
            backgroundColor: "#ffffff",
            borderRadius: 4,
            boxShadow:
              "0 4px 20px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.05)",
            "&:hover": {
              boxShadow:
                "0 20px 40px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(99,102,241,0.1)",
              transform: "translateY(-6px)",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: isMobile ? 90 : 140,
              height: isMobile ? 45 : 70,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 600px) 90px, 140px"
            />
          </Box>
        </Box>
      </motion.div>
    ))}
  </motion.div>
</Box>

        {/* Grid fallback for very small screens */}
    
      </Container>
    </Box>
  );
}
