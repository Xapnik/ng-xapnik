import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  users: any;
  tweets: any;
  instagrams: any;
  disqus: any;
  groupName: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(res => (this.groupName = res.groupName));
    this.loadData();
  }

  ngOnInit() {}

  loadData() {
    this.getUsers();
    this.getTweets();
    this.getInstagrams();
    this.getDisqus();
  }

  getUsers() {
    this.http.get(Constants.usersUrl(this.groupName)).subscribe(data => {
      this.users = data;
    });
  }

  getTweets() {
    this.http.get(Constants.tweetsUrl(this.groupName)).subscribe(data => {
      this.tweets = data;
    });
  }

  getInstagrams() {
    this.http.get(Constants.instagramsUrl(this.groupName)).subscribe(data => {
      this.instagrams = data;
    });
  }

  getDisqus() {
    this.http.get(Constants.disqusUrl(this.groupName)).subscribe(data => {
      this.disqus = data;
    });
  }

  getTweetCount(userId) {
    if (this.tweets) {
      return this.tweets.filter(user => user.XpnkID === userId)[0].TwitterPosts
        .length;
    }
    return null;
  }

  getInstagramCount(userId) {
    if (this.instagrams) {
      return this.instagrams.filter(user => user.XpnkID === userId)[0]
        .InstagramPosts.length;
    }
    return null;
  }

  getDisqusCount(userId) {
    if (this.disqus) {
      return this.disqus.filter(user => user.XpnkID === userId)[0].DisqusPosts
        .length;
    }
    return null;
  }
}
