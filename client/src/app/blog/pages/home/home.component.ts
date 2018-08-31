import { Component, OnInit } from '@angular/core';
import { PostService, DataContent } from '../../../common/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private postService: PostService,
  ) { }

  data: any[];

  getPosts() {
    this.postService.getList().subscribe((dataContent: DataContent) => {
      this.data = dataContent.data;
    });
  }

  ngOnInit() {
    this.getPosts();
  }

}
