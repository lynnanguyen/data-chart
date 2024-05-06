import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Report } from '../report/report.model';
import { ReportService } from '../report/report.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit, OnDestroy {
  // Leaderboards table
  allLeaderboards: string[] = [];
  selectedLeaderboard: any = null;
  leaderboardColumns: string[] = [];
  leaderboardDataTypes: string[] = [];
  leaderboardValues: any[][] = [];
  allLeaderboardsSubscription = new Subscription();
  getLeaderboardSubscription = new Subscription();

  // Report table
  allReports: string[] = [];
  selectedReport: any = null;
  reportColumns: string[] = [];
  reportDataTypes: string[] = [];
  reportValues: any[][] = [];
  allReportsSubscription = new Subscription();
  getReportSubscription = new Subscription();

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getAllLeaderboards();
    this.getAllReports();
  }

  getAllLeaderboards(): void {
    this.allLeaderboardsSubscription = this.reportService.getAllLeaderboards().subscribe((leaderboards: string[]) => this.allLeaderboards = leaderboards);
  }

  getLeaderboard(): void {
    if (this.selectedLeaderboard === 'null') {
      this.selectedLeaderboard = null;
      return;
    }

    this.getLeaderboardSubscription = this.reportService.getLeaderboard(this.selectedLeaderboard).subscribe((leaderboard: Report) => {
      this.leaderboardColumns = leaderboard.names;
      this.leaderboardDataTypes = leaderboard.dtypes;
      this.leaderboardValues = leaderboard.values;
    });
  }

  getAllReports(): void {
    this.allReportsSubscription = this.reportService.getAllReports().subscribe((reports: string[]) => this.allReports = reports);
  }

  getReport(): void {
    if (this.selectedReport === 'null') {
      this.selectedReport = null;
      return;
    }

    this.getReportSubscription = this.reportService.getReport(this.selectedReport).subscribe((report: Report) => {
      this.reportColumns = report.names;
      this.reportDataTypes = report.dtypes;
      this.reportValues = report.values;
    });
  }
  
  ngOnDestroy(): void {
    this.allLeaderboardsSubscription.unsubscribe();
    this.getLeaderboardSubscription.unsubscribe();
    this.allReportsSubscription.unsubscribe();
    this.getReportSubscription.unsubscribe();
  }
}



