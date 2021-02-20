import { Component, Input, OnInit } from '@angular/core';
import { IProgram } from 'src/interfaces/IProgram';

@Component({
  selector: 'app-programs-grid',
  templateUrl: './programs-grid.component.html',
  styleUrls: ['./programs-grid.component.scss'],
})
export class ProgramsGridComponent implements OnInit {
  constructor() {}

  @Input() program!: IProgram;

  ngOnInit() {}

  showShortDesciption = true;

  alterDescriptionText() {
    this.showShortDesciption = !this.showShortDesciption;
  }
}
