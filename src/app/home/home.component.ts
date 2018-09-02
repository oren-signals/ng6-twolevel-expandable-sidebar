import { Component, OnInit } from '@angular/core';
import { UrlListenerService } from '../url-listener.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private urlListener: UrlListenerService) { }

  ngOnInit() {
  }

  getCurrentUrl(): string {
    return this.urlListener.getCurrentUrl();
  }

}
