import engelska from '../seed/engelska'
import _ from 'lodash'

const SET_DATE = 'SET_DATE'
const TOGGLE_SUBTASK = 'TOGGLE_SUBTASK'
const COMPLETE_SUBTASK = 'COMPLETE_SUBTASK'

const updateIn = (collection, key, value, fn) => {
  return collection.map(entity => {
    if (entity[key] != value) {
      return entity
    }

    return fn(entity)
  })
}

const updateWithIDFn = (collection, id, key, fn) => 
  updateIn(collection, 'id', id, entity => ({ ...entity, [key]: fn(entity[key]) }))

const updateWithID = (collection, id, key, value) => 
  updateIn(collection, 'id', id, entity => ({ ...entity, [key]: value }))

export const setDate = (courseID, stepID, date) => ({
  type: SET_DATE,
  courseID,
  stepID,
  date
})

export const toggleSubtask = (courseID, stepID, taskID, subtaskID) => ({
  type: TOGGLE_SUBTASK,
  courseID,
  stepID,
  taskID,
  subtaskID
})

export const completeSubtask = (courseID, stepID, taskID, subtaskID) => ({
  type: COMPLETE_SUBTASK,
  courseID,
  stepID,
  taskID,
  subtaskID
})


const initalState = [
  engelska
]


export const courses = (state = initalState, action) => {
  const updateCourse = _.bind(updateIn, null, state, 'id', action.courseID)

  switch (action.type) {
    case SET_DATE:
      return updateCourse(course => {
        return {
          ...course,
          steps: updateWithID(
            course.steps, action.stepID, 
            'selectedDate', action.date)
        }
      })

    case TOGGLE_SUBTASK:
      return updateCourse(course => ({
        ...course,
        steps: updateWithIDFn(course.steps, action.stepID, 'tasks', tasks => 
          updateWithIDFn(tasks, action.taskID, 'subTasks', subTasks => 
            updateWithIDFn(subTasks, action.subtaskID, 'selected', x => !x)
          )
        )
      }))

    case COMPLETE_SUBTASK:
      return updateCourse(course => ({
        ...course,
        steps: updateWithIDFn(course.steps, action.stepID, 'tasks', tasks => 
          updateWithIDFn(tasks, action.taskID, 'subTasks', subTasks => 
            updateWithID(subTasks, action.subtaskID, 'completed', true)
          )
        )
      }))




    default:
      return state
  }
}