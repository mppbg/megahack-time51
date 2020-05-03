import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor() {}

  getEvents() {
    return [
      {
        date: new Date(),
        title:
          "MEI - Como declarar seu imposto de renda e não cair na boca do leão",
        image:
          "https://s2.glbimg.com/2f8CPD98M-IrVYtfpl4lv3viteI=/940x523/e.glbimg.com/og/ed/f/original/2020/04/30/person-wearing-pair-of-black-slides-1272328.jpg",
      },
    ];
  }
}
