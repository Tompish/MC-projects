import { Component } from '@angular/core';
import {RestAPIService} from './restAPI.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestAPIService]
})
export class AppComponent {

  private fromPromise: string;
  private promiseDepending: string;

  private fromSubscription: string;
  private subscriptionDepending: string;

  constructor(private restAPIService: RestAPIService){}

  private async getFromPromise():Promise<void>{
    await this.restAPIService.returnsPromise()
    .then((res) => { this.fromPromise = res; })
    .catch((err) => console.log('Shitty programming cased this error'))

    this.promiseDepending = 'Beroende av promise';
  }

  private getFromSubscription(): void{

    this.restAPIService.returnsSubsciption()
    .subscribe((res) => { this.fromSubscription = res; })

    this.subscriptionDepending = 'Beroende av subscription';
  }

}
