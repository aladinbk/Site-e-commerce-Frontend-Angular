import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateogoryService {
  public host = 'http://localhost:8584';

  constructor(private httpClient: HttpClient) {
  }

  public getRessource(url) {
    return this.httpClient.get(this.host + url);
  }
    //api post Ressource
    public saveRessource(url, data) {
      return this.httpClient.post(url, data);
    }
    updatecategory(category:any ) {
      return this.httpClient.put(this.host+'/modcategorie/'+ category.id, category);
    }
  public getbycategorie(url3): Observable<any> {
    return this.httpClient.get<any>(url3);
  }
  getonecategorie(id: number) {
    return this.httpClient.get(this.host+'/categories/'+ id);
  }
 
    //api delete produit
    public deletecat(id :number) {
      return this.httpClient.delete(this.host + '/deletecat/'+ id);
    }
  public getProductByCategory(idCat, sortedBy?: any, orderBy?: any): Observable<any> {
    return this.httpClient.get(this.host + '/product/' + idCat +
      '?sortedBy=' + sortedBy + '&orderBy=' + orderBy);
  }
}
