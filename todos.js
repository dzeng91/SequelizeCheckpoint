let tasks = {}; //

/*
  tasks (defined above) will be a place to store tasks by person;
  example:
  {
    person1: [{task object 1}, {task object 2}, etc.],
    person2: [{task object 1}, {task object 2}, etc.],
    etc.
  }
*/

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },

    // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
    listPeople: function () {
      // Returns array of people with tasks
      let pplTasks = Object.keys(tasks)
      return pplTasks;
    },
    add: function (name, task) {
      // Is a boolean set to false for any new tasks
      if (task.complete == undefined) {
        task.complete = false
      }
      // Remembers who does what
      if (tasks[name]) {
        tasks[name].push(task);
      } else return tasks[name] = [task]
      return task;
    },
    list: function (name) {
      // Remembers who does what
      let taskName = tasks[name]
      return taskName;
    },
    complete: function (name, idx) {
      // Is a method that sets a specified task's `complete` property to true
      tasks[name][idx].complete = true;
    },
    remove: function (name, idx) {
      // removes a task, by index, for a given person
      tasks[name].splice(idx, 1);
    },
  };
