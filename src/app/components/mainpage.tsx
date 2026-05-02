"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

// Animations
const fadeInUp = `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;

const fadeIn = `@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}`;

export default function HeroSection() {
  return (
    <Box sx={rootStyles}>
      <style>{fadeInUp}</style>
      <style>{fadeIn}</style>

      <Container maxWidth="lg" sx={containerStyles}>
        <Box sx={textContentStyles}>
       <Typography variant="h2" component="h1" sx={headlineStyles}>
  Empowering Your Business with{" "}
  <Box component="span" sx={headlineSpanStyles}>
    Tailored IT Solutions
  </Box>
</Typography>

<Typography variant="h6" component="p" sx={subheadingStyles}>
  <strong>
    At <Box component="strong" sx={brandNameStyles}>ITONUS</Box>, we are committed to strengthening your business through
    customised IT solutions. Our services span across provisioning
    industry-leading integrated IT products and services, as well as
    specialised IT consultation designed to solve your unique challenges.
  </strong>
</Typography>

<Typography variant="body1" sx={quoteStyles}>
  <strong>
    Innovation and security form the core of ITONUS, enabling sustainable,
    scalable success across every level of operations.
  </strong>
</Typography>



          {/* 🔥 Contact Button Added */}
          <Button
            variant="contained"
            sx={contactButtonStyles}
            href="/contact-us"
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

/* ====================== STYLES ====================== */

const rootStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  minHeight: "70vh",
  color: "#fff5d7",
  pt: { xs: "120px", sm: "140px" },
  pb: 6,
  px: { xs: 2, sm: 3 },

  backgroundImage: "url('/images/it-hero.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
   background: "rgba(0, 0, 0, 0.6)",

    zIndex: 1,
  },
};

const containerStyles: SxProps<Theme> = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: { xs: "center", md: "left" },
  maxWidth: "800px",
};

const textContentStyles: SxProps<Theme> = {
  animation: "fadeInUp 0.8s ease-out",
};

const headlineStyles: SxProps<Theme> = {
  fontWeight: 800,
  mb: { xs: 2, md: 5 },
  lineHeight: { xs: 1.2, md: 1.1 },
  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
  color: "#fff5d7",
  textShadow: "0 4px 12px rgba(0,0,0,0.6)",
};

const headlineSpanStyles: SxProps<Theme> = {
  color: "#fff5d7",
  fontWeight: 900,
  display: "inline-block",
};

const subheadingStyles: SxProps<Theme> = {
  color: "#fff5d7",
  mb: { xs: 2, md: 3 },
  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.15rem" },
  fontWeight: 300,
  lineHeight: 1.7,
};

const brandNameStyles: SxProps<Theme> = {
  color: "#ff8400ff",
  fontWeight: 700,
};

const quoteStyles: SxProps<Theme> = {
  color: "#fff5d7",
  opacity: 0.95,
  fontStyle: "italic",
  fontSize: { xs: "0.9rem", md: "1rem" },
  borderLeft: { xs: "none", md: "3px solid #157bfd" },
  pl: { xs: 0, md: 2 },
  pt: { xs: 1, md: 0.5 },
  mt: 2,
  maxWidth: "90%",
};

const contactButtonStyles: SxProps<Theme> = {
  mt: 3,
  px: 4,
  py: 1.4,
  fontSize: "1rem",
  fontWeight: 700,
  textTransform: "none",
  borderRadius: "8px",
  backgroundColor: "#157bfd",
  color: "#fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  transition: "0.3s ease",

  "&:hover": {
    backgroundColor: "#0d5fcc",
    boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
  },
};
