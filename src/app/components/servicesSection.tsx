"use client";
import Link from 'next/link';
import React, { useState } from "react";

import {
  Box,
  Typography,
  Container,
  useTheme,
  alpha,
  Card,
  CardContent,
  Chip,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface ServiceItem {
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  features: string[];
  path: string; // Add this for direct navigation
}

interface ServiceGroup {
  title: string;
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'error';
  description: string;
  items: ServiceItem[];
}

const services: ServiceGroup[] = [
  {
    title: "Enterprise Network Solutions",
    icon: <SettingsIcon sx={{ fontSize: 32 }} />,
    color: "primary",
    description: "Complete network infrastructure solutions for modern enterprises",
    items: [
      { 
        name: "IT Consultancy & Project Management", 
        image: "/images/itconsultancy.png", 
        description: "Strategic IT planning and implementation",
        fullDescription: "Comprehensive IT consulting services to align technology with business goals. We provide end-to-end project management for seamless digital transformation.",
        features: ["Strategic Planning", "Technology Assessment", "Project Implementation", "Ongoing Support"],
        path: "/enterprise/itconsultancy"
      },
      { 
        name: "Network Equipment", 
        image: "/images/networkequipment.png", 
        description: "High-performance networking hardware",
        fullDescription: "Enterprise-grade networking equipment from leading manufacturers to ensure reliability and performance.",
        features: ["Switches & Routers", "Firewalls", "Wireless Controllers", "Network Management"],
        path: "/enterprise/networkequipment"
      },
       { 
    name: "Network Support & Maintenance", 
    image: "/images/networksupport&maintanence.png", 
    description: "End-to-end network management and maintenance",
    fullDescription: "Ensure your business network runs smoothly with proactive monitoring, troubleshooting, and preventive maintenance. Our expert team provides 24/7 support to minimize downtime and enhance performance.",
    features: ["24/7 Monitoring", "Network Troubleshooting", "Preventive Maintenance", "Performance Optimization"],
    path: "/enterprise/networksupport"
  },
      { 
        name: "Structured Cabling Systems", 
        image: "/images/StructuredCabling.png", 
        description: "Reliable infrastructure cabling",
        fullDescription: "Professional structured cabling solutions for optimal network performance and scalability.",
        features: ["Fiber Optics", "Copper Cabling", "Cable Management", "Testing & Certification"],
        path: "/enterprise/cabling"
      },
      { 
    name: "Telecommunication Systems", 
    image: "/images/telecommunication.jpeg", 
    description: "Unified communication and connectivity solutions",
    fullDescription: "Empower your business with advanced telecommunication infrastructure — from VoIP systems to unified communication platforms, enabling seamless voice and data connectivity across all departments.",
    features: ["VoIP Solutions", "PBX Systems", "Unified Communication Platforms", "Video Conferencing Integration"],
    path: "/enterprise/communicaton"
  },
      { 
        name: "Wireless Deployment", 
        image: "/images/wirelessdeployment.png", 
        description: "Seamless wireless connectivity",
        fullDescription: "Advanced wireless solutions for uninterrupted connectivity across your organization.",
        features: ["Wi-Fi 6/6E", "Mesh Networks", "Access Points", "Network Security"],
        path: "/enterprise/wirelessdeployment"
      },
    ],
  },
  {
    title: "IT Infrastructure Solutions",
    icon: <CloudIcon sx={{ fontSize: 32 }} />,
    color: "secondary",
    description: "Robust infrastructure for scalable business growth",
    items: [
      { 
        name: "Cable Channel Systems", 
        image: "/images/CableChannelSystems.png", 
        description: "Organized cable management",
        fullDescription: "Efficient cable management systems to maintain clean and accessible infrastructure.",
        features: ["Cable Trays", "Raceways", "Underfloor Systems", "Overhead Management"],
        path: "/itinfrasolution/cablechannel"
      },
      { 
        name: "Data Centre Solutions", 
        image: "/images/DataCentreSolutions.png", 
        description: "Scalable data center infrastructure",
        fullDescription: "Complete data center solutions including design, implementation, and management.",
        features: ["Server Racks", "Cooling Systems", "Power Distribution", "Monitoring"],
        path: "/enterprise/networkequipment"
      },
      { 
        name: "Power Protection & Racking", 
        image: "/images/PowerProtectionRacking.png", 
        description: "Uninterrupted power solutions",
        fullDescription: "Comprehensive power protection and racking solutions for critical infrastructure.",
        features: ["UPS Systems", "PDUs", "Server Racks", "Environmental Monitoring"],
        path: "itinfrasolution/powerprotection"
      },
      { 
        name: "Desktops & IT Products", 
        image: "/images/DesktopsITProducts.png", 
        description: "Enterprise-grade hardware",
        fullDescription: "High-quality desktops and IT products from trusted manufacturers.",
        features: ["Workstations", "Laptops", "Peripherals", "Enterprise Software"],
        path: "/itinfrasolution/desktop&itproduct"
      },
    ],
  },
  {
    title: "Security & Integration",
    icon: <SecurityIcon sx={{ fontSize: 32 }} />,
    color: "error",
    description: "Advanced security and integration solutions",
    items: [
      { 
        name: "Audio Visual & Conferencing", 
        image: "/images/AudioVisual&Conferencing.png", 
        description: "Immersive collaboration solutions",
        fullDescription: "State-of-the-art audio visual and conferencing solutions for modern workplaces.",
        features: ["Video Conferencing", "Digital Signage", "Audio Systems", "Control Systems"],
        path: "/others/AudioVisualSystems"
      },
      { 
        name: "Security Access Systems", 
        image: "/images/SecurityAccessSystems.png", 
        description: "Advanced access control",
        fullDescription: "Comprehensive access control systems to secure your premises and assets.",
        features: ["Card Readers", "Biometrics", "Visitor Management", "Integration"],
        path: "/others/securityaccesssystems"
        
      },
      { 
        name: "CCTV Surveillance Systems", 
        image: "/images/CCTVSurveillanceSystems.png", 
        description: "24/7 monitoring solutions",
        fullDescription: "Advanced CCTV surveillance systems with intelligent monitoring capabilities.",
        features: ["IP Cameras", "NVR Systems", "Video Analytics", "Remote Access"],
        path: "/others/cctv"
      },
      { 
        name: "Strategic IT Outsourcing", 
        image: "/images/StrategicITOutsourcing.png", 
        description: "Managed IT services",
        fullDescription: "Comprehensive IT outsourcing services to optimize your technology operations.",
        features: ["24/7 Support", "Proactive Monitoring", "Security Management", "Compliance"],
        path: "/others/outsourcing"
      },
{ 
  name: "Mobile Callback , SunPage & VOIP Calls", 
  image: "/images/SunPageVoipCalls.png", 
  description: "Affordable global call solutions",
  fullDescription: "Business-grade VOIP and callback services offering high-quality international and local calls with major cost savings.",
  features: ["International Calls", "Mobile Callback", "PC-to-Phone", "VOIP Services"],
  path: "/others/mobilecallback-sunpage&voipcalls"
},
{ 
  name: "Telecommunication Peripherals", 
  image: "/images/TelecommunicationPeripherals.png", 
  description: "Corporate communication devices",
  fullDescription: "Enterprise telecommunication equipment including phones, radios, and headsets for efficient business connectivity.",
  features: ["Fixed-Line Phones", "Radio Systems", "Two-Way Headsets", "Contact Centre Devices"],
  path: "/others/telecommunicationperipherals"
},



    ],
  },
];

export default function ServicesSection() {
  const theme = useTheme();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { 
        breakpoint: 1200, 
        settings: { 
          slidesToShow: 2, 
          dots: true,
          speed: 600 
        } 
      },
      { 
        breakpoint: 800, 
        settings: { 
          slidesToShow: 1, 
          dots: true,
          speed: 500 
        } 
      },
    ],
  };

  const getGradient = (color: 'primary' | 'secondary' | 'error') => {
    const gradients = {
      primary: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
      secondary: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)",
      error: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)",
    };
    return gradients[color];
  };

  const handleServiceClick = (service: ServiceItem) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -12,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `
          radial-gradient(circle at 15% 85%, rgba(0, 140, 255, 0.2), transparent 50%),
          radial-gradient(circle at 85% 15%, rgba(255, 75, 43, 0.15), transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.1), transparent 70%),
          linear-gradient(180deg, #0a0a0a 0%, #121212 50%, #0a0a0a 100%)
        `,
        position: "relative",
        overflow: "visible",
        color: "white",
        '&::before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,198,255,0.5), transparent)",
        }
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(0, 114, 255, 0.15), transparent 70%)",
          filter: "blur(60px)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: 250,
          height: 250,
          background: "radial-gradient(circle, rgba(255, 75, 43, 0.1), transparent 70%)",
          filter: "blur(50px)",
          animation: "float 8s ease-in-out infinite 1s",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Box textAlign="center" mb={8}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Chip
                label="Our Expertise"
                icon={<PlayArrowIcon />}
                sx={{
                  mb: 3,
                  px: 3,
                  py: 1.5,
                  background: alpha("#00C6FF", 0.1),
                  color: "#00C6FF",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  border: `1px solid ${alpha("#00C6FF", 0.3)}`,
                  backdropFilter: "blur(10px)",
                  '& .MuiChip-icon': {
                    color: "#00C6FF",
                  }
                }}
              />
            </motion.div>
            
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                mb: 3,
                fontSize: { xs: "2.25rem", md: "3.75rem" },
                background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 50%, #FFD200 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Comprehensive IT Solutions
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: alpha("#fff", 0.8),
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: 300,
              }}
            >
              Transform your business infrastructure with next-generation technology, 
              enterprise-grade security, and innovative solutions tailored for growth.
            </Typography>
          </Box>
        </motion.div>

        {/* Service Groups */}
        {services.map((group, groupIndex) => (
          <Box key={group.title} mb={10}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: groupIndex * 0.2, duration: 0.7 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Group Header */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 5, pl: { xs: 0, md: 2 } }}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 70,
                      height: 70,
                      borderRadius: 3,
                      background: getGradient(group.color),
                      color: "white",
                      mr: 3,
                      boxShadow: `0 8px 32px ${alpha("#00C6FF", 0.3)}`,
                      border: `1px solid ${alpha("#fff", 0.1)}`,
                    }}
                  >
                    {group.icon}
                  </Box>
                </motion.div>
                
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{
                      background: getGradient(group.color),
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1,
                      fontSize: { xs: "1.75rem", md: "2.25rem" },
                    }}
                  >
                    {group.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: alpha("#fff", 0.7),
                      mb: 2,
                      maxWidth: 500,
                    }}
                  >
                    {group.description}
                  </Typography>
                  <Box
                    sx={{
                      width: 80,
                      height: 4,
                      background: getGradient(group.color),
                      borderRadius: 2,
                      boxShadow: `0 0 20px ${alpha("#00C6FF", 0.5)}`,
                    }}
                  />
                </Box>
              </Box>

              {/* Slider */}
              <Box sx={{ position: "relative" }}>
                <Slider {...sliderSettings}
                
                >
                  
                  {group.items.map((item, i) => (
                    <Box key={i} px={2} py={2}>
                      <motion.div
                   
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Card
                          sx={{
                            borderRadius: 4,
                            overflow: "hidden",
                            background: alpha("#ffffff", 0.05),
                            backdropFilter: "blur(16px)",
                            border: `1px solid ${alpha("#ffffff", 0.15)}`,
                            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                            transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            cursor: "pointer",
                              mx: 3, // <— horizontal gap between slides
            my: 3, // <— vertical gap between slides
                            height: "100%",
                            "&:hover": {
                              boxShadow: `0 24px 60px ${alpha("#0072FF", 0.25)}`,
                              border: `1px solid ${alpha("#00C6FF", 0.3)}`,
                              "& .service-image": {
                                transform: "scale(1.08)",
                              },
                              "& .learn-more-btn": {
                                color: "#FFD200",
                                transform: "translateX(8px)",
                              },
                            },
                          }}
                          onClick={() => handleServiceClick(item)}
                        >
                          <Box sx={{ height: 240, position: "relative", overflow: "hidden" }}>
                            <Box
                              component="img"
                              className="service-image"
                              src={item.image}
                              alt={item.name}
                              sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                              }}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `linear-gradient(to bottom, transparent 40%, ${alpha("#000", 0.8)} 100%)`,
                              }}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                top: 16,
                                right: 16,
                                background: getGradient(group.color),
                                borderRadius: 2,
                                px: 1.5,
                                py: 0.5,
                              }}
                            >
                              <Typography variant="caption" fontWeight={700} sx={{ color: "white" }}>
                                {i + 1}
                              </Typography>
                            </Box>
                          </Box>
                          
                          <CardContent sx={{ p: 3.5 }}>
                            <Typography 
                              variant="h6" 
                              fontWeight={700} 
                              sx={{ 
                                color: "#fff", 
                                mb: 1.5,
                                fontSize: "1.1rem",
                                lineHeight: 1.3,
                              }}
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ 
                                color: alpha("#fff", 0.7), 
                                mb: 3, 
                                lineHeight: 1.6,
                                fontSize: "0.9rem",
                              }}
                            >
                              {item.description}
                            </Typography>
                            <Button
                              className="learn-more-btn"
                              variant="text"
                              endIcon={<ArrowForwardIcon />}
                              sx={{
                                color: "#00C6FF",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                px: 0,
                                "&:hover": {
                                  background: "transparent",
                                  transform: "translateX(5px)",
                                },
                                transition: "all 0.3s ease",
                              }}
                            >
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Box>
                  ))}
                </Slider>
              </Box>
            </motion.div>
          </Box>
        ))}
      </Container>


<AnimatePresence>
  {dialogOpen && selectedService && (
    <Dialog
      open={dialogOpen}
      onClose={handleCloseDialog}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: alpha("#0a0a0a", 0.95),
          backdropFilter: "blur(20px)",
          border: `1px solid ${alpha("#00C6FF", 0.2)}`,
          borderRadius: 4,
          overflow: "hidden",
          maxHeight: "90vh",
          height: "auto",
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        style={{ height: "100%" }}
      >
        <DialogTitle sx={{ p: 0, position: "relative" }}>
          <Box
            component="img"
            src={selectedService.image}
            alt={selectedService.name}
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
            }}
          />
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              background: alpha("#000", 0.6),
              backdropFilter: "blur(10px)",
              color: "white",
              "&:hover": {
                background: alpha("#000", 0.8),
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            p: 4,
            overflowY: "auto",
            maxHeight: "calc(90vh - 300px)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: "white", mb: 2 }}
          >
            {selectedService.name}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: alpha("#fff", 0.8), mb: 4, lineHeight: 1.7 }}
          >
            {selectedService.fullDescription}
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "white", mb: 2, fontWeight: 600 }}
          >
            Key Features:
          </Typography>

          {/* Features Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              mb: 5, // increased for clear separation
            }}
          >
            {selectedService.features.map((feature, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: getGradient("primary"),
                    mr: 2,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: alpha("#fff", 0.8) }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>

        {/* Button Section */}
<Box
  sx={{
    textAlign: "center",
    mt: 3, // extra top margin for consistent spacing
    mb: 1, // ensures some breathing room from dialog bottom
  }}
>
  <Link href={selectedService.path} style={{ textDecoration: 'none' }}> {/* Change item.path to selectedService.path */}
    <Button
      variant="contained" // Changed from "text" to "contained" to match your original dialog button
      endIcon={<ArrowForwardIcon />}
      sx={{
        background: getGradient("primary"), // Added background to match your original dialog button
        borderRadius: 3,
        px: 4,
        py: 1.5,
        fontWeight: 600,
        fontSize: "1rem",
        "&:hover": {
          background: getGradient("primary"),
          transform: "translateY(-2px)",
          boxShadow: `0 8px 32px ${alpha("#0072FF", 0.4)}`,
        },
        transition: "all 0.3s ease",
      }}
    >
      Read More
    </Button>
  </Link>
</Box>
        </DialogContent>
      </motion.div>
    </Dialog>
  )}
</AnimatePresence>


      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        .slick-dots li button:before {
          color: #00C6FF;
          opacity: 0.5;
          font-size: 10px;
        }
        
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #00C6FF;
        }
        
        .slick-dots {
          bottom: -50px;
        }
      `}</style>
    </Box>
  );
}