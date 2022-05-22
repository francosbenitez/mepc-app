import content from './content.json'

export async function getDocumentData(slug) {
  const documentData = content.study_groups.filter((item) => item.slug === slug)
  return documentData
}
