import {Component} from "@angular/core";
import {PersonService} from "./person.service";

@Component({
  selector: 'app-person-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})

export class PersonInputComponent {

  enteredPersonName: string = '';

  constructor(private personService: PersonService) {

  }

  onCreatePerson(){

    // convert to lowercase and convert to pascal case
    this.enteredPersonName = this.enteredPersonName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });

    console.log(`Create a person : ${this.enteredPersonName}.`);

    this.personService.addPerson(this.enteredPersonName);

    this.enteredPersonName = '';
  }

}
