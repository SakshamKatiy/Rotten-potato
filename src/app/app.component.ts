import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Employee } from './employee';


// class abc{
//   constructor(){
//     console.log("abc constructer called..")
//   }
//   display(name:string){
//     console.log("Hello:"+name);

//   }
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // viewProviders:[Employee,abc]
  encapsulation:ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';
// color="red";
age=21;

// @HostListener('click',['$event'])
// show(){
//   alert("hello");
// }

// constructor(private _obj:Employee,private _ob2:abc){
//   _obj.show();
//   _ob2.display(" saksham working");
// }
}