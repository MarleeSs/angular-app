import { Component } from '@angular/core';
import {PersonService} from "./person.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  personList: string[];

  constructor(personService: PersonService) {
    this.personList = personService.persons;
  }
}
