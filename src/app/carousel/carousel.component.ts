import { Component, Input, OnInit, AfterContentInit, ContentChildren, QueryList  } from '@angular/core';
import {CarouselItemComponent} from '../carousel-item/carousel-item.component';

@Component({
  selector: 'carousel',
  template: `
<div class="carousel-item text-center">
   <ng-content></ng-content>
</div>
`
})
export class CarouselComponent implements OnInit, AfterContentInit {

  @Input()                                delay:number;

  @ContentChildren(CarouselItemComponent) children:QueryList<CarouselItemComponent>;
  
  currentIndex:number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){

      setInterval(  
        () => {
          this.currentIndex++;
          if(this.currentIndex > 2){
            this.currentIndex = 0;
          }
          let carouselItemList = this.children.toArray();
          carouselItemList.forEach( item => item.isActive = false );
          carouselItemList[this.currentIndex].isActive = true;
        }, this.delay);
  } 

}
