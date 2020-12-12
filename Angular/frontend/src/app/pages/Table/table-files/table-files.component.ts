import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ami-fullstack-table-files",
  templateUrl: "./table-files.component.html",
  styleUrls: ["./table-files.component.scss"],
})
export class TableFilesComponent implements OnInit {
  @Input("icon") icon: string;
  @Input("name") name: string;
  @Input("last_edit") last_edit: string;
  @Input() isSelected: boolean;
  @Output() selectFileEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  clickSelect() {
    this.selectFileEvent.emit(this.name);
  }
}
