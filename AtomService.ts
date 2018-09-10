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
  // TODO source
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
export type Content =
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

type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type GetArrayElementType<T extends any[]> = T extends (infer U)[] ? U : never;
type ValidatorFunction = (value: any) => void;
type NamedValidatorFunction = (name: string) => ValidatorFunction;
type ContainerProperties<T> = Required<Omit<T, '_'>>;
interface ValidatorDefinition<T> {
  childValidators: T extends any[]
    ? (GetArrayElementType<T> extends Container
        ? ContainerValidatorDefinition<ContainerProperties<GetArrayElementType<T>>>
        : Record<
            keyof GetArrayElementType<T>,
            ArrayElementValidatorDefinition<GetArrayElementType<T>>
          >)
    : (T extends Container
        ? ContainerValidatorDefinition<ContainerProperties<T>>
        : ObjectValidatorDefinition<T>);
  type: 'container' | 'array' | 'object';
}
type ArrayElementValidatorDefinition<T> = T extends Container
  ? ContainerValidatorDefinition<ContainerProperties<T>>
  : NamedValidatorFunction[];
type ObjectValidatorDefinition<T> = Record<keyof T, NamedValidatorFunction[]>;
type ContainerValidatorDefinition<T> = {
  [P in keyof T]: T[P] extends string ? NamedValidatorFunction[] : ValidatorDefinition<T[P]>
};

/**
 * for template
 */
let feed; // tslint:disable-line

/**
 * Marshal the Atom Feed object to an Atom xml string.
 * @param {object} feedObject - Atom Feed object to be marshalled.
 * @return {string} Atom xml.
 */
export function marshal(feedObject: {}): string {
  isMarshalable(feedObject);
  feed = feedObject;
  return HtmlService.createTemplateFromFile('template')
    .evaluate()
    .getContent();
}

/**
 * Check if the argument is possible to marshal to an Atom xml.
 * If validation is failed then throw an error.
 * @param {object} feedObject - Atom Feed object to be marshalled.
 */
export function isMarshalable(feedObject: any): void {
  /**
   * Polyfill of Object.assign
   * @param target
   * @param varArgs
   */
  function assign(target: any, varArgs: any): any {
    // .length of function is 2
    const to = Object(target);
    for (let index = 1; index < arguments.length; index++) {
      const nextSource = arguments[index];
      if (nextSource != null) {
        // Skip over if undefined or null
        for (const nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  }
  /**
   * Polyfill of Object.entries
   * @param o
   */
  const entries = <T>(o: { [s: string]: T }): [string, T][] => {
    const ownProps = Object.keys(o);
    let i = ownProps.length;
    const resArray = new Array(i); // preallocate the Array
    while (i--) {
      resArray[i] = [ownProps[i], o[ownProps[i]]];
    }
    return resArray;
  };
  const hasNothing = (value: any): boolean => {
    return value === null || value === void 0;
  };
  const is = (type: string): NamedValidatorFunction => {
    return (name: string): ValidatorFunction => {
      return (value: any) => {
        if (hasNothing(value)) {
          return;
        }
        if (Object.prototype.toString.call(value) !== `[object ${type}]`) {
          const message = /[AIUEO]/.test(type[0])
            ? `${name} must be an ${type}.`
            : `${name} must be a ${type}.`;
          throw new Error(message);
        }
      };
    };
  };
  const validators = {
    array: is('Array'),
    date: is('Date'),
    object: is('Object'),
    string: is('String'),
  };
  const commonAttributesValidators: ObjectValidatorDefinition<CommonAttributes> = {
    'xml:base': [validators.string],
    'xml:lang': [validators.string],
  };
  const textConstructsValidators: ObjectValidatorDefinition<TextConstructs> = assign(
    commonAttributesValidators,
    {
      text: [validators.string],
    }
  );
  const personConstructsValidators: ObjectValidatorDefinition<PersonConstructs> = assign(
    commonAttributesValidators,
    {
      email: [validators.string],
      name: [validators.string],
      uri: [validators.string],
    }
  );
  const dateConstructsValidators: ObjectValidatorDefinition<DateConstructs> = assign(
    commonAttributesValidators,
    {
      dateTime: [validators.date],
    }
  );
  const authorDef: ValidatorDefinition<PersonConstructs> = {
    childValidators: personConstructsValidators,
    type: 'object',
  };
  const categoryDef: ValidatorDefinition<Category[]> = {
    childValidators: assign(commonAttributesValidators, {
      label: [validators.string],
      schema: [validators.string],
      term: [validators.string],
    }),
    type: 'array',
  };
  const contributorDef: ValidatorDefinition<PersonConstructs[]> = {
    childValidators: personConstructsValidators,
    type: 'array',
  };
  const idDef: ValidatorDefinition<Id> = {
    childValidators: assign(commonAttributesValidators, {
      uri: [validators.string],
    }),
    type: 'object',
  };
  const linkDef: ValidatorDefinition<Link[]> = {
    childValidators: assign(commonAttributesValidators, {
      href: [validators.string],
      hreflang: [validators.string],
      length: [validators.string],
      rel: [validators.string],
      title: [validators.string],
      type: [validators.string],
    }),
    type: 'array',
  };
  const publishedDef: ValidatorDefinition<DateConstructs> = {
    childValidators: dateConstructsValidators,
    type: 'object',
  };
  const rightsDef: ValidatorDefinition<TextConstructs> = {
    childValidators: textConstructsValidators,
    type: 'object',
  };
  const summaryDef: ValidatorDefinition<TextConstructs> = {
    childValidators: textConstructsValidators,
    type: 'object',
  };
  const titleDef: ValidatorDefinition<TextConstructs> = {
    childValidators: textConstructsValidators,
    type: 'object',
  };
  const updatedDef: ValidatorDefinition<DateConstructs> = {
    childValidators: dateConstructsValidators,
    type: 'object',
  };
  const atomDefs: ContainerValidatorDefinition<ContainerProperties<Feed>> = {
    author: authorDef,
    category: categoryDef,
    contributor: contributorDef,
    entry: {
      childValidators: {
        author: authorDef,
        category: categoryDef,
        content: {
          childValidators: assign(commonAttributesValidators, {
            element: [validators.string],
            src: [validators.string],
            text: [validators.string],
            type: [validators.string],
            xhtmlDiv: [validators.string],
          }),
          type: 'object',
        },
        contributor: contributorDef,
        id: idDef,
        link: linkDef,
        published: publishedDef,
        rights: rightsDef,
        summary: summaryDef,
        title: titleDef,
        updated: updatedDef,
        'xml:base': [validators.string], // assign break shape
        'xml:lang': [validators.string], // assign break shape
      },
      type: 'array',
    },
    generator: {
      childValidators: assign(commonAttributesValidators, {
        text: [validators.string],
        uri: [validators.string],
        version: [validators.string],
      }),
      type: 'object',
    },
    icon: {
      childValidators: assign(commonAttributesValidators, {
        uri: [validators.string],
      }),
      type: 'object',
    },
    id: idDef,
    link: linkDef,
    logo: {
      childValidators: assign(commonAttributesValidators, {
        uri: [validators.string],
      }),
      type: 'object',
    },
    published: publishedDef,
    rights: rightsDef,
    subtitle: {
      childValidators: textConstructsValidators,
      type: 'object',
    },
    summary: summaryDef,
    title: titleDef,
    updated: updatedDef,
    'xml:base': [validators.string], // assign break shape
    'xml:lang': [validators.string], // assign break shape
  };
  const validateProps = (defs: ObjectValidatorDefinition<any>, obj: any, objName: string): void => {
    validators.object(objName)(obj);
    entries(defs).forEach(([propName, propValidators]) => {
      propValidators.forEach(propValidator => {
        propValidator(`${objName}.${propName}`)(obj[propName]);
      });
    });
  };
  const validateContainer = (
    defs: ContainerValidatorDefinition<any>,
    container: any,
    containerName: string
  ): void => {
    validators.object(containerName)(container);
    entries(defs)
      .filter(([propName]) => !hasNothing(container[propName]))
      .forEach(([propName, def]) => {
        const prop = container[propName];
        if (def instanceof Array) {
          def.forEach(validate => {
            validate(`${containerName}.${propName}`)(prop);
          });
        } else {
          switch (def.type) {
            case 'object':
              validateProps(def.childValidators as ObjectValidatorDefinition<any>, prop, propName);
              break;
            case 'array':
              validators.array(propName)(prop);
              const array = prop as any[];
              const props = entries(def.childValidators as any).every(
                ([, childDef]) => childDef instanceof Array
              );
              array.forEach(item => {
                if (props) {
                  validateProps(
                    def.childValidators as ObjectValidatorDefinition<any>,
                    item,
                    propName
                  );
                } else {
                  validateContainer(
                    def.childValidators as ContainerValidatorDefinition<any>,
                    item,
                    propName
                  );
                }
              });
              break;
            default:
              throw new Error('Not implemented.');
          }
        }
      });
  };
  validateContainer(atomDefs, feedObject, 'feed');
}
