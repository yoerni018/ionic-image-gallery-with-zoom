import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  img: number;
  sliderOpts = {
    zoom: {
      maxRatio: 8
    }
  };

  @ViewChild( IonSlides , null) slider: IonSlides;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {
  }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  zoom(zoomIn: boolean) {

    //let zoom:any =this.slider.el.swiper.zoom;
    let element:any = this.slider.length;
    let zoom = element.swiper.zoom;

    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }

  }

  close() {
    this.modalController.dismiss();
  }

}
