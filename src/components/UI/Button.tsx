import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { type ComponentPropsWithoutRef } from 'react';

type BaseProps = {
  children: ReactNode;
  textOnly: boolean;
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseProps & {
  to?: never;
};

type LinkType = typeof Link;
type LinkProps = ComponentPropsWithoutRef<LinkType> & BaseProps & {
  to?: string;
}

function isButtonOrLink(props: ButtonProps | LinkProps): props is LinkProps {
  return 'to' in props;
}

export default function Button(props: ButtonProps | LinkProps) {
  const { children, textOnly, ...otherProps} = props;
  if (isButtonOrLink(props)) {
    return (
      <Link className={`button ${textOnly ? 'button--text-only' : ''}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`button ${textOnly ? 'button--text-only' : ''}`} {...otherProps}>
      {children}
    </button>
  );
}