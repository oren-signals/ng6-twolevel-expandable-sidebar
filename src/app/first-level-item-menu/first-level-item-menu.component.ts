import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FirstLevelItem } from '../model/FirstLevelItem';
import { SecondLevelNavData } from '../model/SecondLevelNavData';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
	selector: 'app-first-level-item-menu',
	templateUrl: './first-level-item-menu.component.html',
	styleUrls: ['./first-level-item-menu.component.scss']
})
export class FirstLevelItemMenuComponent implements OnInit {


	constructor() {

	}

	ngOnInit() {
	
	}

	@Input() firstLevelItem: FirstLevelItem;
	private _isOpen = false;


	@Input() currentUrl: string;

	@Output() parentOpenSecondLevel = new EventEmitter<SecondLevelNavData>();
	@Output() parentCloseNav = new EventEmitter<boolean>();

	expanded = false;
	@Input() isSubItem = false;
	isShowText = false;

	@Input()
	set isOpen(isOpen: boolean) {
		this._isOpen = isOpen;

		// if (this.isSubItem)
		// {
		//   return;
		// }

		if (this._isOpen) {
			of({}).pipe(delay(200)).subscribe(() => {
				this.isShowText = this._isOpen
			});
		}
		else {

			this.isShowText = false
		}
	}

	get isOpen() {
		return this._isOpen;

	}



	expandGroup(): void {
		this.expanded = !this.expanded
		// if (this.expanded)
		// {
		//   this.isShowText = true;
		// }

	}

	openSecondLevelClicked(): void {
		this.parentOpenSecondLevel.emit(this.firstLevelItem.secondLevel)
	}

	isSelected(): boolean {

		if (this.currentUrl === "/" + this.firstLevelItem.url) {
			return true;
		}
		if (this.firstLevelItem.secondLevel && this.firstLevelItem.secondLevel.items) {
			var found = this.firstLevelItem.secondLevel.items.find((item) => {
				if (this.currentUrl === "/" + item.url) {
					return true;
				}
				if (item.group && item.group.length) {
					var foundSubInSecondLevel = item.group.find((item) => this.currentUrl === "/" + item.url)
					if (foundSubInSecondLevel) {
						return true
					}
				}
				return false;
			})
			if (found) {
				return true;
			}

		}
		if (this.firstLevelItem.group && this.firstLevelItem.group.length) {
			var foundSubItem = this.firstLevelItem.group.find((item) => this.currentUrl === "/" + item.url)
			if (foundSubItem) {
				return true;
			}
		}
		return false;
	}

	closeNav() {
		this.parentCloseNav.emit(true);
	}

}
