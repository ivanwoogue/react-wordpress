import { Button } from '@mui/material';
import { createFileRoute, redirect, useRouter } from '@tanstack/react-router';
import { SESSION_KEY_TOKEN } from '../constants';

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

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem(SESSION_KEY_TOKEN);
    router.navigate({ to: '/sign-in' });
  }

  return (
    <Button variant='contained' color='error' onClick={handleLogout}>
      Logout
    </Button>
  )
}
