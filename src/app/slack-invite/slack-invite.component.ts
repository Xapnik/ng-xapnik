import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Constants } from '../constants';

@Component({
  selector: 'app-slack-invite',
  templateUrl: './slack-invite.component.html',
  styleUrls: ['./slack-invite.component.css']
})
export class SlackInviteComponent implements OnInit {
  message: string;
  isSuccess: boolean;
  isError: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    const params = this.route.snapshot.queryParamMap;
    const token = params.get('xpnk_tkn');
    const groupName = params.get('group');
    this.checkInvite(token, groupName);
  }

  checkInvite(token, groupName) {
    this.http.get(Constants.checkInviteUrl(token, groupName)).subscribe(data => {
      this.isSuccess = true;
      this.isError = false;
      this.message = 'Redirecting to login ...';
      this.router.navigate(['/group/' + groupName]);
    }, (err: HttpErrorResponse) => {
      this.isSuccess = false;
      this.isError = true;
      this.message = err.error['error']['GroupName'];
    });
  }

  ngOnInit() {}
}
