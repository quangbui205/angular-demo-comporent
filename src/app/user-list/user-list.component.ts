import {Component, OnInit} from '@angular/core';
import {IUser} from '../iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  newName: string;
  newAge: number;
  newAddress: string;
  newEmail: string;
  newId: number;

  updateName: string;
  updateAge: number;
  updateAddress: string;
  updateEmail: string;
  updateId: number;


  hidden: boolean = false;
  delete: boolean = true;
  userFilter: IUser[] = [];
  users: IUser[] = [
    {
      id: 0,
      name: 'Manh',
      age: 26,
      address: 'Ha Noi',
      email: 'ducmanh27101994@gmail.com'
    },
    {
      id: 1,
      name: 'Manh2',
      age: 26,
      address: 'Ha Noi2',
      email: 'ducmanh271019942@gmail.com'
    },
    {
      id: 2,
      name: 'Manh3',
      age: 26,
      address: 'Ha Noi3',
      email: 'ducmanh271019943@gmail.com'
    },
    {
      id: 3,
      name: 'Manh4',
      age: 26,
      address: 'Ha Noi4',
      email: 'ducmanh271019944@gmail.com'
    }
  ];


  constructor() {
  }

  ngOnInit(): void {

    this.userFilter = this.users;
  }

  // tslint:disable-next-line:typedef
  changeHidden() {
    this.hidden = !this.hidden;
  }

  search(event) {
    let keyword = event.target.value.toLowerCase();
    console.log(keyword);
    this.userFilter = (keyword) ? this.filterUser(keyword) : this.users;
  }

  filterUser(keyword) {
    return this.users.filter(user => {
      return user.name.toLowerCase().indexOf(keyword) !== -1;
    });
  }

  deleteUser(id) {
    let index = this.userFilter.findIndex(userFilter => userFilter.id === id);
    this.userFilter.splice(index, 1);
  }

  addUser() {
    this.userFilter.unshift({
      id: this.userFilter.length + 1,
      name: this.newName,
      age: this.newAge,
      address: this.newAddress,
      email: this.newEmail
    });
  }

  editUser(id){
  console.log(id);
    let index = this.userFilter.findIndex(userFilter => userFilter.id === id);
    this.updateName = this.userFilter[index].name;
    this.updateId = this.userFilter[index].id;
    this.updateAge = this.userFilter[index].age;
    this.updateAddress = this.userFilter[index].address;
    this.updateEmail = this.userFilter[index].email;


  }

  updateUser(){
    console.log(this.userFilter[this.updateId]);

   this.userFilter.splice(this.updateId,1,{
     id: this.updateId,
     name: this.updateName,
     age: this.updateAge,
     address: this.updateAddress,
     email: this.updateEmail
   });
  }
}
