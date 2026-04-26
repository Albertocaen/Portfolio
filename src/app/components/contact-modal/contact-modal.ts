import { Component, output, inject, HostListener } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.scss',
})
export class ContactModalComponent {
  readonly close = output<void>();
  readonly ts = inject(TranslationService);

  readonly email = 'alberto.caen.1@gmail.com';
  readonly linkedinUrl = 'https://www.linkedin.com/in/albertocaen77/';

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('backdrop')) {
      this.close.emit();
    }
  }
}
