import { Component, OnInit } from '@angular/core';
import { DataEntradas } from '../interfaces/data-entradas';
import { CommonModule, NgFor } from '@angular/common';
import { ApiService } from '../services/api.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ResumenItemsComponent } from '../resumen-items/resumen-items.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { SpinnerLoadingComponent } from '../spinner-loading/spinner-loading.component';
import { InfiniteScrollComponent } from '../components/infinite-scroll/infinite-scroll.component';
import { ExercisesComponent } from '../exercises/exercises.component';


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, ResumenItemsComponent, ErrorMessageComponent, SpinnerLoadingComponent,ExercisesComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {

  loading: boolean = true;
  public DataEntradas$!: Observable<DataEntradas[]>;
  public errorMessage!: string;
  productList: DataEntradas[] = [];
  constructor(private apiservice: ApiService) {
    this.productList;
  }

  ngOnInit(): void {   
    this.getData();

  }

  getData() {
    /*this.apiservice.getData().subscribe(data => {
      this.productList = data; }    
     );*/
    this.DataEntradas$ = this.apiservice.getData().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))
  }

  print() {
    let printContents, popupWin;
    printContents = document.getElementById("print")?.innerHTML.toString();
    printContents = (<string>printContents + "").replace("col-sm", "col-xs");
    popupWin = window.open("", "_blank", "top=0,left=0,height=100%,width=auto");
    popupWin!.document.open();
    popupWin!.document.write(`
        <html>
          <head>
            <title>Reporte</title>
            <meta name="viewport" content="width=10000, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <style>  
  
              .content {
                height: 100vh;
                width: 100%;
                display: flex;
                flex-direction: column;
              }
  
              .img-content {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
              }
  
              .observation {
                height: 150px;
                overflow: hidden;
                overflow-y: auto;
              }
            </style>
          </head>
          <body onload="window.print();">
            ${printContents}
          </body>
        </html>`);
    /* window.close(); */
    popupWin!.document.close();
  }
}
