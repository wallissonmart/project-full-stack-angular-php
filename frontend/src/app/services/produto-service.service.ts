import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'http://localhost:8000/api/produtos';

  constructor(private http: HttpClient) {}

  // Obter todos os produtos
  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obter um produto por ID
  getProduto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Adicionar um novo produto
  addProduto(produto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produto);
  }

  // Atualizar um produto existente
  updateProduto(id: number, produto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, produto);
  }

  // Excluir um produto
  deleteProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
