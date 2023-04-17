import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonService} from "./person.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit, OnDestroy{
  personList: string[];
  private personListSubs: Subscription = new Subscription();

  constructor(private personService: PersonService) {
    this.personList = personService.persons;
  }

  ngOnInit() {
    this.personService.personChanged.subscribe(persons => {
      this.personList = persons;
    });
    this.personService.fetchPersons();
  }

  onRemovePerson(personName: string){
    this.personService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
