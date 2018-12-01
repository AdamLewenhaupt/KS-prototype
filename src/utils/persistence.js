import moment from 'moment'

export const serialize = (courses) => {
  return JSON.stringify(courses.map(c => ({
      ...c,
      steps: c.steps.map(s => ({
        ...s,
        selectedDate: s.selectedDate && s.selectedDate.valueOf()
      }))
    })
  ))
}

export const deserialize = (data) => {
  return JSON.parse(data)
    .map(c => ({
      ...c,
      steps: c.steps.map(s => ({
        ...s,
        selectedDate: s.selectedDate && moment(s.selectedDate)
      }))
    })
  )
}

export const save = (courses) => {
  localStorage.setItem('courses', serialize(courses))
}

export const read = () => {
  const courses = localStorage.getItem('courses')
  return courses && deserialize(courses)
}