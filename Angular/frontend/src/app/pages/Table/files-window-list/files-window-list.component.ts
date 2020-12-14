import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ami-fullstack-files-window-list",
  templateUrl: "./files-window-list.component.html",
  styleUrls: ["./files-window-list.component.scss"],
})
export class FilesWindowListComponent implements OnInit {
  @Input() header: string;
  @Input() icon: string;
  @Input() file_list: file_list[];
  @Output() selectEvent = new EventEmitter<string>();
  selectedFile: string;
  dropdownOpen: boolean;

  constructor() {
    this.dropdownOpen = false;
  }

  ngOnInit(): void {
    this.selectedFile = undefined;
  }

  fileWasSelected(name: string) {
    console.log(name);
    this.selectedFile = name;
    this.selectEvent.emit(name);
  }

  isSelected(name: string) {
    if (name == this.selectedFile) return true;
    else return false;
  }
}

class file_list {
  image: string;
  name: string;
  last_edit: string;
  Favorites: string;
  Team: string;

  constructor() {
    this.image = "";
    this.name = "";
    this.last_edit = "";
    this.Favorites = "";
    this.Team = "";
  }
}
