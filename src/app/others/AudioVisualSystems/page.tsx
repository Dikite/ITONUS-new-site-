// src/app/enterprise/audiovisual/page.tsx
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
  Mic,
  Speaker,
  Room,
  ArrowForward,
  CheckCircle,
  IntegrationInstructions,
  BroadcastOnHome,
} from '@mui/icons-material';
import Image from 'next/image';

const images = {
  hero: '/images/others/powerprotection/AudioVisualSystems&Conferencing.png',
  conferencing: '/images/others/powerprotection/ConferenceSystems.png',
  broadcast: '/images/others/powerprotection/BroadcastSystems.png',
  control: '/images/others/powerprotection/systemintegration.jpg',
  installation: '/images/others/powerprotection/multimedia.jpg',
  briefing: '/images/others/powerprotection/ProfessionalAVSolutionsforModernEnterprises.png',
};

const AudioVisualPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <Room sx={{ fontSize: 40 }} />,
      title: 'Conference Systems',
      description: 'Complete videoconferencing solutions with integration to lighting, network, and user-controlled equipment for seamless meetings.',
      image: images.conferencing
    },
    {
      icon: <BroadcastOnHome sx={{ fontSize: 40 }} />,
      title: 'Broadcast Systems',
      description: 'Professional broadcasting solutions for training, marketing, and sales presentations with high-quality audio and video.',
      image: images.broadcast
    },
    {
      icon: <IntegrationInstructions sx={{ fontSize: 40 }} />,
      title: 'System Integration',
      description: 'Integration of AV systems with IP, RF, and Wireless functions for remote environments and dynamic corporate needs.',
      image: images.control
    },
    {
      icon: <Videocam sx={{ fontSize: 40 }} />,
      title: 'Multimedia Facilities',
      description: 'Enhanced meeting rooms, briefing centers, and training facilities with state-of-the-art multimedia equipment.',
      image: images.installation
    }
  ];

  const Partners = [
    {
      name: "AMX",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/AMX.png"
    },
    {
      name: "Audio-Technica",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/audio-technica.png"
    },
  
    {
      name: "Epson",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/Epson.png"
    },

    {
      name: "Kramer",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/kramer.png"
    },
    {
      name: "Panasonic",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/Panasonic_logo.png"
    },
  
    {
      name: "Samsung",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/Samsung.png"
    },
    {
      name: "Sony",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/Sony.png"
    },
    {
      name: "SpeakerCraft",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/SpeakerCraft.png"
    },
   
       {
      name: "Lenovo",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/lenovo.png"
    },
       {
      name: "Asus",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/Asus.png"
    },
        {
      name: "Bose",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/Bose.png"
    },
        {
      name: "logitech",
      image: "/serviceslogo/AudioVisualSystems&Conferencing/logitech.png"
    },
  ];

  const features = [
    'Videoconferencing Solutions',
    'Broadcasting Systems',
    'Training Room Setup',
    'Briefing Center Design',
    'Sales Presentation Tools',
    'IP Integration',
    'RF & Wireless Functions',
    'Lighting Control Integration',
    'Network Integration',
    'User-Controlled Equipment'
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
                Audio Visual Systems{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  & Conferencing
                </Box>
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6, color: 'white' }}>
                Complete AV solutions and installation services to enhance your multimedia facilities 
                for meetings, briefing centers, training, broadcasting, and videoconferencing.
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
                  alt="Audio Visual Systems & Conferencing"
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
                Professional AV Solutions for Modern Enterprises
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
                    src={images.briefing}
                    alt="Professional AV Installation"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3, color: 'white' }}>
                Itonus Services provides Audio-Visual products as well as installation services to enhance 
                your multimedia facilities for meeting, briefing centres, training, broadcasting, 
                videoconferencing, marketing or sales presentations. Not only do we select and install 
                Audio-Visual products, we integrate them with other facilities such as lighting, network 
                and many other user-controlled equipment.
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4, color: 'white' }}>
                We have successfully managed enterprise AV integrated installations with the emergence of 
                new technologies and use in recent years. We combined both Network and AV expertise in 
                exploiting IP, RF and Wireless functions even between remote environment. This allows many 
                corporations to fully extend the capabilities of their equipment for dynamic needs.
              </Typography>

              {/* Features Grid */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                  Comprehensive AV Solutions
                </Typography>
                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CheckCircle 
                          sx={{ 
                            color: 'rgba(204, 93, 41, 1)', 
                            mr: 2, 
                            fontSize: 20 
                          }} 
                        />
                        <Typography variant="body1" sx={{ fontWeight: 500, color: 'white' }}>
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

      

              {/* Partnership Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                  Our Brand Partners
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
                  sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: 'white' }}
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

              {/* Technology Integration */}
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  mb: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, textAlign: 'center', color: 'white' }}>
                  Technology Integration
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  <IntegrationInstructions 
                    sx={{ 
                      fontSize: 48, 
                      color: 'rgba(204, 93, 41, 1)',
                      mb: 2 
                    }} 
                  />
                  <Typography variant="body2" sx={{ lineHeight: 1.6, color: 'white' }}>
                    Seamless integration of IP, RF, and Wireless technologies for remote environments 
                    and dynamic corporate communication needs.
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

export default AudioVisualPage;