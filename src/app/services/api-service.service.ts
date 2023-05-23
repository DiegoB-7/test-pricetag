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
      // params: { size: 'XL' },
    };
    const response: HttpResponse = await CapacitorHttp.get(options);

    return response.data;
  }

  async createProduct(name:any,price:any,description:any,image:any){

    const options = {
      url: 'http://127.0.0.1:8000/api/createProduct',
       headers: { 'Content-Type': 'image/png',
       'Accept': 'image/png',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
       },
       data: { name: name,price: price,description: description,image: image },
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

}
