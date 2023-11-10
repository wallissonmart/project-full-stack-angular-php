import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria-service.service';
import { ProdutoService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  categorias: any[] = [];
  seuForm: FormGroup;
  produtoId: number;

  constructor(
    private datePipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute,
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

    this.produtoId = +this.route.snapshot.paramMap.get('id')!!;
  }

  ngOnInit(): void {
    this.getCategorias();
    this.getProduto();
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

  getProduto(): void {
    // Use o serviço para obter os detalhes do produto com base no ID
    this.produtoService.getProduto(this.produtoId).subscribe(
      (produto) => {
        const dataLocal = new Date(produto.data_vencimento);
        const dataFormatada = this.datePipe.transform(new Date(dataLocal.getTime() + dataLocal.getTimezoneOffset() * 60000), 'yyyy-MM-dd');
        
        this.seuForm.patchValue({
          nome: produto.nome,
          categoria_id: produto.categoria_id,
          valor: produto.valor,
          data_vencimento: dataFormatada,
          quantidade_estoque: produto.quantidade_estoque,
          produto_perecivel: produto.produto_perecivel ? 'sim' : 'nao',
        });
      },
      (error) => {
        console.error('Erro ao obter detalhes do produto', error);
      }
    );
  }

  atualizarProduto(): void {
    const dadosProduto = this.seuForm.value;
    dadosProduto.produto_perecivel = dadosProduto.produto_perecivel === 'sim';
    dadosProduto.valor = Number(dadosProduto.valor);
    
    if (dadosProduto.nome && dadosProduto.valor) {
      // Aqui você pode chamar o método do ProdutoService para atualizar o produto
      this.produtoService.updateProduto(this.produtoId, dadosProduto).subscribe(
        (produto) => {
          console.log('Produto atualizado com sucesso', produto);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Erro ao atualizar produto', error);
        }
      );
    } else {
      console.error('Formulário inválido!');
    }
  }
}
