import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   jobs = [
    {
      company: "ChatGen",
      startDate: "Mar 2020",
      endDate: "Apr 2021",
      title: "Frontend Developer"
    },
    {
      company: "Mattermost",
      startDate: "Aug 2020",
      endDate: "Dec 2020",
      title: "Contributor"
    }
  ];

  value:boolean = false;

  onClick(){
    this.value=!this.value;
    console.log(this.value);
  }

  company : string=" ";

  log(x:any){
    console.log(x);
  }

  submit(f:any){
    this.jobs.push(f.value);
    console.log(this.jobs);
    this.onClick();
  }
}
