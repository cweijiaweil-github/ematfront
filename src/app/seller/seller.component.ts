import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#myBtn").click(function() {
      setTimeout(function() {
          $('#myModal').modal("hide")
      },3000);
  })
  }

}
