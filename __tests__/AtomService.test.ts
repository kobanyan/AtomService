import { isMarshalable } from '../AtomService';

describe('AtomService', () => {
  it('should not throw any error.', () => {
    const feed = {
      author: {
        email: 'author.email',
        name: 'author.name',
        uri: 'author.uri',
        'xml:base': 'author.xml:base',
        'xml:lang': 'author.xml:lang',
      },
      category: [
        {
          label: 'category1.label',
          schema: 'category1.schema',
          term: 'category1.term',
          'xml:base': 'category1.xml:base',
          'xml:lang': 'category1.xml:lang',
        },
        {
          label: 'category2.label',
          schema: 'category2.schema',
          term: 'category2.term',
          'xml:base': 'category2.xml:base',
          'xml:lang': 'category2.xml:lang',
        },
      ],
      contributor: [
        {
          email: 'contributor1.email',
          name: 'contributor1.name',
          uri: 'contributor1.uri',
          'xml:base': 'contributor1.xml:base',
          'xml:lang': 'contributor1.xml:lang',
        },
        {
          email: 'contributor2.email',
          name: 'contributor2.name',
          uri: 'contributor2.uri',
          'xml:base': 'contributor2.xml:base',
          'xml:lang': 'contributor2.xml:lang',
        },
      ],
      entry: [
        {
          author: {
            email: 'entry1.author.email',
            name: 'entry1.author.name',
            uri: 'entry1.author.uri',
            'xml:base': 'entry1.author.xml:base',
            'xml:lang': 'entry1.author.xml:lang',
          },
          category: [
            {
              label: 'entry1.category1.label',
              schema: 'entry1.category1.schema',
              term: 'entry1.category1.term',
              'xml:base': 'entry1.category1.xml:base',
              'xml:lang': 'entry1.category1.xml:lang',
            },
            {
              label: 'entry1.category2.label',
              schema: 'entry1.category2.schema',
              term: 'entry1.category2.term',
              'xml:base': 'entry1.category2.xml:base',
              'xml:lang': 'entry1.category2.xml:lang',
            },
          ],
          content: {
            src: 'entry1.content.src',
            type: 'entry1.content.type',
            'xml:base': 'entry1.content.xml:base',
            'xml:lang': 'entry1.content.xml:lang',
          },
          contributor: [
            {
              email: 'entry1.contributor1.email',
              name: 'entry1.contributor1.name',
              uri: 'entry1.contributor1.uri',
              'xml:base': 'entry1.contributor1.xml:base',
              'xml:lang': 'entry1.contributor1.xml:lang',
            },
            {
              email: 'entry1.contributor2.email',
              name: 'entry1.contributor2.name',
              uri: 'entry1.contributor2.uri',
              'xml:base': 'entry1.contributor2.xml:base',
              'xml:lang': 'entry1.contributor2.xml:lang',
            },
          ],
          id: {
            uri: 'entry1.id.uri',
            'xml:base': 'entry1.id.xml:base',
            'xml:lang': 'entry1.id.xml:lang',
          },
          link: [
            {
              href: 'entry1.link1.href',
              hreflang: 'entry1.link1.hreflang',
              length: 'entry1.link1.length',
              rel: 'entry1.link1.rel',
              title: 'entry1.link1.title',
              type: 'entry1.link1.type',
              'xml:base': 'entry1.link1.xml:base',
              'xml:lang': 'entry1.link1.xml:lang',
            },
            {
              href: 'entry1.link2.href',
              hreflang: 'entry1.link2.hreflang',
              length: 'entry1.link2.length',
              rel: 'entry1.link2.rel',
              title: 'entry1.link2.title',
              type: 'entry1.link2.type',
              'xml:base': 'entry1.link2.xml:base',
              'xml:lang': 'entry1.link2.xml:lang',
            },
          ],
          published: {
            dateTime: new Date(),
            'xml:base': 'entry1.published.xml:base',
            'xml:lang': 'entry1.published.xml:lang',
          },
          rights: {
            text: 'entry1.rights.text',
            'xml:base': 'entry1.rights.xml:base',
            'xml:lang': 'entry1.rights.xml:lang',
          },
          summary: {
            text: 'entry1.summary.text',
            'xml:base': 'entry1.summary.xml:base',
            'xml:lang': 'entry1.summary.xml:lang',
          },
          title: {
            text: 'entry1.title.text',
            'xml:base': 'entry1.title.xml:base',
            'xml:lang': 'entry1.title.xml:lang',
          },
          updated: {
            dateTime: new Date(),
            'xml:base': 'entry1.updated.xml:base',
            'xml:lang': 'entry1.updated.xml:lang',
          },
          'xml:base': 'entry1.xml:base',
          'xml:lang': 'entry1.xml:lang',
        },
        {
          author: {
            email: 'entry2.author.email',
            name: 'entry2.author.name',
            uri: 'entry2.author.uri',
            'xml:base': 'entry2.author.xml:base',
            'xml:lang': 'entry2.author.xml:lang',
          },
          category: [
            {
              label: 'entry2.category1.label',
              schema: 'entry2.category1.schema',
              term: 'entry2.category1.term',
              'xml:base': 'entry2.category1.xml:base',
              'xml:lang': 'entry2.category1.xml:lang',
            },
            {
              label: 'entry2.category2.label',
              schema: 'entry2.category2.schema',
              term: 'entry2.category2.term',
              'xml:base': 'entry2.category2.xml:base',
              'xml:lang': 'entry2.category2.xml:lang',
            },
          ],
          content: {
            src: 'entry2.content.src',
            type: 'entry2.content.type',
            'xml:base': 'entry2.content.xml:base',
            'xml:lang': 'entry2.content.xml:lang',
          },
          contributor: [
            {
              email: 'entry2.contributor1.email',
              name: 'entry2.contributor1.name',
              uri: 'entry2.contributor1.uri',
              'xml:base': 'entry2.contributor1.xml:base',
              'xml:lang': 'entry2.contributor1.xml:lang',
            },
            {
              email: 'entry2.contributor2.email',
              name: 'entry2.contributor2.name',
              uri: 'entry2.contributor2.uri',
              'xml:base': 'entry2.contributor2.xml:base',
              'xml:lang': 'entry2.contributor2.xml:lang',
            },
          ],
          id: {
            uri: 'entry2.id.uri',
            'xml:base': 'entry2.id.xml:base',
            'xml:lang': 'entry2.id.xml:lang',
          },
          link: [
            {
              href: 'entry2.link1.href',
              hreflang: 'entry2.link1.hreflang',
              length: 'entry2.link1.length',
              rel: 'entry2.link1.rel',
              title: 'entry2.link1.title',
              type: 'entry2.link1.type',
              'xml:base': 'entry2.link1.xml:base',
              'xml:lang': 'entry2.link1.xml:lang',
            },
            {
              href: 'entry2.link2.href',
              hreflang: 'entry2.link2.hreflang',
              length: 'entry2.link2.length',
              rel: 'entry2.link2.rel',
              title: 'entry2.link2.title',
              type: 'entry2.link2.type',
              'xml:base': 'entry2.link2.xml:base',
              'xml:lang': 'entry2.link2.xml:lang',
            },
          ],
          published: {
            dateTime: new Date(),
            'xml:base': 'entry2.published.xml:base',
            'xml:lang': 'entry2.published.xml:lang',
          },
          rights: {
            text: 'entry2.rights.text',
            'xml:base': 'entry2.rights.xml:base',
            'xml:lang': 'entry2.rights.xml:lang',
          },
          summary: {
            text: 'entry2.summary.text',
            'xml:base': 'entry2.summary.xml:base',
            'xml:lang': 'entry2.summary.xml:lang',
          },
          title: {
            text: 'entry2.title.text',
            'xml:base': 'entry2.title.xml:base',
            'xml:lang': 'entry2.title.xml:lang',
          },
          updated: {
            dateTime: new Date(),
            'xml:base': 'entry2.updated.xml:base',
            'xml:lang': 'entry2.updated.xml:lang',
          },
          'xml:base': 'entry2.xml:base',
          'xml:lang': 'entry2.xml:lang',
        },
      ],
      generator: {
        text: 'generator.text',
        uri: 'generator.uri',
        version: 'generator.version',
        'xml:base': 'generator.xml:base',
        'xml:lang': 'generator.xml:lang',
      },
      icon: {
        uri: 'icon.uri',
        'xml:base': 'icon.xml:base',
        'xml:lang': 'icon.xml:lang',
      },
      id: {
        uri: 'id.uri',
        'xml:base': 'id.xml:base',
        'xml:lang': 'id.xml:lang',
      },
      link: [
        {
          href: 'link1.href',
          hreflang: 'link1.hreflang',
          length: 'link1.length',
          rel: 'link1.rel',
          title: 'link1.title',
          type: 'link1.type',
          'xml:base': 'link1.xml:base',
          'xml:lang': 'link1.xml:lang',
        },
        {
          href: 'link2.href',
          hreflang: 'link2.hreflang',
          length: 'link2.length',
          rel: 'link2.rel',
          title: 'link2.title',
          type: 'link2.type',
          'xml:base': 'link2.xml:base',
          'xml:lang': 'link2.xml:lang',
        },
      ],
      logo: {
        uri: 'logo.uri',
        'xml:base': 'logo.xml:base',
        'xml:lang': 'logo.xml:lang',
      },
      published: {
        dateTime: new Date(),
        'xml:base': 'published.xml:base',
        'xml:lang': 'published.xml:lang',
      },
      rights: {
        text: 'rights.text',
        'xml:base': 'rights.xml:base',
        'xml:lang': 'rights.xml:lang',
      },
      subtitle: {
        text: 'subtitle.text',
        'xml:base': 'subtitle.xml:base',
        'xml:lang': 'subtitle.xml:lang',
      },
      summary: {
        text: 'summary.text',
        'xml:base': 'summary.xml:base',
        'xml:lang': 'summary.xml:lang',
      },
      title: {
        text: 'title.text',
        'xml:base': 'title.xml:base',
        'xml:lang': 'title.xml:lang',
      },
      updated: {
        dateTime: new Date(),
        'xml:base': 'updated.xml:base',
        'xml:lang': 'updated.xml:lang',
      },
      'xml:base': 'feed.xml:base',
      'xml:lang': 'feed.xml:lang',
    };
    isMarshalable(feed);
  });
  it('should throw error when feed is not object', () => {
    expect(() => isMarshalable([])).toThrowErrorMatchingInlineSnapshot(`"feed must be an Object."`);
  });
  it('should throw error when feed.xml:base is not String.', () => {
    const feed = {
      'xml:base': 1,
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"feed.xml:base must be a String."`
    );
  });
  it('should throw error when feed.xml:lang is not String.', () => {
    const feed = {
      'xml:lang': 1,
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"feed.xml:lang must be a String."`
    );
  });
  it('should throw error when author is not object', () => {
    const feed = {
      author: 'author',
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"author must be an Object."`
    );
  });
  it('should throw error when author.xml:base is not String.', () => {
    const feed = {
      author: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"author.xml:base must be a String."`
    );
  });
  it('should throw error when author.xml:lang is not String.', () => {
    const feed = {
      author: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"author.xml:lang must be a String."`
    );
  });
  it('should throw error when author.name is not String.', () => {
    const feed = {
      author: {
        name: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"author.name must be a String."`
    );
  });
  it('should throw error when author.uri is not String.', () => {
    const feed = {
      author: {
        name: 'author name',
        uri: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"author.uri must be a String."`
    );
  });
  it('should throw error when author.email is not String.', () => {
    const feed = {
      author: {
        email: 1,
        name: 'author name',
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"author.email must be a String."`
    );
  });
  it('should throw error when category is not Array.', () => {
    const feed = {
      category: {},
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"category must be an Array."`
    );
  });
  it('should throw error when category is not Object.', () => {
    const feed = {
      category: ['category'],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"category must be an Object."`
    );
  });
  it('should throw error when category.xml:base is not String.', () => {
    const feed = {
      category: [
        {
          'xml:base': 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"category.xml:base must be a String."`
    );
  });
  it('should throw error when category.xml:lang is not String.', () => {
    const feed = {
      category: [
        {
          'xml:lang': 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"category.xml:lang must be a String."`
    );
  });
  it('should throw error when category.term is not String.', () => {
    const feed = {
      category: [
        {
          term: 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"category.term must be a String."`
    );
  });
  it('should throw error when category.schema is not String.', () => {
    const feed = {
      category: [
        {
          schema: 1,
          term: 'category term',
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"category.schema must be a String."`
    );
  });
  it('should throw error when category.label is not String.', () => {
    const feed = {
      category: [
        {
          label: 1,
          term: 'category term',
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"category.label must be a String."`
    );
  });
  it('should throw error when contributor is not Array.', () => {
    const feed = {
      contributor: {},
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"contributor must be an Array."`
    );
  });
  it('should throw error when contributor is not object', () => {
    const feed = {
      contributor: ['contributor'],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"contributor must be an Object."`
    );
  });
  it('should throw error when contributor.xml:base is not String.', () => {
    const feed = {
      contributor: [
        {
          'xml:base': 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"contributor.xml:base must be a String."`
    );
  });
  it('should throw error when contributor.xml:lang is not String.', () => {
    const feed = {
      contributor: [
        {
          'xml:lang': 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"contributor.xml:lang must be a String."`
    );
  });
  it('should throw error when contributor.name is not String.', () => {
    const feed = {
      contributor: [
        {
          name: 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"contributor.name must be a String."`
    );
  });
  it('should throw error when contributor.uri is not String.', () => {
    const feed = {
      contributor: [
        {
          name: 'contributor name',
          uri: 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"contributor.uri must be a String."`
    );
  });
  it('should throw error when contributor.email is not String.', () => {
    const feed = {
      contributor: [
        {
          email: 1,
          name: 'contributor name',
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"contributor.email must be a String."`
    );
  });
  it('should throw error when entry is not Array.', () => {
    const feed = {
      entry: 'entry',
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"entry must be an Array."`
    );
  });
  it('should throw error when entry.xml:base is not String.', () => {
    const feed = {
      entry: [
        {
          'xml:base': 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"entry.xml:base must be a String."`
    );
  });
  it('should throw error when entry.xml:lang is not String.', () => {
    const feed = {
      entry: [
        {
          'xml:lang': 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"entry.xml:lang must be a String."`
    );
  });
  it("should throw error when entry's element is not object.", () => {
    const feed = {
      entry: ['entry'],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"entry must be an Object."`
    );
  });
  it("should throw error when entry's content is not Object.", () => {
    const feed = {
      entry: [{ content: 1 }],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"content must be an Object."`
    );
  });
  it('should throw error when content.xml:base is not String.', () => {
    const feed = {
      entry: [
        {
          content: {
            'xml:base': 1,
          },
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"content.xml:base must be a String."`
    );
  });
  it('should throw error when content.xml:lang is not String.', () => {
    const feed = {
      entry: [
        {
          content: {
            'xml:lang': 1,
          },
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"content.xml:lang must be a String."`
    );
  });
  it("should throw error when entry's content type is not String.", () => {
    const feed = {
      entry: [
        {
          content: {
            type: 1,
          },
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"content.type must be a String."`
    );
  });
  it("should throw error when entry's content src is not String.", () => {
    const feed = {
      entry: [
        {
          content: {
            src: 1,
          },
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"content.src must be a String."`
    );
  });
  it("should throw error when entry's content text is not String.", () => {
    const feed = {
      entry: [
        {
          content: {
            text: 1,
          },
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"content.text must be a String."`
    );
  });
  it("should throw error when entry's content element is not String.", () => {
    const feed = {
      entry: [
        {
          content: {
            element: 1,
          },
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"content.element must be a String."`
    );
  });
  it("should throw error when entry's content xhtmlDiv is not String.", () => {
    const feed = {
      entry: [
        {
          content: {
            xhtmlDiv: 1,
          },
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"content.xhtmlDiv must be a String."`
    );
  });
  it('should throw error when generator is not Object.', () => {
    const feed = {
      generator: 'generator',
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"generator must be an Object."`
    );
  });
  it('should throw error when generator.xml:base is not String.', () => {
    const feed = {
      generator: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"generator.xml:base must be a String."`
    );
  });
  it('should throw error when generator.xml:lang is not String.', () => {
    const feed = {
      generator: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"generator.xml:lang must be a String."`
    );
  });
  it('should throw error when generator.uri is not String.', () => {
    const feed = {
      generator: {
        uri: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"generator.uri must be a String."`
    );
  });
  it('should throw error when generator.version is not String', () => {
    const feed = {
      generator: {
        version: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"generator.version must be a String."`
    );
  });
  it('should throw error when generator.text is not String.', () => {
    const feed = {
      generator: {
        text: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"generator.text must be a String."`
    );
  });
  it('should throw error when icon is not Object.', () => {
    const feed = {
      icon: 'icon',
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"icon must be an Object."`
    );
  });
  it('should throw error when icon.xml:base is not String.', () => {
    const feed = {
      icon: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"icon.xml:base must be a String."`
    );
  });
  it('should throw error when icon.xml:lang is not String.', () => {
    const feed = {
      icon: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"icon.xml:lang must be a String."`
    );
  });
  it('should throw error when icon.uri is not String.', () => {
    const feed = {
      icon: {
        uri: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"icon.uri must be a String."`
    );
  });
  it('should throw error when id is not Object.', () => {
    const feed = {
      id: 'id',
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(`"id must be an Object."`);
  });
  it('should throw error when id.xml:base is not String.', () => {
    const feed = {
      id: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"id.xml:base must be a String."`
    );
  });
  it('should throw error when id.xml:lang is not String.', () => {
    const feed = {
      id: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"id.xml:lang must be a String."`
    );
  });
  it('should throw error when id.uri is not String.', () => {
    const feed = {
      id: {
        uri: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"id.uri must be a String."`
    );
  });
  it('should throw error when link is not Array.', () => {
    const feed = {
      link: 'link',
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"link must be an Array."`
    );
  });
  it('should throw error when link.xml:base is not String.', () => {
    const feed = {
      link: [
        {
          'xml:base': 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"link.xml:base must be a String."`
    );
  });
  it('should throw error when link.xml:lang is not String.', () => {
    const feed = {
      link: [
        {
          'xml:lang': 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"link.xml:lang must be a String."`
    );
  });
  it('should throw error when link.href is not String.', () => {
    const feed = {
      link: [
        {
          href: 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"link.href must be a String."`
    );
  });
  it('should throw error when link.rel is not String.', () => {
    const feed = {
      link: [
        {
          rel: 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"link.rel must be a String."`
    );
  });
  it('should throw error when link.type is not String.', () => {
    const feed = {
      link: [
        {
          type: 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"link.type must be a String."`
    );
  });
  it('should throw error when link.hreflang is not String.', () => {
    const feed = {
      link: [
        {
          hreflang: 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"link.hreflang must be a String."`
    );
  });
  it('should throw error when link.title is not String.', () => {
    const feed = {
      link: [
        {
          title: 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"link.title must be a String."`
    );
  });
  it('should throw error when link.length is not String.', () => {
    const feed = {
      link: [
        {
          length: 1,
        },
      ],
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"link.length must be a String."`
    );
  });
  it('should throw error when logo is not Object.', () => {
    const feed = {
      logo: 'logo',
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"logo must be an Object."`
    );
  });
  it('should throw error when logo.xml:base is not String.', () => {
    const feed = {
      logo: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"logo.xml:base must be a String."`
    );
  });
  it('should throw error when logo.xml:lang is not String.', () => {
    const feed = {
      logo: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"logo.xml:lang must be a String."`
    );
  });
  it('should throw error when logo.uri is not String.', () => {
    const feed = {
      logo: {
        uri: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"logo.uri must be a String."`
    );
  });
  it('should throw error when published is not Object.', () => {
    const feed = {
      published: 1,
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"published must be an Object."`
    );
  });
  it('should throw error when published.xml:base is not String.', () => {
    const feed = {
      published: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"published.xml:base must be a String."`
    );
  });
  it('should throw error when published.xml:lang is not String.', () => {
    const feed = {
      published: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"published.xml:lang must be a String."`
    );
  });
  it('should throw error when published.dateTime is not Date.', () => {
    const feed = {
      published: {
        dateTime: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"published.dateTime must be a Date."`
    );
  });
  it('should throw error when rights is not Object.', () => {
    const feed = {
      rights: 1,
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"rights must be an Object."`
    );
  });
  it('should throw error when rights.xml:base is not String.', () => {
    const feed = {
      rights: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"rights.xml:base must be a String."`
    );
  });
  it('should throw error when rights.xml:lang is not String.', () => {
    const feed = {
      rights: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"rights.xml:lang must be a String."`
    );
  });
  it('should throw error when rights.text is not Date.', () => {
    const feed = {
      rights: {
        text: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"rights.text must be a String."`
    );
  });
  it('should throw error when subtitle is not Object.', () => {
    const feed = {
      subtitle: 1,
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"subtitle must be an Object."`
    );
  });
  it('should throw error when subtitle.xml:base is not String.', () => {
    const feed = {
      subtitle: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"subtitle.xml:base must be a String."`
    );
  });
  it('should throw error when subtitle.xml:lang is not String.', () => {
    const feed = {
      subtitle: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"subtitle.xml:lang must be a String."`
    );
  });
  it('should throw error when subtitle.text is not Date.', () => {
    const feed = {
      subtitle: {
        text: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"subtitle.text must be a String."`
    );
  });
  it('should throw error when summary is not Object.', () => {
    const feed = {
      summary: 1,
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"summary must be an Object."`
    );
  });
  it('should throw error when summary.xml:base is not String.', () => {
    const feed = {
      summary: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"summary.xml:base must be a String."`
    );
  });
  it('should throw error when summary.xml:lang is not String.', () => {
    const feed = {
      summary: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"summary.xml:lang must be a String."`
    );
  });
  it('should throw error when summary.text is not Date.', () => {
    const feed = {
      summary: {
        text: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"summary.text must be a String."`
    );
  });
  it('should throw error when title is not Object.', () => {
    const feed = {
      title: 1,
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"title must be an Object."`
    );
  });
  it('should throw error when title.xml:base is not String.', () => {
    const feed = {
      title: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"title.xml:base must be a String."`
    );
  });
  it('should throw error when title.xml:lang is not String.', () => {
    const feed = {
      title: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"title.xml:lang must be a String."`
    );
  });
  it('should throw error when title.text is not Date.', () => {
    const feed = {
      title: {
        text: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"title.text must be a String."`
    );
  });
  it('should throw error when updated is not Object.', () => {
    const feed = {
      updated: 1,
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"updated must be an Object."`
    );
  });
  it('should throw error when updated.xml:base is not String.', () => {
    const feed = {
      updated: {
        'xml:base': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"updated.xml:base must be a String."`
    );
  });
  it('should throw error when updated.xml:lang is not String.', () => {
    const feed = {
      updated: {
        'xml:lang': 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"updated.xml:lang must be a String."`
    );
  });
  it('should throw error when updated.dateTime is not Date.', () => {
    const feed = {
      updated: {
        dateTime: 1,
      },
    };
    expect(() => isMarshalable(feed)).toThrowErrorMatchingInlineSnapshot(
      `"updated.dateTime must be a Date."`
    );
  });
});
