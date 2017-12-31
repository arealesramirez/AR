import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Contact } from './contact.model';

@Injectable()
export class ContactService {

    constructor(private http: HttpClient) { }

    sendMessage(contact: Contact) {
        const body = JSON.stringify(contact);
        const headers = new HttpHeaders({ 'Content-type': 'application/json' });
        return this.http.post('/api/contact/', body, { headers: headers });
    }

}