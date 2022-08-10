import { OnInit ,AfterViewInit, Component, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-transhistory',
  templateUrl: './transhistory.component.html',
  styleUrls: ['./transhistory.component.css']
})
export class TranshistoryComponent implements AfterViewInit {

  displayedColumns: string[] = ['transactionId', 'senderName', 'senderAcnum', 'receiverName'
  ,'receiverAcnum', 'transactionAmount', 'transactionDate', 'transactionStatus'];
  dataSource = new MatTableDataSource<TransType>(tlist);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

// custom data type definitions here
export interface TransType {
  transactionId: number;
  senderName: string;
  senderAcnum: number;
  receiverName: string;
  receiverAcnum: number;
  transactionAmount: number;
  transactionDate: Date;
  transactionStatus: boolean;
};

const tlist: TransType[] = [
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

