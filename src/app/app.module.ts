import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ReportService } from './report/report.service';
import { UnSnakeCasePipe } from './un-snake-case/un-snake-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    UnSnakeCasePipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
