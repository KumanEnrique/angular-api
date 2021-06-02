import { Component, OnInit } from '@angular/core';
import {users} from '../../models/modelo'
import {ConcentradorService} from '../../services/concentrador.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users
  constructor(public service:ConcentradorService) { }

  ngOnInit(){
    this.service.getUsers()
    .subscribe(
      users => {
        this.users = users
        // console.log(users)
        console.log(this.users.data)
      },
      error => console.log(error)
    )
  }

  show(user){
    console.log(user)
  }
}
