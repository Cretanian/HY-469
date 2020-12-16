import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FilesHeadersService } from "src/app/global/services/Cretanian/files-headers/explorer-teams.service";

@Component({
  selector: "ami-fullstack-files-window",
  templateUrl: "./files-window.component.html",
  styleUrls: ["./files-window.component.scss"],
})
export class FilesWindowComponent implements OnInit {
  headers: files_header[];
  file_list: file_list[];
  fileIsOpen: boolean;
  file: file[];
  Team_name: string;
  openedFilename: string;
  @Output() openFileEvent = new EventEmitter<void>();
  @Output() closeFileEvent = new EventEmitter<void>();

  constructor(private fileheadersService: FilesHeadersService) {}

  ngOnInit(): void {
    this.Team_name = "YeetFleet";
    this.fileIsOpen = false;
    this.file = new Array();
    for (let i = 0; i < 2; i++) {
      this.file.push(new file());
    }

    this.fileheadersService.getAll("asd").subscribe((data) => {
      this.headers = data as files_header[];
      this.file[0].header = this.headers[0].header;
      this.file[0].icon = this.headers[0].icon;

      this.file[1].header = this.headers[1].header;
      this.file[1].icon = this.headers[1].icon;
    });

    this.fileheadersService.getAll2("asd").subscribe((data) => {
      this.file_list = data as file_list[];
      this.file[0].set_param_chat(this.file_list, "0", this.Team_name);
      this.file[1].set_param_chat(this.file_list, "1", this.Team_name);
    });
  }

  openFile(filename: string) {
    this.openedFilename = filename;
    this.fileIsOpen = true;
    this.openFileEvent.emit();
  }

  closeFile() {
    this.closeFileEvent.emit();
  }
}

class file {
  header: string;
  icon: string;
  file_list: file_list[] = [];

  constructor() {}

  set_param_chat(chats_list_param: file_list[], fav: string, myteam: string) {
    for (let i = 0; i < chats_list_param.length; i++) {
      if (
        chats_list_param[i].Favorites === fav &&
        chats_list_param[i].Team === myteam
      ) {
        this.file_list.push(chats_list_param[i]);
      }
    }
  }
}

class files_header {
  header: string;
  icon: string;
  constructor() {
    this.header = "";
    this.icon = "";
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
