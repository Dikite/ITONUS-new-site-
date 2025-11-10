"use client";

import React from "react";
import Image from "next/image";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Divider,
  Chip,
  Button,
} from "@mui/material";

const PartnerCard: React.FC<{
  title: string;
  subtitle?: string;
  body: string;
  logoSrc?: string;
}> = ({ title, subtitle, body, logoSrc }) => {
  return (
    <Card 
      elevation={3} 
      sx={{ 
        height: "100%", 
        borderRadius: 2,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        border: "1px solid",
        borderColor: "divider",
        background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
        '&:hover': {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
          borderColor: "primary.light",
        }
      }}
    >
      <CardHeader
        title={title}
        subheader={subtitle}
        titleTypographyProps={{ 
          fontWeight: 800,
          fontSize: "1.3rem",
          color: "primary.main",
          letterSpacing: "-0.5px"
        }}
        subheaderTypographyProps={{
          color: "text.secondary",
          fontSize: "0.95rem",
          fontWeight: 500
        }}
        sx={{ pb: 1 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <Stack spacing={2}>
          <Typography 
            variant="body1" 
            sx={{ 
              whiteSpace: "pre-line",
              lineHeight: 1.7,
              color: "text.primary",
              fontSize: "0.95rem"
            }}
          >
            {body}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

const FeatureCard: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <Card 
      sx={{ 
        height: "100%",
        borderRadius: 2,
        background: "linear-gradient(135deg, #ffffff 0%, #f1f8ff 100%)",
        border: "1px solid",
        borderColor: "primary.50",
        boxShadow: "0 2px 12px rgba(25, 118, 210, 0.08)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        '&:before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)"
        },
        '&:hover': {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(25, 118, 210, 0.15)",
        }
      }}
    >
      <CardContent sx={{ p: 3.5 }}>
        <Typography 
          fontWeight={800} 
          fontSize="1.15rem"
          gutterBottom
          color="primary.dark"
          letterSpacing="-0.3px"
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.7, color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function PowerProtectionPage(): React.JSX.Element {
  return (
    <Box 
      component="main" 
      sx={{ 
        bgcolor: "background.default", 
        py: { xs: 4, md: 8 },
        mt: { xs: 8, md: 10 },
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fafbfd 0%, #f5f7fa 100%)"
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            alignItems: "center",
            mb: 10,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 900,
                background: "linear-gradient(135deg, #1976d2 0%, #004ba0 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: { xs: "2.75rem", md: "3.5rem" },
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                mb: 3
              }}
            >
              Power Protection, Enclosure & Racking Systems
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              paragraph
              sx={{ 
                lineHeight: 1.8,
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                fontWeight: 400,
                mb: 4
              }}
            >
              Appropriate cable runways are necessary for serial protection of
              network cables and separation from EMI-sensitive materials — this
              directly affects bandwidth and transmission performance.
            </Typography>

            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Chip 
                label="Cabling Management" 
                variant="filled"
                sx={{ 
                  bgcolor: "primary.main",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  height: 36,
                  px: 1
                }} 
              />
              <Chip 
                label="Data Center" 
                variant="filled"
                sx={{ 
                  bgcolor: "secondary.main",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  height: 36,
                  px: 1
                }} 
              />
              <Chip 
                label="Industrial" 
                variant="filled"
                sx={{ 
                  bgcolor: "success.dark",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  height: 36,
                  px: 1
                }} 
              />
            </Stack>
          </Box>

      <Box sx={{ 
  width: { xs: "100%", md: 420 },
  flexShrink: 0
}}>
  <Box
    sx={{
      borderRadius: 3,
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(25, 118, 210, 0.15)",
      border: "1px solid",
      borderColor: "primary.100",
      position: "relative",
      height: { xs: 280, md: 340 },
    }}
  >
    <Image
      src="/images/Infrastructure/cablechannel.png" // ← Replace with your actual image path
      alt="Power Protection Systems"
      fill // fills the entire box
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
      priority
    />
  </Box>
</Box>
        </Box>

        {/* Main Content */}
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 4,
              mb: 8
            }}
          >
            {/* Left Column - Main Content */}
            <Box sx={{ flex: 1 }}>
              <Card 
                elevation={2}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  background: "linear-gradient(145deg, #ffffff 0%, #fafbfd 100%)"
                }}
              >
                <CardContent sx={{ p: 4.5 }}>
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 800,
                      color: "primary.dark",
                      mb: 4,
                      letterSpacing: "-0.5px"
                    }}
                  >
                    Cable Runways & Modular Systems
                  </Typography>

                  <Typography 
                    paragraph 
                    sx={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      mb: 3.5,
                      color: "text.primary"
                    }}
                  >
                    Appropriate modular systems allow move, add and change to the
                    system — empowering user choice in selecting the optimum route
                    plan and providing better earthing continuity for proper cable
                    management.
                  </Typography>

                  <Typography 
                    paragraph 
                    sx={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      mb: 4.5
                    }}
                  >
                    Along with traditional perforated cable tray and runways,
                    Itonus Service is a certified installer and partner of
                    Cablofil systems and Panduit.
                  </Typography>

                  <Divider sx={{ my: 5, borderColor: "divider", opacity: 0.6 }} />

                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 800,
                      color: "primary.dark",
                      mb: 3.5,
                      letterSpacing: "-0.3px"
                    }}
                  >
                    Where these systems are used
                  </Typography>
                  <Typography 
                    paragraph 
                    sx={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8
                    }}
                  >
                    Cablofil is used widely in Manufacturing, Oil & Gas,
                    Consumable Production plants and Data Centres. Panduit
                    provides routing and protection systems for fiber optic and
                    high‑performance copper cabling, including underfloor and
                    dedicated routing pathways.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Right Column - Partner Cards */}
            <Box sx={{ 
              width: { xs: "100%", lg: 420 },
              flexShrink: 0
            }}>
              <Stack spacing={3.5}>
                <PartnerCard
                  title="Cablofil"
                  subtitle="Wire Mesh Cable Tray — EZ System"
                  logoSrc="/images/cablofil-logo.png"
                  body={`Cablofil is a global choice for a simple and durable wire mesh cable tray. Their patented T‑Welding method removes sharp edges, protecting installers and preventing cable damage. The EZ system enables fast deployment — ceiling mounts to underfloor support trays — and high load capacity at 2m span that can reduce bracket and fixing costs.`}
                />

                <PartnerCard
                  title="Panduit"
                  subtitle="FIBERRUNNER® · FIBER‑DUCT™ · GRIDRUNNER™"
                  logoSrc="/images/panduit-logo.png"
                  body={`Panduit is a leader in end-to-end network cabling and facility infrastructure. Offerings include FIBERRUNNER and FIBER-DUCT routing systems for fiber and copper segregation and GRIDRUNNER underfloor routing for raised-floor data centre cabling management and improved safety.`}
                />
              </Stack>
            </Box>
          </Box>

          {/* Features Section */}
          <Box sx={{ mb: 8 }}>
            <Card 
              elevation={0} 
              sx={{ 
                bgcolor: "transparent",
                mb: 5
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography 
                  variant="h4" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 800,
                    color: "primary.dark",
                    textAlign: "center",
                    mb: 6,
                    letterSpacing: "-0.5px"
                  }}
                >
                  Why choose structured cable routing?
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 3
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <FeatureCard
                      title="Reliability"
                      description="Segregation from EMI-sensitive equipment protects transmission integrity and ensures consistent network performance in demanding environments."
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <FeatureCard
                      title="Serviceability"
                      description="Modular systems allow quick changes, additions and re-routing with minimal downtime, reducing maintenance costs and improving operational efficiency."
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <FeatureCard
                      title="Cost Efficiency"
                      description="Reduced need for extra fixings and support when using high-load capacity systems like Cablofil, leading to significant savings in installation and maintenance."
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* CTA Section */}
          <Box sx={{ mb: 4 }}>
            <Card 
              elevation={4}
              sx={{
                borderRadius: 3,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                overflow: "hidden",
                position: "relative"
              }}
            >
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}