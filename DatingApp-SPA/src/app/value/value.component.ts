import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {


  constructor(private http: HttpClient ) { }
  Values: any;
  ngOnInit() {
    this.getValues();
  }

  getValues()
  {
    // tslint:disable-next-line: no-shadowed-variable
    this.http.get('http://localhost:5000/api/Values').subscribe(response => { this.Values = response; } );
  }

}
