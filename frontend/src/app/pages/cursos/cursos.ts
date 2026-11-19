import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Para usar o *ngFor
import { RouterModule } from '@angular/router'; // Para usar o routerLink

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.scss'
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  apiUrl = 'http://localhost:8080/PlataformaEnsino/api/courses'; // URL do backend

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (dados) => {
        this.cursos = dados;
        console.log('Cursos carregados:', dados);
      },
      error: (erro) => console.error('Erro ao buscar cursos:', erro)
    });
  }
}