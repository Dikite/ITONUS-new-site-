
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
  Grid,
} from "@mui/material";

import Image from "next/image";

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

const ProductCard: React.FC<{
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

const BrandChip: React.FC<{ brand: string }> = ({ brand }) => {
  return (
    <Chip
      label={brand}
      variant="outlined"
      sx={{
        fontWeight: 600,
        fontSize: "0.85rem",
        height: 32,
        borderColor: "primary.light",
        color: "primary.dark",
        '&:hover': {
          bgcolor: "primary.light",
          color: "white"
        }
      }}
    />
  );
};

export default function ITProductsPage(): React.JSX.Element {
  const brands = [
    "APC", "Aten", "Canon", "Cisco", "HP", "IBM",
    "IGEL", "LevelOne", "Linksys", "Microsoft", "NetGear"
  ];

  const productCategories = [
    {
      title: "Thin Clients",
      description: "Streamlined computing solutions for optimized performance and security in enterprise environments."
    },
    {
      title: "Notebooks & Laptops",
      description: "High-performance mobile computing solutions for professionals on the go."
    },
    {
      title: "Desktop Systems",
      description: "Reliable desktop computers tailored to meet your business requirements and workflow needs."
    },
    {
      title: "UMPC Devices",
      description: "Ultra-mobile PCs offering powerful computing in compact form factors for maximum flexibility."
    },
    {
      title: "Multi-functional Printers",
      description: "All-in-one printing solutions that combine printing, scanning, copying, and faxing capabilities."
    },
    {
      title: "KVM Solutions",
      description: "Keyboard, Video, Mouse switches for efficient multi-computer management and control."
    }
  ];

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
              Desktops & IT Products
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
              We provide complementing range of IT products and terminal devices,
              supplying and deploying from Thin Clients, Notebooks, Desktop, UMPC,
              Multi-functional printer, KVM and other IT related products. Tell us
              your requirements and we can select the right component mix or product
              to serve your needs.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Chip
                label="Thin Clients"
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
                label="Desktop Solutions"
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
                label="IT Infrastructure"
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
                           src="/images/Infrastructure/itproduct.png" 
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
                    Comprehensive IT Solutions
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
                    Our extensive range of IT products and terminal devices is designed
                    to meet the diverse needs of modern businesses. From compact Thin
                    Clients to powerful Desktop systems, we provide solutions that
                    enhance productivity and efficiency.
                  </Typography>

                  <Typography
                    paragraph
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      mb: 4.5
                    }}
                  >
                    We work closely with our clients to understand their specific
                    requirements and recommend the optimal product mix that aligns
                    with their business objectives and technical environment.
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
                    Trusted Brand Partnerships
                  </Typography>
                  <Typography
                    paragraph
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      mb: 3
                    }}
                  >
                    We are authorized resellers and certified installers of leading
                    technology brands in the industry:
                  </Typography>
                 
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 2 }}>
                    {brands.map((brand) => (
                      <BrandChip key={brand} brand={brand} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Right Column - Product Cards */}
            <Box sx={{
              width: { xs: "100%", lg: 420 },
              flexShrink: 0
            }}>
              <Stack spacing={3.5}>
                <PartnerCard
                  title="Custom Solutions"
                  subtitle="Tailored to Your Needs"
                  body="Every business has unique requirements. We specialize in creating customized IT solutions that perfectly match your operational needs, budget constraints, and future growth plans. Our experts will work with you to select the right combination of products and services."
                />

                <PartnerCard
                  title="Deployment Services"
                  subtitle="Professional Installation & Support"
                  body="Beyond just supplying products, we provide comprehensive deployment services including installation, configuration, and ongoing support. Our certified technicians ensure seamless integration with your existing infrastructure and optimal performance from day one."
                />
              </Stack>
            </Box>
          </Box>

   {/* Product Categories Section */}
<Box sx={{ mb: 10, textAlign: "center" }}>
  <Card
    elevation={0}
    sx={{
      bgcolor: "transparent",
      boxShadow: "none",
    }}
  >
    <CardContent sx={{ p: { xs: 2, sm: 4, md: 6 } }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 800,
          color: "primary.dark",
          mb: 6,
          letterSpacing: "-0.5px",
        }}
      >
        Our Product Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {productCategories.map((product, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 300px", // responsive width
              maxWidth: "350px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProductCard
              title={product.title}
              description={product.description}
            />
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
</Box>


        </Box>
      </Container>
    </Box>
  );
}