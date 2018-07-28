import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Author} from '../domain/Author';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  private _author = new Author();

  constructor() { }

  ngOnInit() {
  }

}
