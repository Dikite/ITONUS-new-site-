// src/app/enterprise/networksupport/page.tsx
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  SupportAgent,
  Security,
  Build,
  Schedule,
  ArrowForward,
  CheckCircle,
  Computer,
  NetworkCheck,
  PhoneInTalk,
  Groups,
} from '@mui/icons-material';
import Image from 'next/image';
 
const images = {
  hero: '/images/enterprise/networksupport&maintanence.png',
  directSupport: '/images/enterprise/Directtechnicalsupport.jpeg',
  warranties: '/images/enterprise/warranties.png',
  maintenance: '/images/enterprise/maintenance.jpg',
 
  content: '/images/enterprise/Comprehensivenetworksupportservices.png',
};
 
const NetworkSupportPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 
  const services = [
    {
      icon: <SupportAgent sx={{ fontSize: 40 }} />,
      title: 'Direct Technical Support',
      description: 'Remote and on-site support to troubleshoot, service and maintain your network infrastructure with immediate response.',
      image: images.directSupport
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Product Warranties',
      description: 'Direct local onsite product support warranties by manufacturers with our value-added service management.',
      image: images.warranties
    },
    {
      icon: <Build sx={{ fontSize: 40 }} />,
      title: 'Maintenance Contracts',
      description: 'Comprehensive and non-comprehensive maintenance contracts with 24x7 support and periodic health checks.',
      image: images.maintenance
    }
  ];
 
  const supportFeatures = [
    '24x7 Remote & On-site Support',
    '1-Hour Onsite Response Time',
    'Periodic Health Checks',
    'Manufacturer Warranties Management',
    'Reduced Downtime & Costs',
    'Comprehensive Maintenance'
  ];
 
  const benefits = [
    'Safeguard your investments',
    'Improved Performance',
    'Scalability',
    'Faster Issue Resolution',
    'Enhance Network reliability ',
    'No need for spare parts inventory',
    'Focus on core business activities',
    'Significantly reduce downtime'
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
                Network Support &{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Maintenance
                </Box>
              </Typography>
             
              <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6, color: 'white' }}>
                Comprehensive IT support solutions to safeguard your investments and ensure
                uninterrupted business operations with rapid response times and expert technical care.
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
                  Network Support Experts
                </Box>
              <Image
                  src={images.hero}
                  alt="Network Support Experts"
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
                Comprehensive Network Support Services
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
                  Professional IT Support
                <Image
                    src={images.content}
                    alt="Professional IT Support"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 ,color:'white'}}>
               Our Network Support and Maintenance Services ensure your network infrastructure operates efficiently, securely with minimal downtime. These services encompass regular monitoring, troubleshooting, and resolving network issues quickly to maintain seamless connectivity. Proactive maintenance tasks include software updates, hardware inspections, and performance optimization to prevent potential failures.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4, color:'white' }}>
                In order to safeguard your investments we provide both remote and on-site support to
                troubleshoot, service and maintenance in the event of network or equipment failure that
                may paralyse parts of your business functions.
              </Typography>
 
              {/* Benefits Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 , color:'white'}}>
                  Key Benefits
                </Typography>
                <Grid container spacing={2}>
                  {benefits.map((benefit, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color : 'white' }}>
                        <CheckCircle
                          sx={{
                            color: 'rgba(204, 93, 41, 1)',
                            mr: 2,
                            fontSize: 24
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
 
       
              {/* Additional Description */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 ,color:'white'}}>
                  Value-Added Support Management
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 2 , color:'white'}}>
                  You may also purchase from us direct local onsite product support warranties by
                  manufacturers and we value-add by assisting you to manage the support service.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 2 , color:'white' }}>
                  We also provide both comprehensive and non-comprehensive maintenance contracts to
                  support your facility investments with 24x7 Support, Periodic health checks and
                  Maintenance. You will be assured of service rendered within agreed response time.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 , color:'white'}}>
                  You save the hassle of maintaining a team to look after specific assets, record-keeping,
                  stock up on spares, or re-train staff with the technical know-how to maintain them,
                  and focus your team on more productive activities.
                </Typography>
              </Box>
 
              {/* Team Expertise */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 , color:'white'}}>
                  Rapid Response Team
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 , color:'white' }}>
                  We have a team of experienced Network, Telecommunication, Desktop Support and Maintenance
                  technicians & engineers to provide you with immediate response time down to 1 hour turnaround
                  on site request for site service or subscribe service agreements
                  with us for the maintenance of your systems, to significantly reduce your downtime, cost
                  and adverse impact on your business.
                </Typography>
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
                  sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color:'white' }}
                >
                  Our Support Services
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
 
export default NetworkSupportPage;