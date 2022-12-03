import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input('company') company:string = 'defaultCompany';
  @Input('start') start:string = 'defaultStart';
  @Input('end') end:string='defaultEnd';
  @Input('title') title:string='defaultTitle';

  constructor() { }

  ngOnInit(): void {
  }

}
