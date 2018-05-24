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
    this.removeTodo = ()=>{
      this.todos.pop();
    }
  },
  template: `
    <div>
      <h1></h1>
      <input ng-model="$ctrl.newTodo">
      <button ng-click="$ctrl.addTodo()">add</button>
      <ul>
        <li
          ng-repeat="todo in $ctrl.todos"
          ng-click="$ctrl.removeTodo()"
          >
            {{todo}}
        </li>
      </ul>
      <hr/>
      <pre>{{$ctrl.todos | json}}</pre>
    </div>
  `
})
