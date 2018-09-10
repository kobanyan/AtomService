/**
 * Common Attributes
 * @see https://tools.ietf.org/html/rfc4287#section-2
 */
export interface CommonAttributes {
  'xml:base'?: string;
  'xml:lang'?: string;
}
/**
 * Text Constructs
 * @see https://tools.ietf.org/html/rfc4287#section-3.1
 */
export interface TextConstructs extends CommonAttributes {
  text?: string;
}
/**
 * Person Constructs
 * @see https://tools.ietf.org/html/rfc4287#section-3.2
 */
export interface PersonConstructs extends CommonAttributes {
  name?: string;
  uri?: string;
  email?: string;
}
/**
 * Date Constructs
 * @see https://tools.ietf.org/html/rfc4287#section-3.3
 */
export interface DateConstructs extends CommonAttributes {
  dateTime?: Date;
}
/**
 * Container Elements
 * @see https://tools.ietf.org/html/rfc4287#section-4.1
 */
export interface Container extends CommonAttributes {
  /** Marker for Differentiating Types */
  _: 'container';
}
/**
 * The "atom:entry" Element
 * @see https://tools.ietf.org/html/rfc4287#section-4.1.2
 */
export interface Entry extends Container {
  author?: PersonConstructs;
  category?: Category[];
  content?: Content;
  contributor?: PersonConstructs[];
  id?: Id;
  link?: Link[];
  published?: DateConstructs;
  rights?: TextConstructs;
  summary?: TextConstructs;
  title?: TextConstructs;
  updated?: DateConstructs;
}
export interface InlineTextContent extends CommonAttributes {
  type?: 'text' | 'html';
  text?: string;
}
export interface InlineXHTMLContent extends CommonAttributes {
  type?: 'xhtml';
  xhtmlDiv?: string;
}
export interface InlineOtherContent extends CommonAttributes {
  type?: string;
  element?: string;
}
export interface OutOfLineContent extends CommonAttributes {
  type?: string;
  src?: string;
}
/**
 * The "atom:content" Element
 * @see https://tools.ietf.org/html/rfc4287#section-4.1.3
 */
export declare type Content =
  | InlineTextContent
  | InlineXHTMLContent
  | InlineOtherContent
  | OutOfLineContent;
/**
 * The "atom:category" Element
 * @see https://tools.ietf.org/html/rfc4287#section-4.2.2
 */
export interface Category extends CommonAttributes {
  term?: string;
  schema?: string;
  label?: string;
}
/**
 * The "atom:generator" Element
 * @see https://tools.ietf.org/html/rfc4287#section-4.2.4
 */
export interface Generator extends CommonAttributes {
  uri?: string;
  version?: string;
  text?: string;
}
/**
 * The "atom:icon" Element
 * @see https://tools.ietf.org/html/rfc4287#section-4.2.5
 */
export interface Icon extends CommonAttributes {
  uri?: string;
}
/**
 * The "atom:id" Element
 * @see https://tools.ietf.org/html/rfc4287#section-4.2.6
 */
export interface Id extends CommonAttributes {
  uri?: string;
}
/**
 * The "atom:link" Element
 * @see https://tools.ietf.org/html/rfc4287#section-4.2.7
 */
export interface Link extends CommonAttributes {
  href?: string;
  rel?: string;
  type?: string;
  hreflang?: string;
  title?: string;
  length?: string;
}
/**
 * The "atom:logo" Element
 * @see https://tools.ietf.org/html/rfc4287#section-4.2.8
 */
export interface Logo extends CommonAttributes {
  uri?: string;
}
/**
 * The "atom:feed" Element
 * @see https://tools.ietf.org/html/rfc4287#section-4.1.1
 */
export interface Feed extends Container {
  /**
   * The "atom:author" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.1
   */
  author?: PersonConstructs;
  /**
   * The "atom:category" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.2
   */
  category?: Category[];
  /**
   * The "atom:contributor" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.3
   */
  contributor?: PersonConstructs[];
  /**
   * The "atom:entry" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.1.2
   */
  entry?: Entry[];
  /**
   * The "atom:generator" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.4
   */
  generator?: Generator;
  /**
   * The "atom:icon" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.5
   */
  icon?: Icon;
  /**
   * The "atom:id" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.6
   */
  id?: Id;
  /**
   * The "atom:link" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.7
   */
  link?: Link[];
  /**
   * The "atom:logo" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.8
   */
  logo?: Logo;
  /**
   * The "atom:published" Element
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.9
   */
  published?: DateConstructs;
  /**
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.10
   */
  rights?: TextConstructs;
  /**
   *
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.12
   */
  subtitle?: TextConstructs;
  /**
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.13
   */
  summary?: TextConstructs;
  /**
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.14
   */
  title?: TextConstructs;
  /**
   * @see https://tools.ietf.org/html/rfc4287#section-4.2.15
   */
  updated?: DateConstructs;
}
/**
 * Marshal the Atom Feed object to an Atom xml string.
 * @param {object} feedObject - Atom Feed object to be marshalled.
 * @return {string} Atom xml.
 */
export declare function marshal(feedObject: {}): string;
/**
 * Check if the argument is possible to marshal to an Atom xml.
 * If validation is failed then throw an error.
 * @param {object} feedObject - Atom Feed object to be marshalled.
 */
export declare function isMarshalable(feedObject: any): void;
