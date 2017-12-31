import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'message': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contact = new Contact(
        this.contactForm.get('name').value,
        this.contactForm.get('email').value,
        'Message from AR App',
        this.contactForm.get('message').value,
      );
      this.contactForm.reset();
      this.contactService.sendMessage(contact)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    }
  }
}
