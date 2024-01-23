import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qus',
  standalone: true,
  imports: [],
  templateUrl: './qus.component.html',
  styleUrl: './qus.component.scss'
})
export class QusComponent {

  @ViewChild('QusModal')
  public QusModal!: ElementRef;

  public subjectTitle: string = '';
  public qusData: Array<any> = [];

  public element: any;
  constructor() { }
  public openQusModal(subject: any, qus: any) {
    this.subjectTitle = subject;
    this.qusData = qus;    
    this.QusModal.nativeElement.classList.add('show');
  }

  public closeQusModal() {
    this.QusModal.nativeElement.classList.remove('show');
  }
}
