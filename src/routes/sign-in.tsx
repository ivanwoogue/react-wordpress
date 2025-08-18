import { createFileRoute } from '@tanstack/react-router'
import SignIn from '../sign-in/SignIn'

export const Route = createFileRoute('/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SignIn />
    </>
  )
}
