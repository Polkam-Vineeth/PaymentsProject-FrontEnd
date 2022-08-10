import { Component, OnInit } from '@angular/core';
import { TransType } from 'src/transdatatypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  tlist: TransType[] = [
    {
      transactionId: 1,
      senderName: "VIN",
      senderAcnum: 1255,
      receiverName: "SREE",
      receiverAcnum: 143,
      transactionAmount: 21200000,
      transactionDate: new Date(),
      transactionStatus: true,
    },
    {
      transactionId: 2,
      senderName: "SREE",
      senderAcnum: 1255,
      receiverName: "VIN",
      receiverAcnum: 143,
      transactionAmount: 30800000,
      transactionDate: new Date(),
      transactionStatus: false,   
    }]
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
