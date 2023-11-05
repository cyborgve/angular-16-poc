import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-16-poc';
  currentLang: string;
  private _translate = inject(TranslateService);

  constructor() {
    this.currentLang =
      this._translate.currentLang || this._translate.defaultLang;
  }

  changeLang() {
    this._translate.use(this.currentLang === 'es' ? 'en' : 'es');
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
  }
}
