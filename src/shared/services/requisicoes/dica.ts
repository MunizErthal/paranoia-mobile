import { Injectable } from "@angular/core";
import { BaseService } from "./base";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({  
	providedIn: 'root'  
})
export class DicaService extends BaseService {

    constructor(protected override httpClient: HttpClient) {
        super(httpClient, 'dica');
    }

    solicitar(partidaId: string, requisicaoDica: any): Observable<any> {
        let params = new HttpParams().append('partidaId', partidaId);
        return super.post('/solicitar', requisicaoDica, { params });
    }

    video(partidaId: any): Observable<any> {
        let params = new HttpParams().append('partidaId', partidaId);
        return super.get('/video', { params });
    }
}