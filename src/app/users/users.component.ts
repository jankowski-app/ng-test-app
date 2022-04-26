import {Component, OnInit} from '@angular/core';
import {ApiDbService} from "../services/api-db.service";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Users} from "../model/users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  isActiveUser!: Observable<Users[]>;
  isNoActiveUser!: Observable<Users[]>;

  constructor(private apiDB: ApiDbService) {
  }

  ngOnInit(): void {

    const users = this.apiDB.findAllUsers();

    this.isActiveUser = users.pipe(
      map(users => users.filter(users => users.isActive === true))
    );

    this.isNoActiveUser = users.pipe(
      map(users => users.filter(users => users.isActive === false))
    );

  }

}
