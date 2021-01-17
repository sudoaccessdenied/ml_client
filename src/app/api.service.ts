import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private _http: HttpClient) {  }

  knn(value:any):Observable<void |any>
  {

        const headers = {'Content-Type':'application/json; charset=utf-8','Accept':'application/json'};
        let body  = { 
                      'select': parseInt(value.select),    
                      'split':parseFloat(value.split),
                      // 'dist_type':lang,
                      'k':parseInt(value.k),                                             
                    
                    }  
        return this._http.post<any>(environment.knn,body,{headers});
  }
  
  linear(value:any):Observable<void |any>
  {

        const headers = {'Content-Type':'application/json; charset=utf-8','Accept':'application/json'};
        let body  = { 
                      'select': parseInt(value.select),    
                      'split':parseFloat(value.split),
                      // 'dist_type':lang,
                      'num_iterations':parseInt(value.num_iterations),
                      'learning_rate':parseFloat(value.learning_rate)
                                                       
                    
                    }  
        return this._http.post<any>(environment.linReg,body,{headers});
  }
  
  logistic(value:any):Observable<void |any>
  {

        const headers = {'Content-Type':'application/json; charset=utf-8','Accept':'application/json'};
        let body  = { 
                      'select': parseInt(value.select),    
                      'split':parseFloat(value.split),
                      // 'dist_type':lang,
                      'num_iterations':parseInt(value.num_iterations),
                      'learning_rate':parseFloat(value.learning_rate)
                                                       
                    
                    }  
        return this._http.post<any>(environment.logistic,body,{headers});
  }
  neural(value:any,hiddenLayer:any):Observable<void |any>
  {
        

        const headers = {'Content-Type':'application/json; charset=utf-8','Accept':'application/json'};
        let body  = { 
                      'select': parseInt(value.select),    
                      'split':parseFloat(value.split),
                      'hidden_layer':hiddenLayer,
                      'num_iterations':parseInt(value.num_iterations),
                      'learning_rate':parseFloat(value.learning_rate)
                                                       
                    
                    }  
        return this._http.post<any>(environment.neural,body,{headers});
  }
  
  kmeans(value:any):Observable<void |any>
  {

        const headers = {'Content-Type':'application/json; charset=utf-8','Accept':'application/json'};
        let body  = { 
                      'dist_type': value.dist_type,    
                      // 'split':parseFloat(value.split),
                      // 'hidden_layer':value.hidden_layer.split(",").map((x:string)=> parseInt(x)),
                      'num_iterations':parseInt(value.num_iterations),
                      'k':parseFloat(value.k)
                    }  
        return this._http.post<any>(environment.kmeans,body,{headers});
  }
  
}





