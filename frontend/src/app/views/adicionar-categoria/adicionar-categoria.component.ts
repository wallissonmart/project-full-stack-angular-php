import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria-service.service';

@Component({
  selector: 'app-adicionar-categoria',
  templateUrl: './adicionar-categoria.component.html',
  styleUrls: ['./adicionar-categoria.component.css']
})
export class AdicionarCategoriaComponent {
  seuForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
  ) {
    this.seuForm = this.fb.group({
      nome: [''],

    });
  }

  adicionarCategoria(): void {
    const dadosCategoria = this.seuForm.value;

    if (dadosCategoria.nome) {
      this.categoriaService.criarCategoria(dadosCategoria).subscribe(
        (categoria) => {
          console.log('Produto adicionado com sucesso', categoria);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Erro ao adicionar categoria', error);
        }
      );
    } else {
      console.error('Formulário inválido!');
    }
  }
}
