'use client'
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
  Avatar,
  alpha,
} from '@mui/material';
import {
  Computer,
  Print,
  Wifi,
  Storage,
  DevicesOther,
  CheckCircle,
} from '@mui/icons-material';
import Image from 'next/image';

const images = {
  hero: '/images/Infrastructure/desktop&itproducts/ITproducts&hardware.jpg',
  content: '/images/Infrastructure/desktop&itproducts/ithardwaresolution.png',
  laptop: '/images/Infrastructure/desktop&itproducts/desktop&notebook.jpg',
  printer: '/images/Infrastructure/desktop&itproducts/Multifunctionalprinter.jpg',
  network: '/images/Infrastructure/desktop&itproducts/networkigndevices.png',
  storage: '/images/Infrastructure/desktop&itproducts/storage.jpg',
  accessories: '/images/Infrastructure/desktop&itproducts/accessories.jpg',
};

const ItProductsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const products = [
    {
      icon: <Computer sx={{ fontSize: 40 }} />,
      title: 'Desktops & Notebooks',
      description: 'High-performance desktops and notebooks for business and personal use, optimized for productivity, performance, and reliability.',
      image: images.laptop
    },
    {
      icon: <Print sx={{ fontSize: 40 }} />,
      title: 'Multi-functional Printers',
      description: 'Advanced printing solutions with scanning, copying, and wireless connectivity features for efficient office workflows.',
      image: images.printer
    },
    {
      icon: <Wifi sx={{ fontSize: 40 }} />,
      title: 'Networking Devices',
      description: 'Routers, switches, and wireless access points from trusted brands to build secure, high-speed network infrastructures.',
      image: images.network
    },
    {
      icon: <Storage sx={{ fontSize: 40 }} />,
      title: 'Servers & Storage',
      description: 'Scalable servers and storage solutions designed for data reliability, virtualization, and cloud readiness.',
      image: images.storage
    },
    {
      icon: <DevicesOther sx={{ fontSize: 40 }} />,
      title: 'IT Accessories',
      description: 'Monitors, docking stations, cables, and peripherals that complement your IT ecosystem and improve productivity.',
      image: images.accessories
    }
  ];

  const brands = [
    'APC',
    'Aten',
    'Canon',
    'Cisco',
    'HP',
    'IBM',
    'IGEL',
    'LevelOne',
    'Linksys',
    'Microsoft',
    'NetGear'
  ];

  const features = [
    'Authorized Reseller',
    'Quality Assurance',
    'Warranty Support',
    'Technical Installation',
    'After-Sales Service',
    'Bulk Order Discounts'
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Hero Section with Background */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          py: 12,
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Desktops &{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  IT Products
                </Box>
              </Typography>
             
              <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                Reliable IT solutions and hardware for modern workplaces. We supply and deploy
                high-performance devices, ensuring optimal functionality and seamless integration.
              </Typography>
           
            </Grid>
           
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: 400,
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  bgcolor: 'grey.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Placeholder for image - replace with actual Image component when you have images */}
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                  }}
                >
                  IT Products & Hardware
                </Box>
                {/* Uncomment when you have actual images */}
                 <Image
                  src={images.hero}
                  alt="IT Products & Hardware"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
 
      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Left Column - Main Description */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3
                }}
              >
                Empowering Businesses with Quality IT Products
              </Typography>
             
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: 300,
                    borderRadius: 3,
                    overflow: 'hidden',
                    mb: 4,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    bgcolor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }}
                >
                  IT Hardware Solutions
                  {/* Uncomment when you have actual images */}
                  <Image
                    src={images.content}
                    alt="IT Hardware Solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                We provide a comprehensive range of IT hardware, from notebooks and desktops to
                multi-functional printers and networking equipment. Our expert team helps you select
                the right products and components that align with your organization's needs.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                As authorized resellers and installers, we ensure seamless deployment and reliable
                after-sales support for all your technology investments.
              </Typography>
 
              {/* Features Grid */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {features.map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CheckCircle
                        sx={{
                          color: 'primary.main',
                          mr: 1,
                          fontSize: 20
                        }}
                      />
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {feature}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
 
            {/* Brand Partnerships Section */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Our Partner Brands
              </Typography>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                }}
              >
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  {brands.map((brand, index) => (
                    <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index} sx={{ textAlign: 'center' }}>
                      <Chip
                        label={brand}
                        variant="filled"
                        sx={{
                          bgcolor: 'white',
                          color: 'primary.main',
                          fontWeight: 600,
                          px: 2,
                          py: 3,
                          width: '100%',
                          maxWidth: 200,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Box>
          </Grid>
 
          {/* Right Column - Products */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box sx={{ position: isMobile ? 'static' : 'sticky', top: 100 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                  mb: 4,
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}
                >
                  Our Product Range
                </Typography>
               
                <Grid container spacing={3}>
                  {products.map((product, index) => (
                    <Grid size={12} key={index}>
                      <Card
                        elevation={2}
                        sx={{
                          height: '100%',
                          transition: 'all 0.3s ease-in-out',
                          borderRadius: 3,
                          overflow: 'hidden',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                          },
                        }}
                      >
                        <Box sx={{ position: 'relative', height: 120 }}>
                          <Box
                            sx={{
                              width: '100%',
                              height: '100%',
                              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '1rem',
                              fontWeight: 600,
                            }}
                          >
                            {product.title}
                          </Box>
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar
                              sx={{
                                bgcolor: 'primary.main',
                                mr: 2,
                                width: 50,
                                height: 50,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                              }}
                            >
                              {product.icon}
                            </Avatar>
                            <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                              {product.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {product.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
 
export default ItProductsPage;