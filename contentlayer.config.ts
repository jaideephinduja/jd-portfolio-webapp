import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

export const Experience = defineDocumentType(() => ({
  name: 'Experience',
  filePathPattern: 'experience/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    company: { type: 'string', required: true },
    logo: { type: 'string', required: false },
    start: { type: 'string', required: true },
    end: { type: 'string', required: false },
    location: { type: 'string', required: false },
    techStack: { type: 'list', of: { type: 'string' } },
    impactBullets: { type: 'list', of: { type: 'string' } }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
    }
  }
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    techStack: { type: 'list', of: { type: 'string' } },
    github: { type: 'string' },
    demo: { type: 'string' },
    image: { type: 'string' },
    architectureDiagram: { type: 'string' }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
    }
  }
}))

export const Education = defineDocumentType(() => ({
  name: 'Education',
  filePathPattern: 'education/**/*.mdx',
  contentType: 'mdx',
  fields: {
    degree: { type: 'string', required: true },
    institution: { type: 'string', required: true },
    year: { type: 'string', required: true },
    details: { type: 'list', of: { type: 'string' } }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
    }
  }
}))

export const Skill = defineDocumentType(() => ({
  name: 'Skill',
  filePathPattern: 'skills/**/*.mdx',
  contentType: 'mdx',
  fields: {
    category: { type: 'string', required: true },
    items: { type: 'list', of: { type: 'string' }, required: true }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
    }
  }
}))

export const SkillsCollection = defineDocumentType(() => ({
  name: 'SkillsCollection',
  filePathPattern: 'skills.mdx',
  contentType: 'mdx',
  fields: {
    categories: { type: 'json', required: true }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Experience, Project, Education, Skill, SkillsCollection],
  mdx: { remarkPlugins: [remarkGfm] }
})


