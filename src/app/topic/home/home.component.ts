import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from '../../common/common.service';

@Component({ selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss', 
    imports: [RouterLink], 
    providers: [CommonService] })
export class HomeComponent {

  public menuListData: Array<any> = [];

  constructor(private commonService: CommonService) {
    this.getMenuList();
  }
  public getMenuList() {
    this.commonService.getData('./assets/menuList.json').subscribe((data: any) => {
      this.menuListData = data;
    })
  }
}   
