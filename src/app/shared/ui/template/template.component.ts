import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cs-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  @Input()
  showSidebar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
