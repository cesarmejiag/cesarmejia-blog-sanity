export const schemaTypes = [
  {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          slugify: (input) =>
            input
              .trim()
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/\s+/g, '-'),
        },
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  },
  {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
      },
      {
        name: 'coverImage',
        type: 'image',
        title: 'Cover Image',
        fields: [
          {
            type: 'text',
            name: 'alt',
            title: 'Alternative Text',
          },
        ],
        options: {
          hotspot: true,
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image',
            fields: [
              {
                title: 'Position',
                name: 'position',
                type: 'string',
                options: {
                  list: [
                    {title: 'Center', value: 'center'},
                    {title: 'Left', value: 'left'},
                    {title: 'Right', value: 'right'},
                  ],
                  layout: 'radio',
                  isHighlighted: true,
                },
              },
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative Text',
                options: {
                  isHighlighted: true,
                },
              },
            ],
            options: {
              hotspot: true,
            },
          },
          {
            type: 'code',
            options: {
              withFilename: true,
            },
          },
        ],
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Date',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'author'}],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        validation: (Rule) => Rule.required(),
      },
    ],
  },
]
