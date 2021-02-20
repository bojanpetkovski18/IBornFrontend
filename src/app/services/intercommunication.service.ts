import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IProduct } from '../../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class IntercommunicationService {
  constructor() {}

  subject = new Subject();

  deliver(product: IProduct) {
    this.subject.next(product);
  }

  recieve() {
    return this.subject.asObservable();
  }
}
