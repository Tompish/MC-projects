import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RestAPIService{

    private resultFromAPI : BehaviorSubject<string>;

    constructor( private httpClient:HttpClient){
        this.resultFromAPI = new BehaviorSubject<string>('');
    }

    public returnsPromise() : Promise<string>{

        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {resolve('Svar från API')}, 2000)
        })
    }

    public returnsSubsciption() : Observable<string>{
        setTimeout(() => { this.resultFromAPI.next('Svar från API')}, 2000);
        return this.resultFromAPI;
    }


    private regularHttpCall() : any{
        this.httpClient.get<any>('enUrl').subscribe();

        return this.httpClient.get<any>('enUrl').toPromise();
    }
}