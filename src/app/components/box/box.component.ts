import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() boxText: string = ''; 
  @Input() boxNumber: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

}
