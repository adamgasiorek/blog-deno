import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-priv',
  template: `priv2`
})
export class PrivComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.document.location.href = 'https://adamgasiorek-priv.web.app/';
  }
}
