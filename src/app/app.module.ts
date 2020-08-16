import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LanguagesComponent} from './languageList/languages/languages.component';
import { CountryListComponent } from './country-list/country-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'list1', component: LanguagesComponent},
        {path: 'list2', component: CountryListComponent},
        {path: '', redirectTo: 'list1', pathMatch: 'full'}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
