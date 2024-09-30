import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  childW = 50;
  title = 'Hello_world';

  user ={
    name : "hiep",
    age : 18
  }

  user1: User[] = [];

  tag = ['bt1', 'bt2', 'bt3']

  isDanger = false;
  isWarning = false;

  push(){
    console.log("hêlo");
  }

  push2(event: MouseEvent){
    console.log(event);
  }


}

export type User = {
  id: string,
  name: string,
  age: number,
  phone: string
}
