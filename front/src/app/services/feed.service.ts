import { Feed } from './../pages/feed/feed';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  feedData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) {
  }

  getFeeds(){
    return this.httpService.get('contents');
    /*
    return [{
      image: "https://s2.glbimg.com/FBBHqbnK-7d7VoSfeLJkknxvQ7E=/940x523/e.glbimg.com/og/ed/f/original/2020/04/30/xbaiana-acaraje.jpg.pagespeed.ic.eajvh4jls7.jpg",
      title: "Como um dia de folga pode ser proveitoso mesmo na quarentena",
      description: "Mesmo sem sair de casa, tirar um dia para se desconectar do trabalho e fazer o que você gosta é importante - e pode ser divertido"
    },
    {
      image: "https://s2.glbimg.com/R25Li2xY8feMJ-40RP3L34RH4fg=/620x345/e.glbimg.com/og/ed/f/original/2019/02/05/gustavo.png",
      title: "Escola de inglês dá 600 bolsas de estudo integrais para desempregados",
      description: "A escola de inglês 4YOU2 Idiomas lança hoje (1/5) inscrições para 600 bolsas de estudo integrais em qualquer uma das suas 13 unidades."
    },
    {
      image: "https://s2.glbimg.com/o75VbAH44vvUDNyllyv8oK6zWHA=/940x523/e.glbimg.com/og/ed/f/original/2020/04/03/o_codigo_bill_gates.jpg",
      title: "Para Bill Gates, estas 2 qualidades separam bons líderes do resto das pessoas",
      description: "O filantropo e fundador da gigante de tecnologia Microsoft falou anteriormente sobre as características que determinam um bom líder. Encontrá-los é especialmente importante neste momento de incerteza para as empresas"
    }];*/
  }

  changeFeedData(data: any) {
    this.feedData$.next(data);
  }

  getCurrentFeedData() {
    return this.feedData$.getValue();
  }

  updateFeedData(newFeed: any) {
    let data = [];
    data.push(newFeed);
    let currentFeedData = this.getCurrentFeedData();
    let newFeedUpdateData = data.concat(currentFeedData);
    this.changeFeedData(newFeedUpdateData);
  }


  deleteFeedData(msgIndex: number) {
    let data = [];
    let currentFeedData = this.getCurrentFeedData();
    currentFeedData.splice(msgIndex, 1);
    let newFeedUpdateData = data.concat(currentFeedData);
    this.changeFeedData(newFeedUpdateData);
  }

  feedData(postData: any): Observable<any> {
    return this.httpService.post('feed', postData);
  }

  feedDelete(postData: any): Observable<any> {
    return this.httpService.post('feedDelete', postData);
  }

  feedUpdate(postData: any): Observable<any> {
    return this.httpService.post('feedUpdate', postData);
  }
}
