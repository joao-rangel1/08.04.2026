package com.example.docestore.controller;

import com.example.docestore.model.Produto;
import com.example.docestore.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public ResponseEntity<List<Produto>> obterTodos() {
        return ResponseEntity.ok(produtoService.obterTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> obterPorId(@PathVariable Long id) {
        return produtoService.obterPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<Produto>> obterPorCategoria(@PathVariable String categoria) {
        return ResponseEntity.ok(produtoService.obterPorCategoria(categoria));
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Produto>> buscar(@RequestParam String termo) {
        return ResponseEntity.ok(produtoService.buscar(termo));
    }

    @PostMapping
    public ResponseEntity<Produto> criar(@RequestBody Produto produto) {
        return ResponseEntity.ok(produtoService.criar(produto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizar(@PathVariable Long id, @RequestBody Produto produto) {
        Produto atualizado = produtoService.atualizar(id, produto);
        if (atualizado != null) {
            return ResponseEntity.ok(atualizado);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        produtoService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/categorias/lista")
    public ResponseEntity<List<String>> obterCategorias() {
        return ResponseEntity.ok(produtoService.obterCategorias());
    }
}
