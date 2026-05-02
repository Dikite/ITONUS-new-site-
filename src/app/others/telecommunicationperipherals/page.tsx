// src/app/enterprise/telecom-peripherals/page.tsx
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
  Phone,
  Headset,
  Radio,
  SupportAgent,
  BusinessCenter,
  CheckCircle,
} from '@mui/icons-material';
import Image from 'next/image';
 
const images = {
  hero: '/images/others/telecom/Telecomperipherals.png',
  content: '/images/others/telecom/Professionalcmmunicationsolution.png',
  businessPhones: '/images/others/telecom/BusinessPhoneSystems.png',
  headsets: '/images/others/telecom/professionalheadsets.jpg',
  radioComms: '/images/others/telecom/radioscommunication.jpg',
  contactCenter: '/images/others/telecom/contactcentersolutions.jpg',
  
};
 
const TelecomPeripheralsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 
  const products = [
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Business Phone Systems',
      description: 'Fixed-line business phones from leading brands including Panasonic, Ericsson, Toshiba, and GE for reliable corporate communications.',
      image: images.businessPhones,
      brands: ['Panasonic', 'Ericsson', 'Toshiba', 'GE','Yealink']
    },
    {
      icon: <Headset sx={{ fontSize: 40 }} />,
      title: 'Professional Headsets',
      description: 'Plantronics enterprise and consumer series microphone headsets for clear audio quality in office and contact center environments.',
      image: images.headsets,
      brands: ['Plantronics','Poly','Jabra']
    },
    {
      icon: <Radio sx={{ fontSize: 40 }} />,
      title: 'Radio Communication',
      description: 'Two-way radio communication systems for instant, reliable communication in various corporate and industrial settings.',
      image: images.radioComms,
      brands: ['Two-Way Radios']
    },
    {
      icon: <SupportAgent sx={{ fontSize: 40 }} />,
      title: 'Contact Center Solutions',
      description: 'Intuitive phones and quality headsets specifically designed for contact centers to enhance customer service effectiveness.',
      image: images.contactCenter,
      brands: ['Contact Center']
    }
  ];
 
  const benefits = [
    'Reliable Communication',
    'Enhanced Productivity',
    'Quality Assurance',
    'Expert Support',
    'Cost-Effective',
    'Easy Integration'
  ];
 
  const features = [
    'Corporate-Grade Devices',
    'Clear Audio Quality',
'Corporate-Grade Devices',
    'Easy to Use',
    'Professional Support'
  ];
 
  const Partners = [
    { name: "Ericsson", image: "/serviceslogo/TelecomPeripherals/EricssonLogo.png" },
    { name: "General Electric", image: "/serviceslogo/TelecomPeripherals/General_Electric_logo.png" },
     
    { name: "Panasonic", image: "/serviceslogo/TelecomPeripherals/Panasonic_logo.png" },
    { name: "Plantronics", image: "/serviceslogo/TelecomPeripherals/Plantronics_logo.png" },
    { name: "Toshiba", image: "/serviceslogo/TelecomPeripherals/Toshiba_logo.png" },
    { name: "Cisco", image: "/serviceslogo/TelecomPeripherals/cisco.png" },
    { name: "Yealink", image: "/serviceslogo/TelecomPeripherals/Yealink.png" },
   { name: "Jabra", image: "/serviceslogo/TelecomPeripherals/Jabra.png" },
    { name: "Hppoly", image: "/serviceslogo/TelecomPeripherals/hppoly.png" },
  

  ];
 
  return (
    <Box sx={{ bgcolor: '#181a39', minHeight: '100vh', overflow: 'hidden' }}>
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
                  color: '#fff'
                }}
              >
                Telecom{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Peripherals
                </Box>
              </Typography>
             
              <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.6, color: 'white' }}>
                Reliable telecommunication devices and peripherals for corporate needs. From business phones to professional headsets,
                we provide the tools for effective business communication.
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
                <Image
                  src={images.hero}
                  alt="Communication Devices"
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
                  color: 'white',
                  mb: 3
                }}
              >
                Professional Communication Solutions
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
                  }}
                >
                  <Image
                    src={images.content}
                    alt="Telecom Equipment"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3, color: 'white' }}>
              
                We provide for corporate telecommunication needs with terminal telecommunication devices such as
                fixed-line business phones, radio comms and 2-way headsets.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3, color: 'white' }}>
                We can also provide for contact centres with intuitive phones and quality headsets to help them
                support customer service functions more effectively.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4, color: 'white' }}>
                We are resellers of office phone sets for Panasonic, Ericsson, Toshiba, GE and others.
                We are reseller of Plantronics enterprise and consumer series of microphone headsets.
              </Typography>
 
              {/* Features Grid */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {features.map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'white' }}>
                      <CheckCircle
                        sx={{
                          color: 'rgba(204, 93, 41, 1)',
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
 
            {/* Vendors Section */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                Our Vendors
              </Typography>
             
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {Partners.map((Partner, index) => (
                  <Box
                    key={index}
                    sx={{
                      background: "#ffffffff",
                      p: 1,
                      borderRadius: 1,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={Partner.image}
                      alt={Partner.name}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                        transition: "transform 0.2s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </Box>
                ))}
              </Box>
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
                  sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: 'white' }}
                >
                  Our Products
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
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                            {product.description}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {product.brands.map((brand, brandIndex) => (
                              <Chip
                                key={brandIndex}
                                label={brand}
                              
                                variant="outlined"
                                 
                        
                                sx={{ 
                                  fontWeight: 600,
                                  color: 'primary',
                                  borderColor: 'primary.main'
                                }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
 
              {/* Benefits Card */}
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessCenter sx={{ fontSize: 40, color: 'rgba(204, 93, 41, 1)', mr: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                    Key Benefits
                  </Typography>
                </Box>
                <Grid container spacing={1}>
                  {benefits.map((benefit, index) => (
                    <Grid size={12} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle
                          sx={{
                            color: 'rgba(204, 93, 41, 1)',
                            mr: 1,
                            fontSize: 16
                          }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>
                          {benefit}
                        </Typography>
                      </Box>
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
 
export default TelecomPeripheralsPage;