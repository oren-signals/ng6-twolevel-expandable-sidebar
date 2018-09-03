import { Injectable } from '@angular/core';
import {NavData} from './model/NavData';
import { FirstLevelItem } from './model/FirstLevelItem';
import { SecondLevelItem } from './model/SecondLevelItem';
import { SecondLevelNavData } from './model/SecondLevelNavData';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSideNaveData(): NavData {
    var navData: NavData = new NavData();
    navData.firstLevel.items = [];
    navData.firstLevel.items.push(new FirstLevelItem("home", "Home", "", null));
    var chartsItem = new FirstLevelItem("bar_chart", "Charts", null, null);
    chartsItem.group = [new FirstLevelItem("search", "Sub Search", "search", null)]
    navData.firstLevel.items.push(chartsItem);
    var secondLevelItem: SecondLevelItem = new SecondLevelItem("Competitive", "competitive", "https://d1q6f0aelx0por.cloudfront.net/icons/d4mac-artboard2.png");
    var groupSecondLevelItem: SecondLevelItem = new SecondLevelItem("Group", null, null);
    groupSecondLevelItem.group = [
      new SecondLevelItem("My Dashboard", "dashboard", "https://docs.microsoft.com/en-us/power-bi/media/service-dashboards/power-bi-dashboard2.png"),
      new SecondLevelItem("QMs", "qms", null)
    ]
    var secondLevelNavData = new SecondLevelNavData();
    secondLevelNavData.items = [secondLevelItem, groupSecondLevelItem];
    navData.firstLevel.items.push(new FirstLevelItem("show_chart", "Insights", null, secondLevelNavData))


    return navData;
  }

}
