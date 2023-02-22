import { Component, OnInit } from '@angular/core';
import {FAMILY_TREE} from "./family-tree";

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html'
})
export class FamilyComponent {
  data = FAMILY_TREE;
}
