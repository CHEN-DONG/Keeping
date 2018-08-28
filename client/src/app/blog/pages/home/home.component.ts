import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../common/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  data = [{
    title: 'asd'
  }];
  getPosts() {
    this.postService.getList()
      .subscribe(result => {
        this.data = result.data;
      })
  }

  ngOnInit() {
    this.getPosts();
  }

}
