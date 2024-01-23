import { Component, ViewChild } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { HttpClientModule } from '@angular/common/http';
import { QusComponent } from '../../common/qus/qus.component';

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [HttpClientModule, QusComponent],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss',
  providers: [CommonService]
})
export class JavascriptComponent {

  @ViewChild(QusComponent) QusComponent!: QusComponent;

  public dataQusAns: Array<any> = [];
  public qusAloneData:Array<any> = [];
  constructor(private commonService: CommonService) {
    this.getQusAnsJsonData();
  }

  public getQusAnsJsonData() {
    this.commonService.getData('./assets/jsQus.json').subscribe((data: any) => {
      this.dataQusAns = data;
      this.dataQusAns.forEach((data:any)=>{
        this.qusAloneData.push(data.qus)
        data["visibility"] = "ans" in data;
      })
    })
  }

  public getQusModal(){
    this.QusComponent.openQusModal('Javascript', this.qusAloneData);
  }
}
