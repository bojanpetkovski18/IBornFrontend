import { Component, OnInit } from '@angular/core';
import { IProgram } from 'src/interfaces/IProgram';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  listPrograms: Array<IProgram> = new Array<IProgram>();

  constructor(private programService: ProgramService) {}

  ngOnInit() {
    this.programService.getPrograms().subscribe((res) => {
      this.listPrograms = res;
      console.log(this.listPrograms);
    });
  }
}
