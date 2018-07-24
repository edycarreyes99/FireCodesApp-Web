import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import * as M from 'materialize-css';

import {Router} from '@angular/router';
import {ServicioService} from '../../servicio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidenav = false;
  constructor(
    public router:Router,
    public service: ServicioService
  ) { }

  ngOnInit() {
    //se Inicializan todos los componentes de MaterializeCss
    M.AutoInit();
  }

  
}
