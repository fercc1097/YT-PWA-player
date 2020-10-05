import React, { useContext, useEffect, useState, useCallback } from 'react';
import { GlobalContext } from './GlobalState';

import { Button, Grid, Typography } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import bgImg from '../images/music-bg.svg';
import gIcon from '../images/google.svg';
import handcraftedText from '../images/craftedImg.png';

// import GoogleSignIn from "./GoogleSignIn";

const bgStyle = {
  background: `url(${bgImg}) no-repeat`,
  backgroundPositionX: '50%',
  width: '100vw',
  height: '46vh',
};

const LoginPage = ({ continueToHome }, props) => {
  const [{ loggedUser, user }, dispatch] = useContext(GlobalContext);

  const LOGIN_REQUEST = useCallback(
    (data) => {
      dispatch({ type: 'LOGIN_REQUEST', payload: data });
    },
    [dispatch]
  );

  // const showSignIn = () => {
  //   // if user has already closed the popup dont show it
  //   if (localStorage.getItem("signInClosed") !== "true") {
  //     return <GoogleSignIn />;
  //   }
  // };
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    LOGIN_REQUEST(form);
    continueToHome();
  };

  return (
    <Grid
      style={{ height: '80vh' }}
      container
      direction='column'
      justify='space-around'
      alignItems='center'
    >
      {/* {showSignIn()} */}

      <div style={bgStyle} />
      <h2>Inicia sesión</h2>
      <form className='login__container--form' onSubmit={handleSubmit}>
        <input
          name='email'
          className='input'
          type='text'
          placeholder='Correo'
          autoComplete='username'
          onChange={handleInput}
        />
        <input
          name='password'
          className='input'
          type='password'
          placeholder='Contraseña'
          autoComplete='current-password'
          onChange={handleInput}
        />
        <button className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' defaultValue='first_checkbox' />
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <Typography
        variant='h6'
        color='primary'
        align='center'
        style={{ padding: '10px' }}
      >
        Listen to unlimited songs without any ads for free only on Ylight Music
      </Typography>
      <img
        style={{
          width: '70vw',
          maxWidth: '350px',
        }}
        src={handcraftedText}
        alt='Handcrafted by Shivam'
      />
      <Button variant='outlined' color='primary' onClick={continueToHome}>
        Continue
        <NavigateNext />
      </Button>
    </Grid>
  );
};

export default LoginPage;
