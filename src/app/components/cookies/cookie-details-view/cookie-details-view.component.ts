import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@Component({
  selector: 'app-cookie-details-view',
  templateUrl: './cookie-details-view.component.html',
  styleUrls: ['./cookie-details-view.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, AngularMaterialModule],
})
export class CookieDetailsViewComponent {}
