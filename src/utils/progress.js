import _ from 'lodash'

export const getTaskProgress = (task) => {
  const done = _.countBy(task.subTasks, st => st.completed)

  if (!done.false) {
    if(!done.true) {
      return 0
    }
    return 100
  }

  const n = done.true || 0
  const p = n / (n + done.false)

  return 100*p
}

export const getStepProgress = (step) => {
  const { tasks } = step
  return _.sum(tasks.map(getTaskProgress)) / tasks.length
}

export const getCourseProgress = (course) => {
  const { steps } = course
  return _.sum(steps.map(getStepProgress)) / steps.length
}