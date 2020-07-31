import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: string ="";
  searchText: string = "";
  listedSearchProduct: any;
  @Output() currentSearch = new EventEmitter<string>();
  constructor(private router : Router) { }

  ngOnInit() {
    this.currentUser= sessionStorage.getItem('userName');
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

}
