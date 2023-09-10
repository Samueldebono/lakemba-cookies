import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ICookie } from '../models/cookie.model';

@Component({
  selector: 'app-cookie-item',
  templateUrl: './cookie-item.component.html',
  styleUrls: ['./cookie-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, AngularMaterialModule],
})
export class CookieItemComponent {
  @Input()
  cookieItem!: ICookie;
  imageSrc: string | undefined;
  hovered = false;

  ngOnInit() {
    this.imageSrc = 'assets/image/cookies/' + this.cookieItem.name + '.jpg';
  }
}
