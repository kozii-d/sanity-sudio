import {defineField} from 'sanity'

export default defineField({
  name: 'hero.home',
  title: 'Home hero',
  type: 'object',
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
    }),
    // Link
    defineField({
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule) => Rule.max(1),
    }),
    // Content
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          validation: (Rule) => Rule.max(1),
          of: [
            {
              name: 'productWithVariant',
              title: 'Product with variant',
              type: 'productWithVariant',
            },
            {
              name: 'imageWithProductHotspots',
              title: 'Image',
              type: 'imageWithProductHotspots',
            },
          ]
        }),
        defineField({
          name: 'aboutSection',
          title: 'About Section',
          type: 'text',
          rows: 10,
          validation: (Rule) => Rule.max(1500)
        })
      ]
    })
  ],
})
