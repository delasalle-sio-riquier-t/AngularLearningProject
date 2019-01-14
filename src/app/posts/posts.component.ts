import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()title: string;
  @Input() content: string;
  @Input() loveit: number;
  created_at = new Date(2017,11,24,11, 30); //date commune aux 3 article.

  constructor() {

  }

  ngOnInit() {
  }

  getColor() {

    if (this.loveit > 0) {
      return 'green';
    }
    else if (this.loveit < 0) {
      return 'red';
    }
  }

  //fct ajouter un like
  onLike() {
    this.loveit += 1;
  }

  //fct enlever un like
  onDislike() {
    this.loveit -= 1;
  }

  //Gestion de like
  like() {
    if (this.loveit >= 0){
      return "compteur de like : " + this.loveit;
    }
    else {
      return "compteur de dislike: " + -(this.loveit);
    }
  }


}
