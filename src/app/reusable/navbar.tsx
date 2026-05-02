

"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Paper,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import {
  ArrowDropDown,
  ArrowDropUp,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import Link from "next/link";

interface MenuOption {
  label: string;
  href?: string;
}

const dropdowns: { [key: string]: MenuOption[] } = {
  "ENTERPRISE IT SOLUTIONS": [
    { label: "IT Consultancy & Project Management", href: "/enterprise/itconsultancy" },
    { label: "Network Equipment", href: "/enterprise/networkequipment" },
    { label: "Network Support & Maintenance Services", href: "/enterprise/networksupport" },
    { label: "Structured Cabling Systems", href: "/enterprise/cabling" },
    { label: "Telecommunication Systems", href: "/enterprise/communication" }, // Fixed typo
    { label: "Wireless Deployment", href: "/enterprise/wirelessdeployment" },
  ],

  "IT INFRASTRUCTURE SOLUTIONS": [
    { label: "Cable Channel Systems", href: "/itinfrasolution/cablechannel" },
    { label: "Data Centre Solutions", href: "/itinfrasolution/datacentre" },
    { label: "Desktops & IT Products", href: "/itinfrasolution/desktop-itproduct" }, // Fixed URL special characters
    { label: "Power Protection, Enclosure & Racking Systems", href: "/itinfrasolution/powerprotection" },
  ],

  OTHERS: [
    { label: "Audio Visual Systems & Conferencing", href: "/others/AudioVisualSystems" }, // Fixed URL case
    { label: "Security Access Systems", href: "/others/securityaccesssystems" },
    { label: "Security Surveillance Systems (CCTV)", href: "/others/cctv" },
    { label: "Strategic IT Outsourcing", href: "/others/outsourcing" },
    { label: "Mobile Callback, Sunpage and VoIP Calls", href: "/others/mobilecallback-sunpage&voipcalls" }, // Fixed URL special characters
    { label: "Telecommunication Peripherals", href: "/others/telecommunicationperipherals" },
  ],
};

const menuButtonStyle = {
  color: "#fdf6ec",
  fontSize: "0.95rem",
  px: 1.8,
  whiteSpace: "nowrap",
  position: "relative",
  textTransform: "none",
  fontWeight: 500,
  minHeight: "70px",
  borderRadius: 0,

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "3px",
    backgroundColor: "#c89666",
    transition: "0.3s",
  },

  "&:hover::after": {
    width: "100%",
  },

  "&:hover": {
    backgroundColor: "rgba(200, 150, 102, 0.1)",
  },
};

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [shrink, setShrink] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const DesktopDropdown = ({ menu }: { menu: string }) => (
    <Box
      sx={{ position: "relative", display: "flex" }}
      onMouseEnter={() => setActiveMenu(menu)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <Button 
        endIcon={activeMenu === menu ? <ArrowDropUp /> : <ArrowDropDown />} 
        sx={menuButtonStyle}
      >
        {menu}
      </Button>

      <Paper
        elevation={5}
        sx={{
          display: activeMenu === menu ? "block" : "none",
          position: "absolute",
          top: "100%",
          left: 0,
          backgroundColor: "#2d545e",
          borderRadius: 1,
          minWidth: 280,
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          animation: "fadeIn 0.2s ease-out",
          zIndex: theme.zIndex.appBar + 1,
        }}
      >
        {dropdowns[menu].map((option) => (
          <Link key={option.label} href={option.href || "#"} passHref legacyBehavior>
            <MenuItem
              component="a"
              sx={{
                color: "#fdf6ec",
                fontSize: "0.9rem",
                py: 1.2,
                "&:hover": { 
                  backgroundColor: "#c89666", 
                  color: "#ffffff" 
                },
              }}
            >
              {option.label}
            </MenuItem>
          </Link>
        ))}
      </Paper>
    </Box>
  );

  const handleMobileDropdownToggle = (menu: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: "#2d545e", 
        color: "#fdf6ec", 
        minHeight: "70px",
        transition: "0.25s",
        boxShadow: shrink ? 4 : 1,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "70px !important",
            py: 0.5,
            px: { xs: 0, md: 2 },
          }}
          disableGutters
        >
          {/* LOGO AND BRAND NAME */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logoitonus.png"
              alt="ITONUS Logo"
              width={70}
              height={60}
              
              style={{
                objectFit: "contain",
                transition: "0.25s",
                transform: shrink ? "scale(0.85)" : "scale(1)",
              }}
              priority
            />
            <Box
              sx={{
               ml: 0.2,
  mt: 0.3,     // <-- MOVE TEXT DOWN
                fontSize: shrink ? "1.25rem" : "1.45rem",
                
                fontWeight: 700,
                color: "#fdf6ec",
                letterSpacing: "1px",
                fontFamily: "'Inter', sans-serif",
                transition: "0.25s",
                lineHeight: 1.2,
              }}
            >
              ITONUS
            </Box>
          </Link>

          {/* DESKTOP MENU */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
              whiteSpace: "nowrap",
              height: "70px",
            }}
          >
            <Button component={Link} href="/" sx={menuButtonStyle}>
              HOME
            </Button>
            <Button component={Link} href="/#about" sx={menuButtonStyle}>
              ABOUT US
            </Button>

            {Object.keys(dropdowns).map((menu) => (
              <DesktopDropdown key={menu} menu={menu} />
            ))}

            <Button component={Link} href="/#founders" sx={menuButtonStyle}>
              FOUNDERS
            </Button>
            <Button component={Link} href="/contact-us" sx={menuButtonStyle}>
              CONTACT US
            </Button>
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton 
            onClick={() => setMobileDrawerOpen(true)} 
            sx={{ 
              display: { xs: "flex", md: "none" }, 
              color: "#fdf6ec",
              ml: "auto"
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "#2d545e",
            paddingX: 0,
          },
        }}
      >
        {/* TOP CLOSE BAR */}
        <Box
          sx={{
            height: "60px",
            backgroundColor: "#24464e",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 2,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <IconButton 
            onClick={() => setMobileDrawerOpen(false)} 
            sx={{ color: "#fff" }}
          >
            <CloseIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>

        {/* MENU LIST */}
        <List sx={{ mt: 1, px: 1 }}>
          <ListItemButton 
            component={Link} 
            href="/" 
            onClick={() => setMobileDrawerOpen(false)}
            sx={{ color: "#fff", borderRadius: 1 }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton 
            component={Link} 
            href="/#about" 
            onClick={() => setMobileDrawerOpen(false)}
            sx={{ color: "#fff", borderRadius: 1 }}
          >
            <ListItemText primary="About Us" />
          </ListItemButton>

          {Object.keys(dropdowns).map((menu) => (
            <Box key={menu}>
              <ListItemButton
                sx={{ color: "#fff", borderRadius: 1 }}
                onClick={() => handleMobileDropdownToggle(menu)}
              >
                <ListItemText primary={menu} />
                {mobileDropdownOpen === menu ? <ArrowDropUp /> : <ArrowDropDown />}
              </ListItemButton>

              <Collapse in={mobileDropdownOpen === menu}>
                <List sx={{ py: 0 }}>
                  {dropdowns[menu].map((option) => (
                    <ListItemButton
                      key={option.label}
                      component={Link}
                      href={option.href || "#"}
                      onClick={() => setMobileDrawerOpen(false)}
                      sx={{ 
                        color: "#fff", 
                        pl: 4,
                        py: 1,
                        fontSize: "0.9rem",
                        "&:hover": {
                          backgroundColor: "rgba(200, 150, 102, 0.2)",
                        }
                      }}
                    >
                      <ListItemText primary={option.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}

          <ListItemButton 
            component={Link} 
            href="/#founders" 
            onClick={() => setMobileDrawerOpen(false)}
            sx={{ color: "#fff", borderRadius: 1 }}
          >
            <ListItemText primary="Founders" />
          </ListItemButton>

          <ListItemButton 
            component={Link} 
            href="/contact-us" 
            onClick={() => setMobileDrawerOpen(false)}
            sx={{ color: "#fff", borderRadius: 1 }}
          >
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;