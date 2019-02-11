import { Injectable } from "@angular/core";
import { sample } from "underscore";
@Injectable({
  providedIn: "root"
})
export class PawelSayService {
  private RESPONSES = [
    "Ludzie zloci",
    "To jest Legacy code",
    "To jest ctrl C/V",
    "To jest na niskim poziomie",
    "ctrl+c ctrl+v",
    "To jest legacy code",
    "Dependency injection",
    "Ludzie złoci",
    "Postawić kropkę na i",
    "var-ik",
    "Bugfixowe rozwiązanie",
    "Extract to business method",
    "To jest niski poziom",
    "To jest wysoki poziom",
    "Tego nie pomalujesz",
    "W swoje spodnie się nie mieszczę",
    "Historia o HTML-ik",
    "To jest dużo roboty",
    "To nie jest trywialne zagdanienie",
    "Przerywasz mi",
    "Media głównego ścieku",
    "Michalkiewicz",
    "Długo cię znajdę",
    "A ty się programisto jebaj"
  ];
  constructor() {}

  getResponse(): string {
    return sample(this.RESPONSES);
  }
}
