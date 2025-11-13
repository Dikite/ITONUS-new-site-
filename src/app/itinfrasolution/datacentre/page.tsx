// src/app/enterprise/datacentre/page.tsx
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
  Construction,
  Cable,

  FireExtinguisher,
  ArrowForward,
  CheckCircle,
  Security,
} from '@mui/icons-material';
import Image from 'next/image';

const images = {
  hero: '/images/Infrastructure/datacenter/DataCentreSolutions.png',
  raisedFloor: '/images/Infrastructure/datacenter/RaisedAccessFloorSystems.png',
  soluflex: '/images/Infrastructure/datacenter/SoluflexCableFloorSystem.png',
  cableManagement: '/images/Infrastructure/datacenter/InfrastructureSolutionsgenerate.png',
  fireSuppression: '/images/Infrastructure/datacenter/FireSuppressionSystems.png',
  datacentre: '/images/Infrastructure/datacenter/AdvancedDataCentre.png',
};

const DataCentrePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: < CheckCircle sx={{ fontSize: 40 }} />,
      title: 'Raised Access Floor Systems',
      description: '600mm by 600mm panel raised access floor systems designed for optimal data centre infrastructure and cable management.',
      image: images.raisedFloor
    },
    {
      icon: <Cable sx={{ fontSize: 40 }} />,
      title: 'Soluflex Cable Floor System',
      description: 'Authorized installer for Soluflex Cable Floor System providing flexibility and design freedom for power and network outlets.',
      image: images.soluflex
    },
    {
      icon: <Construction sx={{ fontSize: 40 }} />,
      title: 'Infrastructure Solutions',
      description: 'Comprehensive data centre infrastructure design and implementation for optimal performance and scalability.',
      image: images.cableManagement
    },
    {
      icon: <FireExtinguisher sx={{ fontSize: 40 }} />,
      title: 'Fire Suppression Systems',
      description: 'FM200 and Argonite fire suppression systems to protect your critical data centre infrastructure from fire hazards.',
      image: images.fireSuppression
    }
  ];

  const soluflexFeatures = [
    '225mm × 255mm Panel Size',
    'No Grommet Cutting Required',
    '3,000kg/m² Load Capacity',
    '37mm-120mm Height Options',
    'Pregalvanised Steel Construction',
    'Built-in Earthing Continuity',
    'Fast Installation',
    'Reusable Components'
  ];

  const benefits = [
    'Enhanced Cable Management',
    'Optimal Airflow Distribution',
    'Easy Maintenance Access',
    'Scalable Infrastructure',
    'Fire Safety Compliance',
    'High Load Capacity',
    'Quick Deployment',
    'Cost-Effective Solutions'
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
                Data Centre{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Solutions
                </Box>
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
                Comprehensive data centre infrastructure solutions including raised access floors, 
                cable management systems, and advanced fire suppression technologies for optimal 
                performance and safety.
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
                  alt="Data Centre Solutions"
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
                Advanced Data Centre Infrastructure Solutions
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
                    src={images.datacentre}
                    alt="Data Centre Infrastructure"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                Itonus Services provides comprehensive data centre solutions including raised access floor 
                systems and advanced cable management solutions. Our expertise ensures your data centre 
                infrastructure meets the highest standards of performance, safety, and scalability.
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                As authorized installers for Soluflex Cable Floor System, we offer innovative solutions 
                that provide the flexibility and design freedom needed for modern data centre requirements, 
                ensuring optimal placement of power and network outlets exactly where they are needed.
              </Typography>

              {/* Soluflex Features Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Soluflex Cable Floor System Features
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
                    {soluflexFeatures.map((feature, index) => (
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
                            {feature}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Box>

              {/* Benefits Grid */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Key Benefits
                </Typography>
                <Grid container spacing={3}>
                  {benefits.map((benefit, index) => (
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
                          {benefit}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Fire Suppression Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Fire Suppression Systems
                </Typography>
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                      We provide advanced fire suppression systems including FM200 and Argonite solutions 
                      to protect your critical data centre infrastructure. These clean agent systems 
                      effectively suppress fires without damaging sensitive electronic equipment.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Chip 
                        label="FM200 System" 
                        color="primary" 
                        variant="filled"
                        sx={{ fontWeight: 600 }}
                      />
                      <Chip 
                        label="Argonite System" 
                        color="secondary" 
                        variant="filled"
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
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
                        src={images.fireSuppression}
                        alt="Fire Suppression System"
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

          
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DataCentrePage;