import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../data/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title: string = 'Users List';

  data;

  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users.getUsers(1).subscribe(users => {
      this.data = users
    });
  }

}
