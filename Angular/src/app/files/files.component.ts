import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  @Input ('icon') icon: string;
  @Input ('name') name: string;
  @Input ('last_edit') last_edit: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
