import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { IconsModule } from '../icons/icons.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconsModule, HttpClientModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [CommonService]
})
export class HeaderComponent {
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
