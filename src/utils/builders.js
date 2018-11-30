let stepID = 0;
let taskID = 0;
let courseID = 0;
let subTaskID = 0;

export const createTask = (title, subTasks = []) => ({
  id: taskID++,
  title,
  subTasks: subTasks.map(s => ({ 
    id: subTaskID++, 
    text: s,
    completed: false,
    selected: false
  }))
})

export const createStep = (step, title, tasks) => ({
  id: stepID++,
  step,
  title,
  tasks
})

export const createCourse = (name, steps) => ({
  id: courseID++,
  name,
  steps
})