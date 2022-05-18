import content from './content.json'

export async function getStudyGroupData(id) {
  const studyGroupData = content.studyGroups.filter((item) => item.id == id)
  return studyGroupData
}
