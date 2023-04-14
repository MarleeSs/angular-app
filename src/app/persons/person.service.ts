import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  persons: string[] = ['Coba', 'Aja', 'Atuh'];

  onPersonCreate(name: string){
    this.persons.push(name);
  }
}
