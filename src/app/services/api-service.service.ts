import { Injectable } from '@angular/core';
import { CapacitorHttp,HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }
  async getProducts(){

    const options = {
    url: 'http://127.0.0.1:8000/api/listProducts',
     headers: { 'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
     },
    // params: { size: 'XL' },
  };
  const response: HttpResponse = await CapacitorHttp.get(options);

  return response.data;
  }

  async getProduct(id:any){
    const options = {
      url: 'http://127.0.0.1:8000/api/listProducts/'+id,
       headers: { 'Content-Type': 'application/json',
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
       },

    };
    const response: HttpResponse = await CapacitorHttp.get(options);

    return response.data;
  }
  dataURItoBlob(dataURI: any) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
  async createProduct(name:any,price:any,description:any,image:any){

    var blob = this.dataURItoBlob(image);
    const random = Math.random().toString(36).substring(2);
    var imageName = random+'.png';
    const imageFile = new File([blob], imageName);
    console.log(imageFile);
    const options = {
      url: 'http://127.0.0.1:8000/api/createProduct',
       headers: { 'Content-Type': 'multipart/form-data',
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
       },
       data: { name: name,price: price,description: description,image: imageFile },
    };

    const response: HttpResponse = await CapacitorHttp.post(options);

    return response.data;
  }

  async deleteProduct(id:any){
    const options = {
      url: 'http://127.0.0.1:8000/api/deleteProduct/'+id,
       headers: {
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
       },

    };
    const response: HttpResponse = await CapacitorHttp.delete(options);

    return response.data;
  }

  async updateProduct(id:any,name:any,price:any,description:any,image:any){
    const options = {
      url: 'http://127.0.0.1:8000/api/createProduct',
       headers: { 'Content-Type': 'application/json',
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
       },
       params: { id: id },
       data: { name: name,price: price,description: description,image: image },
    };
    const response: HttpResponse = await CapacitorHttp.put(options);

    return response.data;
  }

  async sendURL(){
    const options = {
      url: 'http://172.20.10.2/url?valor=asd',
       headers: { 'Content-Type': 'application/html',
       'Accept': 'application/html',
       'Access-Control-Allow-Origin': 'http://localhost:8100/',
       'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
       },

    };
    const response: HttpResponse = await CapacitorHttp.get(options);

    return response.data;
  }
}
