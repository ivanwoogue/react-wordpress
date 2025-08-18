import { createFileRoute, redirect } from '@tanstack/react-router';
import { SESSION_KEY_TOKEN } from '../constants';
import SignIn from '../sign-in/SignIn';

export const Route = createFileRoute('/sign-in')({
  component: RouteComponent,
  beforeLoad: () => {
    const jwt = sessionStorage.getItem(SESSION_KEY_TOKEN);
    if (jwt) {
      throw redirect({ to: '/' })
    }
  }
})

function RouteComponent() {
  return (
    <>
      <SignIn />
    </>
  )
}
