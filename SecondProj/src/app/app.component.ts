import { Component , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 /* encapsulation : ViewEncapsulation.Emulated*/ //max encapsulation n 0 reusability, this is deault
 // encapsulation : ViewEncapsulation.Native //max encapsulation n 0 reusability
 // encapsulation : ViewEncapsulation.None tells that styles of component.css will be added to the index.html
})
export class AppComponent {
  title = 'app works!';
}
