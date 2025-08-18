import { createFileRoute, redirect } from '@tanstack/react-router';
import SignUp from '../sign-up/SignUp';
import { SESSION_KEY_TOKEN } from '../constants';

export const Route = createFileRoute('/sign-up')({
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
      <SignUp />
    </>
  )
}
