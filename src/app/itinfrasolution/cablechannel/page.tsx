// src/app/enterprise/cable-channel/page.tsx
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
  Cable,
  Security,
  Engineering,
  Storage,
  Architecture,
  ArrowForward,
  CheckCircle,
  Shield,
} from '@mui/icons-material';
import Image from 'next/image';

const images = {
  hero: '/images/Infrastructure/cablechannelsystem/cablechannel.png',
  cableTray: '/images/Infrastructure/cablechannelsystem/CablofilWireMeshCable.png',
  cablofil: '/images/Infrastructure/cablechannelsystem/CablofilSystems.png',
  panduit: '/images/Infrastructure/cablechannelsystem/Panduitsolution.png',
  gridrunner: '/images/Infrastructure/cablechannelsystem/GRIDRUNNERSystems.png',
  fiberrunner: '/images/Infrastructure/cablechannelsystem/fiberrunner.jpg',
  installation: '/images/Infrastructure/cablechannelsystem/ProfessionalCable.png',
};

const CableChannelPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <Engineering sx={{ fontSize: 40 }} />,
      title: 'Cablofil Systems',
      description: 'Certified installer for Cablofil wire mesh cable trays with T-Welding technology for safe, durable cable management solutions.',
      image: images.cablofil
    },
    {
      icon: <Architecture sx={{ fontSize: 40 }} />,
      title: 'Panduit Solutions',
      description: 'Global leader in end-to-end network cabling with FIBERRUNNER® and FIBER-DUCT™ routing systems for optimal performance.',
      image: images.panduit
    },
    {
      icon: <Storage sx={{ fontSize: 40 }} />,
      title: 'GRIDRUNNER Systems',
      description: 'Underfloor cable routing system designed for data centers to manage network data and power cabling with improved reliability.',
      image: images.gridrunner
    },
    {
      icon: <Cable sx={{ fontSize: 40 }} />,
      title: 'Traditional Cable Trays',
      description: 'Perforated cable tray and runway systems for serial protection and EMI separation in various industrial applications.',
      image: images.cableTray
    }
  ];

  const cablofilFeatures = [
    'T-Welding Technology',
    'No Sharp Edges',
    'High Load Capacity (2m span)',
    'EZ Fast Deployment System',
    'Cost-Effective Installation',
    'Durable Wire Mesh Design',
    'Safe Cable Protection',
    'Global Industry Preference'
  ];

  const panduitFeatures = [
    'FIBERRUNNER® Routing Systems',
    'FIBER-DUCT™ Solutions',
    'GRIDRUNNER™ Underfloor System',
    'End-to-End Infrastructure',
    'Fiber Optic Protection',
    'Copper Cabling Management',
    'Improved Reliability',
    'Increased Safety Standards'
  ];

  const benefits = [
    'EMI Protection',
    'Bandwidth Optimization',
    'Easy Move-Add-Change',
    'Optimal Route Planning',
    'Better Earthing Continuity',
    'Modular System Design',
    'Enhanced Transmission',
    'Serial Cable Protection'
  ];

  const industries = [
    'Manufacturing',
    'Oil & Gas',
    'Data Centres',
    'Production Plants',
    'Enterprise Networks',
    'Telecommunications'
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
                Cable Channel{' '}
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
                Advanced cable management solutions with proper runway systems for optimal network performance, 
                EMI protection, and seamless infrastructure scalability.
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
                  alt="Cable Channel Systems"
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
                Professional Cable Management Solutions
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
                    src={images.installation}
                    alt="Cable Management Installation"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                Appropriate cable runways are necessary for serial protection of network cables as well as 
                separation from other EMI-sensitive materials, affecting bandwidth and transmission performance. 
                Suitable modular systems allow move, add, and change to the system, empowering user choice in 
                selecting optimum route plan and better earthing continuity for appropriate cabling management.
              </Typography>

              {/* Cablofil Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Cablofil Wire Mesh Cable Trays
                </Typography>
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                      Itonus Services is the certified installer and partner of Cablofil systems. Cablofil has 
                      been one of the preferred choices around the globe by organizations for its simple and 
                      durable solution of wire mesh cable tray.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                      Cablofil deploys a special method of T-Welding the lateral wires to the top wires that 
                      eliminates the risk of damaging cables upon laying and at the same time protects installers 
                      from sharp edges, a patented concept unique to Cablofil.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                      {['Manufacturing', 'Oil & Gas', 'Data Centres', 'Production Plants'].map((industry) => (
                        <Chip 
                          key={industry}
                          label={industry} 
                          color="primary" 
                          variant="outlined"
                          size="small"
                        />
                      ))}
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        height: 250,
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Image
                        src={images.cablofil}
                        alt="Cablofil Cable Tray System"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Grid>
                </Grid>

                {/* Cablofil Features */}
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    mt: 3,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Cablofil System Advantages
                  </Typography>
                  <Grid container spacing={2}>
                    {cablofilFeatures.map((feature, index) => (
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

              {/* Panduit Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Panduit Infrastructure Solutions
                </Typography>
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        height: 250,
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Image
                        src={images.panduit}
                        alt="Panduit Cable Management"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                      Panduit is a global leader in providing end-to-end network cabling and facility 
                      infrastructure, offering cable management and routing solution in the form of its 
                      unique FIBERRUNNER® and FIBER-DUCT™ Routing Systems.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                      These systems are designed to segregate, route and protect fiber optic and high 
                      performance copper cabling with improved reliability and increased safety.
                    </Typography>
                  </Grid>
                </Grid>

                {/* GRIDRUNNER Specific Section */}
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    GRIDRUNNER™ Underfloor System
                  </Typography>
                  <Grid container spacing={3} alignItems="center">
                    <Grid size={{ xs: 12, md: 8 }}>
                      <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                        A wire basket pathway underfloor system that is designed to route and manage network 
                        data and power cabling beneath the raised floor in a data center with improved 
                        reliability and increased safety.
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                   
                    </Grid>
                  </Grid>
                </Box>

                {/* Panduit Features */}
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    mt: 3,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Panduit System Features
                  </Typography>
                  <Grid container spacing={2}>
                    {panduitFeatures.map((feature, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Shield 
                            sx={{ 
                              color: 'secondary.main', 
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
                  System Benefits
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

              {/* Industries Served */}
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  mb: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}>
                  Industries Served
                </Typography>
                <Grid container spacing={1}>
                  {industries.map((industry, index) => (
                    <Grid size={{ xs: 6 }} key={index}>
                      <Chip
                        label={industry}
                        variant="outlined"
                        sx={{
                          width: '100%',
                          mb: 1,
                          fontWeight: 500,
                        }}
                      />
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

export default CableChannelPage;