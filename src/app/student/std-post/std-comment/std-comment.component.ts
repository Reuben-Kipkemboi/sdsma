import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-std-comment',
  templateUrl: './std-comment.component.html',
  styleUrls: ['./std-comment.component.css']
})
export class StdCommentComponent implements OnInit {
  
  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
  }

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
