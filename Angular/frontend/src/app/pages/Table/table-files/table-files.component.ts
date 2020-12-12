import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ami-fullstack-table-files",
  templateUrl: "./table-files.component.html",
  styleUrls: ["./table-files.component.scss"],
})
export class TableFilesComponent implements OnInit {
  @Input("icon") icon: string;
  @Input("name") name: string;
  @Input("last_edit") last_edit: string;
  constructor() {}

  ngOnInit(): void {}
}
