import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { AsideComponent } from './aside/aside.component';
import { BubbleComponent } from './bubble/bubble.component';

import { BubbleService } from './bubble.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardComponent,
    AsideComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: 'bubble', useClass: BubbleService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
