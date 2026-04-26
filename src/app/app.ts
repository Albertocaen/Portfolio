import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { ContactModalComponent } from './components/contact-modal/contact-modal';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, SkillsComponent, ProjectsComponent, ContactModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly showContact = signal(false);

  openContact(): void {
    this.showContact.set(true);
  }

  closeContact(): void {
    this.showContact.set(false);
  }
}
