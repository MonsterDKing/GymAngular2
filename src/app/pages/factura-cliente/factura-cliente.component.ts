import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura-cliente',
  templateUrl: './factura-cliente.component.html',
  styleUrls: ['./factura-cliente.component.css']
})
export class FacturaClienteComponent implements OnInit {

  date:Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
