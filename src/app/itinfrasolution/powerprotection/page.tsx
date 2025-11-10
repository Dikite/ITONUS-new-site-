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
              There is an increasing pressure for IT & facility professionals to manage power variations, 
              energy cost control, uncertain long term expectations for density and equipment consolidation.
            </Typography>

            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Chip 
                label="Power Protection" 
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
                label="UPS Systems" 
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
              <Chip 
                label="Cooling Solutions" 
                variant="filled"
                sx={{ 
                  bgcolor: "warning.dark",
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
                                      src="/images/Infrastructure/powerprotection.jpeg" 
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
                    Comprehensive Power & Infrastructure Solutions
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
                    APC provides Green, RoHS compliant integrative turnkey solutions of scalability 
                    and standardized modular architecture for data centres & server rooms to tackle 
                    issues of inflexibility, heat, unreliability, oversizing and inefficiencies.
                  </Typography>

                  <Typography 
                    paragraph 
                    sx={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      mb: 3.5
                    }}
                  >
                    Itonus Services maintains Silver Partner status with APC to offer modular enclosure 
                    racking systems, backup power protection UPS, cooling solutions and intelligent 
                    management system compatible with multiple platforms.
                  </Typography>

                  <Typography 
                    paragraph 
                    sx={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      mb: 4.5
                    }}
                  >
                    APC offers a wide range of products & services to support Data Centres, Facilities, 
                    Network and Server, Industrial, PCs and Workstations and Mobile Computing Applications. 
                    With reliable products to contain and protect your systems, one of the critical factors 
                    of maintaining robust IT operations is assured. As a direct partner we also gain access 
                    to better rates than other resellers and being price competitive.
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
                    Advanced Power Protection & Cooling Solutions
                  </Typography>
                  
                  <Typography 
                    paragraph 
                    sx={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      mb: 3.5
                    }}
                  >
                    Critical power protection or uninterruptible power supply (UPS), APC provides one of 
                    the widest range of products to serve loads from single phase below 10,000 VA up to 
                    3-phase scalable 160kVA. APC Racks have the features of advanced cooling, cable 
                    management, power distribution and airflow management.
                  </Typography>

                  <Typography 
                    paragraph 
                    sx={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      mb: 3.5
                    }}
                  >
                    Benefits of configurable rack solutions that holds up to 1 tonne of equipment also 
                    allows full compatibility with other APC solutions and accessories.
                  </Typography>

                  <Typography 
                    paragraph 
                    sx={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8
                    }}
                  >
                    One of the most highly rated issues faced by today's Data Centres is heat dissipation 
                    and cooling due to increasing deployment of high density equipment. With Air Distribution, 
                    InRow Cooling and Coolant Distribution solution from APC you can effectively tackle such issues.
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
                  title="APC by Schneider Electric"
                  subtitle="Silver Partnership - Comprehensive Solutions"
                  logoSrc="/images/apc-logo.png"
                  body={`APC offers a combination of fully integrated power, cooling, rack, management, security and services with its InfraStruXure Solution, an on-demand architecture for network-critical physical infrastructure. This on-demand architecture allows the selection of standardized components to create a solution through modular and mobile configurations. InfraStruXure is available for any IT environment, from wiring closets to large data centres.`}
                />

                <PartnerCard
                  title="Multi-Brand Racking Solutions"
                  subtitle="ADC Krone · Commscope Systimax · HP · Panduit"
                  logoSrc="/images/racking-solutions-logo.png"
                  body={`Itonus Services are also resellers of racking systems & frames from ADC Krone, Commscope Systimax, HP, Panduit and other standard brands. We provide comprehensive infrastructure solutions tailored to your specific needs, ensuring compatibility, reliability, and optimal performance for your IT environment.`}
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
                  Why Choose Our Power Protection Solutions?
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
                      title="Scalable Solutions"
                      description="Modular architecture allows for easy expansion and adaptation to changing power and density requirements, ensuring your infrastructure grows with your business needs."
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <FeatureCard
                      title="Comprehensive Protection"
                      description="From single-phase UPS systems to 3-phase scalable solutions up to 160kVA, we provide complete power protection for all your critical equipment and applications."
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <FeatureCard
                      title="Advanced Cooling"
                      description="Address heat dissipation challenges with APC's Air Distribution, InRow Cooling and Coolant Distribution solutions designed for high-density equipment environments."
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

      
        </Box>
      </Container>
    </Box>
  );
}