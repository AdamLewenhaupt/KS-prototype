import _ from 'lodash'
import { subtaskIsActive, taskIsActive, stepIsActive } from './active'

export const getStatsForTasks = (task) => {
  const active = task.subTasks.filter(subtaskIsActive)
  const done = _.countBy(active, st => st.completed)

  return {
    completed: done.true || 0,
    left: done.false || 0,
    total: active.length
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
  const activeTasks = tasks.filter(taskIsActive)
  if (activeTasks.length === 0) {
    return 0;
  }

  return _.sum(activeTasks.map(getTaskProgress)) / activeTasks.length
}

export const getCourseProgress = (course) => {
  const { steps } = course
  const activeSteps = steps.filter(stepIsActive)
  if (activeSteps.length === 0) {
    return 0;
  }


  return _.sum(activeSteps.map(getStepProgress)) / activeSteps.length
}