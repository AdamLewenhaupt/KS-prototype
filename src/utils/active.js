import _ from 'lodash'

export const subtaskIsActive = (subTask) => {
  return subTask.selected
}

export const taskIsActive = (task) => {
  return _.some(task.subTasks, subtaskIsActive)
}

export const stepIsActive = (step) => {
  return _.some(step.tasks, taskIsActive)
}

export const courseIsActive = (course) => {
  return _.some(course.steps, stepIsActive)
}