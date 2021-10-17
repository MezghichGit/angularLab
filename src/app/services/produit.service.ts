import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }

  infoProduit()
  {
    alert("Mon premier Service");
  }
}
