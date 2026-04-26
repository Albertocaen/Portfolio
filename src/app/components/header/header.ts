import { Component, output, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  readonly contactClick = output<void>();
  readonly ts = inject(TranslationService);

  readonly githubUrl = 'https://github.com/Albertocaen';
  readonly linkedinUrl = 'https://www.linkedin.com/in/albertocaen77/';
  readonly avatarUrl = 'https://github.com/Albertocaen.png';
}
