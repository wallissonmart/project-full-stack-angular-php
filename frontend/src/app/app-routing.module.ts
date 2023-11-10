import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './views/listar-produtos/listar-produtos.component';
import { AdicionarProdutoComponent } from './views/adicionar-produto/adicionar-produto.component';
import { EditarProdutoComponent } from './views/editar-produto/editar-produto.component';
import { AdicionarCategoriaComponent } from './views/adicionar-categoria/adicionar-categoria.component';

const routes: Routes = [
  { path: '', component: ListarProdutosComponent },
  { path: 'adicionar-produto', component: AdicionarProdutoComponent },
  { path: 'editar-produto/:id', component: EditarProdutoComponent },
  { path: 'adicionar-categoria', component: AdicionarCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
