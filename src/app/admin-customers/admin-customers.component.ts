import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {
  userList: string[] = ['Mr. Fresh', 'Batura Bhai', 'Nijesh', 'Naruto'];

  constructor() { }

  ngOnInit(): void {
  }

}
