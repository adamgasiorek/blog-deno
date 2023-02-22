import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container">
      <div class="description" style="margin-bottom: 48px;">
        <div class="buttons">
          <app-button [routerLink]="['/', 'resume']">
            My Resume
          </app-button>
          <app-button [routerLink]="['/', 'map']" >
            Visited countries
          </app-button>
        </div>
        <h2 class="web">Hello! I'm Adam.</h2>
        <h4 class="mobile">Hello! I'm Adam.</h4>
        <div class="body2">
          I come from southern Poland, but my place in the world is changing like in a kaleidoscope. I focus on getting to know new experiences and discovering the world from every angle: from philosophy, quantum physics, learning dance and foreign languages, to learning about the local culture while traveling. Whenever I am not traveling, I am busy implementing my own idea in business. I have created this blog for three reasons: for sharing my best travel photographies, for fulfilling my travel-dreams (sharing best memories) and to use this website as my professional technical portfolio.
        </div>

      </div>
      <div class="images">

        <div class="img1" style="background-image: url('assets/me.jpeg');background-size: cover;"></div>
        <div class="img2" style="background-color: #8AC8FF"></div>
        <div class="img3" style="background-color: #A6D5FF"></div>
        <!--          <img src="" />-->
      </div>
    </div>
  `,
  styleUrls: ['profile.component.css']
})
export class ProfileComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() successes: any = [];
  @Input() wip: any = [];
  @Input() progress: any = [];

  showAims = false;
  showWip = false;
  showProgress = true;


}
