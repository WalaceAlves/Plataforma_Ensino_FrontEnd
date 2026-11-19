import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para usar ngModel no formulário
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login:', this.email, this.password);
  }
}