"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  CardActions,
  IconButton,
  useTheme,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, Twitter, GitHub, Star, Rocket } from "@mui/icons-material";

interface Founder {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const founders: Founder[] = [
  {
    name: "Kumar",
    title: "Founder & CEO",
    image: "/images/founder1.jpg",
    bio: "Visionary leader passionate about wearable tech, fitness AI, and innovation.",
    linkedin: "https://linkedin.com/in/ahamedirfan",
    twitter: "https://twitter.com/ahamedirfan",
  },
  {
    name: "Sara Khan",
    title: "Co-Founder & CTO",
    image: "/images/founder2.jpg",
    bio: "Tech strategist and full-stack expert driving the company's AI ecosystem.",
    linkedin: "https://linkedin.com/in/sarakhan",
    github: "https://github.com/sarakhan",
  },
  {
    name: "Ravi Patel",
    title: "Co-Founder & COO",
    image: "/images/founder3.jpg",
    bio: "Operations and growth leader ensuring smooth execution and global scaling.",
    linkedin: "https://linkedin.com/in/ravipatel",
  },
];

export default function FoundersSection() {
  const theme = useTheme();

  return (
    <Box
    id="founders"
      sx={{
        py: { xs: 12, md: 16 },
        background: `
          radial-gradient(circle at 10% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(255, 119, 119, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(120, 219, 226, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #0A0F2D 0%, #1A1F3C 30%, #0A0F2D 100%)
        `,
        color: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)",
        },
      }}
    >
      {/* Animated icons */}
      <Box
        component={motion.div}
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        sx={{ position: "absolute", top: "10%", left: "5%", opacity: 0.1 }}
      >
        <Rocket sx={{ fontSize: 60, color: "#3B82F6" }} />
      </Box>

      <Box
        component={motion.div}
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        sx={{ position: "absolute", bottom: "15%", right: "7%", opacity: 0.1 }}
      >
        <Star sx={{ fontSize: 50, color: "#10B981" }} />
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Chip
            label="Leadership Team"
            variant="outlined"
            sx={{
              color: "#10B981",
              borderColor: "rgba(16, 185, 129, 0.3)",
              background: "rgba(16, 185, 129, 0.1)",
              mb: 2,
              fontWeight: 600,
            }}
          />
          <Typography
            component={motion.h2}
            variant="h3"
            fontWeight={800}
            mb={2}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            sx={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #93C5FD 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            Meet Our Visionaries
          </Typography>
          <Typography
            component={motion.p}
            variant="h6"
            color="rgba(255,255,255,0.7)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            sx={{ maxWidth: 600, mx: "auto", lineHeight: 1.6 }}
          >
            The brilliant minds shaping the future of wearable technology and AI
            innovation
          </Typography>
        </Box>

        {/* Flexbox instead of Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4, // spacing between cards
          }}
        >
          {founders.map((founder, index) => (
            <Box
              key={founder.name}
              sx={{
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 45%",
                  md: "1 1 30%",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ width: "100%" }}
              >
                <Card
                  sx={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255,255,255,0.05) 0%,
                        rgba(255,255,255,0.02) 100%
                      )
                    `,
                    backdropFilter: "blur(20px)",
                    borderRadius: 4,
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: `
                      0 8px 32px rgba(0, 0, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                    textAlign: "center",
                    overflow: "hidden",
                    position: "relative",
                    transition: "all 0.4s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, transparent, #3B82F6, #10B981, transparent)",
                      transform: "scaleX(0)",
                      transition: "transform 0.4s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `
                        0 20px 40px rgba(0, 0, 0, 0.4),
                        0 0 0 1px rgba(59, 130, 246, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                      "&::before": { transform: "scaleX(1)" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "120px",
                      background:
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.05))",
                      zIndex: 0,
                    }}
                  />
                  <Box sx={{ position: "relative", zIndex: 1, pt: 4 }}>
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      sx={{
                        display: "inline-block",
                        background:
                          "linear-gradient(135deg, #3B82F6, #10B981)",
                        borderRadius: "50%",
                        p: 0.5,
                      }}
                    >
                      <Avatar
                        src={founder.image}
                        alt={founder.name}
                        sx={{
                          width: 100,
                          height: 100,
                          border: "3px solid rgba(255,255,255,0.2)",
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent sx={{ position: "relative", zIndex: 1, px: 3 }}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="white"
                      sx={{ mt: 2, mb: 0.5 }}
                    >
                      {founder.name}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "rgba(59, 130, 246, 0.9)",
                        fontWeight: 600,
                        mb: 2,
                        background: "rgba(59, 130, 246, 0.1)",
                        display: "inline-block",
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: "0.75rem",
                      }}
                    >
                      {founder.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,0.8)"
                      sx={{
                        lineHeight: 1.6,
                        minHeight: 64,
                        textAlign: "center",
                      }}
                    >
                      {founder.bio}
                    </Typography>
                  </CardContent>

                  <CardActions
                    sx={{
                      justifyContent: "center",
                      pb: 3,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {founder.linkedin && (
                      <IconButton
                        component={motion.a}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: "rgba(10, 102, 194, 0.1)",
                          color: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(10, 102, 194, 0.3)",
                          "&:hover": {
                            background: "rgba(10, 102, 194, 0.2)",
                            color: "#0A66C2",
                          },
                        }}
                      >
                        <LinkedIn />
                      </IconButton>
                    )}
                    {founder.twitter && (
                      <IconButton
                        component={motion.a}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={founder.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: "rgba(29, 161, 242, 0.1)",
                          color: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(29, 161, 242, 0.3)",
                          "&:hover": {
                            background: "rgba(29, 161, 242, 0.2)",
                            color: "#1DA1F2",
                          },
                        }}
                      >
                        <Twitter />
                      </IconButton>
                    )}
                    {founder.github && (
                      <IconButton
                        component={motion.a}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={founder.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          "&:hover": {
                            background: "rgba(255, 255, 255, 0.2)",
                            color: "#FFFFFF",
                          },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    )}
                  </CardActions>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
