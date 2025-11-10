// src/app/enterprise/wireless-deployment/page.tsx
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
  Button,
  alpha,
} from '@mui/material';
import {
  Wifi,
  Security,
  Speed,
  BusinessCenter,
  Architecture,
  CheckCircle,
  ArrowForward,
} from '@mui/icons-material';
import Image from 'next/image';

const images = {
  hero: '/images/enterprise/wireless-hero.jpeg',
  planning: '/images/enterprise/networkplanning.png',
  deployment: '/images/enterprise/deploymentservice.jpeg',
  security: '/images/enterprise/securitysolution.jpeg',
  analysis: '/images/enterprise/NetworkAnalysis.jpeg',
  content: '/images/enterprise/EnterpriseWirelesssolutions.png',
};

const WirelessDeploymentPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <Architecture sx={{ fontSize: 40 }} />,
      title: 'Network Planning',
      description: 'Comprehensive Wireless LAN network planning services that break your staff from the chains of a work desk with reliable connectivity.',
      image: images.planning
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 40 }} />,
      title: 'Deployment Services',
      description: 'Professional deployment of wireless equipment including new installations and re-deployment of current setups for optimal performance.',
      image: images.deployment
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Security Solutions',
      description: 'Enterprise-grade security implementations to protect your wireless network from threats while maintaining flexibility and accessibility.',
      image: images.security
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Network Analysis',
      description: 'Comprehensive analysis of current wireless heat maps with improvement recommendations for premises and bandwidth optimization.',
      image: images.analysis
    }
  ];

  const vendors = [
    'Cisco Systems',
    'Aruba Networks',
    'Colubris',
    'Belden',
    'LevelONE',
    'Netgear'
  ];

  const features = [
    'Reliable Connectivity',
    'Enterprise Security',
    'Bandwidth Optimization',
    'Heat Map Analysis',
    'Mobile Workforce Support',
    'Performance Testing'
  ];

  const benefits = [
    'Increased workforce mobility and flexibility',
    'Support for enterprise-level applications',
    'Secure wireless connectivity',
    'Optimized bandwidth utilization',
    'Comprehensive network analysis',
    'Vendor partnership advantages'
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
                Wireless Deployment &{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Network Solutions
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
                Break free from the chains of a work desk with our comprehensive wireless 
                solutions designed for today's mobile workforce.
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
                  Wireless Network Experts
                </Box>
              <Image
                  src={images.hero}
                  alt="Wireless Network Experts"
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
                Enterprise Wireless Solutions for Mobile Workforce
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
                  Mobile Workforce Solutions
                <Image
                    src={images.content}
                    alt="Mobile Workforce Solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                  /> 
                </Box>
              </Box>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                An increasingly mobile workforce requires more flexibility. Itonus Services provides 
                Wireless LAN network planning and deployment services that break your staff and services 
                from the chains of a work desk.
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                Reliable connectivity, security and bandwidth are the critical factors for wireless 
                support of any enterprise-level applications and processes. Our comprehensive services 
                include new deployment, testing and re-deployment of current setups, as well as detailed 
                analysis of current wireless heat maps for premises with actionable improvement recommendations.
              </Typography>

              {/* Benefits Section */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Key Benefits
                </Typography>
                <Grid container spacing={2}>
                  {benefits.map((benefit, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        <CheckCircle 
                          sx={{ 
                            color: 'primary.main', 
                            mr: 2, 
                            mt: 0.5,
                            fontSize: 20 
                          }} 
                        />
                        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                          {benefit}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Features Grid */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Our Expertise
                </Typography>
                <Grid container spacing={2}>
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
            </Box>

            {/* Vendor Partnerships Section */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Our Wireless Equipment Partners
              </Typography>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                }}
              >
                <Typography variant="h6" paragraph sx={{ textAlign: 'center', mb: 4 }}>
                  We are installers of wireless equipment from leading vendors and resellers of Aruba Networks
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
                  Our Services
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

export default WirelessDeploymentPage;