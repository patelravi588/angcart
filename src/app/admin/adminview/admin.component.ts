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
  productList: any;
  colours =["Green","Blue","Gold","Black","Copper","Brown","Bronze","Maroon"];
  brands =["pe","znopy","twin","holysin","foxzy","finery","scarpia","adreno"];
  searchText: string = "";
  listedSearchProduct: any;
  test = "ddf";
  
  ngOnInit() {
    this.currentUser= sessionStorage.getItem('userName');
    if(!this.currentUser){
      this.router.navigate(["/login"]);
    }
    this.getProductDetail(); 
  }

  getProductDetail(){
    this.productList = this.products;
  }
  products = [
    {
      "id": "SHOEWPCWKQJFGDBQ",
      "colour": {
        "color": "#00AF33",
        "title": "Green"
      },
      "brand": "peter england pe",
      "discount": 0,
      "rating": 3.8,
      "image": "https://rukminim1.flixcart.com/image/312/312/j752nww0/shoe/h/5/e/1055-8-provogue-royal-blue-original-imaexgcfmfghaf8f.jpeg?q=70",
      "price": {
        "final_price": 2399
      },
      "title": "Provogue Running Shoes For Men"
    },
    {
      "id": "SHOEZURHKVX24H8P",
      "colour": {
        "color": "#33A1DE",
        "title": "Blue"
      },
      "brand": "znopy",
      "discount": 10,
      "rating": 4.3,
      "image": "https://rukminim1.flixcart.com/image/312/312/jao8uq80/shoe/3/r/q/sm323-9-sparx-white-original-imaezvxwmp6qz6tg.jpeg?q=70",
      "price": {
        "final_price": 749
      },
      "title": "Sparx SD0323G Canvas Shoes For Men"
    },
    {
      "id": "SHOERHTCZRH8YGMW",
      "colour": {
        "color": "#FFD700",
        "title": "Gold"
      },
      "brand": "gowell",
      "discount": 50,
      "rating": 4,
      "image": "https://rukminim1.flixcart.com/image/312/312/shoe/2/p/r/ar4697-414-8-lotto-414-original-imaes9ebjqy4g8cn.jpeg?q=70",
      "price": {
        "mrp": 2299,
        "final_price": 1149
      },
      "title": "Lotto Running Shoes For Men"
    },
    {
      "id": "SHOF23SGG6KG5KXK",
      "colour": {
        "color": "#292421",
        "title": "Black"
      },
      "brand": "twin",
      "discount": 54,
      "rating": 4.2,
      "image": "https://rukminim1.flixcart.com/image/312/312/jepzrm80/shoe/7/f/h/nm005-8-provogue-black-original-imaf3chbxgtdkhfv.jpeg?q=70",
      "price": {
        "mrp": 1699,
        "final_price": 769
      },
      "title": "Provogue FCS-005 Canvas Shoes For Men"
    },
    {
      "id": "SHOEQDTHFC8CAYWY",
      "colour": {
        "color": "#B87333",
        "title": "Copper"
      },
      "brand": "holysin",
      "discount": 50,
      "rating": 4.4,
      "image": "https://rukminim1.flixcart.com/image/312/312/shoe/y/w/y/vn0002gprvn1-9-vans-black-formula-one-checkerboard-original-imaes6y8fsbbqqfc.jpeg?q=70",
      "price": {
        "mrp": 2999,
        "final_price": 1499
      },
      "title": "Vans CLASSIC SLIP-ON Loafers For Men"
    },
    {
      "id": "SHOFFBZ8BY5RKRAN",
      "colour": {
        "color": "#5C3317",
        "title": "Brown"
      },
      "brand": "foxzy",
      "discount": 45,
      "rating": 4.4,
      "image": "https://rukminim1.flixcart.com/image/312/312/jerf7gw0/shoe/a/u/z/run-dashride-xtreme-ss18-8-reebok-navy-neon-gren-original-imaf3dd3zaysmgag.jpeg?q=70",
      "price": {
        "mrp": 3999,
        "final_price": 2199
      },
      "title": "REEBOK RUN DASHRIDE XTREME Running Shoes For Men"
    },
    {
      "id": "SHOF2YU6JEHCSHJH",
      "colour": {
        "color": "#5C3317",
        "title": "Brown"
      },
      "brand": "finery",
      "discount": 0,
      "rating": 3.4,
      "image": "https://rukminim1.flixcart.com/image/312/312/jd0jtzk0/shoe/6/z/d/af-103-10-andrew-scott-brown-original-imaf2ywnvj7s6n5y.jpeg?q=70",
      "price": {
        "final_price": 499
      },
      "title": "Andrew Scott High Grade PU Loafers For Men"
    },
    {
      "id": "SHOEXP7YXBFDNPDB",
      "colour": {
        "color": "#8C7853",
        "title": "Bronze"
      },
      "brand": "scarpia",
      "discount": 65,
      "rating": 3.9,
      "image": "https://rukminim1.flixcart.com/image/312/312/j7z2wsw0/shoe/y/g/x/ca4050-9-kraasa-beige-original-imaexqtch3fwwjt5.jpeg?q=70",
      "price": {
        "mrp": 1299,
        "final_price": 499
      },
      "title": "Kraasa The Rock Boots For Men"
    },
    {
      "id": "SHOF2WTUQMH6MJDB",
      "colour": {
        "color": "#B87333",
        "title": "Copper"
      },
      "brand": "adreno",
      "discount": 30,
      "rating": 3.8,
      "image": "https://rukminim1.flixcart.com/image/312/312/je5zlow0/shoe/h/u/y/c-s-1aor-6-glizt-orange-original-imaf2xfdey8fg6uh.jpeg?q=70",
      "price": {
        "mrp": 999,
        "final_price": 699
      },
      "title": "Glizt Running Shoes For Men"
    },
    {
      "id": "SHOEVQTQYJZRSXCP",
      "colour": {
        "color": "#800000",
        "title": "Maroon"
      },
      "brand": "black macy",
      "discount": 55,
      "rating": 4,
      "image": "https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
      "price": {
        "mrp": 2499,
        "final_price": 1119
      },
      "title": "Lotto VERTIGO Running Shoes For Men"
    },
    {
      "id": "SHOF23SGQNPFFSNC",
      "colour": {
        "color": "#900020",
        "title": "Burgundy"
      },
      "brand": "marathon",
      "discount": 54,
      "rating": 4.2,
      "image": "https://rukminim1.flixcart.com/image/312/312/jepzrm80/shoe/k/r/5/nm005-8-provogue-aqua-original-imaf3chbsddrrj9x.jpeg?q=70",
      "price": {
        "mrp": 1699,
        "final_price": 769
      },
      "title": "Provogue FCS-005 Canvas Shoes For Men"
    },
    {
      "id": "SHOF3FDYS9CKEGRX",
      "colour": {
        "color": "#FFD700",
        "title": "Gold"
      },
      "brand": "trv",
      "discount": 54,
      "rating": 4,
      "image": "https://rukminim1.flixcart.com/image/312/312/jebpd3k0/shoe/x/t/d/multicolor-combo-2-678-698-7-shoefly-multicolor-original-imaf3ffcguxggfed.jpeg?q=70",
      "price": {
        "mrp": 998,
        "final_price": 509
      },
      "title": "Axter Multicolor Combo-(2)-678-698 Casuals For Men"
    },
    {
      "id": "SHOEXYCZYZQN9ZPD",
      "colour": {
        "color": "#292421",
        "title": "Black"
      },
      "brand": "fine arch",
      "discount": 46,
      "rating": 3.8,
      "image": "https://rukminim1.flixcart.com/image/312/312/j7usl8w0/shoe/z/p/d/5002-7-footstair-blue-white-original-imaexxv8f3zwg2zj.jpeg?q=70",
      "price": {
        "mrp": 498,
        "final_price": 299
      },
      "title": "FOOTSTAIR Loafers For Men"
    },
    {
      "id": "SHOFFBZ7YGFNRGHQ",
      "colour": {
        "color": "#5C3317",
        "title": "Brown"
      },
      "brand": "kaption",
      "discount": 45,
      "rating": 4.1,
      "image": "https://rukminim1.flixcart.com/image/312/312/jerf7gw0/shoe/m/n/h/smooth-flyer-xtreme-ss18-8-reebok-black-cool-shadow-green-original-imaf3dd2hbrhz7rn.jpeg?q=70",
      "price": {
        "mrp": 3999,
        "final_price": 2199
      },
      "title": "REEBOK SMOOTH FLYER XTREME Running Shoes For Men"
    }
  ];
}
