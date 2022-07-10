import { Component, OnInit } from '@angular/core';
import { User } from '../../_models';
import { AccountService } from '../../_services';

@Component({
  selector: 'app-std-profile',
  templateUrl: './std-profile.component.html',
  styleUrls: ['./std-profile.component.css']
})
export class StdProfileComponent implements OnInit {

  user: User;
  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue
   }

  ngOnInit(): void {
  }

}
