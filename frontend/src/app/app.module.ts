import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarProdutosComponent } from './views/listar-produtos/listar-produtos.component';
import { EditarProdutoComponent } from './views/editar-produto/editar-produto.component';
import { AdicionarProdutoComponent } from './views/adicionar-produto/adicionar-produto.component';
import { AdicionarCategoriaComponent } from './views/adicionar-categoria/adicionar-categoria.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutosComponent,
    EditarProdutoComponent,
    AdicionarProdutoComponent,
    AdicionarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
