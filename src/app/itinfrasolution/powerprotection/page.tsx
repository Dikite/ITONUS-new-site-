// src/app/enterprise/powerprotection/page.tsx
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
  ElectricalServices,
  Storage,
  Security,
  AcUnit,
  Lan,
  CheckCircle,
} from '@mui/icons-material';
import Image from 'next/image';

const images = {
  hero: '/images/Infrastructure/powerprotection/powerprotection.jpeg',
  content: '/images/Infrastructure/powerprotection/datacentersolution.png',
  ups: '/images/Infrastructure/powerprotection/ups.png',
  racks: '/images/Infrastructure/powerprotection/enclose&racking.png',
  cooling: '/images/Infrastructure/powerprotection/coolingandair.png',
  management: '/images/Infrastructure/powerprotection/ims.png',
  cabling: '/images/Infrastructure/powerprotection/cablemanagement.png',
};

const PowerProtectionPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const systems = [
  
    {
      icon: <Storage sx={{ fontSize: 40 }} />,
      title: 'Enclosure & Racking Systems',
      description: 'Modular rack enclosures offering flexibility, scalability, and cooling efficiency for data centres, network rooms, and industrial applications.',
      image: images.racks
    },
    {
      icon: <AcUnit sx={{ fontSize: 40 }} />,
      title: 'Cooling & Air Distribution',
      description: 'Advanced InRow, Air Distribution, and Coolant Distribution systems to address heat dissipation in high-density data environments.',
      image: images.cooling
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Intelligent Management Systems',
      description: 'Integrated monitoring and management systems compatible across multiple platforms, ensuring efficiency and reliability in your IT environment.',
      image: images.management
    },
    {
      icon: <Lan sx={{ fontSize: 40 }} />,
      title: 'Cable Management & Accessories',
      description: 'Professional cable dressing ensures clean, structured, and secure cabling throughout the data centre, improving both performance and serviceability. while unobstructed airflow enhances cooling efficiency and reduces energy consumption',
      image: images.cabling
    }
  ];

  const Partners = [
    {
      name: "ADCKronelogo",
      image: "/serviceslogo/PowerProtection,Enclosure/ADCKronelogo.png"
    },
    {
      name: "Commscopesyst",
      image: "/serviceslogo/PowerProtection,Enclosure/Commscopesyst.png"
    },
 
    {
      name: "APC",
      image: "/serviceslogo/PowerProtection,Enclosure/LogoAPC.png"
    },
    {
      name: "panduit",
      image: "/serviceslogo/PowerProtection,Enclosure/panduit-logo.png"
    },
      {
      name: "Schider",
      image:  "/serviceslogo/PowerProtection,Enclosure/schniderelectric.png",
    },
                  
 
          
  ];

  const features = [
    'Scalable Modular Architecture',
    'Energy Efficiency',
    'Heat Dissipation Management',
    'Space Optimization',
    'Intelligent Monitoring',
    'High-Density Support'
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
                Power Protection,{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Enclosure & Racking Systems
                </Box>
              </Typography>
             
              <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.6, color: 'white' }}>
                Reliable, scalable, and energy-efficient solutions to protect your critical IT
                infrastructure from downtime, inefficiency, and environmental challenges.
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
                  alt="Power Protection Systems"
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
                Reliable Infrastructure for Modern Data Centres
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
                    alt="Data Centre Infrastructure"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3, color: 'white' }}>
                With increasing demand for density and equipment consolidation, IT professionals face
                challenges managing power variations, heat dissipation, and space efficiency. APC's
                integrative turnkey solutions tackle these issues through scalable modular
                architecture for data centres and server rooms.
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3, color: 'white' }}>
                Our power protection system is engineered to ensure uninterrupted availability for mission-critical infrastructure. Every rack is supported by dual independent A+B power feeds, backed by Online Double-Conversion UPS units that deliver clean and stable power at all times. Automatic Transfer Switches enable seamless switching between sources, while diesel generator backup provides sustained runtime during prolonged outages.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3, color: 'white' }}>
                As a Silver Partner with APC, Itonus Services delivers modular enclosure systems,
                UPS, cooling solutions, and intelligent management platforms. We ensure our clients
                maintain robust, energy-efficient operations while remaining cost-competitive.
              </Typography>

           
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4, color: 'white' }}>
                For heat management, APC's InRow Cooling and Coolant Distribution systems are among
                the most advanced solutions for maintaining ideal conditions in high-density
                deployments.
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
 
            {/* Brand Partnerships Section */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                Our Partner Brands
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 4,
                  justifyContent: "left",
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
 
          {/* Right Column - Systems */}
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
                  Our Solutions
                </Typography>
               
                <Grid container spacing={3}>
                  {systems.map((system, index) => (
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
                            src={system.image}
                            alt={system.title}
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
                              {system.icon}
                            </Avatar>
                            <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                              {system.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {system.description}
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
 
export default PowerProtectionPage;