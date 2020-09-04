import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {UserListComponent} from './user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import { InputSearchComponent } from './input-search/input-search.component';
import { MessageComponent } from './message/message.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    InputSearchComponent,
    MessageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
