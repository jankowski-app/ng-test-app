import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../model/users";

@Component({
  selector: 'app-user-tab-lists',
  templateUrl: './user-tab-lists.component.html',
  styleUrls: ['./user-tab-lists.component.scss']
})
export class UserTabListsComponent implements OnInit {

  @Input()
  users!: Users[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
