import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { type ComponentPropsWithoutRef } from 'react';

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
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
  if (isButtonOrLink(props)) {
    const { children, textOnly, ...otherProps} = props;
    return (
      <Link className={`button ${textOnly ? 'button--text-only' : ''}`} {...otherProps}>
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps} = props;
  return (
    <button className={`button ${textOnly ? 'button--text-only' : ''}`} {...otherProps}>
      {children}
    </button>
  );
}