class ToDoList {
  constructor(title) {
    this.items = [];
    this.title = '';
  }

  add(text) {
    let item = new Item(text);
    if (this.items.find(obj => obj.id === item.id)) return this.add(text);
    this.items.push(item);
    return item;
  }

  complete(id) {
    let task = this.findIndexById(id);
    return task.complete();
  }

  uncomplete(id) {
    let task = this.findIndexById(id);
    return task.uncomplete();
  }

  remove(id) {
    let task = this.findIndexById(id);
    let index = this.items.indexOf(task);
    return this.items.splice(index, 1)[0];
  }

  getCompHistory(id) {
    let task = this.findIndexById(id);
    return task.getCompHistory();
  }

  findIndexById(id) {
    let foundTask = this.items.filter(task => task.id === id);
    return foundTask[0];
  }

  update(id, newText) {
    let task = this.findIndexById(id);
    return task.update();
  }
}



class Item {
  constructor(text) {
    this.completionHistory = [];
    this.id = Math.floor(Math.random() * 1e5);
    this.description = text;
    this.createdAt = Date.now();
    this.completedAt = null;
    this.completeHistory = [];
  }

  complete() {
    let now = Date.now();
    this.completedAt = now;
    this.completionHistory.push(now);

    return this;
  }

  umcomplete() {
    this.completedAt = null;
    return this;
  }

  getCompHistory() {
    return this.completionHistory;
  }

  update(newText) {
    this.description = newText;
    return this;
  }
}


// Let's try
let todolist = new ToDoList('Internship tasks');
todolist.add('clean the code');
let task = todolist.add('finish the task 1');
task.complete();
console.log(todolist.items);
