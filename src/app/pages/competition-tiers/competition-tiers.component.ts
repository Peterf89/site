import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-competition-tiers',
  standalone: true,
  imports: [CardModule, ImageModule, DividerModule, FieldsetModule, AvatarModule, ListboxModule],
  templateUrl: './competition-tiers.component.html'
})
export class CompetitionTiersComponent {
}
