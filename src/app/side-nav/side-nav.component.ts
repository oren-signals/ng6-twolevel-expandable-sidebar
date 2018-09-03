import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavData } from '../model/NavData';
import { SecondLevelNavData } from '../model/SecondLevelNavData';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FirstLevelItem } from '../model/FirstLevelItem';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UrlListenerService } from '../url-listener.service';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {


  isOpen = false;
  shouldBeOpen = false;
  isSecondLevelOpen = false;
  navData: NavData = null;
  secondLevelNavData: SecondLevelNavData;
  favoritesItem: FirstLevelItem;
  galleryItem: FirstLevelItem;
  navigationItem: FirstLevelItem;

  constructor(private dataService: DataService, private router: Router, private urlListener: UrlListenerService) { 
    this.favoritesItem = new FirstLevelItem("favorite", "Favorites", "favorites", null);
    this.galleryItem = new FirstLevelItem("photo_library", "Gallery", "gallery", null);
    this.navigationItem = new FirstLevelItem("menu", "Navigation", null, null);
  }

  

  ngOnInit() {
    this.navData = this.dataService.getSideNaveData();
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd ) {
        this.urlListener.setCurrentUrl(e.url);
      }
    })

  }

  mouseenterNav(e): void {
    this.shouldBeOpen = true;
    of({}).pipe(delay(100)).subscribe(() => {
      
        this.isOpen = this.shouldBeOpen;
      
    })

  }


  mouseleaveNav(e): void {
    this.shouldBeOpen = false;
    of({}).pipe(delay(1000)).subscribe(() => {
      if (!this.shouldBeOpen) {
        this.closeAll();
      }
    })
  }

  closeAll(): void {
    this.isOpen = false;
    this.isSecondLevelOpen = false;
  }

  openSecondLevel($secondLevelNavData: SecondLevelNavData): void {
    this.isSecondLevelOpen = true;
    this.isOpen = true;
    this.secondLevelNavData = $secondLevelNavData;
  }

  closeNav($e: string): void {
    this.closeAll();
  }


}
