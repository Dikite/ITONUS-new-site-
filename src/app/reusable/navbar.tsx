"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Paper,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useTheme,
  useMediaQuery,
  ListItemButton,
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
  "Enterprise IT Solutions": [
    { label: "IT Consultancy & Project Management", href: "/enterprise/itconsultancy" },
    { label: "Network Equipment", href: "/enterprise/networkequipment" },
    { label: "Network Support & Maintenance Services", href: "/enterprise/networksupport" },
    { label: "Structured Cabling Systems", href: "/enterprise/cabling" },
    { label: "Telecommunication Systems", href: "/enterprise/communicaton" },
    { label: "Wireless Deployment", href: "/enterprise/wirelessdeployment" },
  ],
  "IT Infrastructure Solutions": [
    { label: "Cable Channel Systems", href: "/itinfrasolution/cablechannel" },
    { label: "Data Centre Solutions", href: "/itinfrasolution/datacentre" },
    { label: "Desktops & IT products", href: "/itinfrasolution/desktop&itproduct" },
    { label: "Power Protection, Enclosure & Racking Systems", href: "/itinfrasolution/powerprotection" },
  ],
  Others: [
    { label: "Audio Visual Systems & Conferencing", href: "/others/AudioVisualSystems" },
    { label: "Security Access Systems", href: "/others/securityaccess" },
    { label: "Security Surveillance Systems (CCTV)", href: "/others/cctv" },
    { label: "Strategic IT Outsourcing", href: "/others/outsourcing" },
    { label: "SunPage International Call, Mobile Callback and VOIP Calls", href: "/others/voip" },
    { label: "Telecommunication Peripherals", href: "/others/peripherals" },
  ],
};


const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => setMobileDrawerOpen((prev) => !prev);
  const handleDrawerClose = () => {
    setMobileDrawerOpen(false);
    setMobileDropdownOpen(null);
  };
  const handleMobileDropdownToggle = (menu: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu);
  };

  // Desktop Dropdown Component
const DesktopDropdown = ({ menu }: { menu: string }) => (
  <Box
    sx={{ position: "relative" }}
    onMouseEnter={() => setActiveMenu(menu)}
    onMouseLeave={() => setActiveMenu(null)}
  >
    <Button
      endIcon={activeMenu === menu ? <ArrowDropUp /> : <ArrowDropDown />}
      sx={{
        color: "#333333",
        "&:hover": {
          backgroundColor: "rgba(25,118,210,0.1)",
          color: "#1976d2",
        },
      }}
    >
      {menu}
    </Button>

    {/* Dropdown box */}
    <Paper
      elevation={4}
      sx={{
        display: activeMenu === menu ? "block" : "none",
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: "#fff",
        borderRadius: 2,
        border: "1px solid rgba(0,0,0,0.1)",
        minWidth: 260,
        zIndex: 1300,
        overflow: "hidden",
        transition: "all 0.2s ease-in-out",
      }}
    >
      {dropdowns[menu].map((option) => (
        <Link key={option.label} href={option.href || "#"} passHref legacyBehavior>
          <MenuItem
            component="a"
            onClick={() => setActiveMenu(null)}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(25,118,210,0.1)",
                color: "#1976d2",
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

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        color: "#333333",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
          {/* Logo / Brand */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
            onClick={handleDrawerClose}
          >
            <Image
              src="/logo-full.png"
              alt="ITONUS Logo"
              width={140}
              height={60}
              style={{
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              component={Link}
              href="/"
              sx={{
                color: "#333333",
                "&:hover": {
                  backgroundColor: "rgba(25,118,210,0.1)",
                  color: "#1976d2",
                },
              }}
            >
              Home
            </Button>

            <Button
              component={Link}
              href="/#about"
              sx={{
                color: "#333333",
                "&:hover": {
                  backgroundColor: "rgba(25,118,210,0.1)",
                  color: "#1976d2",
                },
              }}
            >
              About Us
            </Button>

            {/* Desktop Dropdowns */}
            {Object.keys(dropdowns).map((menu) => (
              <DesktopDropdown key={menu} menu={menu} />
            ))}

            <Button
              component={Link}
              href="/#founders"
              sx={{
                color: "#333333",
                "&:hover": {
                  backgroundColor: "rgba(25,118,210,0.1)",
                  color: "#1976d2",
                },
              }}
            >
              Founders
            </Button>

            <Button
              component={Link}
              href="/contact-us"
              sx={{
                color: "#333333",
                "&:hover": {
                  backgroundColor: "rgba(25,118,210,0.1)",
                  color: "#1976d2",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#333333",
            }}
            onClick={handleDrawerToggle}
          >
            {mobileDrawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "#ffffff",
          },
        }}
      >
          <Box sx={{ pt: "64px", px: 1 }}>  {/* pushes content below AppBar */}
        <List sx={{ px: 1, pt: 2 }}>
          <Link href="/" passHref legacyBehavior>
            <ListItemButton onClick={handleDrawerClose}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>

          <Link href="/#about" passHref legacyBehavior>
            <ListItemButton onClick={handleDrawerClose}>
              <ListItemText primary="About Us" />
            </ListItemButton>
          </Link>

          {/* Mobile Dropdowns */}
          {Object.keys(dropdowns).map((menu) => (
            <Box key={menu}>
              <ListItemButton onClick={() => handleMobileDropdownToggle(menu)}>
                <ListItemText primary={menu} />
                {mobileDropdownOpen === menu ? <ArrowDropUp /> : <ArrowDropDown />}
              </ListItemButton>
           <Collapse in={mobileDropdownOpen === menu} timeout="auto" unmountOnExit>
  <List component="div" disablePadding sx={{ pl: 2 }}>
    {dropdowns[menu].map((option) => (
      <Link key={option.label} href={option.href || "#"} passHref legacyBehavior>
        <ListItemButton
          component="a"
          onClick={handleDrawerClose}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(25,118,210,0.1)",
            },
          }}
        >
          <ListItemText primary={option.label} />
        </ListItemButton>
      </Link>
    ))}
  </List>
</Collapse>

            </Box>
          ))}

          <Link href="/#founders" passHref legacyBehavior>
            <ListItemButton onClick={handleDrawerClose}>
              <ListItemText primary="Founders" />
            </ListItemButton>
          </Link>

          <Link href="/contact-us" passHref legacyBehavior>
            <ListItemButton onClick={handleDrawerClose}>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </Link>
        </List>
          </Box>

      </Drawer>
    </AppBar>
  );
};

export default Navbar;
