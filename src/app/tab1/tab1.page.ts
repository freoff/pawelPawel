import {Component, OnInit} from '@angular/core';
import {PawelSayService} from '../pawelSay.service.ts/pawel-say.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public pawelSay = 'Narazie nic jeszcze nie powiedzialem';
  public searching = false;
  constructor(private pawelSayService: PawelSayService) {

  }

  ngOnInit(): void {

  }

  getPawelResponse() {
    this.searching = true;
    setTimeout(() => {
      this.pawelSay = this.pawelSayService.getResponse();
      this.searching = false;
    }, 700);
  }
}
