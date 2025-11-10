"use client";

import React from "react";
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
import Image from "next/image";

const SolutionCard: React.FC<{
  title: string;
  subtitle?: string;
  body: string;
}> = ({ title, subtitle, body }) => {
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

const SpecCard: React.FC<{
  title: string;
  specs: string[];
}> = ({ title, specs }) => {
  return (
    <Card 
      sx={{ 
        borderRadius: 2,
        background: "linear-gradient(135deg, #f8fbff 0%, #e3f2fd 100%)",
        border: "1px solid",
        borderColor: "primary.100",
        p: 3
      }}
    >
      <Typography 
        fontWeight={700} 
        fontSize="1.1rem"
        gutterBottom
        color="primary.main"
        sx={{ mb: 2 }}
      >
        {title}
      </Typography>
      <Stack spacing={1}>
        {specs.map((spec, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "flex-start" }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "primary.main",
                mt: 0.8,
                mr: 2,
                flexShrink: 0
              }}
            />
            <Typography variant="body2" sx={{ lineHeight: 1.6, color: "text.primary" }}>
              {spec}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Card>
  );
};

export default function DataCentreSolutionsPage(): React.JSX.Element {
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
              Data Centre Solutions & Infrastructure
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
              Comprehensive data centre infrastructure solutions including raised access floors, 
              advanced cable management systems, and fire suppression technologies for optimal performance and safety.
            </Typography>

            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Chip 
                label="Raised Floor Systems" 
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
                label="Fire Suppression" 
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
                label="Cable Management" 
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
                p: 4,
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                boxShadow: "0 8px 32px rgba(25, 118, 210, 0.15)",
                border: "1px solid",
                borderColor: "primary.100",
                position: "relative",
                overflow: "hidden",
                '&:before': {
                  content: '""',
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.2)"
                }
              }}
            >
          <Image
                src="/images/Infrastructure/datacentresolution.jpeg" 
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
                  background: "linear-gradient(145deg, #ffffff 0%, #fafbfd 100%)",
                  mb: 4
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
                    Raised Access Floor Systems
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
                    Apart from raised access floor system of 600mm by 600mm panels, 
                    Itonus Services is the authorised installer for Soluflex Cable Floor System.
                  </Typography>

                  <Typography 
                    paragraph 
                    sx={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      mb: 4.5
                    }}
                  >
                    Soluflex products provides the flexibility and design freedom of installing 
                    working power & network outlets exactly where it is needed. With its 225mm 
                    by 255mm panel size, there is no need for cutting of grommet.
                  </Typography>

                  {/* Specifications Grid */}
                  <Box sx={{ mb: 4 }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 800,
                        color: "primary.dark",
                        mb: 3,
                        letterSpacing: "-0.3px"
                      }}
                    >
                      Soluflex Specifications
                    </Typography>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: 3
                      }}
                    >
                      <SpecCard
                        title="Technical Specifications"
                        specs={[
                          "Panel size: 225mm × 255mm",
                          "Load capacity: 3,000kg/m² (30,000N)",
                          "Standard heights: 37mm - 120mm",
                          "Material: Pregalvanised steel"
                        ]}
                      />
                      <SpecCard
                        title="Key Features"
                        specs={[
                          "Fast installation and re-usable",
                          "Maintains earthing continuity",
                          "No grommet cutting required",
                          "Flexible outlet placement"
                        ]}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Fire Suppression Section */}
              <Card 
                elevation={2}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  background: "linear-gradient(145deg, #fff8e1 0%, #ffecb3 100%)"
                }}
              >
                <CardContent sx={{ p: 4.5 }}>
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 800,
                      color: "warning.dark",
                      mb: 4,
                      letterSpacing: "-0.5px"
                    }}
                  >
                    Fire Suppression Systems
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 4
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          color: "warning.dark",
                          mb: 2
                        }}
                      >
                        FM200 System
                      </Typography>
                      <Typography 
                        sx={{ 
                          lineHeight: 1.7,
                          color: "text.primary",
                          mb: 3
                        }}
                      >
                        Clean agent fire suppression system that is safe for occupied spaces, 
                        environmentally friendly, and provides rapid fire extinguishing capabilities 
                        for critical data centre infrastructure.
                      </Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          color: "warning.dark",
                          mb: 2
                        }}
                      >
                        Argonite Fire Suppression System
                      </Typography>
                      <Typography 
                        sx={{ 
                          lineHeight: 1.7,
                          color: "text.primary"
                        }}
                      >
                        Inert gas fire suppression system that uses naturally occurring gases 
                        to extinguish fires without leaving residues, making it ideal for 
                        protecting sensitive electronic equipment in data centres.
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Right Column - Additional Solutions */}
            <Box sx={{ 
              width: { xs: "100%", lg: 420 },
              flexShrink: 0
            }}>
              <Stack spacing={3.5}>
                <SolutionCard
                  title="Traditional Raised Floor"
                  subtitle="600mm × 600mm Panel System"
                  body={`Standard raised access floor systems with 600mm by 600mm panels provide reliable underfloor space for cable management, airflow, and utility distribution in data centre environments.`}
                />

                <SolutionCard
                  title="Cable Management"
                  subtitle="Complete Infrastructure Solutions"
                  body={`Comprehensive cable management solutions including routing, segregation, and protection systems for optimal data transmission performance and organized infrastructure.`}
                />

                <SolutionCard
                  title="Infrastructure Planning"
                  subtitle="Design & Implementation"
                  body={`End-to-end data centre infrastructure planning and implementation services, ensuring optimal layout, scalability, and performance for your critical operations.`}
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
                  Benefits of Professional Data Centre Solutions
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
                      title="Flexibility & Scalability"
                      description="Modular systems like Soluflex allow for easy reconfiguration and expansion as your data centre needs evolve, supporting future growth without major infrastructure changes."
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <FeatureCard
                      title="Safety & Protection"
                      description="Advanced fire suppression systems and proper cable management ensure the highest levels of safety for both personnel and critical equipment in data centre environments."
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <FeatureCard
                      title="Optimal Performance"
                      description="Proper infrastructure design including raised floors and cable management systems ensures optimal airflow, cooling, and data transmission performance."
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