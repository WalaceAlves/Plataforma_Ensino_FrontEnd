import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Adicione esta linha

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  // ...
}