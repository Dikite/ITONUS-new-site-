"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Snackbar,
  Alert,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.fullName || !formData.email || !formData.message) {
    setSnackbar({
      open: true,
      message: "Please fill in all required fields.",
      severity: "error",
    });
    return;
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setSnackbar({
        open: true,
        message: data.message || "Email sent successfully!",
        severity: "success",
      });
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } else {
      setSnackbar({
        open: true,
        message: data.message || "Failed to send message.",
        severity: "error",
      });
    }
  } catch (err) {
    console.error(err);
    setSnackbar({
      open: true,
      message: "Something went wrong. Try again later.",
      severity: "error",
    });
  }
};


  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ pt: 8 }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 6,
            alignItems: "flex-start",
          }}
        >
          {/* Left side */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ flex: 1, maxWidth: { lg: "400px" } }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                background:
                  "linear-gradient(135deg, #0D1B2A 0%, #415A77 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Let's Start a Conversation
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Have a project in mind? Looking for a partnership? Or just want to
              say hello? We're here to help you achieve your goals.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#0D1B2A", mb: 1 }}
                >
                  📧 Email Us
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  contact@itonus.co.in
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#0D1B2A", mb: 1 }}
                >
                  📞 Call Us
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  +91 9884972753
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#0D1B2A", mb: 1 }}
                >
                  ⏰ Response Time
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Within 24 hours during business days
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right side */}
          <Paper
            elevation={8}
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{
              flex: 1,
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: "#0D1B2A",
                textAlign: "center",
              }}
            >
              Send Enquiry
            </Typography>

            <Typography
              sx={{ textAlign: "center", color: "text.secondary", mb: 4 }}
            >
              Fill out the form below and we'll get back to you soon
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                  mb: 3,
                }}
              >
                <TextField
                  label="Full Name *"
                  name="fullName"
                  fullWidth
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />

                <TextField
                  label="Email Address *"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                  mb: 3,
                }}
              >
                <TextField
                  label="Company"
                  name="company"
                  fullWidth
                  value={formData.company}
                  onChange={handleChange}
                />

                <TextField
                  label="Phone Number"
                  name="phone"
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={{ mb: 4 }}>
                <TextField
                  label="Your Message *"
                  name="message"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or enquiry..."
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.8,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, #0D1B2A 0%, #415A77 100%)",
                }}
              >
                Send Enquiry
              </Button>
            </Box>
          </Paper>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity as "success" | "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
