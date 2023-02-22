import { isPlatformBrowser } from '@angular/common';
import {AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
// @ts-ignore
import FamilyTree from "./familytree";
import {LazyLoadScriptService} from "./lazy-load-script.service";

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html'
})
export class FamilyTreeComponent implements AfterViewInit{

  @Input() data:any;

  isPlatformBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: string,
              private lazyLoadService: LazyLoadScriptService) {
    this.isPlatformBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(){
    if (this.isPlatformBrowser) {
      const getColorPreference = () => {
        if(this.isPlatformBrowser) {
          if (localStorage.getItem('theme-preference'))
            return localStorage.getItem('theme-preference')
          else
            return window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light'
        }
        return;
      }

      this.lazyLoadService.loadScript('/assets/family/familytree.js').subscribe(_ => {
        const tree = document.getElementById('tree');
        if (tree) {
          var family = new FamilyTree(tree, {
            roots: ['jozefgasiorek'],
            editForm: {
              readOnly: true,
              generateElementsFromFields: false,
              elements: [
                { type: 'textbox', label: 'Full Name', binding: 'name'}
              ]
            },
            enableSearch: false,
            mode: getColorPreference(),
            nodeMouseDbClick: FamilyTree.action.details,
            scaleInitial: FamilyTree.match.boundary,
            nodeMouseClick: FamilyTree.action.expandCollapse,
            nodeBinding: {
              field_0: "name",
              img_0: "img"
            },
          });

          family.load(this.data)
            .on('init', () => {
              family.center('adamgasiorek');
            });
        }
      });
    }

  }
}
