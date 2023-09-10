import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CookiesListComponent } from './components/cookies/cookies-list/cookies-list.component';
import { AngularMaterialModule } from './angular-material.module';
import { CookieItemComponent } from './components/cookies/cookie-item/cookie-item.component';
import { PageHeaderComponent } from './components/_shared/page-header/page-header.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieDataService } from 'src/service/cookie-data.service';
import { CookieDetailsViewComponent } from './components/cookies/cookie-details-view/cookie-details-view.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    NavBarComponent,
    CookiesListComponent,
    CookieItemComponent,
    PageHeaderComponent,
    CookieDetailsViewComponent,
  ],
  providers: [CookieDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  constructor() {}
}
/**
 * IMPORTANT: RxDB creates rxjs observables outside of angulars zone
 * So you have to import the rxjs patch to ensure changedetection works correctly.
 * @link https://www.bennadel.com/blog/3448-binding-rxjs-observable-sources-outside-of-the-ngzone-in-angular-6-0-2.htm
 */
// import 'zone.js/dist/zone-patch-rxjs';
