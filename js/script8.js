const todo = {
  task: ['Do', 'Ok'],
  addTask(string) {
    todo.task.push(string);
  },
  completeTask(string) {
    todo.task = todo.task.filter((v) => v !== string);
  },
  showTasks() {
    console.log(todo.task);
  },
};
todo.addTask('new');
todo.addTask('123');
todo.completeTask('Do');
todo.showTasks();
