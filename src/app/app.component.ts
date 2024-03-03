import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, CardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site';

  items = [ 
    { 
      label: 'Home',
      routerLink : '/'
    }, 
    { 
      label: 'Rivals',
      routerLink : '/rivals'
    }, 
    { 
      label: 'Pro / SO5', 

      items: [ 
        { 
          label: 'Competition Tiers',
          routerLink: 'pro/competition-tiers'
        }, 
        // { 
        //   label: 'Angular 2'
        // } 
      ] 
    }, 
    // { 
    //   label: 'Scouting', 

    //   items: [ 
    //     { 
    //       label: 'Angular 1'
    //     }, 
    //     { 
    //       label: 'Angular 2'
    //     } 
    //   ] 
    // } , 
    { 
      label: 'FAQ', 
      routerLink: 'faq'
    } 
  ]; 
}
