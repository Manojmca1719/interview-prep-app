import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-qus',
  standalone: true,
  imports: [],
  templateUrl: './qus.component.html',
  styleUrl: './qus.component.scss'
})
export class QusComponent implements AfterViewInit {

  @ViewChild('QusModal')
  public QusModal!: ElementRef;

  @Output() isComponentReady: EventEmitter<any> = new EventEmitter<any>();
  public subjectTitle: string = '';
  public qusData: Array<any> = [];

  public element: any;
  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.isComponentReady.emit();
    this.cdRef.detectChanges(); 
  }

  public openQusModal(subject: any, qus: any) {
    this.subjectTitle = subject;
    this.qusData = qus;
    setTimeout(() => {
      this.QusModal.nativeElement.classList.add('show');
    }, 100);
  }

  public closeQusModal() {
    this.QusModal.nativeElement.classList.remove('show');
  }
}
