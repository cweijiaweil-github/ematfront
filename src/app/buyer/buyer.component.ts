import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewDetails(){
    $(".item-content").css("display","none");
    $(".specifications").css("display","block");

  }
  retSearchRel(){
    $(".specifications").css("display","none");
    $(".item-content").css("display","block");
  }
  clearData(){
    $(".left-input").val("");
    $(".right-input").val("");
  }
}
