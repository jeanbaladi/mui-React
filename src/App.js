import React, {useState} from 'react'
import imgFondo from "./assets/images/background.png"
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@mui/material'
import { makeStyles  } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import { LockOutlined as LockOutLinedIcon } from '@mui/icons-material';



const theme = createTheme();


const useStyle = makeStyles(({
  root:{
    backgroundImage : `url(${imgFondo})`,
    width : `100vw`,
    height : `100vh` 
  },
  container : {
    opacity: `0.8`,
    height: `60%`,
    marginTop : theme.spacing(10),
    [theme.breakpoints.down(`400`)]: {
      marginTop: 0,
      width: `100%`,
      height : `100%`
    }
  },
  div : {
    marginTop : theme.spacing(8),
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`
  },
  avatar : {
    margin : theme.spacing(1),
  },
  form : {
    width: `100%`,
    marginTop : theme.spacing(1)
  },
  button : {
    margin: theme.spacing(10, 0, 2)
  }
}))

const App = () => {
  const [user, setUser] = useState({nickname: '', password: ''})

  const clases = useStyle()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    console.log(user);
  }

  return (
    <div>
      <Grid container component="main" className={clases.root} >
        <CssBaseline/>
        <Container component={Paper} elevation={5} maxWidth="xs" className={clases.container}>
          <div className={clases.div}>
            <Avatar className={clases.avatar}>
              <LockOutLinedIcon />
            </Avatar>
            <Typography component={`h1`} variant= 'h5'>Sign In</Typography>
            <form className={clases.form}>
              <TextField 
                fullWidth
                autoFocus
                autoComplete = 'return false'
                color = 'primary'
                margin= 'normal'
                variant = 'outlined'
                label = 'Nickname'
                name = 'nickname'
                value = {user.nickname}
                onChange = {handleChange}
              />
              <TextField 
                fullWidth
                autoFocus
                color = 'primary'
                margin= 'normal'
                variant = 'outlined'
                label = 'Password'
                type = 'password'
                name = 'password'
                value = {user.password}
                onChange = {handleChange}
              />
              <Button
                fullWidth
                variant = 'contained'
                color = 'secondary'
                className={clases.button}
                onClick = {() => {onSubmit()}}
              >Sign in
              </Button>
            </form>
          </div>
        </Container>
      </Grid>
    </div>
  )
}

export default App

