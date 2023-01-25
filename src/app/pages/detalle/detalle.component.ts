import { ListUserService } from 'src/app/services/list-user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: any
  userId: any = []
  constructor(private route: ActivatedRoute, private userService: ListUserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.userService.getUser().subscribe(res => {this.userId = res})
  }

}
