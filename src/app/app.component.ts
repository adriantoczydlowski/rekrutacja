import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

interface Post {
  id: number;
  title: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rekrutacja';
  dataIsAvailable: boolean;
  posts: Post[];

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  ngOnInit() {
    this.apiService.getProfile()
      .subscribe(posts => {
        this.posts = posts.json();
        this.dataIsAvailable = true;
      });
  }
}
