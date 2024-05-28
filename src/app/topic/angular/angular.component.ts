import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { QusComponent } from '../../common/qus/qus.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss', 
  imports: [], 
  providers: [CommonService]
})
export class AngularComponent {
  @ViewChild('qusContainerRef', { read: ViewContainerRef })
  qusContainer!: ViewContainerRef;

  public qusComponent!: ComponentRef<QusComponent>;
  public dataQusAns: Array<any> = [];
  public qusAloneData: Array<any> = [];

  constructor(private commonService: CommonService) {
    this.getQusAnsJsonData();
  }

  public getQusAnsJsonData() {
    this.commonService.getData('./assets/ngQus.json').subscribe((data: any) => {
      this.dataQusAns = data;
      this.dataQusAns.forEach((data: any) => {
        this.qusAloneData.push(data.qus)
        data["visibility"] = "ans" in data;
      })
    })
  }

  public getQusModal() {
    this.qusContainer.clear();
    this.qusComponent = this.qusContainer.createComponent(QusComponent);
    this.qusComponent.instance.isComponentReady.subscribe(() => {
      this.qusComponent.instance.openQusModal('Angular', this.qusAloneData);
    })
    // this.QusComponent.openQusModal('Javascript', this.qusAloneData);
  }
}
