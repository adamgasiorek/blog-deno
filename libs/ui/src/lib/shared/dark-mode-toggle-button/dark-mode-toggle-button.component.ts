import { isPlatformBrowser } from '@angular/common';
import {Component, Inject, Input, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle-button',
  template: `
    <button (click)="changeTheme()"
      class="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label="auto" aria-live="polite">
      <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        <mask class="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
        <g class="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  `,
  styleUrls: ['theme-toggle.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DarkModeToggleButtonComponent implements OnInit {

  isPlatformBrowser: boolean = false;
  storageKey = 'theme-preference';

  getColorPreference = () => {
    if(this.isPlatformBrowser) {
      if (localStorage.getItem(this.storageKey))
        return localStorage.getItem(this.storageKey)
      else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    }
    return;
  }

  theme = {
    value: 'light'
  }

  changeTheme() {
    this.theme.value = this.theme.value === 'light'
      ? 'dark'
      : 'light'

    this.setPreference()
  }

  setPreference = () => {
    localStorage.setItem(this.storageKey, this.theme.value as any)
    this.reflectPreference()
  }

  reflectPreference = () => {
    if(this.isPlatformBrowser) {
      (document.firstElementChild as any)
        .setAttribute('data-theme', this.theme.value)

      document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', this.theme.value as any)
    }
  }

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isPlatformBrowser = isPlatformBrowser(platformId);

    this.theme = {
      value: this.getColorPreference() as any,
    }
  }

  ngOnInit() {
    this.reflectPreference();
  }

}
