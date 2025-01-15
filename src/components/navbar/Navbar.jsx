import React, { useState } from 'react'
import './Navbar.scss'
import { Button, Dialog, TextField, Typography, Box, InputAdornment } from '@mui/material'
import HeroSlider from '../hero/HeroSlider'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isRegister, setIsRegister] = useState(false);
  const [openAdminDialog, setOpenAdminDialog] = useState(false);
  const [enterUsername, setEnterUsername] = useState('');  // Admin username state
  const [username, setUsername] = useState('');  // Admin username state
  const [enterPassword, setEnterPassword] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Open and close the Admin Login dialog
  const handleOpenAdminDialog = () => setOpenAdminDialog(true);
  const handleCloseAdminDialog = () => setOpenAdminDialog(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleToggleForm = () => {
    setIsRegister(!isRegister)
  }

  const handleAdminLogin = () => {
    const Username = 'admin';
    const Password = 'admin123';

    if (username === Username && password === Password) {
      sessionStorage.setItem('isAdmin', 'true'); // Store the admin status
      navigate('/admin'); 
      handleCloseAdminDialog();
    } else {
      alert('Invalid credentials');
    }
  };
  const handleuserlogin = () => {
    const enterUsername = 'user';
    const enterPassword = 'user123';

    if (enterUsername === enterUsername && enterPassword === enterPassword) {
      sessionStorage.setItem('isLogged', 'true'); // Store the admin status
      navigate('/user'); 
      handleCloseAdminDialog();
    } else {
      alert('Invalid credentials');
    }
  };
 

  
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar">
          <h3>Girija❤️Kalyana</h3>
          <div className="menu">
            <ul>
            <li><a><Link className='link' to="/">Home</Link></a></li>
              <li><Link className='link' to="/service">Service</Link></li>
              <li><Link className='link' to="/about">About Us</Link></li>
              <li><Link className='link' to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className='link' to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <Typography>
            <Button
              variant="text"
              size='large'
              onClick={handleOpen}
              style={{ backgroundColor: 'black', marginRight: '25px',
                width:'150px',color:'aqua',fontWeight:700,height:'42px' }}
              className="btn"
            >
              Login
            </Button>
            <Button
              variant="contained"
              size='large'
              onClick={handleOpenAdminDialog} 
              style={{ backgroundColor: 'black', marginRight: '25px',
                width:'150px',color:'aqua',fontWeight:700,height:'42px' }}
              className="btn"
            >
              Admin
            </Button>
          </Typography>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            width: '350px',
            height: '480px',
            background: '#fff',
            backdropFilter: 'blur(10px)',
            // boxShadow: '0 4px 30px rgba(224, 219, 219, 0.93)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            textAlign: 'center',
            marginTop: '70px',
            
          },
        }}
      >
        <Box
          sx={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '10px',
          }}
        >
          <img
            src="src/assets/profile.jpg"
            alt="Profile"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>

        <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold', color: 'black' }}>
          {isRegister ? 'REGISTER FORM' : 'LOGIN FORM'}
        </Typography>

        <TextField
          placeholder="Enter username"
          variant="outlined"
          margin="dense"
          value={enterUsername}
          onChange={(e) => setEnterUsername(e.target.value)} 
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <PersonIcon /> */}
              </InputAdornment>
            ),
            style: { color: 'black', marginBottom: '18px',
              fontWeight:700,borderRadius:'13px' },
          }}
        />

        {isRegister && (
          <TextField
            placeholder="Enter email"
            variant="outlined"
            margin="dense"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <EmailIcon /> */}
                </InputAdornment>
              ),
              style: { color: 'black', 
                marginBottom: '15px',borderRadius:'13px',
              fontWeight:700 },
            }}
          />
        )}

        <TextField
          placeholder="Enter password"
          variant="outlined"
          type="password"
          margin="dense"
          value={enterPassword}
          onChange={(e) => setEnterPassword(e.target.value)} 
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <LockOpenIcon /> */}
              </InputAdornment>
            ),
            style: { color: 'black', 
              marginBottom: '15px',borderRadius:'13px',
              fontWeight:700 },
          }}
        />

        {!isRegister && <Typography sx={{ color: 'black' }}>Forget Password?</Typography>}

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1a4f72',
            marginTop: '20px',
            width: '60%',
           
            borderRadius: '10px',
            '&:hover': { backgroundColor: 'green' },
          }}
          onClick={handleuserlogin}
        >
        
          {isRegister ? 'REGISTER' : 'LOGIN'}
        </Button>

        <Typography
          onClick={handleToggleForm}
          sx={{
            color: 'black',
            marginTop: '15px',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        </Typography>
      </Dialog>

       {/* Admin Login Dialog */}
       <Dialog
        open={openAdminDialog}
        onClose={handleCloseAdminDialog}
        sx={{
          '& .MuiDialog-paper': {
            width: '350px',
            height: '430px',
            background: '#fff',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            textAlign: 'center',
            marginTop: '70px',
          },
        }}
      >
        <Box
          sx={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '10px',
          }}
        >
          <img
            src="src/assets/profile.jpg"
            alt="Admin Profile"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>

        <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold', color: 'black' }}>
          Admin Login
        </Typography>

        <TextField
          placeholder="Enter username"
          variant="outlined"
          margin="dense"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
            style: { color: 'black', marginBottom: '18px', fontWeight: 700, borderRadius: '13px' },
          }}
        />

        <TextField
          placeholder="Enter password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="dense"
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
            style: { color: 'black', marginBottom: '15px', borderRadius: '13px', fontWeight: 700 },
          }}
        />

        <Typography sx={{ color: 'black' }}>Forgot Password?</Typography>
  <Typography style={{display:'flex',alignItems:'center',justifySelf:'flex-end',gap:'6px'}}>
        <Button
          variant="outlined"
          onClick={handleAdminLogin}
          sx={{
            marginTop: '20px',
            color:'black',
            width: '150px',
            borderRadius: '10px',
            '&:hover': { backgroundColor: '#1a4f72', color:'#fff' },
          }}
        >
           LOGIN
        </Button>
        <Button
          variant="outlined"
          onClick={handleCloseAdminDialog}
          sx={{
            marginTop: '20px',
            color:'black',
            width: '150px',
            borderRadius: '10px',
            '&:hover': { backgroundColor: '#1a4f72', color:'#fff'  },
          }}
        >
          cancel
        </Button>
        </Typography>
      </Dialog>
    
    </div>

  )
}

export default Navbar
