<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function index()
    {
        $categorias = Categoria::all();

        $categoriasFormatadas = $categorias->map(function ($categoria) {
            return [
                'id' => $categoria->id,
                'nome' => $categoria->nome,
            ];
        });

        return response()->json($categoriasFormatadas);
    }

    public function show($id)
    {
        $categoria = Categoria::findOrFail($id);

        $categoriaFormatada = [
            'id' => $categoria->id,
            'nome' => $categoria->nome,
        ];

        return response()->json($categoriaFormatada);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
        ]);

        $categoria = Categoria::create($request->all());

        return response()->json([
            'id' => $categoria->id,
            'nome' => $categoria->nome,
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
        ]);

        $categoria = Categoria::findOrFail($id);
        $categoria->update($request->all());

        return response()->json([
            'id' => $categoria->id,
            'nome' => $categoria->nome,
        ], 201);
    }

    public function destroy($id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->delete();

        return response()->json(null, 204);
    }
}
