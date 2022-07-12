'use strict';

//Store the items
let items = [];

//functions we need: add, remove, complete, uncomplete, update

//unique id generator function
function uniqueIdGen() {
  let id = Math.floor(Math.random() * 1e5);
  if (items.length > 0) {
    if (items.find(item => item.id === id)) {
      uniqueIdGen();
    }
  }
  return id;
}

//Date generator
function date() {
  let now = new Date(Date.now()).toLocaleString();
  return now;
}

// find the index by id and return it
function findIndexById(id) {
  for (let i = 0; i < items.length; i++) {
    for (let prop in items[i]) {
      if (items[i][prop] === id) {
        return i;
      }
    }
  }
}

//Item function constructor
function Item(desc) {
  this.id = uniqueIdGen();
  this.description = desc;
  this.createdAt = date();
  this.completedAt = null;
}

//Todolist constructor function
function ToDoList() {
  //adds new item
  this.add = function (desc) {
    let item = new Item(desc);
    items.push(item);
    return items;
  };

  //complete the task
  this.complete = function (id) {
    items[findIndexById(id)]['completedAt'] = date();
    return items;
  };

  //uncomplete the task
  this.uncomplete = function (id) {
    items[findIndexById(id)]['completedAt'] = null;
    return items;
  };

  //remove the task from items
  this.remove = function (id) {
    items.splice(findIndexById(id), 1);
    return items;
  };

  //update the desc of the task
  this.update = function (id, newDesc) {
    items[findIndexById(id)]['description'] = newDesc;
    return items;
  };
}

///////////////////////////////////////////////////////
// Let's try
let todolist = new ToDoList();
todolist.add('Create a study plan');

