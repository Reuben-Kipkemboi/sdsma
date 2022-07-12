import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-std-nav',
  templateUrl: './std-nav.component.html',
  styleUrls: ['./std-nav.component.css']
})
export class StdNavComponent implements OnInit {
  user!: User;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }
  logout() {
    this.accountService.logout();
}

  ngOnInit(): void {
  }

}
