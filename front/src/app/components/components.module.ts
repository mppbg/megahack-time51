import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TimeAgoPipe } from 'time-ago-pipe';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedUpdateComponent } from './feed-update/feed-update.component';
import { SlidesComponent } from './slides/slides.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { TimeagoComponent } from './timeago/timeago.component';
@NgModule({
  declarations: [
    SlidesComponent,
    StartButtonComponent,
    FeedCardComponent,
    FeedUpdateComponent,
    TimeagoComponent,
    TimeAgoPipe,
    HeaderComponent
  ],
  exports: [
    SlidesComponent,
    StartButtonComponent,
    FeedCardComponent,
    FeedUpdateComponent,
    TimeagoComponent,
    HeaderComponent
  ],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule {}
