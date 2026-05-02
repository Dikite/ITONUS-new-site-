// src/app/enterprise/sunpage-telecom/page.tsx
'use client'
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
  Avatar,
  alpha,
} from '@mui/material';
import {
  Phone,
  PhoneCallback,
  Computer,
  Savings,
  SupportAgent,
  CheckCircle,
} from '@mui/icons-material';
import Image from 'next/image';
 
const images = {
  hero: '/images/others/mobilecallback&sunpage/sunpagetelecomsolutions.png',
  content: '/images/others/mobilecallback&sunpage/RevolutionizeYourBusiness.png',
  international: '/images/others/mobilecallback&sunpage/internaationalcalls.png',
  callback: '/images/others/mobilecallback&sunpage/MobileCallback.png',
  voip: '/images/others/mobilecallback&sunpage/PCTOPHONE.png',
  mobile: '/images/others/mobilecallback&sunpage/LOCALMOBILECALLS.png',
};
 
const SunPageTelecomPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 
  const services = [
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'International Calls',
      description:
        'Dial international calls from fixed lines with one of the cheapest rates in town. Save up to 80% on your telecom bills.',
      image: images.international,
      rate: '$0.28/min in China',
    },
    {
      icon: <PhoneCallback sx={{ fontSize: 40 }} />,
      title: 'Mobile Callback',
      description:
        'Unique CallBack feature for SingTel, Starhub or M1 subscribers. Make calls overseas and local at lower rates up to 80% savings.',
      image: images.callback,
      rate: 'Up to 80% savings',
    },
    {
      icon: <Computer sx={{ fontSize: 40 }} />,
      title: 'PC-to-Phone VOIP',
      description:
        'Call from anywhere in the world to Singapore at only $0.03/minute without roaming fees. Perfect for travelers and remote workers.',
      image: images.voip,
      rate: '$0.03/min to Singapore',
    },
    {
      icon: <Savings sx={{ fontSize: 40 }} />,
      title: 'Local Mobile Calls',
      description:
        'Affordable local mobile calls at just $0.055/minute. Cost-effective solution for businesses with high local call volumes.',
      image: images.mobile,
      rate: '$0.055/min local',
    },
  ];
 
  const benefits = [
    'Up to 80% Savings',
    'Excellent Voice Quality',
    'Dedicated Account Manager',
    'Free Registration',
    'Free Subscription',
    '24/7 Support',
  ];
 
  const features = [
    'Cheapest International Rates',
    'Low Roaming Charges',
    'PC-to-Phone Calling',
    'Mobile Callback Feature',
    'Cost-Effective Local Calls',
    'Business-Grade Quality',
  ];
 
  const Partners = [
    { name: 'sunpage', image: '/serviceslogo/mobilecallback-sunpage&voipcalls/sunpage.png' },
  ];
 
  return (
    <Box sx={{ bgcolor: '#181a39', minHeight: '100vh', overflow: 'hidden' }}>
      {/* HERO */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.1
          )} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
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
                SunPage{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Telecom Solutions
                </Box>
              </Typography>
 
              <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.6, color: 'white' }}>
                Authorised Reseller of SunPage's telecommunication products and services. Designed
                specially for business users - delivering excellent voice quality and great cost
                savings up to 80% on your telecom bills.
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
                  alt="Telecom Cost Savings"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
 
      {/* MAIN CONTENT */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* LEFT COLUMN */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>
                Revolutionize Your Business Communications
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
                    src={images.content}
                    alt="International Call Solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                Itonus is an Authorised Reseller of SunPage's telecommunication products and
                services. Designed specially for business users - SunPage delivers excellent voice
                quality and great cost savings in telecoms bill up to 80% for your business.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                SunPage's services are most suitable for MNCs and SMEs. With dedicated Account
                Manager, you will be assured of support at all times. SunPage is one of the most
                preferred providers to connect with business associates and partners worldwide.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                Save on International roaming charges $0.28/minute in China compare to others at
                $1-$3, as well as cheap local mobile calls at $0.055/minute. With PC-to-Phone calls,
                you can call from anywhere in the world to Singapore at $0.03/minute only, without
                roaming fees.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, mb: 4, color: 'white' }}>
                For current subscribers to SingTel, Starhub or M1, the unique CallBack feature
                allows you to make calls overseas and local at a lower rate up to 80% savings. Your
                business will also enjoy free registration and free subscriptions.
              </Typography>
 
              {/* FEATURES */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {features.map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircle sx={{ color: 'rgba(204, 93, 41, 1)', mr: 1, fontSize: 20 }} />
                      <Typography variant="body1" sx={{ fontWeight: 500, color: 'white' }}>
                        {feature}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
 
            {/* BENEFITS */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                Key Benefits
              </Typography>
 
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.05
                  )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  {benefits.map((benefit, index) => (
                    <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index} sx={{ textAlign: 'center' }}>
                      <Chip
                        label={benefit}
                        sx={{
                          bgcolor: 'white',
                          color: 'primary.main',
                          fontWeight: 600,
                          width: '100%',
                          border: '1px solid',
                          borderColor: 'primary.main',
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Box>
 
            {/* PARTNERS SECTION */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                Our Partner
              </Typography>
 
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 4,
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                {Partners.map((Partner, index) => (
                  <Box
                    key={index}
                    sx={{
                      background: "#ffffffff",
                      p: 2,
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
                        width: "190px",
                        height: "80px",
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
          </Grid>
 
          {/* RIGHT COLUMN — SERVICES SIDEBAR */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box sx={{ position: isMobile ? 'static' : 'sticky', top: 100 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.05
                  )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                  mb: 4,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: 'white' }}
                >
                  Our Telecom Services
                </Typography>
 
                <Grid container spacing={3}>
                  {services.map((service, index) => (
                    <Grid size={{ xs: 12 }} key={index}>
                      <Card
                        elevation={2}
                        sx={{
                          borderRadius: 3,
                          overflow: 'hidden',
                          transition: 'all 0.3s',
                          '&:hover': {
                            transform: 'translateY(-6px)',
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
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 50, height: 50 }}>
                              {service.icon}
                            </Avatar>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {service.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                            {service.description}
                          </Typography>
                          <Chip 
                            label={service.rate} 
                            color="primary" 
                            variant="outlined" 
                            sx={{ fontWeight: 600 }}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
 
              {/* SUPPORT CARD */}
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.05
                  )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SupportAgent sx={{ fontSize: 40, color: 'rgba(204, 93, 41, 1)', mr: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                    Dedicated Support
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ lineHeight: 1.6, color: 'white' }}>
                  With dedicated Account Manager, you will be assured of support at all times.
                  SunPage is one of the most preferred providers to connect with business associates
                  and partners worldwide.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
 
export default SunPageTelecomPage;