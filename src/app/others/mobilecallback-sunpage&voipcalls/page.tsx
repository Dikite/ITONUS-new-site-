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
      description: 'Dial international calls from fixed lines with one of the cheapest rates in town. Save up to 80% on your telecom bills.',
      image: images.international,
      rate: '$0.28/min in China'
    },
    {
      icon: <PhoneCallback sx={{ fontSize: 40 }} />,
      title: 'Mobile Callback',
      description: 'Unique CallBack feature for SingTel, Starhub or M1 subscribers. Make calls overseas and local at lower rates up to 80% savings.',
      image: images.callback,
      rate: 'Up to 80% savings'
    },
    {
      icon: <Computer sx={{ fontSize: 40 }} />,
      title: 'PC-to-Phone VOIP',
      description: 'Call from anywhere in the world to Singapore at only $0.03/minute without roaming fees. Perfect for travelers and remote workers.',
      image: images.voip,
      rate: '$0.03/min to Singapore'
    },
    {
      icon: <Savings sx={{ fontSize: 40 }} />,
      title: 'Local Mobile Calls',
      description: 'Affordable local mobile calls at just $0.055/minute. Cost-effective solution for businesses with high local call volumes.',
      image: images.mobile,
      rate: '$0.055/min local'
    }
  ];

  const benefits = [
    'Up to 80% Savings',
    'Excellent Voice Quality',
    'Dedicated Account Manager',
    'Free Registration',
    'Free Subscription',
    '24/7 Support'
  ];

  const features = [
    'Cheapest International Rates',
    'Low Roaming Charges',
    'PC-to-Phone Calling',
    'Mobile Callback Feature',
    'Cost-Effective Local Calls',
    'Business-Grade Quality'
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
             
              <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                Authorised Reseller of SunPage's telecommunication products and services. Designed specially
                for business users - delivering excellent voice quality and great cost savings up to 80% on your telecom bills.
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
                  Telecom Cost Savings
                </Box>
                {/* Uncomment when you have actual images */}
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
                  International Call Solutions
                  {/* Uncomment when you have actual images */}
                  <Image
                    src={images.content}
                    alt="International Call Solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                Itonus is an Authorised Reseller of SunPage's telecommunication products and services.
                Designed specially for business users - SunPage delivers excellent voice quality and
                great cost savings in telecoms bill up to 80% for your business.
              </Typography>
 
              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                SunPage's services are most suitable for MNCs and SMEs. With dedicated Account Manager,
                you will be assured of support at all times. SunPage is one of the most preferred
                providers to connect with business associates and partners worldwide.
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                Save on International roaming charges $0.28/minute in China compare to others at $1-$3,
                as well as cheap local mobile calls at $0.055/minute. With PC-to-Phone calls, you can
                call from anywhere in the world to Singapore at $0.03/minute only, without roaming fees.
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                For current subscribers to SingTel, Starhub or M1, the unique CallBack feature allows
                you to make calls overseas and local at a lower rate up to 80% savings. Your business
                will also enjoy free registration and free subscriptions.
              </Typography>
 
              {/* Features Grid */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {features.map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CheckCircle
                        sx={{
                          color: 'primary.main',
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
 
            {/* Benefits Section */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Key Benefits
              </Typography>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                }}
              >
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  {benefits.map((benefit, index) => (
                    <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index} sx={{ textAlign: 'center' }}>
                      <Chip
                        label={benefit}
                        variant="filled"
                        sx={{
                          bgcolor: 'white',
                          color: 'primary.main',
                          fontWeight: 600,
                          px: 2,
                          py: 3,
                          width: '100%',
                          maxWidth: 200,
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
              </Paper>
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
                  Our Telecom Services
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
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                            {service.description}
                          </Typography>
                          <Chip
                            label={service.rate}
                            size="small"
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

              {/* Support Card */}
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SupportAgent sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Dedicated Support
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
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
