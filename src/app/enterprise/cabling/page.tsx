// src/app/enterprise/structured-cabling/page.tsx
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
  Engineering,
  Architecture,
  SettingsEthernet,
  Storage,
  Security,
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';
import Image from 'next/image';
 
const images = {
  hero: '/images/enterprise/StructuredCablingSystems.jpeg',
  design: '/images/enterprise/design.jpeg',
  installation: '/images/enterprise/Professionalnetwork.jpeg',
  iim: '/images/enterprise/IIM.jpeg',
  standards: '/images/enterprise/ExpertStructuredCabling.png',
  infrastructure: '/images/enterprise/DataCenterSolutions.jpeg',
};
 
const StructuredCablingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 
  const services = [
    {
      icon: <Architecture sx={{ fontSize: 40 }} />,
      title: 'Design & Planning',
      description: 'Comprehensive structured cabling design adhering to TIA/EIA, EN and ISO/IEC standards for optimal performance and scalability.',
      image: images.design
    },
    {
      icon: <Engineering sx={{ fontSize: 40 }} />,
      title: 'Professional Installation',
      description: 'Expert installation of copper, fiber optics, and coax systems by certified technicians with over 20 years of experience.',
      image: images.installation
    },
 
    {
      icon: <Storage sx={{ fontSize: 40 }} />,
      title: 'Data Center Solutions',
      description: 'Specialized cabling solutions for data centers ensuring high availability, scalability, and performance for critical operations.',
      image: images.infrastructure
    }
  ];
 
 const partners = [
  {
    name: "Legrand",
    image: "/serviceslogo/StructuredCablingSystems/Legrand.png"
  },
  {
    name: "Panduit",
    image: "/serviceslogo/StructuredCablingSystems/panduit-logo.png"
  },
  {
    name: "Ampnet Connect",
    image: "/serviceslogo/StructuredCablingSystems/ampnetconnect.png"
  },
  {
    name: "Anixter",
    image: "/serviceslogo/StructuredCablingSystems/Anixter.png"
  },
  {
    name: "Belden",
    image: "/serviceslogo/StructuredCablingSystems/BeldenLogo.png"
  },
  {
    name: "Commscopesyst",
    image: "/serviceslogo/StructuredCablingSystems/Commscopesyst.png"
  },
  {
    name: "CorningIncorporated",
    image: "/serviceslogo/StructuredCablingSystems/CorningIncorporated.png"
  },
  {
    name: "NCS",
    image: "/serviceslogo/StructuredCablingSystems/NCS-logo.png"
  },
  {
    name: "Nexans",
    image: "/serviceslogo/StructuredCablingSystems/Nexans_logo.png"
  },
  {
    name: "ADCKrone",
    image: "/serviceslogo/StructuredCablingSystems/ADCKrone.png"
  },
 
];
  const features = [
     'Standardized Design',
    'TIA/EIA Standards Compliance',
    'ISO/IEC Certified',
    '20+ Years Expertise',
    'Real-time Infrastructure Monitoring',
    'End-to-end Project Management'
  ];
 
  const specialties = [
    'Commercial Offices',
    'Banking Institutions',
    'Hospitals & Healthcare',
    'Warehouses',
    'Data Centers',
    'School Campus',
    'Factory Plants',
    'Marine Ports'
  ];
 
  const iimSolutions = [
    'Systimax iPatch',
    'Nexans LANsense',
    'Panduit PanView System'
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
                Structured Cabling{' '}
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
             
              <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6, color: 'white' }}>
                Building the foundation for your IT infrastructure with over two decades of expertise
                in structured cabling solutions that drive business continuity and growth.
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
                  alt="Structured Cabling Systems"
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
                Expert Structured Cabling for Modern Infrastructure
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
                    src={images.standards}
                    alt="Industry Standards Compliance"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 , color:'white' }}>
                We adhere to the recognised TIA/EIA, EN and ISO/IEC design and installation standards for
                structured cabling systems. With over 2 decades of expertise in structured cabling, we are
                ready and competently certified to build the road for your IT vehicles.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 , color:'white' }}>
                Itonus Services builds on cabling expertise to provide working sites with reliable
                installations and ease of management to IT managers and network administrators. Hard physical
                network cables are the most fundamental element of forming pathways of communications.
                Structured cabling is easily characterised by design & building of roads. Running your
                network application vehicles on a badly built road disrupts your business routines. A good
                structured cabling design relieves the IT manager from management of hassle, effectively
                saving time and costs over a business lifecycle. Our future-proof approach not only lowers long-term maintenance costs but also simplifies management and troubleshooting through clear labeling and documentation.
              </Typography>
 
              {/* Areas of Specialization */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 ,color:'white' }}>
                  Areas of Specialization
                </Typography>
                <Grid container spacing={2}>
                  {specialties.map((specialty, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 , color:'white'}}>
                        <CheckCircle
                          sx={{
                            color: 'rgba(204, 93, 41, 1)',
                            mr: 1,
                            fontSize: 20
                          }}
                        />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {specialty}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
 
              {/* Features Grid */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 , color:'white'}}>
                  Key Features
                </Typography>
                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 , color:'white' }}>
                        <CheckCircle
                          sx={{
                            color: 'rgba(204, 93, 41, 1)',
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
 
              {/* Intelligent Infrastructure Management Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3,color:'white' }}>
                  Intelligent Infrastructure Management (IIM)
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
                    src={images.iim}
                    alt="Intelligent Infrastructure Management"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
 
                <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 , color:'white'}}>
                  Intelligent Infrastructure Management of the physical infrastructures real-time offers many
                  possibilities for organizations to employ a more effective pre-emptive approach to manage
                  their networks, terminal devices, security surveillance & control, environmental monitoring,
                  power, cooling, light and other facility control with high performance structured cabling systems.
                </Typography>
 
                <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 , color:'white'}}>
                  Benefits include early fault detections, central management, lowered manpower costs, simplified
                  controls for different facilities that drive daily operations, detecting security breaches and
                  reducing network downtime. In essence, IIM empowers you to manage change with minimal complications.
                </Typography>
 
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 , color:'white'}}>
                  Choose Your IIM Solutions
                </Typography>
                <Grid container spacing={2}>
                  {iimSolutions.map((solution, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                      <Chip
                        label={solution}
                        variant="outlined"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'white',
                          fontWeight: 600,
                          px: 2,
                          py: 3,
                          width: '100%',
                          fontSize: '1rem',
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
 
              {/* Vendor Partnerships Section */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 , color:'white'}}>
                  Our Certified Partners
                </Typography>
                </Box>
     <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {partners.map((partner, index) => (
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
    <Box key={index} sx={{ textDecoration: "none" }}>
      <img
        src={partner.image}
        alt={partner.name}
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
                  sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color:'white' }}
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
 
              {/* Certification Badge */}
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                }}
              >
                <Engineering sx={{ fontSize: 60, color: 'white', mb: 2 }} />
                <Typography variant="h6"  color='white' gutterBottom sx={{ fontWeight: 600 }} >
                  Certified Experts
                </Typography>
                <Typography variant="body2" color='white'>
                  Our team holds certifications from leading industry partners and follows international standards for all installations.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
 
export default StructuredCablingPage;