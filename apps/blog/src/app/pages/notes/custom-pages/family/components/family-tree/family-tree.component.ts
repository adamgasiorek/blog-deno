import { isPlatformBrowser } from '@angular/common';
import {AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
// @ts-ignore
import FamilyTree from "./familytree";
import {LazyLoadScriptService} from "./lazy-load-script.service";

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styles: [`
    @media only screen and (max-width: 1024px) {
      #chart {
        transform: scale(0.5);
      }
    }
  `]
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


      this.lazyLoadService.loadScript('/assets/family/main.js').subscribe(_ => {
      });
    }

  }
}
