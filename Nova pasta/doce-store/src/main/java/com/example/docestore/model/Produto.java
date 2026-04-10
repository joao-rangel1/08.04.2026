package com.example.docestore.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "produtos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(nullable = false)
    private String categoria;

    @Column(nullable = false)
    private Double preco;

    @Column(nullable = false)
    private Integer estoque;

    @Column(name = "emoji")
    private String emoji;

    @Column(name = "imagem_url")
    private String imagemUrl;

    @Column(name = "rating")
    private Double rating = 5.0;

    @Column(name = "avaliacoes")
    private Integer avaliacoes = 0;

}
