import { Component } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[CommonService]
})
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
