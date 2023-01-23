import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-prout',
  templateUrl: './prout.component.html',
  styleUrls: ['./prout.component.css']
})
export class ProutComponent {
  user: User = new User('', '', '', '');

  onSubmit = (): void => {
    console.log(this.user);
  };
}


