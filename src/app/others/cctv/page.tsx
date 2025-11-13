// src/app/enterprise/security-surveillance/page.tsx
'use client'
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid as Grid,
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
  Avatar,
  Button,
  alpha,
} from '@mui/material';
import {
  Videocam,
  Security,
  Nightlight,
  ZoomOutMap,
  ArrowForward,
  CheckCircle,
  Support,
  Sensors,
} from '@mui/icons-material';
import Image from 'next/image';

const images = {
  hero: '/images/others/cctv/securitysurvelliance.png',
  domeCamera: '/images/others/cctv/domecamera.png',
  ptzCamera: '/images/others/cctv/PITZcamera.png',
  monitoring: '/images/others/cctv/SmartDetection.png',
  installation: '/images/others/cctv/trainingandsupport.png',
  surveillance: '/images/others/cctv/advancedcctvsurvelliance.png',
};

const SecuritySurveillancePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <Videocam sx={{ fontSize: 40 }} />,
      title: 'Dome Cameras',
      description: 'Discreet and versatile dome cameras suitable for indoor and outdoor surveillance with wide coverage areas.',
      image: images.domeCamera
    },
    {
      icon: <ZoomOutMap sx={{ fontSize: 40 }} />,
      title: 'PTZ Cameras',
      description: 'Pan-Tilt-Zoom cameras with day/night capabilities for comprehensive area monitoring and tracking.',
      image: images.ptzCamera
    },
    {
      icon: <Sensors sx={{ fontSize: 40 }} />,
      title: 'Smart Detection',
      description: 'Sensor-activated and IR-controlled systems with intelligent motion detection and alert capabilities.',
      image: images.monitoring
    },
    {
      icon: <Support sx={{ fontSize: 40 }} />,
      title: 'Training & Support',
      description: 'Comprehensive user training and technical support for optimal system operation and maintenance.',
      image: images.installation
    }
  ];

  const cameraTypes = [
    'Dome Cameras',
    'PTZ Cameras',
    'Day/Night Cameras',
    'IR-Controlled Cameras',
    'IP-Based Systems',
    'Analog Systems',
    'Digital Format',
    'HD Quality'
  ];

  const features = [
    '24/7 Video Recording',
    'Real-time Monitoring',
    'Motion Detection',
    'Remote Access',
    'Night Vision',
    'Weather Resistant',
    'High Resolution',
    'Easy Installation'
  ];

  const applications = [
    'Large Offices',
    'Warehouses',
    'Manufacturing Plants',
    'Schools & Educational',
    'Commercial Buildings',
    'Retail Spaces',
    'Logistics Centers',
    'Public Facilities'
  ];

  const benefits = [
    'Crime Deterrence',
    '24/7 Monitoring',
    'Incident Evidence',
    'Remote Viewing',
    'Employee Safety',
    'Asset Protection',
    'Liability Reduction',
    'Peace of Mind'
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
                Security Surveillance{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Systems (CCTV)
                </Box>
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
                Comprehensive CCTV surveillance solutions with advanced camera systems, real-time monitoring, 
                and professional support to protect your business facilities and assets.
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
                  alt="Security Surveillance Systems CCTV"
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
                Advanced CCTV Surveillance for Comprehensive Security
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
                    src={images.surveillance}
                    alt="CCTV Surveillance System"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                Normally referred to as CCTV system, surveillance of actual video footages recorded and 
                monitoring of any movements and events that may potentially breach your business facility 
                is almost necessary for large size offices, warehouse, plants, schools and buildings.
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                Our pre-sales team are able to guide you through the selection range from Dome cameras to 
                PTZ Day/Night Cameras, sensor activated, IR controlled, IP-based Analog, Digital format 
                or HD quality. User training and technical support are available for optimal system operation.
              </Typography>

              {/* Camera Types Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Camera System Options
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
                    {cameraTypes.map((camera, index) => (
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
                            {camera}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Box>

              {/* Applications Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Ideal For These Applications
                </Typography>
                <Grid container spacing={2}>
                  {applications.map((application, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                      <Chip
                        label={application}
                        variant="filled"
                        sx={{
                          width: '100%',
                          bgcolor: 'white',
                          color: 'primary.main',
                          fontWeight: 600,
                          py: 2,
                          mb: 1,
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

              {/* Support Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Professional Support & Training
                </Typography>
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                      Our comprehensive support package includes complete user training and ongoing technical 
                      support to ensure your CCTV system operates at peak performance. From initial setup to 
                      routine maintenance, our team is here to assist you.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      Get expert guidance on system operation, troubleshooting, and best practices for 
                      maximizing your surveillance investment.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                   
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
                  Our Solutions
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

              {/* Technical Expertise Highlight */}
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
                  Expert Guidance
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  <Nightlight 
                    sx={{ 
                      fontSize: 48, 
                      color: 'secondary.main',
                      mb: 2 
                    }} 
                  />
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    Our pre-sales team provides expert guidance on selecting the right CCTV systems 
                    from various technologies including day/night cameras, IP-based systems, and HD quality.
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

export default SecuritySurveillancePage;