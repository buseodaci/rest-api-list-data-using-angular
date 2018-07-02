import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

title = 'Products';
products$:  Object;
  constructor( private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.products$ = data
    );
  }
}
