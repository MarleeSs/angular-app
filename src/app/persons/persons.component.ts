import {Component, OnInit} from '@angular/core';
import {PersonService} from "./person.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  personList: string[];

  constructor(private personService: PersonService) {
    this.personList = personService.persons;
  }

  ngOnInit() {
    this.personList = this.personService.persons;
  }

  onRemovePerson(personName: string){
    this.personService.removePerson(personName);
  }
}
