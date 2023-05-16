import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayoutHoc from '../Layouts/Default.Layout';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const HomePage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [allowExtraEmails, setAllowExtraEmails] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userDetails = {
      firstName,
      lastName,
      phoneNumber,
      email,
      allowExtraEmails,
    };

    
    // Save user details in local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to the second page
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      phoneNumber.trim() === '' ||
      email.trim() === ''
    ) {
      alert('Please fill in all the form fields before accessing the details page.');
    } else {
      navigate('/details');
    }
    
  };

  const handleNavigate = () => {
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      phoneNumber.trim() === '' ||
      email.trim() === ''
    ) {
      alert('Please fill in all the form fields before accessing the details page.');
    } else {
      navigate('/details');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Submit Your Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  id="phoneNumber"
                  autoComplete="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id ="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <FormControlLabel
                  control={<Checkbox checked={allowExtraEmails} color="primary" />}
                  label="I want to receive updates via email."
                  onChange={(e) => setAllowExtraEmails(e.target.checked)}
                  />
                  </Grid>
                  </Grid>
                  <Button 
                  type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Submit
                  </Button>
                  </Box>
                  <Button
                  onClick={handleNavigate}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 2 }}
                  >
                  Go to Details Page
                  </Button>
                  </Box>
                  </Container>
                  </ThemeProvider>
                  );
                  };
                  
                  export default DefaultLayoutHoc(HomePage);
