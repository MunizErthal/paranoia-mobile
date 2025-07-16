/**
 * Created by Fernando on 03/05/2018.
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({  
	providedIn: 'root'  
})
export class BaseService {
	
	constructor(protected httpClient: HttpClient,
		@Inject('pathControllerParam') private pathController: string) { }

	public get(path?: string, options?: { params?: HttpParams }){
		return this.httpClient.get(`${environment.apiIp}${this.pathController}${path}`, options);  
	}

	public post(path?: string, body?: any, options?: { params?: HttpParams }){
		return this.httpClient.post(`${environment.apiIp}${this.pathController}${path}`, body, options);  
	}

	public put(path?: string, body?: any, options?: { params?: HttpParams }){
		return this.httpClient.put(`${environment.apiIp}${this.pathController}${path}`, body, options);  
	}

	public delete(path?: string, options?: { params?: HttpParams }){
		return this.httpClient.delete(`${environment.apiIp}${this.pathController}${path}`, options);  
	}

	public postMercadoPago(path?: string, body?: any, options?: { params?: HttpParams }){
		return this.httpClient.post(`${path}`, body, options);
	}
}
