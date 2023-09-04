import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CookiesListComponent } from '../../cookies/cookies-list/cookies-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, CookiesListComponent],
})
export class HomeComponent {}
