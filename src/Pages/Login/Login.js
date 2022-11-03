// import {
//   Alert,
//   Button,
//   CircularProgress,
//   // Container,
//   Grid,
//   TextField,
//   Typography,
// } from '@mui/material';
// import React, { useState } from 'react';
// import Lottie from 'react-lottie';
// import { NavLink, useHistory, useLocation } from 'react-router-dom';
// import useAuth from '../../Components/Hooks/useAuth';
// import useMediaQuery from '../../Components/Hooks/useMediaQuery';
// import animationData from '../../lotties/login.json';

// const Login = () => {
//   const [loginData, setLoginData] = useState({});
//   const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

//   const location = useLocation();
//   const history = useHistory();
//   const isTablet = useMediaQuery('(min-width: 656px)');
//   const isDesktop = useMediaQuery('(min-width: 900px)');
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice',
//     },
//   };

//   const handleOnChange = (e) => {
//     const field = e.target.name;
//     const value = e.target.value;
//     const newLoginData = { ...loginData };
//     newLoginData[field] = value;
//     setLoginData(newLoginData);
//   };
//   const handleLoginSubmit = (e) => {
//     loginUser(loginData.email, loginData.password, location, history);
//     e.preventDefault();
//   };

//   const handleGoogleSignIn = () => {
//     signInWithGoogle(location, history);
//   };
//   return (
//     <Container>
//       <Grid container spacing={2}>
//         <Grid item sx={{ mt: 8 }} xs={12} md={6}>
//           <Typography variant="body1" gutterBottom style={{ color: '#000b19' }}>
//             Login
//           </Typography>
//           <form onSubmit={handleLoginSubmit}>
//             <TextField
//               sx={{ width: '75%', m: 1 }}
//               id="standard-basic"
//               label="Your Email"
//               name="email"
//               onChange={handleOnChange}
//               variant="standard"
//             />
//             <TextField
//               sx={{ width: '75%', m: 1 }}
//               id="standard-basic"
//               label="Your Password"
//               type="password"
//               name="password"
//               onChange={handleOnChange}
//               variant="standard"
//             />

//             <Button
//               style={{
//                 background: '#000b19',
//                 boxShadow: '1px 1px 5px  #b000b2,  -1px -1px 5px  #b000b2',
//               }}
//               sx={{ width: '75%', m: 1 }}
//               type="submit"
//               variant="contained"
//             >
//               Login
//             </Button>
//             <NavLink style={{ textDecoration: 'none' }} to="/register">
//               <Button style={{ color: '#000b19' }} variant="text">
//                 New User? Please Register
//               </Button>
//             </NavLink>
//             {isLoading && <CircularProgress />}
//             {user?.email && (
//               <Alert severity="success">Login successfully!</Alert>
//             )}
//             {authError && <Alert severity="error">{authError}</Alert>}
//           </form>
//           <p>------------------------</p>
//           <Button
//             style={{
//               background: '#000b19',
//               boxShadow: '1px 1px 5px  #b000b2,  -1px -1px 5px  #b000b2',
//             }}
//             onClick={handleGoogleSignIn}
//             variant="contained"
//           >
//             Google Sign In
//           </Button>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Lottie
//             options={defaultOptions}
//             isClickToPauseDisabled={true}
//             width={isDesktop ? 450 : isTablet ? 400 : 300}
//           />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Login;
