import { Button, CssBaseline, Stack, styled, Typography } from '@mui/material';
import { createFileRoute, redirect, useRouter } from '@tanstack/react-router';
import React, { useEffect } from 'react';
import { UserData, useUserDetails } from '../api/auth/useUserDetails';
import Card from '../components/Card';
import { SESSION_KEY_TOKEN } from '../constants';
import AppTheme from '../shared-theme/AppTheme';
import { SitemarkIcon } from '../sign-in/components/CustomIcons';


export const Route = createFileRoute('/')({
  component: RouteComponent,
  beforeLoad: () => {
    const jwt = sessionStorage.getItem(SESSION_KEY_TOKEN);
    if (jwt) {
      return;
    }

    throw redirect({ to: '/sign-in' })
  }
})

function RouteComponent() {
  const router = useRouter();

  const [data, setData] = React.useState<UserData | null>(null);

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem(SESSION_KEY_TOKEN);
    router.navigate ({ to: '/sign-in' });
  }

  useEffect(() => {
    async function getUserDetails() {
      const response = await useUserDetails();
      console.log('User details:', response);
      if (response) {
        setData(response);
      }
    }
    getUserDetails();
  }, []);

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Container direction="column" justifyContent="space-between">
        <Card variant='outlined'>
          <SitemarkIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Logged in as {data?.user_login}
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{ width: '100%', fontSize: '18px' }}
          >
            ID: {data?.ID}
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{ width: '100%', fontSize: '18px' }}
          >
            Email: {data?.user_email}
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{ width: '100%', fontSize: '18px' }}
          >
            Registered date: {data?.user_registered}
          </Typography>
          <Button variant='contained' color='error' onClick={handleLogout}>
            Logout
          </Button>
        </Card>
      </Container>
    </AppTheme>
  )
}

const Container = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
})); 
