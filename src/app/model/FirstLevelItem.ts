import {SecondLevelNavData} from './SecondLevelNavData';


export class FirstLevelItem
{
    iconName: string;
    text: string;
    secondLevel: SecondLevelNavData;
    url: string;
    group: FirstLevelItem[];

    /**
     *
     */
    constructor(iconName: string, text: string, url: string, secondLevel: SecondLevelNavData) {
        this.iconName = iconName;
        this.text = text;
        this.url = url;
        this.secondLevel = secondLevel;
    }

    

    

    
}