"use client";

import React from "react";
import Grid from "@mui/material/Grid";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  CardActions,
  IconButton,
  Chip,
  useTheme,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, Twitter, GitHub } from "@mui/icons-material";

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
    name: "Edmund Teo",
    title: "Founder & Director",
    image: "/edmund.png",
    bio: "Enterprise infrastructure specialist with 39+ years delivering large-scale IT, security, and data-center solutions. General Manager of Corporate Services at Mossad Services, leading major accounts and operations. Expert in network infrastructure and security systems integration, and certified in structured cabling and network solutions."
  },
  {
  name: "Balan G Dorayappa",
  title: "Director, ITONUS",
  image: "/Balan.png",
  linkedin: "https://www.linkedin.com/in/balan-dorayappa-6b8142282/",
  bio: "An Oxford Brookes University graduate currently leading operations from Singapore, with over 30 years of hands-on experience driving large-scale IT projects across the ASEAN region. Proven track record in delivering high-ROI technology solutions and steering complex initiatives to measurable outcomes."
},
  {

    name: "Karthik Sethuraman",
    title: "CEO & Director",
    image: "/karthi.png",
    bio: "Seasoned technology leader with 20+ years in cloud computing, data center management and data analytics. Led major digital transformation initiatives and architected scalable, secure enterprise solutions. Strong track record in cloud strategy, data-center optimization and data-driven decision systems. Focused on building high-performance teams and delivering resilient, future-ready infrastructure.",
    linkedin: "https://www.linkedin.com/in/karthik-krishna-%E2%98%81%EF%B8%8F-02477819/",
  },
  {
    name: "Prasanna Kumar",
    title: "Director",
    image: "/prasanna.png",
    bio: "Prasanna Kumar is a strategic finance leader with 20+ years of experience driving growth and profitability. Skilled in navigating complex financial environments and ensuring long-term sustainability. Known for data-driven decision-making that optimizes operations and maximizes value. Successfully guided the company through economic shifts, securing a strong financial foundation and positioning it for sustained success.",
    linkedin: "https://www.linkedin.com/in/karthik-krishna-%E2%98%81%EF%B8%8F-02477819/",
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 10 },
  },
};

export default function FoundersSection() {
  const theme = useTheme();
  const accentColor = theme.palette.primary.main;

  return (
    <Box
      id="founders"
      sx={{
        py: { xs: 8, md: 12 },
        background: `radial-gradient(ellipse at 50% 10%, rgba(17, 24, 39, 0.4) 0%, transparent 60%), #111827`,
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="OUR LEADERSHIP"
            size="small"
            sx={{
              color: accentColor,
              borderColor: `${accentColor}4D`,
              background: `${accentColor}1A`,
              mb: 2,
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          />

          <Typography
            component={motion.h2}
            variant="h3"
            fontWeight={700}
            mb={2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              background: "linear-gradient(120deg, #FFFFFF 30%, #D1D5DB 80%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Meet Our Visionary Directors
          </Typography>

          <Typography
            component={motion.p}
            variant="h6"
            color="rgba(255,255,255,0.6)"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}
          >
            The expertise and dedication of our leadership team drive innovation and excellence.
          </Typography>
        </Box>

        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            },
            gap: 4,
            justifyContent: "center",
            justifyItems: "center",
            
          }}
        >
          {founders.map((founder) => (
            <motion.div key={founder.name} style={{ width: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: `
                    linear-gradient(145deg, 
                      rgba(255,255,255,0.08) 0%,
                      rgba(255,255,255,0.04) 100%
                    )
                  `,
                  backdropFilter: "blur(10px)",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5)`,
                  textAlign: "center",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: `1px solid ${accentColor}`,
                    boxShadow: `0 0 20px 5px ${accentColor}40`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    pt: 4,
                    pb: 2,
                    background: `${accentColor}10`,
                    borderBottom: `1px solid rgba(255,255,255,0.1)`,
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    sx={{
                      display: "inline-block",
                      p: 0.5,
                      borderRadius: "50%",
                      border: `4px solid ${theme.palette.background.paper || "#111827"}`,
                      boxShadow: "0 0 0 2px rgba(255,255,255,0.2)",
                    }}
                  >
                    <Avatar
                      src={founder.image}
                      alt={founder.name}
                      sx={{
                        width: 120,
                        height: 120,
                        backgroundColor: theme.palette.grey[800],
                      }}
                    />
                  </Box>
                </Box>

                <CardContent sx={{ px: 3, pt: 3, pb: 2, flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={700} color="rgba(255, 255, 255, 1)" sx={{ mb: 0.5 }}>
                    {founder.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{ color: accentColor, mb: 2, fontSize: "0.85rem" }}
                  >
                    {founder.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="rgba(255,255,255,0.7)"
                    sx={{
    lineHeight: 1.5,
    minHeight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
                  >
                    {founder.bio}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "center", pb: 3, pt: 1 }}>
                  {founder.linkedin && (
                    <IconButton
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#0A66C2",
                        background: "rgba(10, 102, 194, 0.1)",
                        "&:hover": { background: "rgba(10, 102, 194, 0.2)" },
                      }}
                    >
                      <LinkedIn fontSize="small" />
                    </IconButton>
                  )}
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
