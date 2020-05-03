import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';
import { Feed } from './feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {
  public authUser: any;
  public feeds: any;

  postData = {
    user_id: '',
    token: ''
  };
  constructor(
    private auth: AuthService,
    private feedSerive: FeedService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.feedSerive.getFeeds().subscribe(
      res  => {
        this.feeds = res;
        console.log(this.feeds);
      }, err => {

      }
    );
   
  }

  
}
