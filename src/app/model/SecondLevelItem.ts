export class SecondLevelItem
{
    text: string;
    url: string;
    thumbnailUrl: string;
    group: SecondLevelItem[];


	constructor($text: string, $url: string, $thumbnailUrl: string) {
		this.text = $text;
		this.url = $url;
		this.thumbnailUrl = $thumbnailUrl;
	}



}
