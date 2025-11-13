"use client";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { Email, Phone, LinkedIn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white",
        color: "text.primary",
        pt: 8,
        pb: 4,
        mt: 12,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        {/* Columns Layout */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Company Info */}
          <Box sx={{ flex: "1 1 250px", minWidth: 250 }}>
            <Box sx={{ mb: 2 }}>
              <Image
                src="/logo-full.png"
                alt="ITONUS Tech Logo"
                width={180}
                height={80}
              />
            </Box>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "text.secondary",
                lineHeight: 1.6,
              }}
            >
              Empowering Your Business with Tailored IT Solutions and Innovative
              Technology Services.
            </Typography>

            <Stack spacing={1} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ fontSize: 18, color: "primary.main" }} />
                <Link
                  href="tel:+919884972753"
                  color="text.secondary"
                  underline="none"
                  sx={{
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  +91 9884972753
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ fontSize: 18, color: "primary.main" }} />
                <Link
                  href="mailto:contact@itonus.co.in?subject=Inquiry%20from%20Website&body=Hi%20ITONUS%20Team,%0D%0A%0D%0AI'd%20like%20to%20learn%20more%20about%20your%20services.%0D%0A%0D%0AThanks!"
                  color="text.secondary"
                  underline="none"
                  sx={{
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  contact@itonus.co.in
                </Link>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/itonus-tech/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  border: "1px solid #ddd",
                  color: "text.secondary",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                    borderColor: "primary.main",
                  },
                  transition: "all 0.3s ease",
                }}
                size="large"
              >
                <LinkedIn sx={{ fontSize: 20 }} />
              </IconButton>
            </Stack>
          </Box>

          {/* Enterprise IT Solutions */}
          <Box sx={{ flex: "1 1 200px", minWidth: 200 }}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight={600}
              sx={{
                color: "primary.main",
                mb: 3,
              }}
            >
              Enterprise IT Solutions
            </Typography>
            <Stack spacing={1}>
              {[
                {
                  name: "IT Consultancy & Project Management",
                  link: "/enterprise/itconsultancy",
                },
                { name: "Network Equipment", link: "/enterprise/networkequipment" },
                {
                  name: "Network Support & Maintenance",
                  link: "/enterprise/networksupport",
                },
                {
                  name: "Structured Cabling Systems",
                  link: "/enterprise/cabling",
                },
                {
                  name: "Telecommunication Systems",
                  link: "/enterprise/communicaton",
                },
                { name: "Wireless Deployment", link: "/enterprise/wirelessdeployment" },
              ].map(({ name, link }) => (
                <Link
                  key={name}
                  component={NextLink}
                  href={link}
                  underline="none"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "primary.main",
                      transform: "translateX(4px)",
                    },
                    display: "block",
                  }}
                >
                  {name}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* IT Infrastructure & Solutions */}
          <Box sx={{ flex: "1 1 200px", minWidth: 200 }}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight={600}
              sx={{
                color: "primary.main",
                mb: 3,
              }}
            >
              IT Infrastructure & Solutions
            </Typography>
            <Stack spacing={1}>
              {[
                {
                  name: "Data Centre Solutions",
                  link: "/itinfrasolution/datacentre",
                },
                {
                  name: "Power Protection & Racking Systems",
                  link: "/itinfrasolution/powerprotection",
                },
                {
                  name: "Cable Channel Systems",
                  link: "/itinfrasolution/cablechannel",
                },
                { name: "Desktops & IT Products", link: "/itinfrasolution/desktop&itproduct" },
              ].map(({ name, link }) => (
                <Link
                  key={name}
                  component={NextLink}
                  href={link}
                  underline="none"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "primary.main",
                      transform: "translateX(4px)",
                    },
                    display: "block",
                  }}
                >
                  {name}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Others */}
          <Box sx={{ flex: "1 1 200px", minWidth: 200 }}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight={600}
              sx={{
                color: "primary.main",
                mb: 3,
              }}
            >
              Others
            </Typography>
            <Stack spacing={1}>
              {[
             {
  name: "Audio Visual Systems & Conferencing",
  link: "/others/AudioVisualSystems",
},
{
  name: "Security Access Systems",
  link: "/others/securityaccesssystems",
},
{
  name: "Security Surveillance Systems (CCTV)",
  link: "/others/cctv",
},
{
  name: "Strategic IT Outsourcing",
  link: "/others/outsourcing",
},
{
  name: "Mobile Callback, Sunpage and VoIP Calls",
  link: "/others/mobilecallback-sunpage&voipcalls",
},
{
  name: "Telecommunication Peripherals",
  link: "/others/telecommunicationperipherals",
},

              ].map(({ name, link }) => (
                <Link
                  key={name}
                  component={NextLink}
                  href={link}
                  underline="none"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "primary.main",
                      transform: "translateX(4px)",
                    },
                    display: "block",
                  }}
                >
                  {name}
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider
          sx={{
            my: 6,
            borderColor: "#e0e0e0",
          }}
        />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © 2024 ITONUS Tech, Pvt Ltd. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
