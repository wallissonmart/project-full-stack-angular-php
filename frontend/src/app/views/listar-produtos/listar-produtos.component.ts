import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent {
  produtos: any[] = [];

  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos()
  }

  navegarParaAdicionarProduto(): void {
    this.router.navigate(['/adicionar-produto']);
  }

  navegarParaAdicionarCategoria(): void {
    this.router.navigate(['/adicionar-categoria']);
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((data) => {
      this.produtos = data;
      console.log(this.produtos)
    });
  }

  excluirProduto(id: number): void {
    this.produtoService.deleteProduto(id).subscribe(
      () => {
        console.log('Produto excluído com sucesso');
        this.carregarProdutos()
      },
      (error) => {
        console.error('Erro ao excluir produto', error);
      }
    );
  }

  calcularDataCorrigida(data: string): string {
    const dataOriginal = new Date(data);
    const dataCorrigida = new Date(dataOriginal.setDate(dataOriginal.getDate()));
    return dataCorrigida.toISOString().split('T')[0]; // Formato 'yyyy-MM-dd'
  }  
}
