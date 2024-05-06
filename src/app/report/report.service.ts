import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import config from '../../assets/config.json';
import { Report } from './report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getAllReports(): Observable<string[]> {
    return this.http.get<string[]>(`${config.API_URL}/reports`);
    // console.log('getAllReports', `${config.API_URL}/reports`);
    // return of([
    //   'report1',
    //   'report2',
    //   'report3',
    //   'report4',
    //   'report5',
    // ]);
  }

  getReport(reportId: string): Observable<Report> {
    return this.http.get<Report>(`${config.API_URL}/reports/${reportId}`);
    // console.log('getReport', `${config.API_URL}/reports/${reportId}`);
    // return {
    //   "columns": [
    //     "average_upload_delay_days",
    //     "common_metric_count",
    //     "date",
    //     "delay_0_day",
    //     "delay_1_day",
    //     "delay_2_3_days",
    //     "delay_4_6_days",
    //     "delay_7_plus_days",
    //     "group_name",
    //     "num_files_uploaded"
    //   ],
    //   "column_types": [
    //     "numeric", // average_upload_delay_days
    //     "integer", // common_metric_count
    //     "date", // date
    //     "integer", // delay_0_day
    //     "integer", // delay_1_day
    //     "integer", // delay_2_3_days
    //     "integer", // delay_4_6_days
    //     "integer", // delay_7_plus_days
    //     "string", // group_name
    //     "integer" // num_files_uploaded
    //   ],
    //   "values": [
    //     [null, null, "Fri, 26 Apr 2024 00:00:00 GMT", null, null, null, null, null, "6f7afe49", null],
    //     [null, null, "Thu, 25 Apr 2024 00:00:00 GMT", null, null, null, null, null, "6f7afe49", null],
    //     [1.7852023393750003, null, "Wed, 24 Apr 2024 00:00:00 GMT", 0, 5, 0, 0, 0, "6f7afe49", 5],
    //     [2.8892446483101857, null, "Tue, 23 Apr 2024 00:00:00 GMT", 0, 0, 2, 0, 0, "6f7afe49", 2],
    //     [4.0247895028009255, null, "Mon, 22 Apr 2024 00:00:00 GMT", 0, 0, 0, 1, 0, "6f7afe49", 1],
    //     [null, null, "Fri, 26 Apr 2024 00:00:00 GMT", null, null, null, null, null, "37a2cf93", null],
    //     [null, null, "Thu, 25 Apr 2024 00:00:00 GMT", null, null, null, null, null, "37a2cf93", null],
    //     [null, null, "Wed, 24 Apr 2024 00:00:00 GMT", null, null, null, null, null, "37a2cf93", null],
    //     [null, null, "Tue, 23 Apr 2024 00:00:00 GMT", null, null, null, null, null, "37a2cf93", null],
    //     [3.771441401064815, null, "Mon, 22 Apr 2024 00:00:00 GMT", 0, 0, 1, 0, 0, "37a2cf93", 1]
    //   ]
    // };
  }

  getAllLeaderboards(): Observable<string[]> {
    return this.http.get<string[]>(`${config.API_URL}/leaderboards`);
    // console.log('getAllLeaderboards', `${config.API_URL}/leaderboards`);
    // return of([
    //   'leaderboard1',
    //   'leaderboard2',
    //   'leaderboard3',
    //   'leaderboard4',
    //   'leaderboard5',
    // ]);
  }

  getLeaderboard(leaderboardId: string): Observable<Report> {
    return this.http.get<Report>(`${config.API_URL}/leaderboards/${leaderboardId}`);
    // console.log('getLeaderboard', `${config.API_URL}/leaderboards/${leaderboardId}`);
    // return {
    //   "columns": [
    //     "average_upload_delay_days",
    //     "common_metric_count",
    //     "date",
    //     "delay_0_day",
    //     "delay_1_day",
    //     "delay_2_3_days",
    //     "delay_4_6_days",
    //     "delay_7_plus_days",
    //     "group_name",
    //     "num_files_uploaded"
    //   ],
    //   "column_types": [
    //     "numeric", // average_upload_delay_days
    //     "integer", // common_metric_count
    //     "date", // date
    //     "integer", // delay_0_day
    //     "integer", // delay_1_day
    //     "integer", // delay_2_3_days
    //     "integer", // delay_4_6_days
    //     "integer", // delay_7_plus_days
    //     "string", // group_name
    //     "integer" // num_files_uploaded
    //   ],
    //   "values": [
    //     [null, null, "Fri, 26 Apr 2024 00:00:00 GMT", null, null, null, null, null, "6f7afe49", null],
    //     [null, null, "Thu, 25 Apr 2024 00:00:00 GMT", null, null, null, null, null, "6f7afe49", null],
    //     [1.7852023393750003, null, "Wed, 24 Apr 2024 00:00:00 GMT", 0, 5, 0, 0, 0, "6f7afe49", 5],
    //     [2.8892446483101857, null, "Tue, 23 Apr 2024 00:00:00 GMT", 0, 0, 2, 0, 0, "6f7afe49", 2],
    //     [4.0247895028009255, null, "Mon, 22 Apr 2024 00:00:00 GMT", 0, 0, 0, 1, 0, "6f7afe49", 1],
    //     [null, null, "Fri, 26 Apr 2024 00:00:00 GMT", null, null, null, null, null, "37a2cf93", null],
    //     [null, null, "Thu, 25 Apr 2024 00:00:00 GMT", null, null, null, null, null, "37a2cf93", null],
    //     [null, null, "Wed, 24 Apr 2024 00:00:00 GMT", null, null, null, null, null, "37a2cf93", null],
    //     [null, null, "Tue, 23 Apr 2024 00:00:00 GMT", null, null, null, null, null, "37a2cf93", null],
    //     [3.771441401064815, null, "Mon, 22 Apr 2024 00:00:00 GMT", 0, 0, 1, 0, 0, "37a2cf93", 1]
    //   ]
    // };
  }
}
