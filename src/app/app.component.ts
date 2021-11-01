import { Component } from '@angular/core';
import {Task} from "./components/model/task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  tasks : Task[];

  constructor(){
    this.tasks = [];
  }

  addTaskEventEmitter($event: { taskTitle: any; }){
    this.tasks.push(new Task($event.taskTitle));
    console.log('Tasks are ', this.tasks);
  }
}
