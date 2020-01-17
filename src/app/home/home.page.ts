import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../pages/image-modal/image-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sliderOpts={
    zoom:false,
    slidesPerView:1.5,
    centeredSlides: true,
    spaceBetween: 20 
  };

  constructor(
    private modalController:ModalController
  ) {

  }


  public openPreview(img){
      this.modalController.create({
         component:ImageModalPage,
         componentProps:{
          img:img
         }
      }).then((modal)=>{
        modal.present();
      })
  }

}
