import { Component, OnInit } from '@angular/core';
import { PhlService } from '../services/phl.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public phlFinData1: any = null;

  constructor(
    private phlService: PhlService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.phlService.getFinData1().subscribe(data => this.phlFinData1 = data);
  }
}
