// src/app/enterprise/network-equipment/page.tsx
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
  Router,
  Security,
  CloudSync,
  SettingsInputComponent,
  CheckCircle,
  Business,
} from '@mui/icons-material';
import Image from 'next/image';

const images = {
  hero: '/images/enterprise/networkequipmentinfrastructure.jpg',
  switching: '/images/enterprise/networkswitching.jpg',
  routing: '/images/enterprise/routingsolution.jpg',
  security: '/images/enterprise/networksecurity.jpg',
  wireless: '/images/enterprise/networkwireless.jpg',
  industrial: '/images/enterprise/networkindustrial.jpg',
  content:'/images/enterprise/advancednetworksolutions.jpg',
};

const NetworkEquipmentPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <Router sx={{ fontSize: 40 }} />,
      title: 'Network Switching',
      description: 'Complete switching solutions from basic office environments to advanced data center configurations with optimal performance and reliability.',
      image: images.switching
    },
    {
      icon: <CloudSync sx={{ fontSize: 40 }} />,
      title: 'Routing Solutions',
      description: 'Advanced routing technologies for seamless connectivity across multiple locations and cloud integration for modern business needs.',
      image: images.routing
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Network Security',
      description: 'Comprehensive security solutions including firewalls, intrusion prevention systems, and advanced threat protection for your network infrastructure.',
      image: images.security
    },
    {
      icon: <SettingsInputComponent sx={{ fontSize: 40 }} />,
      title: 'Wireless Networking',
      description: 'Enterprise-grade wireless solutions providing reliable, high-speed connectivity for offices, industrial sites, and outdoor environments.',
      image: images.wireless
    },
 
    {
      icon: <Router sx={{ fontSize: 40 }} />,
      title: 'Industrial Networking',
      description: 'Robust network equipment designed for demanding conditions in industrial and field environments with enhanced durability.',
      image: images.industrial
    }
  ];

  const vendors = [
    'Cisco Systems',
    'Comstor',
    'Juniper Networks',
    'LevelONE',
    'Linksys',
    'Netgear',
    'Tipping Point'
  ];

  const features = [
    'IP Management Solutions',
    'CCTV Integration',
    'Building Management Systems',
    'Centralized Equipment Management',
    'Cost-Effective Solutions',
    'Future-Ready Technologies',
    'Industrial-Grade Equipment',
    'Converged Communications'
  ];

  const capabilities = [
    'Network Design & Fulfillment',
    'Equipment Configuration',
    'Multi-Vendor Integration',
    'Project Collaboration',
    'Complete Network Solutions',
    'Best Value Propositions'
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
                Network Equipment &{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Infrastructure
                </Box>
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  lineHeight: 1.6,
                  color: 'text.secondary',
                  fontSize: isMobile ? '1.1rem' : '1.25rem',
                }}
              >
                Powering quality productivity through advanced networked communications 
                and IP management solutions for every environment.
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
                  Network Infrastructure
                </Box>
                <Image
                  src={images.hero}
                  alt="Network Infrastructure"
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
                Advanced Network Solutions for Modern Environments
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
                  Enterprise Network Solutions
               
                  <Image
                    src={images.content}
                    alt="Enterprise Network Solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                The dynamics of networked communications has proven to be the most direct form of quality 
                productivity in every environment. The popularity of IP management of facilities like CCTV, 
                Building Management System which have been traditionally bound by the forms of analog signals 
                have raised the brows of facilities managers to seriously consider the costs of more 
                central-effective equipment management and purchase.
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                From fulfilment to design, from configuration to collaboration, Itonus Services' network team 
                is able to critically propose the most appropriate complete network solution with the best 
                bang for buck, right from basic switching capabilities to emerging technologies of converged 
                communications for the future. We provide the means to supply and deploy network equipment 
                for every environment, including alternatives that are robust enough and suitable for 
                demanding conditions in the working field.
              </Typography>

              {/* Capabilities Section */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Our Capabilities
                </Typography>
                <Grid container spacing={2}>
                  {capabilities.map((capability, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CheckCircle 
                          sx={{ 
                            color: 'primary.main', 
                            mr: 2, 
                            fontSize: 24 
                          }} 
                        />
                        <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '1.1rem' }}>
                          {capability}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Features Grid */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Key Features & Solutions
                </Typography>
                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                      <Chip
                        label={feature}
                        variant="outlined"
                        sx={{
                          mb: 1,
                          width: '100%',
                          py: 2,
                          fontWeight: 500,
                          borderColor: 'primary.main',
                          color: 'primary.main',
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
              </Box>
            </Box>

            {/* Vendor Partnerships Section */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Authorized Vendor Partnerships
              </Typography>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                }}
              >
                <Typography variant="h6" paragraph sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
                  We are resellers, installers, certified & authorized channel partners of leading network equipment manufacturers
                </Typography>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  {vendors.map((vendor, index) => (
                    <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index} sx={{ textAlign: 'center' }}>
                      <Chip
                        label={vendor}
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

          {/* Right Column - Services */}
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
                  Our Network Services
                </Typography>
                
                <Grid container spacing={3}>
                  {services.map((service, index) => (
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
                            {service.title}
                          </Box>
                         <Image
                            src={service.image}
                            alt={service.title}
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
                              {service.icon}
                            </Avatar>
                            <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                              {service.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {service.description}
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

export default NetworkEquipmentPage;