import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({  
	providedIn: 'root'  
})  
export class LocalInfoService {
	
	constructor(protected httpClient: HttpClient) { }

    get(): Observable<any> {
        return this.httpClient.get('https://ipinfo.io/json?token=5addc8b291530f');
    }
}