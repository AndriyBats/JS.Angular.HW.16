import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../task.interface';

@Component({
  selector: 'app-tasklistchild',
  templateUrl: './tasklistchild.component.html',
  styleUrls: ['./tasklistchild.component.scss']
})
export class TasklistchildComponent implements OnInit {
  @Output() outputCountTasks = new EventEmitter<number>();
  @Input() getNewTask!: ITask;

  public arrTasks: Array<ITask> = [
    {
      nameTask: "HTML5",
      status: true
    },
    {
      nameTask: "CSS3",
      status: true
    },
    {
      nameTask: "SCSS",
      status: false
    },
    {
      nameTask: "JavaScript",
      status: false
    },
    {
      nameTask: "jQuery",
      status: false
    },
    {
      nameTask: "Angular",
      status: false
    }
  ]
 
  public changeTask!: string;
  public isEdit: boolean = false;
  public newTask!: ITask;
  public numberOfEditTask!: number;
  public verityTask!: ITask;

  constructor() { }

  ngOnInit(): void {
    
    setInterval(() => {
      this.sendCountTasks();
      this.addNewTask();
    }, 500);
  }
  changeStatus(task: ITask): void {
    task.status = !task.status;
  }

  sendCountTasks(): void {
    this.outputCountTasks.emit(this.arrTasks.length);
  }

  deleteTask(index: number): void {
    this.arrTasks.splice(index, 1);
  }

  editTask(index: number): void {
    this.newTask = this.arrTasks[index];
    this.changeTask = this.newTask.nameTask;
    this.isEdit = true;
    this.numberOfEditTask = index;
  }

  saveTask(): void {
    this.newTask = {nameTask: this.changeTask, status: false};
    this.arrTasks[this.numberOfEditTask] = this.newTask;
    this.changeTask = '';
    this.isEdit = false;
  }

  addNewTask(): void {
    this.verityTask = this.arrTasks[this.arrTasks.length - 1];
    if(this.verityTask !== this.getNewTask && this.getNewTask){
      this.arrTasks.push(this.getNewTask)
    }
  }

}
