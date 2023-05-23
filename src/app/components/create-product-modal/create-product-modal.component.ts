import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.scss'],
})
export class CreateProductModalComponent   {

  image: any;
  name: any;
  price: any;
  description: any;

  constructor(private modalCtrl: ModalController) { }


  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    const data = {
      image: this.image,
      name: this.name,
      price: this.price,
      description: this.description
    }
    return this.modalCtrl.dismiss(data, 'confirm');
  }

}
