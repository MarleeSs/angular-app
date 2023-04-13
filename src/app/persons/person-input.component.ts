import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-person-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})

export class PersonInputComponent {

  @Output() personCreate = new EventEmitter<string>();

  enteredPersonName: string = '';

  onCreatePerson(){

    // convert to lowercase and convert to pascal case
    this.enteredPersonName = this.enteredPersonName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });

    console.log(`Create a person : ${this.enteredPersonName}.`);

    this.personCreate.emit(this.enteredPersonName);

    this.enteredPersonName = '';
  }

}
