import _ from 'lodash'

export const getStatsForTasks = (task) => {
  const done = _.countBy(task.subTasks, st => st.completed)

  return {
    completed: done.true || 0,
    left: done.false || 0,
    total: task.subTasks.length
  }
}

export const getTaskProgress = (task) => {
  const { completed, total, left } = getStatsForTasks(task)

  if (left === 0) {
    if(completed === 0) {
      return 0
    }
    return 100
  }

  const p = completed / total
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