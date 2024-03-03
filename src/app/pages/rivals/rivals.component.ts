import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-rivals',
  standalone: true,
  imports: [CardModule,ImageModule,DividerModule],
  templateUrl: './rivals.component.html'
})
export class RivalsComponent {

}
