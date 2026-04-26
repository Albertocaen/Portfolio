import { Component, output, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  readonly contactClick = output<void>();
  readonly ts = inject(TranslationService);

  readonly githubUrl = 'https://github.com/Albertocaen';
  readonly linkedinUrl = 'https://www.linkedin.com/in/albertocaen77/';
  readonly avatarUrl = 'https://github.com/Albertocaen.png';

  readonly techTags = ['Java', 'Spring Boot', 'Angular', 'Docker', 'MySQL', 'PostgreSQL', 'Oracle Cloud', 'REST APIs'];
}
