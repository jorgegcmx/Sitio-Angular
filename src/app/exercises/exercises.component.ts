import { Component } from '@angular/core';
import { InfiniteScrollComponent } from '../components/infinite-scroll/infinite-scroll.component';
import { PaypalComponent } from '../components/payments/paypal/paypal.component';
import { GoogleComponent } from '../components/social-login/google/google.component';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [InfiniteScrollComponent,PaypalComponent,GoogleComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {

}
