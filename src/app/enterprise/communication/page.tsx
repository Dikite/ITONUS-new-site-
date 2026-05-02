// src/app/enterprise/unified-communications/page.tsx
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
  Phone,
  Videocam,
  Devices,
  Security,
  IntegrationInstructions,
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';
import Image from 'next/image';
 
const images = {
  hero: '/images/enterprise/unified-comms.png',
  pabx: '/images/enterprise/LegacyPABXSystems.jpeg',
  ipTelephony: '/images/enterprise/HybridIPBX.png',
  videoConferencing: '/images/enterprise/FullIP-Telephony.png',
  collaboration: '/images/enterprise/unified.jpeg',
  content: '/images/enterprise/ConvergedCommunications.jpeg',
};
 
const UnifiedCommunicationsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 
  const communicationSystems = [
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Legacy PABX Systems',
      description: 'Reliable traditional telecommunication systems with full installation and maintenance services for enterprises comfortable with standard features.',
      image: images.pabx
    },
    {
      icon: <IntegrationInstructions sx={{ fontSize: 40 }} />,
      title: 'Hybrid IPBX Systems',
      description: 'Bridge traditional and modern communication with hybrid systems that combine legacy reliability with IP capabilities.',
      image: images.ipTelephony
    },
    {
      icon: <Videocam sx={{ fontSize: 40 }} />,
      title: 'Full IP-Telephony',
      description: 'Complete IP-based telephony systems enabling advanced features and integration with unified communications platforms.',
      image: images.videoConferencing
    },
    {
      icon: <Devices sx={{ fontSize: 40 }} />,
      title: 'Unified Communications',
      description: 'Converged communications merging data, voice, video into one simplified integrated setup for dynamic collaboration.',
      image: images.collaboration
    }
  ];
 
  const benefits = [
    'Reduced Communication Costs',
    'Simplified Management',
    'Global Scalability',
    'Real-time Collaboration',
    'Enhanced Mobility',
    'Enhanced Capabilities',
    'Integration with Business Application',
    'Unified User Experience'
  ];
 
  const deploymentOptions = [
    'Desktop Applications',
    'Handheld Mobile Devices',
    'Multimedia Rooms',
    'Video Conferencing Systems',
    'Specialized Collaboration Tools',
    'Broadcast Systems'
  ];
 
   const vendors = [
  {
    name: "microsoft",
    image: "/serviceslogo/Telecommunicationsystems/microsoft.png"
  },
  {
    name: "huawei",
    image: "/serviceslogo/Telecommunicationsystems/huawei.png"
  },
  {
    name: "cisco",
    image: "/serviceslogo/Telecommunicationsystems/cisco.png"
  },
  {
    name: "hppoly",
    image: "/serviceslogo/Telecommunicationsystems/hppoly.png"
  },
  {
    name: "Jabra",
    image: "/serviceslogo/Telecommunicationsystems/Jabra.png"
  },
  {
    name: "Logitech",
    image: "/serviceslogo/Telecommunicationsystems/Logitech.png"
  },
  {
    name: "yealink",
    image: "/serviceslogo/Telecommunicationsystems/Yealink.png"
  },
 
];
 
 
  const features = [
    'Voice Communication',
    'Video Conferencing',
    'Instant Messaging',
 
    'Presence Management',
    'Mobile Integration',
    'Security Systems',
    'Broadcast Capabilities'
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
                   color:'#fff'
                }}
              >
                Unified Communications &{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Converged Solutions
                </Box>
              </Typography>
             
              <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6, color: 'white' }}>
                Transform your business communication with integrated solutions that merge voice, data,
                video, and multimedia into one powerful, cost-effective platform.
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
                  Unified Communications
                </Box>
             
                 <Image
                  src={images.hero}
                  alt="Unified Communications"
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
                Converged Communications for Modern Enterprises
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
                  Converged Communication Solutions
                  <Image
                    src={images.content}
                    alt="Converged Communication Solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 , color:'white' }}>
                For enterprises which are reliant and comfortable with standard telecommunication features,
                we provide the service and equipment to install and maintain reliable legacy PABX telephony
                systems, hybrid IPBX systems and full IP-Telephony systems.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 , color:'white' }}>
                The popularity of converged communications, merging networked data, voice, video and other
                applicable solutions into one simplified integrated setup, has led us to provide the service
                to deploy dynamic unified communication systems, deriving economical advantage by reducing
                long term communication costs both local and global.
              </Typography>
 
 
           
           
             
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, mb: 3 , color : 'white'}}>
                  Think about costs associated with multiple setups and separate management of your operations
                  for voice, data, video, multimedia, broadcast and security, recurring fees to ISPs & telcos,
                  especially as operations expand worldwide incorporating a growing number of remote and mobile users.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 , color: 'white' }}>
                  While some companies use some technology to enable collaboration, many still have limited capabilities.
                  With converged communications setup, you can deploy tools on desktops, handheld devices or in specialised
                  multimedia and videoconferencing rooms with real-time collaboration, reducing user setup time and increase
                  capabilities within your organisation even if you are physically far apart.
                </Typography>
             
              {/* Benefits Section */}
              <Box sx={{ mb: 6, mt:2 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 , color : 'white' }}>
                  Key Benefits
                </Typography>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {benefits.map((benefit, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 , color:'white'}}>
                        <CheckCircle
                          sx={{
                            color: 'rgba(204, 93, 41, 1)',
                            mr: 1,
                            fontSize: 20
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
 
 
              {/* Deployment Options */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 , color:'white'}}>
                  Deployment Options
                </Typography>
                <Grid container spacing={2}>
                  {deploymentOptions.map((option, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                      <Chip
                        label={option}
                        variant="outlined"
                        sx={{
                          width: '100%',
                          py: 2,
                          fontWeight: 500,
                          borderColor: 'primary.main',
                          color: 'white',
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
                            <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 , color:'white'}}>
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
                      {vendors.map((vendor, index) => (
 
                         <Box
                              key={index}
                              sx={{
                                background: "#fff",        // ← White background for EACH logo
                                p: 1,                       // Padding around each image
                                borderRadius: 1,            // Rounded corners
                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                        <a
                          key={index}
                       
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src={vendor.image}
                            alt={vendor.name}
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
                        </a>
                     
                    </Box>
                     ))}
      </Box>
            </Box>
          </Grid>
 
          {/* Right Column - Communication Systems */}
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
                  sx={{ fontWeight: 700, mb: 3, textAlign: 'center' , color:'white' }}
                >
                  Communication Systems
                </Typography>
               
                <Grid container spacing={3}>
                  {communicationSystems.map((system, index) => (
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
                            {system.title}
                          </Box>
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
 
              {/* Features Quick Overview */}
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 , color:'white'}}>
                  Integrated Features
                </Typography>
                <Grid container spacing={1}>
                  {features.map((feature, index) => (
                    <Grid size={12} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center' , color : 'white'}}>
                        <CheckCircle
                          sx={{
                            color: 'rgba(204, 93, 41, 1)',
                            mr: 1,
                            fontSize: 16
                          }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {feature}
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
 
export default UnifiedCommunicationsPage;