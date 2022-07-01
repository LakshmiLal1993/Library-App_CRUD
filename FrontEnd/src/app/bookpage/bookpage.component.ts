import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  libraryValue!:FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.libraryValue = this.formBuilder.group({
      bookname :[''],
      authorname :[''],
      genre :['']
    })
  }
  AddBook(){
    
  }
}
