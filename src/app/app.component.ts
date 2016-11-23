import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent { 

  constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('fr');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('fr');
    }

}
