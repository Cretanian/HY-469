import { Component, OnInit } from "@angular/core";
import { UserService } from "../../global/services/user/user.service";

@Component({
  selector: "set-user",
  templateUrl: "./set-user.component.html",
  styleUrls: ["./set-user.component.scss"],
})
export class SetUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  setUser(username: string) {
    console.log("setting ip...");
    this.userService.setUserIP(username);
  }
}
