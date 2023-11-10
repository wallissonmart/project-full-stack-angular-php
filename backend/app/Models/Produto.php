<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $table = 'produtos';

    protected $fillable = [
        'categoria_id',
        'nome',
        'valor',
        'data_vencimento',
        'quantidade_estoque',
        'produto_perecivel',
    ];

    protected $dates = ['data_vencimento'];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
}
