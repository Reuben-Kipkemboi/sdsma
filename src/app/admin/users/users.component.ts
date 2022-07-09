import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userlist: any = [];

  ngOnInit() {
    this.getUsers();
  }

  constructor(
    private router: Router,
    private usersService: UsersService

  ) { }

  getUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.userlist = data;
    })
  }


}
