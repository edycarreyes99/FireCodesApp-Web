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
    var pg = particleground(document.getElementById('particles'), {
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
    pg.start();
    
    M.AutoInit();
  }
}
