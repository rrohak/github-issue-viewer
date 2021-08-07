import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { IssuePageComponent } from './components/issue-page/issue-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/issue-viewer/1/0/open/created/desc', pathMatch: 'full'},
  {path: 'issue-viewer/:apiPage:/:appPage/:state/:sort/:order', component: MainPageComponent},
  {path: 'issue/:issueNumber', component: IssuePageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
