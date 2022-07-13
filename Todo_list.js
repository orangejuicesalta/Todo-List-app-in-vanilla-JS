'use strict';


//functions we need: add, remove, complete, uncomplete, update, getthe history of complete


//Date generator
function date() {
  let now = new Date(Date.now()).toLocaleString();
  return now;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Item function constructor
function Item(desc) {
  this.completeHistory = []
  this.id = Math.floor(Math.random() * 1e5);
  this.description = desc;
  this.createdAt = date();
  this.completedAt = null;
  this.completeHistory = [];
}


//Todolist constructor function/////////////////////////////////////////////////////////////////////////////////
function ToDoList() {
 
 this.items = [];
//unique id generator function
  this.findIndexById = function(id) {
    for (let i = 0; i < this.items.length; i++) {
      for (let prop in this.items[i]) {
        if (this.items[i][prop] === id) {
          return i;
        }
      }
    }
  }
  
  //adds new item
  this.add = function (desc) {
    let item = new Item(desc);
    if(this.items.find(obj => obj.id === item.id)) return this.add(desc);
    this.items.push(item);
    return this.items;
  };

  //complete the task
  this.complete = function (id) {
    let timeAndDate = date();
    this.items[this.findIndexById(id)]['completedAt'] = timeAndDate;
    this.items[this.findIndexById(id)]['completeHistory'].push(timeAndDate);
    return this.items;
  };

  //uncomplete the task
  this.uncomplete = function (id) {
    this.items[this.findIndexById(id)]['completedAt'] = null;
    return this.items;
  };

  //remove the task from this.items
  this.remove = function (id) {
    this.items.splice(this.findIndexById(id), 1);
    return this.items;
  };

  //update the desc of the task
  this.update = function (id, newDesc) {
    this.items[this.findIndexById(id)]['description'] = newDesc;
    return this.items;
  };

  //get the completion history of the task by id
  this.getCompHistory = function(id) {
    for(let element of this.items[this.findIndexById(id)]['completeHistory']) {
      console.log(`${element}`);
    }
    return this.items;
  }
}

///////////////////////////////////////////////////////
// Let's try
let todolist = new ToDoList();
todolist.add('Create a study plan');


