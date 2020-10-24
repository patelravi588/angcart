import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminView',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentUser = "";
  constructor(private router : Router) { 
  }
  
  
  ngOnInit() {
   
  }

}
