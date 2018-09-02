import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SecondLevelItem } from '../model/SecondLevelItem';
import {   of } from 'rxjs';
import {  delay} from 'rxjs/operators';


@Component({
  selector: 'app-second-level-item-menu',
  templateUrl: './second-level-item-menu.component.html',
  styleUrls: ['./second-level-item-menu.component.scss']
})
export class SecondLevelItemMenuComponent implements OnInit {

  @Input() secondLevelItem: SecondLevelItem;
  @Output() parentCloseNav = new EventEmitter<string>();
  showThumb: boolean = false;
  shouldShowThumb = false;
  imageOffsetTop: number;
  expanded = false;
  @Input() isSubItem = false;
  
  constructor() { 
    
     
  }

  ngOnInit() {
   

  }

  expandGroup(): void {
    this.expanded = !this.expanded

  }

  closeNav(): void {
    this.parentCloseNav.emit("routing occured");
    this.showThumb = false;
    this.shouldShowThumb = false;
  }

  mouseenter($event): void {
    
    if (this.secondLevelItem.thumbnailUrl)
    {
      this.showThumb = true;
      this.shouldShowThumb = true;
      this.imageOffsetTop = $event.srcElement.getBoundingClientRect().top;
    }
  }

  mouseleave(): void{
    this.shouldShowThumb = false;
    of({}).pipe(delay(1000)).subscribe(() => {
      this.showThumb = this.shouldShowThumb});
    
  }

  isSelected(): boolean {
    return true;
  }

}
