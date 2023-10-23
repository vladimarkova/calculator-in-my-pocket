import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() text: string = 'Hello and welcome!';

  constructor(private router: Router) { }

  navigateToCalculator() {
    this.router.navigate(['/calculator']);
  }
}
