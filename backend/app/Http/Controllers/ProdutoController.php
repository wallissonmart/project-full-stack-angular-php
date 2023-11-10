<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;
use App\Models\Categoria;

class ProdutoController extends Controller
{
    public function index()
    {
        $produtos = Produto::orderBy('id')->get();

        $produtosFormatados = $produtos->map(function ($produto) {
            return [
                'id' => $produto->id,
                'categoria_id' => $produto->categoria_id,
                'nome' => $produto->nome,
                'valor' => floatval($produto->valor), 
                'data_vencimento' => $produto->data_vencimento,
                'quantidade_estoque' => $produto->quantidade_estoque,
                'produto_perecivel' => $produto->produto_perecivel,
            ];
        });

        return response()->json($produtosFormatados);
    }

    public function show($id)
    {
        $produto = Produto::findOrFail($id);

        $produtoFormatado = [
            'id' => $produto->id,
            'categoria_id' => $produto->categoria_id,
            'nome' => $produto->nome,
            'valor' => $produto->valor,
            'data_vencimento' => $produto->data_vencimento,
            'quantidade_estoque' => $produto->quantidade_estoque,
            'produto_perecivel' => $produto->produto_perecivel,
        ];

        return response()->json($produtoFormatado);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'categoria_id' => ['required', 'exists:categorias,id'],
            'valor' => 'required|numeric',
            'data_vencimento' => 'required|date',
            'quantidade_estoque' => 'required|integer',
            'produto_perecivel' => 'required|boolean',
        ]);

        $categoria = Categoria::find($request->categoria_id);
        if (!$categoria) {
            return response()->json(['message' => 'A categoria especificada não existe.'], 404);
        }

        $produto = Produto::create($request->all());

        $produtoFormatado = [
            'id' => $produto->id,
            'categoria_id' => $produto->categoria_id,
            'nome' => $produto->nome,
            'valor' => $produto->valor,
            'data_vencimento' => $produto->data_vencimento,
            'quantidade_estoque' => $produto->quantidade_estoque,
            'produto_perecivel' => $produto->produto_perecivel,
        ];

        return response()->json($produtoFormatado, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'categoria_id' => 'required|exists:categorias,id',
            'valor' => 'required|numeric',
            'data_vencimento' => 'required|date',
            'quantidade_estoque' => 'required|integer',
            'produto_perecivel' => 'required|boolean',
        ]);

        $produto = Produto::findOrFail($id);
        $produto->update($request->all());

        $produtoFormatado = [
            'id' => $produto->id,
            'categoria_id' => $produto->categoria_id,
            'nome' => $produto->nome,
            'valor' => $produto->valor,
            'data_vencimento' => $produto->data_vencimento,
            'quantidade_estoque' => $produto->quantidade_estoque,
            'produto_perecivel' => $produto->produto_perecivel,
        ];

        return response()->json($produtoFormatado);
    }

    public function destroy($id)
    {
        $produto = Produto::findOrFail($id);
        $produto->delete();

        return response()->json(null, 204);
    }
}
