import { Component, ViewChild } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss',
  providers: [CommonService]
})
export class JavascriptComponent {

  public dataQusAns: Array<any> = [];
  constructor(private commonService: CommonService) {
    this.getQusAnsJsonData();
  }

  public getQusAnsJsonData() {
    this.commonService.getData('./assets/jsQus.json').subscribe((data: any) => {
      this.dataQusAns = data;
    })
  }
}
