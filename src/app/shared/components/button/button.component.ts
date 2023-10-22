import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon: string | null = null;
  @Input() text!: string;
  @Input() iconSizeInPx: string = '16px';
  @Input() textSizeInRem: string = '1rem';

  @Input() borderRadius: string = '5px';
}
