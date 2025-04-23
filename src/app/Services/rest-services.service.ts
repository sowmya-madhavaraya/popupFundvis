import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccordionItem } from '../Models/accordion-item.model';

@Injectable({
  providedIn: 'root'
})
export class RestServices {

  constructor(private http: HttpClient) { }

  getAccordionItems(): Observable<AccordionItem[]> {
    return this.http.get<AccordionItem[]>('/assets/data/accordion-items.json');
  }
}
