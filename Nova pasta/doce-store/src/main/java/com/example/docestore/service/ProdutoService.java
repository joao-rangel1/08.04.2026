package com.example.docestore.service;

import com.example.docestore.model.Produto;
import com.example.docestore.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> obterTodos() {
        return produtoRepository.findAll();
    }

    public Optional<Produto> obterPorId(Long id) {
        return produtoRepository.findById(id);
    }

    public List<Produto> obterPorCategoria(String categoria) {
        return produtoRepository.findByCategoria(categoria);
    }

    public List<Produto> buscar(String termo) {
        return produtoRepository.findByNomeContainingIgnoreCase(termo);
    }

    public Produto criar(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto atualizar(Long id, Produto produtoAtualizado) {
        Optional<Produto> produto = produtoRepository.findById(id);
        if (produto.isPresent()) {
            Produto p = produto.get();
            p.setNome(produtoAtualizado.getNome());
            p.setDescricao(produtoAtualizado.getDescricao());
            p.setPreco(produtoAtualizado.getPreco());
            p.setEstoque(produtoAtualizado.getEstoque());
            return produtoRepository.save(p);
        }
        return null;
    }

    public void deletar(Long id) {
        produtoRepository.deleteById(id);
    }

    public List<String> obterCategorias() {
        return List.of("Chocolate", "Gomas", "Açúcar", "Frutas", "Caramelo", "Especiais");
    }
}
