import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ICookie } from '../models/cookie.model';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { CookieItemComponent } from '../cookie-item/cookie-item.component';
import { PageHeaderComponent } from '../../_shared/page-header/page-header.component';
import { CookieDataService } from 'src/service/cookie-data.service';
import { map, tap } from 'rxjs';
import { mapToCanActivate } from '@angular/router';
import { ICookies } from '../models/cookies.model';
// import {MatGridList} from '@angular/material/grid-list'

@Component({
  selector: 'app-cookies-list',
  templateUrl: './cookies-list.component.html',
  styleUrls: ['./cookies-list.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    AngularMaterialModule,
    CookieItemComponent,
    PageHeaderComponent,
  ],
})
export class CookiesListComponent {
  cookies: ICookie[] | undefined;
  pageTitle = 'Lakemba Cookie Shop';

  cookieList: any[] | undefined;
  cookieListCount = 0;

  constructor(private cookiedataService: CookieDataService) {}

  ngOnInit() {
    this.cookiedataService
      .getItems()
      .pipe(
        tap((r) => {
          console.log(r);
        })
        // map(cookies => cookies.json())
      )
      .subscribe((data: ICookies) => {
        this.cookies = data.cookies;
        this.cookieList = [...this.cookies];
        this.cookieListCount = this.cookieList.length;
      });
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.cookieList = this.cookies?.filter(
      (cookie: any) => cookie.name.toLowerCase().indexOf(query) > -1
    );
    this.cookieListCount = this.cookieList ? this.cookieList?.length : 0;
  }
}
