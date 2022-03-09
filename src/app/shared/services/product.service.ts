import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient ,HttpEvent, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { product } from 'src/app/home/product/Model/product.model';
const httpOptions: any = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.apiUrl + '/products';
  public host = 'http://localhost:8584';

  constructor(private httpClient: HttpClient) {
  }
  //api get Ressource
  public getRessource(url){
    return this.httpClient.get(this.host + url);
  }
    //api post Ressource
  public saveRessource(url, data) {
    return this.httpClient.post(url, data);
  }
  //api one produit
  public getproduit(url2): Observable<product> {
    return this.httpClient.get<product>(url2);
  }
  //api one produit
  public getproduit2(url2):any{
    return this.httpClient.get(this.host+'/products/'+ url2); 
   }

    //api getone produit

  public getproduct(url4): Observable<product> {
    return this.httpClient.get<product>(url4);
  }
    //api getall produits

  public getproducts(page: number, size: number): Observable<product> {
    return this.httpClient.get<product>(this.host + '/products?page=' + page + '&size=' + size);
  }
  //api getall produits
  getAll(page, size): Observable<any> {
  return  this.httpClient.get(this.url + '?page=' + page + '&size=' + size);
  }
  //api getnew produits
  public getProductBynew(){
    return this.httpClient.get<product>(this.host + '/product/last');
  }
  //api get produit by keyword
  public getOffpagebyKey(mc: string, page: number, size: number): Observable<product> {
    return this.httpClient.get<product>(this.host + '/products/search/byNameproduit?mc=' + mc + '&page=' + page + '&size=' + size);
  }
  //api delete produit
  public deleteprod(id :number) {
    return this.httpClient.delete(this.host + '/deleteproduit/'+ id);
  }
//api upload photo1 du produit
  uploadPhotoOffre(file: File, id): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', this.host + '/uploadPhoto/' + id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.httpClient.request(req);
  }
//api upload photo2 du produit
  uploadPhotoOffre2(file: File, id): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', this.host + '/uploadPhoto2/' + id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.httpClient.request(req);
  }
//api upload photo3 du produit
  uploadPhotoOffre3(file: File, id): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', this.host + '/uploadPhoto3/' + id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.httpClient.request(req);
  }
//api edit produit
  updateoffre(p: product) {
    return this.httpClient.put(this.host+'/editproduit/' + p.id, p);
  }

}
