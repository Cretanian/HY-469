import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/global/services/user/user.service';
import { IpService } from 'src/app/global/services/user/ip.service';

@Component({
  selector: 'account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent implements OnInit {

  name: string;
  photo: string;

  enabled: boolean = false;

  constructor(
    private ipService: IpService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.ipService.getIPAddress().subscribe(
      (data: any) => {
         this.userService.getUserData(data.ip).subscribe(
           (data: any) => {
            console.log('random: ' + data.username);  
            this.name = data.username;
            this.photo = '../../../assets/profile_photos/' + data.profile;
           }
         )
      }
    )

    if(name == undefined){
      this.name = 'undefiened'
    }
  }

}

