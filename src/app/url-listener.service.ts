import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UrlListenerService {

	currentUrl: string = null;
	constructor() { }

	setCurrentUrl(url: string)
	{
		this.currentUrl = url;
	}

	getCurrentUrl(): string {
		return this.currentUrl;
	}
}
