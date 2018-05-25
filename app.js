angular.module('app', [])
.component('todoList', {
  controller: function(){
    this.todos = [
      'wake up',
      'drink coffee',
      'code angular'
    ];

    this.addTodo = ()=>{
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
    this.removeTodo = (index)=>{
      this.todos.splice(index, 1);
    }
  },
  template: `
    <div>
      <h1></h1>
      <input ng-model="$ctrl.newTodo">
      <button ng-click="$ctrl.addTodo()">add</button>
      <ul>
        <entry
          todo="todo"
          ng-repeat="todo in $ctrl.todos track by $index"
          ng-click="$ctrl.removeTodo($index)" />
      </ul>
      <hr/>
      <pre>{{$ctrl.todos | json}}</pre>
    </div>
  `
})
.component('entry', {
  bindings:{
    todo: '<'
  },
  template: `
    <li>
      {{$ctrl.todo}}
    </li>
  `
})
