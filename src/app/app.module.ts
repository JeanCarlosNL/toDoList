import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { HistoryToDoComponent } from './history-to-do/history-to-do.component';
import { PendingToDoComponent } from './pending-to-do/pending-to-do.component';
import { FeaturesToDoComponent } from './features-to-do/features-to-do.component';
import { AddToDoListComponent } from './add-to-do-list/add-to-do-list.component';
import { PendingToDoListComponent } from './pending-to-do-list/pending-to-do-list.component';
import { HistoryToDoListComponent } from './history-to-do-list/history-to-do-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    HistoryToDoComponent,
    PendingToDoComponent,
    FeaturesToDoComponent,
    AddToDoListComponent,
    PendingToDoListComponent,
    HistoryToDoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: FeaturesToDoComponent},
      {path: 'add', component: AddToDoComponent },
      {path: 'history', component: HistoryToDoComponent },
      {path: 'pending', component: PendingToDoComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
