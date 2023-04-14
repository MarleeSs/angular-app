import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  persons: string[] = ['Coba', 'Aja', 'Atuh'];

  addPerson(name: string){
    this.persons.push(name);
    console.log(this.persons)
  }
}