import content from './content.json'

export async function getStudyGroupData(slug) {
  const studyGroupData = content.studyGroups.filter(
    (item) => item.slug === slug
  )
  return studyGroupData
}
