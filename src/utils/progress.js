import _ from 'lodash'
import { subtaskIsActive, taskIsActive, stepIsActive } from './active'

export const aggregateStats = (statColl) => {
  return statColl
      .reduce((c, { completed, total }) => ({
        completed: c.completed + completed,
        total: c.total + total
      }), { completed: 0, total: 0 })
}


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
  const stats = aggregateStats(tasks.map(getStatsForTasks))
  if (stats.total === 0) {
    return 0
  }

  return 100*stats.completed/stats.total
}

export const getCourseProgress = (course) => {
  const { steps } = course

  const activeSteps = steps.filter(stepIsActive)

  if (activeSteps.length === 0) {
    return 0;
  }

  return _.sum(activeSteps.map(getStepProgress)) / activeSteps.length
}