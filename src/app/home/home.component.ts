import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // alert($(".tab-group > ul > li:nth-child(1) > a").html())
    // $(".tab-group > ul > li:nth-child(1) > a").html("<i class='glyphicon glyphicon-home'></i>")
  }

}
