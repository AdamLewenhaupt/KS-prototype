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

export const createStep = (number, title, tasks) => ({
  id: stepID++,
  number,
  title,
  tasks,
  selectedDate: null
})

export const createCourse = (name, color, steps) => {
  return {
    id: courseID++,
    name,
    color,
    steps
  }
}