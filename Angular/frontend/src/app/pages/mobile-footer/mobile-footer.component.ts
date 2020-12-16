import { Component, OnInit, Input, ViewChild, ElementRef }from '@angular/core';
import { GButtonComponent } from '../g-button/g-button.component';

@Component({
  selector: 'mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.css']
})

export class MobileFooterComponent implements OnInit {

  morePressed: boolean = false;

  activityTab: FooterTab = new FooterTab(
    '../assets/footer_icon_background.png',
    '../assets/activity_icon.png'
  )

  teamsTab: FooterTab = new FooterTab(
    '../assets/footer_icon_background.png',
    '../assets/team_icon.png'
  )

  chatTab: FooterTab = new FooterTab(
    '../assets/footer_icon_background.png',
    '../assets/chat_icon.png'
  )

  moreTab: FooterTab = new FooterTab(
    '../assets/footer_icon_background.png',
    '../assets/more_icon.png'
  )


  @Input('activeTab') activeTab: string = '';

  @ViewChild('activity', {static: false}) activityButton: ElementRef;
  @ViewChild('teams', {static: false}) teamButton: ElementRef;
  @ViewChild('chat', {static: false}) chatButtom: ElementRef;
  @ViewChild('more', {static: false}) moreButton: ElementRef;

  constructor() { }

  ngOnInit(): void {
    if(this.activeTab == 'teams')
      this.teamsTab.SetActive('../../../assets/team_icon_white.png');
    else if(this.activeTab == 'chat')
      this.chatTab.SetActive('../../../assets/chat_icon_white.png');
    else if(this.activeTab == 'more')
      this.moreTab.SetActive('../../../assets/more_icon_white.png');
    else if(this.activeTab == 'activity')
      this.activityTab.SetActive('../../../assets/activity_icon_white.png');
  }

  enableMore(): void{
    this.morePressed = true;
  }  

  disableMore(): void{
    this.morePressed =  false;
  }
}


class FooterTab{
  backgroundRef: string;
  iconRef: string;
  fontWeight: string;

  constructor(backgroundSrc: string, iconSrc: string){
    this.backgroundRef = backgroundSrc;
    this.iconRef = iconSrc;
    this.fontWeight = '';
  }

  SetActive(activeIconSrc: string){
    this.backgroundRef = '../assets/footer_icon_background_dark.png'
    this.iconRef = activeIconSrc;
    this.fontWeight = 'bold';
    console.log('font weight: ' + this.fontWeight);
  }
}