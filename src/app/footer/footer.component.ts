import { Component } from '@angular/core';
import { bootstrapGithub, bootstrapInstagram, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons, provideNgIconsConfig } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({
    bootstrapInstagram,
    bootstrapLinkedin,
    bootstrapGithub,
   }),
   provideNgIconsConfig({
    size: '3rem',
  }),
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
