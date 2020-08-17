import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LanguagesComponent} from './languageList/languages/languages.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CounterHostComponent } from './counter-host/counter-host.component';
import { CounterComponent } from './counter/counter.component';
import {TimerComponent} from './timer/timer.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageHostComponent } from './message-host/message-host.component';
import {FormsModule} from "@angular/forms";
import { BlockComponent } from './block/block.component';
import { BlockHostComponent } from './block-host/block-host.component';
import { BindingBlockComponent } from './binding-block/binding-block.component'
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    CountryListComponent,
    CounterHostComponent,
    CounterComponent,
    TimerComponent,
    MessageBoxComponent,
    MessageHostComponent,
    BlockComponent,
    BlockHostComponent,
    BindingBlockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: "block-host", component: BlockHostComponent},
        {path: "list", component: CountryListComponent},
        {path: "", redirectTo: "list1", pathMatch: "full"}
      ]
    ),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
