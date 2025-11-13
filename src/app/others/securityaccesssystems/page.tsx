// src/app/enterprise/security-access/page.tsx
'use client'
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid as Grid,
  useTheme,
  useMediaQuery,
  Paper,
  Avatar,
  Button,
  alpha,
} from '@mui/material';
import {
  Security,
  Fingerprint,
  Badge,
  MonitorSharp,
  ArrowForward,
  CheckCircle,
  AccessTime,
  Monitor,
} from '@mui/icons-material';
import Image from 'next/image';

const images = {
  hero: '/images/others/securityaccesssystems/securityaccesssystem.jpg',
  accessControl: '/images/others/securityaccesssystems/accesscontrolsystem.jpg',
  biometric: '/images/others/securityaccesssystems/bioreader.jpg',
  monitoring: '/images/others/securityaccesssystems/remotemonitoring.jpg',
  integration: '/images/others/securityaccesssystems/time&attendance.png',
  securitySystem: '/images/others/securityaccesssystems/timeandattendance.png',
};

const SecurityAccessPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <Badge sx={{ fontSize: 40 }} />,
      title: 'Access Control Systems',
      description: 'Comprehensive entry and exit solutions for offices and logistics providers using PIN, card, and HID sensor technologies.',
      image: images.accessControl
    },
    {
      icon: <Fingerprint sx={{ fontSize: 40 }} />,
      title: 'Biometric Readers',
      description: 'Advanced biometric security solutions including fingerprint and facial recognition for enhanced access security.',
      image: images.biometric
    },
    {
      icon: <Monitor sx={{ fontSize: 40 }} />,
      title: 'Remote Monitoring',
      description: 'Centralized monitoring systems with remote access capabilities for real-time security management.',
      image: images.monitoring
    },
    {
      icon: <AccessTime sx={{ fontSize: 40 }} />,
      title: 'Time & Attendance',
      description: 'Integrated time attendance systems that seamlessly connect with your HR database for efficient workforce management.',
      image: images.integration
    }
  ];

  const accessMethods = [
    'PIN Code Systems',
    'Card Access',
    'HID Sensors',
    'Biometric Readers',
    'Video Phones',
    'Facial Recognition',
    'Mobile Access',
    'Proximity Cards'
  ];

  const features = [
    'Office Entrance Security',
    'Logistics Facility Access',
    'Centralized Monitoring',
    'HR Database Integration',
    'Real-time Alerts',
    'Access Logging',
    'Multi-level Security',
    'Remote Configuration'
  ];

  const benefits = [
    'Asset Protection',
    'Employee Safety',
    'Access Logging',
    'Time Tracking',
    'Centralized Control',
    'Scalable Solutions',
    '24/7 Monitoring',
    'HR System Integration'
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
                Security Access{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Systems
                </Box>
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
                Comprehensive security access solutions to safeguard your assets and employees with 
                advanced access control, biometric readers, and integrated monitoring systems.
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
                }}
              >
                <Image
                  src={images.hero}
                  alt="Security Access Systems"
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
                Advanced Security Solutions for Modern Enterprises
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
                    src={images.securitySystem}
                    alt="Security Access Control System"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                A reliable and comprehensive security access system can safeguard your assets and your employees. 
                We are experienced installers for entrances and exits for office and logistics providers, from 
                PIN, Card, HID sensors to biometric readers and video phones.
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                Add and configure remote monitoring facilities for central monitoring purposes. Incorporate 
                time attendance and management of access to your own HR database for seamless workforce 
                management and security integration.
              </Typography>

              {/* Access Methods Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Access Control Methods
                </Typography>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                  }}
                >
                  <Grid container spacing={2}>
                    {accessMethods.map((method, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <CheckCircle 
                            sx={{ 
                              color: 'primary.main', 
                              mr: 2, 
                              fontSize: 24 
                            }} 
                          />
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {method}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Box>

              {/* Features Grid */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  System Features
                </Typography>
                <Grid container spacing={3}>
                  {features.map((feature, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                      <Card 
                        elevation={1}
                        sx={{
                          height: '100%',
                          p: 2,
                          borderRadius: 2,
                          textAlign: 'center',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                          },
                        }}
                      >
                        <Security 
                          sx={{ 
                            fontSize: 40, 
                            color: 'primary.main',
                            mb: 1 
                          }} 
                        />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {feature}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Benefits Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Key Benefits
                </Typography>
                <Grid container spacing={3}>
                  {benefits.map((benefit, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box 
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          p: 3,
                          borderRadius: 2,
                          bgcolor: alpha(theme.palette.primary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            mr: 2,
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {benefit}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Integration Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  HR Database Integration
                </Typography>
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                      Seamlessly integrate time attendance and access management with your existing HR 
                      database systems. Our solutions provide comprehensive workforce management 
                      capabilities while maintaining robust security protocols.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      Monitor employee access patterns, track attendance automatically, and generate 
                      detailed reports for management and compliance purposes.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        height: 200,
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Image
                        src={images.integration}
                        alt="HR Database Integration"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
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

              {/* Remote Monitoring Highlight */}
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  mb: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, textAlign: 'center' }}>
                  Central Monitoring
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  <MonitorSharp 
                    sx={{ 
                      fontSize: 48, 
                      color: 'secondary.main',
                      mb: 2 
                    }} 
                  />
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    Configure remote monitoring facilities for centralized security management and 
                    real-time access control across multiple locations.
                  </Typography>
                </Box>
              </Paper>

            
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SecurityAccessPage;