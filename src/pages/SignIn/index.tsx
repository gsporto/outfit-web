import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Paper, TextField } from '@material-ui/core';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { useStyles } from './styles';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { signIn } = useAuth();
  const classes = useStyles();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    await signIn({ email, password });
  });

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Logo />
            <form className={classes.form} onSubmit={onSubmit}>
              <TextField
                autoFocus
                fullWidth
                inputRef={register}
                name="email"
                label="E-mail"
                margin="normal"
                error={!!errors.email}
              />
              <TextField
                fullWidth
                inputRef={register}
                name="password"
                type="password"
                label="Senha"
                margin="normal"
                error={!!errors.password}
              />
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/#">Esqueci minha senha</Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
