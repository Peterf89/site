import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, CardModule,FieldsetModule ],
  templateUrl: './faq.component.html'
})

export class FaqComponent {
  questions = [ 
    { 
      question: 'How often can i claim a free Arena Ticket?',
      answer : 'Currently you can claim a ticket every 12 hours, so basically two per day.'
    },
    { 
      question: 'Why can I not participate in any of the capped modes?',
      answer : 'Capped modes (like Cap220, 240) in which you can win a threshold will dissappear in the current form in August 2024. To make the transition, Sorare has decided that from March 2024 only users who have participated in capped gamemodes before may participate.'
    }
  ]
}
