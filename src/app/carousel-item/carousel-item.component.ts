import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carousel-item',
  template: `
<div class="carousel-item text-center" *ngIf="isActive" >
   <ng-content></ng-content>
</div>
`
})
export class CarouselItemComponent implements OnInit {
  
  isActive:boolean = false;

  constructor() { }

  ngOnInit() {

  }

}
