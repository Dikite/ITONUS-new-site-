"use client";
 
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { Email, Phone, LinkedIn } from "@mui/icons-material";
 

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
};
 
const Footer: React.FC = () => {
  const particleRef = useRef<HTMLCanvasElement | null>(null);
 

  useEffect(() => {
    const canvas = particleRef.current;
    if (!canvas) return;
 
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
 
    const _canvas = canvas;
    const _ctx = ctx;
 
    // Resize to full width
    const resize = () => {
      _canvas.width = window.innerWidth;
      _canvas.height = 350;
    };
 
    resize();
    window.addEventListener("resize", resize);
 
    // Create particles
    const particles: Particle[] = [];
 
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * _canvas.width,
        y: Math.random() * _canvas.height,
        size: Math.random() * 2 + 1.2,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.8 - 0.4,
      });
    }
 
    const parallax = { x: 0, y: 0 };
 
    const mouseMove = (e: MouseEvent) => {
      parallax.x = (e.clientX - window.innerWidth / 2) * 0.01;
      parallax.y = (e.clientY - window.innerHeight / 2) * 0.01;
    };
 
    window.addEventListener("mousemove", mouseMove);
 
    function animate() {
      _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
 
      particles.forEach((p) => {
        p.x += p.speedX + parallax.x;
        p.y += p.speedY + parallax.y;
 
        if (p.x < 0 || p.x > _canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > _canvas.height) p.speedY *= -1;
 
        _ctx.shadowBlur = 10;
        _ctx.shadowColor = "rgba(120,160,255,0.8)";
        _ctx.fillStyle = "rgba(120,160,255,0.75)";
 
        _ctx.beginPath();
        _ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        _ctx.fill();
      });
 
      requestAnimationFrame(animate);
    }
 
    animate();
 
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
 
        // 🔥 FIXES WHITE SPACE ABOVE FOOTER
        mt: "-6px",
 
        pt: 8,
        pb: 4,
 
        backgroundImage: "url('/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
 
        overflow: "hidden",
      }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={particleRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "350px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
 
      {/* Transparent Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(255,255,255,0.35)", // reduced opacity
          backdropFilter: "blur(1px)",
          zIndex: 2,
        }}
      />
 
      {/* CONTENT */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Company Info */}
          <Box sx={{ flex: "1 1 250px", minWidth: 250 }}>
            <Image
              src="/logo-full.png"
              width={180}
              height={80}
              alt="ITONUS Logo"
              priority
            />
 
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                mb: 3,
                color: "#222",
                fontWeight: 500,
              }}
            >
              Empowering your business with innovative and tailored IT solutions.
            </Typography>
 
            {/* Contact */}
            <Stack spacing={1}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ color: "primary.main" }} />
                <Link href="tel:+919884972753" sx={{ color: "#222" }}>
                  +91 9884972753
                </Link>
              </Box>
 
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ color: "primary.main" }} />
                <Link href="mailto:contact@itonus.co.in" sx={{ color: "#222" }}>
                  contact@itonus.co.in
                </Link>
              </Box>
 
              <IconButton
                href="https://www.linkedin.com/company/itonus-tech/"
                target="_blank"
                sx={{
                  border: "1px solid #bbb",
                  width: 42,
                  height: 42,
                  color: "#222",
                }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Box>
 
          {/* COLUMNS */}
          {[
            {
              title: "Enterprise IT Solutions",
              items: [
                ["IT Consultancy & Project Management", "/enterprise/itconsultancy"],
                ["Network Equipment", "/enterprise/networkequipment"],
                ["Network Support & Maintenance", "/enterprise/networksupport"],
                ["Structured Cabling Systems", "/enterprise/cabling"],
                ["Telecommunication Systems", "/enterprise/communication"],
                ["Wireless Deployment", "/enterprise/wirelessdeployment"],
              ],
            },
            {
              title: "IT Infrastructure & Solutions",
              items: [
                ["Data Centre Solutions", "/itinfrasolution/datacentre"],
                ["Power Protection & Racking Systems", "/itinfrasolution/powerprotection"],
                ["Cable Channel Systems", "/itinfrasolution/cablechannel"],
                ["Desktops & IT Products", "/itinfrasolution/desktop-itproduct"],
              ],
            },
            {
              title: "Others",
              items: [
                ["Audio Visual Systems & Conferencing", "/others/AudioVisualSystems"],
                ["Security Access Systems", "/others/securityaccesssystems"],
                ["Security Surveillance Systems (CCTV)", "/others/cctv"],
                ["Strategic IT Outsourcing", "/others/outsourcing"],
                ["Mobile Callback, Sunpage and VoIP Calls", "/others/mobilecallback-sunpage&voipcalls"],
                ["Telecommunication Peripherals", "/others/telecommunicationperipherals"],
              ],
            },
          ].map((col) => (
            <Box key={col.title} sx={{ flex: "1 1 200px", minWidth: 200 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: "#003366",
                }}
              >
                {col.title}
              </Typography>
 
              <Stack spacing={1}>
                {col.items.map(([name, link]) => (
                  <Link
                    key={name}
                    component={NextLink}
                    href={link}
                    underline="none"
                    sx={{
                      color: "#222",
                      "&:hover": { color: "#f04811ff" },
                    }}
                  >
                    {name}
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
 
        <Divider sx={{ mt: 6, mb: 3 }} />
 
        <Typography align="center" sx={{ color: "#444", fontSize: "0.9rem" }}>
          © 2025 ITONUS Tech, Pvt Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
 
export default Footer;