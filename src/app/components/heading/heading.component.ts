import { Component, OnInit, Input } from '@angular/core';
import { Box } from 'src/app/core/models/box.model';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Input() title: string = ''; 
  @Input() boxes: Box[] = []; 


  constructor() { }

  ngOnInit(): void {
  }

}
