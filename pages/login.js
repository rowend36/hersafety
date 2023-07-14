import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Lock as LockOutlinedIcon } from "iconsax-react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Form, {
  FormErrors,
  FormField,
  FormSubmit,
  REQUIRED_EMAIL,
  REQUIRED_PASSWORD,
} from "@/components/Form";
import { signIn } from "@/logic/api";
import UserRedirect from "@/components/UserRedirect";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>CSMS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="CSMS Website" />
      </Head>
      <Header />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 16,
            marginBottom: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
            Sign in
          </Typography>
          <Box
            component={Form}
            validationRules={{
              email: REQUIRED_EMAIL,
              password: REQUIRED_PASSWORD,
            }}
            initialValue={{
              email: "",
              password: "",
            }}
            onSubmit={signIn}
            noValidate
            sx={{ mt: 1 }}
          >
            <FormErrors />
            <FormField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <FormField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <FormSubmit
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </FormSubmit>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <UserRedirect redirectOnUser />
      <Footer />
    </>
  );
}
