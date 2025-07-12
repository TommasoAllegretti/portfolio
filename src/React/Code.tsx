import React from 'react';

export const Pre = (props: React.HTMLAttributes<HTMLPreElement>) => {
  const child = React.Children.only(props.children) as React.ReactElement | undefined;
  if (child && typeof child === 'object' && 'props' in child && child.type === 'code') {
    return <Code {...(child.props as object)} />;
  }
  return <pre className='rounded border border-elevate p-5 mb-5' {...props} />;
};

export const Code: React.FC<React.ComponentProps<'code'>> = (props) => {
  const isLanguage = !!props['data-language'];

  if (!isLanguage) {
    return (
      <code {...props} className={['bg-element', props.className].filter(Boolean).join(' ')}>
        {props.children}
      </code>
    );
  }

  return (
    <div className="group relative">
      <button className="copy-code absolute right-2 top-2 z-10 hidden rounded-sm bg-elevate px-2 py-1 text-xs font-medium group-hover:block">
        Copy
      </button>
      <code
        {...props}
        className={["my-7 block overflow-x-scroll bg-neutral p-5 pr-6 text-sm font-medium leading-normal", props.className].filter(Boolean).join(' ')}
      >
        {props.children}
      </code>
    </div>
  );
};
