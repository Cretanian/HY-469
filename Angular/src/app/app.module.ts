import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { MatSliderModule } from '@angular/material/slider';
import { TestListComponent } from './test-list/test-list.component';
import { MatListModule} from '@angular/material/list';
import { GButtonComponent } from './g-button/g-button.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { MoreBarComponent } from './more-bar/more-bar.component';
import { MobileControllerComponent } from './mobile-controller/mobile-controller.component';
import { MobileControllerMoreComponent } from './mobile-controller-more/mobile-controller-more.component';
import { MessageExtraComponent } from './message-extra/message-extra.component';
import { TableMenuComponent } from './table-menu/table-menu.component';
import { TableMenuCarouselComponent } from './table-menu-carousel/table-menu-carousel.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { ConversationPreviewComponent } from './conversation-preview/conversation-preview.component';
import { ConversationMessagePreviewComponent } from './conversation-message-preview/conversation-message-preview.component';
import { EmojiCounterComponent } from './emoji-counter/emoji-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    GButtonComponent,
    MobileFooterComponent,
    MoreBarComponent,
    MobileControllerComponent,
    MobileControllerMoreComponent,
    MessageExtraComponent,
    TableMenuComponent,
    TableMenuCarouselComponent,
    AccountMenuComponent,
    ConversationPreviewComponent,
    ConversationMessagePreviewComponent,
    EmojiCounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbStepperModule,
    AppRoutingModule,
    MatSliderModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
