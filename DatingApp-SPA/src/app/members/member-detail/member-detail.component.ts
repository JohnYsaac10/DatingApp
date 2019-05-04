import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { INgxGalleryOptions, INgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {


  user: User;
  galleryOptions: INgxGalleryOptions[];
  galleryImages: INgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.data.subscribe(data => {
      this.user = data.user;
    });
    this.galleryOptions = [{
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    }];

    this.galleryImages = this.getImages();
  }

  // loadUser() {

  //   this.userService.getUser(+this.activeRoute.snapshot.params.id).subscribe(user => {
  //     this.user = user;
  //   });
  // }

  getImages() {
    const imageUrls = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.photos.length; i++) {
      imageUrls.push({
        small : this.user.photos[i].url,
        medium : this.user.photos[i].url,
        big : this.user.photos[i].url,
        description: this.user.photos[i].description
      });
    }

    return imageUrls;
  }



}
