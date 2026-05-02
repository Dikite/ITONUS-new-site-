// src/app/enterprise/itconsultancy/page.tsx
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
  DesignServices,
  BusinessCenter,
  Architecture,
  IntegrationInstructions,
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';
import Image from 'next/image';
 
 
const images = {
  hero: '/images/enterprise/it.jpg',
  solutionDesign: '/images/enterprise/solutiondesign.jpg',
  projectManagement: '/images/enterprise/projectmanagement.jpg',
  infrastructure: '/images/enterprise/infrastructuredesign.jpg',
  vendor: '/images/enterprise/vendorpartnership.jpg',
  content: '/images/enterprise/itconsultancy.jpg',
};
 
const ItConsultancyPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 
  const services = [
    {
      icon: <DesignServices sx={{ fontSize: 40 }} />,
      title: 'Solution Design',
      description: 'Our consultants work with you to understand your business and recommend appropriate tools for effective communications and resource sharing.',
      image: images.solutionDesign
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 40 }} />,
      title: 'Project Management',
      description: 'Expert advice for new office build-ups or revamping existing Network Infrastructure to meet immediate and long-term IT needs.',
      image: images.projectManagement
    },
    {
      icon: <Architecture sx={{ fontSize: 40 }} />,
      title: 'Infrastructure Design',
      description: 'Assistance with IT facilities design, tender specifications, BOM generation, and project management from drawing board to implementation.',
      image: images.infrastructure
    },
    {
      icon: <IntegrationInstructions sx={{ fontSize: 40 }} />,
      title: 'Our Vendor',
      description: 'Access to multiple major vendors including Cisco, APC, Hitachi, IBM, HP, Microsoft, and Dell for cost-effective total solutions.',
      image: images.vendor
    }
  ];
 
 const vendors = [
  {
    name: "Cisco Systems",
    image: "/serviceslogo/ITconsultancylogo/Cisco_Systems.png"
  },
  {
    name: "Dell",
    image: "/serviceslogo/ITconsultancylogo/Dell_Logo.png"
  },
  {
    name: "Hitachi Data Systems",
    image: "/serviceslogo/ITconsultancylogo/Hitachilogo.png"
  },
  {
    name: "HP",
    image: "/serviceslogo/ITconsultancylogo/hplogo.png"
  },
  {
    name: "IBM",
    image: "/serviceslogo/ITconsultancylogo/IBM_logo.png"
  },
  {
    name: "APC",
    image: "/serviceslogo/ITconsultancylogo/LogoAPC.png"
  },
  {
    name: "Microsoft",
    image: "/serviceslogo/ITconsultancylogo/microsoft_logo.png"
  },
  {
    name: "Honeywell",
    image: "/serviceslogo/ITconsultancylogo/Honeywell.png"
  },
  {
    name: "CP Plus",
    image: "/serviceslogo/ITconsultancylogo/cpplus.png"
  },
  {
    name: "Logitech",
    image: "/serviceslogo/ITconsultancylogo/Logitech.png"
  },
  {
    name: "Yealink",
    image: "/serviceslogo/ITconsultancylogo/Yealink_logo.png"
  }
];
 
 
  const features = [
    'Legacy System Integration',
    'Modern Communication Tools',
    'Cost-Effective Solutions',
    'Long-term IT Planning',
    'Vendor Management',
    'Project Implementation'
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
                IT Consultancy &{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Project Management
                </Box>
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
                {/* Placeholder for image - replace with actual Image component when you have images */}
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
                  IT Consulting Experts
                </Box>
                {/* Uncomment when you have actual images */}
                 <Image
                  src={images.hero}
                  alt="IT Consulting Experts"
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
                Expert IT Consulting for Modern Businesses
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
                  Business IT Solutions
                  {/* Uncomment when you have actual images */}
                  <Image
                    src={images.content}
                    alt="Business IT Solutions"
                    fill
                 
                  />
                </Box>
              </Box>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3, color:'white' }}>
             Our experts help our customers innovate through technology, accelerate time-to-market, and improve user experience.
  Our consultants are
                familiar with legacy systems and modern collaborative communication tools. They'll work
                with you to understand your business and recommend appropriate tools to enable effective
                communications and sharing of resources throughout your organisation.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4, color:'white' }}>
                At different lifecycles of your business whether you are planning for a new office build-up
                or revamping an existing Network Infrastructure, Itonus Services provides expert advice to
                make the most of your available funding to meet immediate and long-term IT needs.
              </Typography>
 
              {/* Features Grid */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {features.map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 , color:'white'}}>
                      <CheckCircle
                        sx={{
                          color: 'rgba(204, 93, 41, 1)',
                          mr: 1,
                          fontSize: 20
                       
                        }}
                      />
                      <Typography variant="body1" sx={{ fontWeight: 500 }} >
                       
                        {feature}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
 
{/* Vendor Partnerships Section */}
<Box sx={{ mb: 6 }}>
  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 , color:'white'}}>
    Our Vendor Partnerships
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
        background: "#ffffffff",        // ← White background for EACH logo
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
                  sx={{ fontWeight: 700, mb: 3, textAlign: 'center',color:'white' }}
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
 
export default ItConsultancyPage;