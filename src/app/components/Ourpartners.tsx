"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

// Make sure your image file is saved in the 'public' folder
// For example: public/backgrounds/partners-bg.png
const BACKGROUND_IMAGE_PATH = "/images/par.png"; // <-- UPDATE THIS PATH

const logos = [
  // Newer logos
  { src: "/partners/lenovo.png", alt: "Lenovo" },
  { src: "/partners/fortinet-logo.png", alt: "Fortinet" },
   { src: "/partners/logitech.jpg", alt: "logitech" },
  { src: "/partners/hp-logo.png", alt: "HP" },
  { src: "/partners/palo-alto.png", alt: "Palo Alto" },
  { src: "/partners/aruba.png", alt: "Aruba" },
  { src: "/partners/Jabra.png", alt: "Jabra" },
  { src: "/partners/comstor.png", alt: "Comstor" },
  { src: "/partners/Cisco.png", alt: "Cisco" },
  { src: "/partners/Dell_Logo.png", alt: "Dell" },

  // Older logos
  { src: "/partners/anixer.png", alt: "Anixter" },
  { src: "/partners/apc.png", alt: "APC" },
  { src: "/partners/cablofil.png", alt: "Cablofil" },
  { src: "/partners/commscope.png", alt: "Commscope" },
  { src: "/partners/corning.png", alt: "Corning" },
  { src: "/partners/ibm.png", alt: "IBM" },
  { src: "/partners/level-one.png", alt: "Level One" },
  { src: "/partners/nexans.png", alt: "Nexans" },
  { src: "/partners/nexwave.png", alt: "Nexwave" },
  { src: "/partners/panduit.png", alt: "Panduit" },
  { src: "/partners/plantronics.png", alt: "Plantronics" },
  { src: "/partners/polycom.png", alt: "Polycom" },
];

const duplicatedLogos = [...logos, ...logos];

export default function OurPartners() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sliderRef = useRef<HTMLDivElement>(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // ✅ Improved width calculation with image loading detection
  useEffect(() => {
    const calculateWidth = () => {
      if (sliderRef.current) {
        // We use scrollWidth / 2 because we duplicated the logos array
        const scrollWidth = sliderRef.current.scrollWidth;
        setTotalWidth(scrollWidth / 2);
        setIsLoaded(true);
      }
    };

    // Initial calculation
    calculateWidth();

    // Recalculate after images load
    const images = sliderRef.current?.querySelectorAll('img');
    const imageLoadListeners: [HTMLImageElement, () => void][] = [];
    
    if (images && images.length > 0) {
      let loadedCount = 0;
      const totalImages = images.length;

      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          // All images loaded, recalculate with a slight delay
          setTimeout(calculateWidth, 100);
        }
      };

      images.forEach(img => {
        const boundOnImageLoad = onImageLoad.bind(null); // Create a bound function for removal
        if (img.complete) {
          boundOnImageLoad();
        } else {
          img.addEventListener('load', boundOnImageLoad);
          img.addEventListener('error', boundOnImageLoad); // Handle broken images too
          imageLoadListeners.push([img, boundOnImageLoad]);
        }
      });
    }

    // Fallback recalculation
    const timeoutId = setTimeout(calculateWidth, 500);
    
    return () => {
      clearTimeout(timeoutId);
      // Clean up event listeners
      imageLoadListeners.forEach(([img, listener]) => {
        img.removeEventListener('load', listener as EventListener);
        img.removeEventListener('error', listener as EventListener);
      });
    };
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
      
        background: `url(${BACKGROUND_IMAGE_PATH}) no-repeat center center`,
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundColor: "#f8fafc", // Fallback color if the image fails to load

        position: "relative",
        overflow: "hidden",
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

        {/* ========================= IMPROVED SLIDER ============================== */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            py: { xs: 3, md: 5 },
            width: "100%",
          }}
        >
          <motion.div
            ref={sliderRef}
            animate={isLoaded ? {
              x: [-totalWidth, 0],
            } : {}}
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
              flexShrink: 0,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <Box
                key={index}
                sx={{
                  p: { xs: 1.5, md: 3 },
                  backgroundColor: "#ffffff",
                  borderRadius: 4,
                  boxShadow:
                    "0 4px 20px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.05)",
                  flexShrink: 0,
                  "&:hover": {
                    boxShadow:
                      "0 20px 40px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(99,102,241,0.1)",
                    transform: "translateY(-6px)",
                    transition: "0.3s ease",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: isMobile ? 90 : 140,
                    height: isMobile ? 45 : 70,
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 600px) 90px, 140px"
                    priority={index < 10} // Prioritize first few images
                  />
                </Box>
              </Box>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}