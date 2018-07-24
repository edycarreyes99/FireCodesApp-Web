import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import * as M from 'materialize-css';

import {ServicioService} from '../../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sidenav = false;
  constructor(
    servicio : ServicioService
  ) { }

  ngOnInit() {
    M.AutoInit();
  }
}
