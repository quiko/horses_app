import { Component, OnInit } from '@angular/core'
import { DataServiceService } from '../services/data-service.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css'],
})
export class HorsesComponent implements OnInit {
  horses = [];

  constructor(
    private horsesService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.horsesService.getHorses().subscribe(
      (res) => (this.horses = res),
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/signin'])
          }
        }
      }
    )
  }
}
