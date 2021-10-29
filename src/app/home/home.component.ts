import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  // @Input() titleFromApp: string = '';
  // This one worked when home-component was a child of app-componenet
  titleFromApp: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(data => {
        this.titleFromApp = data.title;
        // console.log('data received::', data);
      });
  }

}
