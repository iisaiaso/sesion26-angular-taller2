import { Component, OnInit } from '@angular/core';
import { ListUserService } from 'src/app/services/list-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  
  userList:any[]=[]

  constructor(private userService : ListUserService){}

  ngOnInit(): void {
      this.userService.getUser().subscribe(res =>{
        this.userList = res
      })
  }
}
