import React from 'react';

const styles = {
  blockquote: 'border-l-4 border-elevate pl-4 italic font-medium my-2',
  h1: 'font-bold mt-0 mb-4 text-4xl leading-tight',
  h2: 'font-bold mt-10 text-2xl bg-[--background] leading-none sticky top-0 py-5 z-20',
  h3: 'font-bold mt-10 mb-4 text-xltext-[var(--white)]',
  h4: 'font-bold mt-10 mb-4 text-lg',
  h5: 'font-bold mt-8 mb-2 text-base',
  h6: 'font-bold mt-6 mb-2 text-base',
  hr: 'my-5 border-surface',
  list: 'mb-6 ml-8 list-disc list-outside',
  listItem: 'mb-4 leading-relaxed text-base marker:text-default',
  strong: 'font-semibold',
  text: 'mb-5 text-base leading-loose',
};

type HeadingProps = React.ComponentProps<'h1'>;

export const Blockquote: React.FC<React.ComponentProps<'blockquote'>> = (props) => (
  <blockquote {...props} className={[styles.blockquote, props.className].filter(Boolean).join(' ')}>{props.children}</blockquote>
);

export const H1: React.FC<HeadingProps> = (props) => <h1 {...props} className={[styles.h1, props.className].filter(Boolean).join(' ')}>{props.children}</h1>;
export const H2: React.FC<HeadingProps> = (props) => <h2 {...props} className={[styles.h2, props.className].filter(Boolean).join(' ')}>{props.children}</h2>;
export const H3: React.FC<HeadingProps> = (props) => <h3 {...props} className={[styles.h3, props.className].filter(Boolean).join(' ')}>{props.children}</h3>;
export const H4: React.FC<HeadingProps> = (props) => <h4 {...props} className={[styles.h4, props.className].filter(Boolean).join(' ')}>{props.children}</h4>;
export const H5: React.FC<HeadingProps> = (props) => <h5 {...props} className={[styles.h5, props.className].filter(Boolean).join(' ')}>{props.children}</h5>;
export const H6: React.FC<HeadingProps> = (props) => <h6 {...props} className={[styles.h6, props.className].filter(Boolean).join(' ')}>{props.children}</h6>;
export const HR: React.FC<React.ComponentProps<'hr'>> = (props) => <hr {...props} className={[styles.hr, props.className].filter(Boolean).join(' ')} />;
export const List: React.FC<React.ComponentProps<'ul'>> = (props) => <ul {...props} className={[styles.list, props.className].filter(Boolean).join(' ')} />;
export const ListItem: React.FC<React.ComponentProps<'li'>> = (props) => <li {...props} className={[styles.listItem, props.className].filter(Boolean).join(' ')} />;
export const Strong: React.FC<React.ComponentProps<'strong'>> = (props) => <strong {...props} className={[styles.strong, props.className].filter(Boolean).join(' ')} />;
export const Text: React.FC<React.ComponentProps<'p'>> = (props) => <p {...props} className={[styles.text, props.className].filter(Boolean).join(' ')} />;
