import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  anio: number;
  constructor() {
    this.anio = 0;
  }

  ngOnInit(): void {
    const fecha = new Date();
    let year = fecha.getFullYear();
    this.anio = year;

  }

}
