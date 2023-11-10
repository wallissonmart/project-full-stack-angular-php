import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria-service.service';
import { ProdutoService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  categorias: any[] = [];
  seuForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) {
    this.seuForm = this.fb.group({
      nome: [''],
      categoria_id: [''],
      valor: [''],
      data_vencimento: [''],
      quantidade_estoque: [''],
      produto_perecivel: [''],
    });
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Erro ao obter categorias', error);
      }
    );
  }

  adicionarProduto(): void {
    const dadosProduto = this.seuForm.value;
    dadosProduto.produto_perecivel = dadosProduto.produto_perecivel === 'sim';
    dadosProduto.valor = Number(dadosProduto.valor);
    
    if (dadosProduto.nome && dadosProduto.valor) {
      this.produtoService.addProduto(dadosProduto).subscribe(
        (produto) => {
          console.log('Produto adicionado com sucesso', produto);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Erro ao adicionar produto', error);
        }
      );
    } else {
      console.error('Formulário inválido!');
    }
  }
}
