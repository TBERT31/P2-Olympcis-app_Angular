import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  @Input() title: string = ''; 

  constructor() { }

  ngOnInit(): void {
    
  }

}
