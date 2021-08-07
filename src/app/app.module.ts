import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IssueDataService } from './services/issue-data.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { IssueCardComponent } from './components/issue-card/issue-card.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { IssuePageComponent } from './components/issue-page/issue-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueCardComponent,
    MainPageComponent,
    IssuePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpClient, IssueDataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
