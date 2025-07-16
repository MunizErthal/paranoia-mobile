import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalEventService {

    private globalSubject = new Subject<any>();

    publishSomeData(data: any) {
        this.globalSubject.next(data);
    }

    getObservable(): Subject<any> {
        return this.globalSubject;
    }
}
