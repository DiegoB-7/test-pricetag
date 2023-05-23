import { Component  } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { ModalController } from '@ionic/angular';
import { CreateProductModalComponent } from '../components/create-product-modal/create-product-modal.component';
import { ToastController,AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  products:any;

  constructor(private apiService:ApiServiceService,
    private modalCtrl: ModalController,
    private toastController:ToastController,
    private alertController:AlertController,
    private loadingController:LoadingController) {}

  ngOnInit(){
    this.loadingController.create({
      message: 'Cargando...'
    }).then((loading:any)=>{
      loading.present();
      this.getProduct();
      setTimeout(() => {

        loading.dismiss();
      }, 1000);
    });


  }

  async presentToast(message:any,color:any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: color
    });

    await toast.present();
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.getProduct();
      event.target.complete();
    }, 2000);
  }

  async openCreateProductModal(){
    const modal = await this.modalCtrl.create({
      component: CreateProductModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.createProduct(data);
    }
  }

  getProduct(){
    this.apiService.getProducts().then((data)=>{
      this.products = data;

    });
  }

  createProduct(data:any){
    this.apiService.createProduct(data.name,data.price,data.description,data.image).then((data)=>{
    this.loadingController.create({
      message: 'Cargando...'
    }).then((loading:any)=>{
      loading.present();
      this.getProduct();

      setTimeout(() => {

        loading.dismiss();
        this.presentToast('¡Producto creado exitosamente!','success');
      }, 1000);

    });
    });


  }

  async deleteProduct(id:any){

    const alert = await this.alertController.create({
      header: 'Advertencia',
      subHeader: '¿Está seguro de eliminar este producto?',
      message: 'Esta acción no se puede deshacer.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah:any) => {

          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.apiService.deleteProduct(id).then((data)=>{
              this.loadingController.create({
                message: 'Cargando...'
              }).then((loading:any)=>{
                loading.present();

              this.getProduct();
              setTimeout(() => {
                loading.dismiss();
              this.presentToast('¡Producto eliminado exitosamente!','success');
              }, 1000);
            });

            });
          }
        }
      ]

    });

    await alert.present();


  }

  async updateProduct(id:any,name:any,price:any,description:any,image:any){
    const alert = await this.alertController.create({
      header: 'Advertencia',
      subHeader: '¿Está seguro de editar este producto?',
      message: 'Esta acción si se puede deshacer.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah:any) => {

          }
        }, {
          text: 'Editar',
          cssClass: 'primary',
          handler: () => {
            this.apiService.updateProduct(id,name,price,description,image).then((data)=>{
              this.loadingController.create({
                message: 'Cargando...'
              }).then((loading:any)=>{
                loading.present();

              this.getProduct();
              setTimeout(() => {
                loading.dismiss();
              this.presentToast('¡Producto actualizado exitosamente!','success');
              }, 1000);
            });
            });
          }
        }
      ]

    });

    await alert.present();

  }

}
