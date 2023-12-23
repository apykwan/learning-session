import { Link } from 'react-router-dom';

import { type ComponentPropsWithoutRef } from 'react';


type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  to?: never;
};

type LinkType = typeof Link;
type LinkProps = ComponentPropsWithoutRef<LinkType> & {
  to?: string;
}

function isButtonOrLink(props: ButtonProps | LinkProps): props is LinkProps {
  return 'to' in props;
}


export default function Button(props: ButtonProps | LinkProps) {
  if (isButtonOrLink(props)) return <Link className="button" {...props}></Link>;

  return <button className="button" {...props} ></button>
}