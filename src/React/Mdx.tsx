import { Code, Pre } from './Code'
import { Link } from './Link'
import { Blockquote, H1, H2, H3, H4, H5, H6, HR, List, ListItem, Strong, Text } from './Typography'

export const MDXComponents = {
  a: Link,
  code: Code,
  pre: Pre,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: HR,
  li: ListItem,
  p: Text,
  strong: Strong,
  ul: List,
}
