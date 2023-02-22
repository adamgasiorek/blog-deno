import { Component, OnInit } from '@angular/core';
import {collection, collectionData, Firestore, limit, query} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-hero',
  template: `
    <section>
      <div class="web">
        <h2>Hi, I'm Adam.</h2>
        <h1 class="blue">Frontend Developer</h1>
        <h2>based in Cracow, Poland</h2>
        <div class="additional">
          <h3>Currently hired at <b><a href="https://silenteight.com/" target="_blank">SilentEight</a></b></h3>
          <h3>Contributing at <b><a href="https://codeyeah.net/" target="_blank">CodeYeah</a></b></h3>
        </div>
      </div>
      <div class="mobile">
        <h3>Hi, I'm Adam.</h3>
        <h4 class="blue">Frontend Developer</h4>
        <h3>based in Cracow, Poland</h3>
        <div class="additional">
          <div class="overline">Actually hired at <b>SilentEight</b></div>
          <div class="overline">Contributing at <b>CodeYeah</b></div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['hero.component.css']
})
export class HeroComponent {
}
