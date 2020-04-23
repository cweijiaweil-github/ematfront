import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {


  items: any[];
  categorys: any[];
  startPrice: number;
  endPrice: number;
  category: string;
  subCategory: string;


  constructor() { }

  ngOnInit(): void {
    this.findAllCategorys();
    this.findAllItems();
  }

  findAllItems() {
    this.items = [
      {
        item_name: "Tanmay",
        price: "10210",
        description: "zhejiushi1001",
        seller: "bellapa1"
      },
      {
        item_name: "Tanmay2",
        price: "10212",
        description: "zhejiushi1002",
        seller: "bellapa2"
      },
      {
        item_name: "Tanmay3",
        price: "10211",
        description: "zhejiushi1003",
        seller: "bellapa3"
      },
    ];
  }
  findAllCategorys() {
this.categorys=[
  {
    category_id:"1001",
    category_name:"ca001",
    subCategory:[{
      subCategory_id:"2a01",
      subCategory_name:"suba01"
    },{
      subCategory_id:"2a02",
      subCategory_name:"suba02"
    },{
      subCategory_id:"2a03",
      subCategory_name:"suba03"
    }]

  },
  {
    category_id:"1002",
    category_name:"ca002",
    subCategory:[{
      subCategory_id:"2b01",
      subCategory_name:"subb01"
    },{
      subCategory_id:"2b02",
      subCategory_name:"subb02"
    }]
  }
];
  }
  findItemsByPriceAndFacturer() {
    //  alert("startPrice="+this.startPrice+";endPrice="+this.endPrice+";category="+this.category+";subCategory="+this.subCategory);
  }

  viewDetails() {
    $(".item-content").css("display", "none");
    $(".specifications").css("display", "block");

  }
  retSearchRel() {
    this.findAllItems();
    $(".specifications").css("display", "none");
    $(".item-content").css("display", "block");
  }
  clearData() {
    $(".left-input").val("");
    $(".right-input").val("");
  }
}
