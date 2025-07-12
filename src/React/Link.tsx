import React from "react";

const styles = {
  base: "border-b border-elevate outline-none text-primary hover:border-[var(--sec)] duration-100",
  focus: "ring-primary ring-offset-2 ring-offset-surface focus-visible:ring-1",
};

export const Link: React.FC<React.ComponentProps<"a">> = (props) => {
  const isInternal = props.href?.startsWith("/");
  const className = [styles.base, styles.focus, props.className]
    .filter(Boolean)
    .join(" ");

  if (!isInternal) {
    return (
      <a
        className={className}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {props.children}
      </a>
    );
  }

  return (
    <a href={props.href} rel="prefetch" className={className} {...props}>
      {props.children}
    </a>
  );
};
