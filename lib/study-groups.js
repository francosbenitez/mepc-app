import content from './content.json'

export async function getStudyGroupData(slug) {
  const studyGroupData = content.study_groups.filter(
    (item) => item.slug === slug
  )
  return studyGroupData
}
