// src/app/enterprise/strategic-it-outsourcing/page.tsx
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
  alpha,
} from '@mui/material';
import {
  DataUsage,
  Computer,
  Storage,
  Lan,
  Group,
  CheckCircle,
} from '@mui/icons-material';
import Image from 'next/image';
 
const images = {
  hero: '/images/others/itoutsourcing/itoutsourcing.jpg',
  content: '/images/others/itoutsourcing/itmanagement.jpg',
  datacenter: '/images/others/itoutsourcing/datacenter-management.jpg',
  desktop: '/images/others/itoutsourcing/deskhardware&application.png',
  network: '/images/others/itoutsourcing/networkmanagement.jpg',
  server: '/images/others/itoutsourcing/server&storage.jpg',
};
 
const StrategicItOutsourcingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 
  const services = [
    {
      icon: <DataUsage sx={{ fontSize: 40 }} />,
      title: 'Data Centre Management',
      description: 'Complete data centre management including monitoring, maintenance, and optimization.',
      image: images.datacenter
    },
    {
      icon: <Computer sx={{ fontSize: 40 }} />,
      title: 'Desktop Hardware & Applications Management',
      description: 'Comprehensive desktop support and application management for seamless end-user experience.',
      image: images.desktop
    },
    {
      icon: <Lan sx={{ fontSize: 40 }} />,
      title: 'Network Management',
      description: 'Network administration, monitoring, and optimization ensuring secure connectivity.',
      image: images.network
    },
    {
      icon: <Storage sx={{ fontSize: 40 }} />,
      title: 'Server & Storage Management',
      description: 'Server administration, storage optimization, and virtualization services.',
      image: images.server
    }
  ];
 
  const benefits = [
    'Cost Reduction',
    'Enhanced Productivity',
    'Service Level Assurance',
    'Focus on Core Competencies',
    'Improved IT Reliability',
    'Flexible Staffing Solutions'
  ];
 
  const features = [
    'Reduced Manpower Costs',
    'Enhanced Operational Productivity',
    'Service Level Agreements',
    'Temporary Staff Support',
    'Remote Office Support',
    '24/7 Data Centre Management'
  ];
 

 
  return (
    <Box sx={{ bgcolor: '#181a39', minHeight: '100vh', overflow: 'hidden' }}>
     
      {/* ✅ HERO SECTION */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          py: 12,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
           
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  lineHeight: 1.2,
                  mb: 3,
                  color:'white'
                }}
              >
                Strategic{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  IT Outsourcing
                </Box>
              </Typography>
 
              <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                Itonus provides strategic IT management that enhances productivity, service excellence,
                competitive advantage, and ROI.
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
                }}
              >
                <Image
                  src={images.hero}
                  alt="IT Outsourcing Solutions"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Grid>
 
          </Grid>
        </Container>
      </Box>
 
      {/* ✅ MAIN CONTENT */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
         
          {/* ✅ LEFT COLUMN */}
          <Grid size={{ xs: 12, lg: 8 }}>
           
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 ,  color :'white'}}>
              Optimize Your IT Operations with Strategic Outsourcing
            </Typography>
 
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
                alt="Strategic IT Management"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
 
            <Typography variant="h6" paragraph sx={{ lineHeight: 1.8 , color: 'white' }}>
              Running new technologies would sometimes mean additional IT headcounts.
               Collaborations with service providers like Itonus Services allow enterprises to keep costs low
               while maintaining enhanced operational productivity.</Typography>
               
 <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, color: 'white'  }}>
We provide the manpower of IT professionals and engineers when you need support staff at remote offices.
 We are able to provide a team of engineers to manage your data centre. Even when one of your Level 1 or
 2 support staff is temporarily unavailable, we can provide you with the temporary support you need to keep things going.</Typography>
<Typography variant="h6" paragraph sx={{ lineHeight: 1.8 , color: 'white' }}>
An objective outlook in IT outsourcing to Itonus allows us to consistently serve full IT support needs to your business, easing management, reducing manpower costs, improved IT services and reliability, and the ability to focus on core competencies.
            </Typography>
 
            {/* ✅ FEATURES */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle sx={{ color: 'rgba(204, 93, 41, 1)', mr: 1 }} />
                    <Typography sx={{ fontWeight: 500  , color : 'white'}}>{feature}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
 
            {/* ✅ BENEFITS */}
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 , color: 'white'}}>
              Key Benefits
            </Typography>
 
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                mb: 6,
              }}
            >
              <Grid container spacing={2} justifyContent="center">
                {benefits.map((benefit, index) => (
                  <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                    <Chip
                      label={benefit}
                      sx={{
                        bgcolor: 'white',
                        color: 'primary.main',
                        fontWeight: 600,
                        width: '130%',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
 
         
          </Grid>
 
          {/* ✅ RIGHT SIDEBAR */}
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
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' , color :'white' }}>
                  Areas of Manpower Support
                </Typography>
 
                <Grid container spacing={3}>
                  {services.map((service, index) => (
                    <Grid size={{ xs: 12 }} key={index}>
                      <Card
                        elevation={2}
                        sx={{
                          borderRadius: 3,
                          overflow: 'hidden',
                          transition: '0.3s',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 18px 35px rgba(0,0,0,0.15)',
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
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar
                              sx={{
                                bgcolor: 'primary.main',
                                mr: 2,
                                width: 50,
                                height: 50,
                              }}
                            >
                              {service.icon}
                            </Avatar>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {service.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {service.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
 
              {/* ✅ SERVICE LEVEL ASSURANCE */}
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Group sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600  , color : 'white'}}>
                    Service Level Assurance
                  </Typography>
                </Box>
                <Typography variant="body2" color="white" >
                  Itonus ensures measurable & reliable service delivery backed by structured SLAs.
                </Typography>
              </Paper>
 
            </Box>
          </Grid>
 
        </Grid>
      </Container>
    </Box>
  );
};
 
export default StrategicItOutsourcingPage;
 