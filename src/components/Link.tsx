import { LinkProps, Link as MuiLink } from "@mui/material";
import { createLink, LinkComponent } from "@tanstack/react-router";
import React from "react";

interface MUILinkProps extends LinkProps {
  // Add any additional props you want to pass to the Link
}

const MUILinkComponent = React.forwardRef<HTMLAnchorElement, MUILinkProps>(
  (props, ref) => <MuiLink ref={ref} {...props} />,
)

const CreatedLink = createLink(MUILinkComponent)

const Link: LinkComponent<typeof MUILinkComponent> = (props) => {
  return <CreatedLink preload={'intent'} {...props} />
}

export default Link;  