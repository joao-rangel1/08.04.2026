package com.example.docestore.config;

import com.example.docestore.model.Produto;
import com.example.docestore.repository.ProdutoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner initializeData(ProdutoRepository repository) {
        return args -> {
            // Limpar dados anteriores
            repository.deleteAll();

            // Criar produtos
            List<Produto> produtos = Arrays.asList(
                    // Chocolates
                    new Produto(null, "Chocolate Belga Premium", "Chocolate 70% cacau com recheio de trufa", "Chocolate", 45.90, 50, "🍫", "https://images.unsplash.com/photo-1578985545062-69928b1d9587", 4.8, 324),
                    new Produto(null, "Chocolate ao Leite Deluxe", "Chocolate ao leite com amendoins e caramelo", "Chocolate", 38.50, 75, "🍫", "https://images.unsplash.com/photo-1599599810694-b5ac4dd12b20", 4.9, 512),
                    new Produto(null, "Brigadeiro Gourmet", "Brigadeiro com chocolate suíço e granulado artesanal", "Chocolate", 32.90, 120, "🤎", "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f", 4.7, 786),
                    new Produto(null, "Bombom Assado", "Bombom recheado de calda de chocolate ao leite", "Chocolate", 29.90, 100, "🤎", "https://images.unsplash.com/photo-1571115764595-644a88f46ae5", 4.6, 455),
                    
                    // Gomas
                    new Produto(null, "Gominhas Tropical", "Mix de gominhas com sabores tropicais", "Gomas", 18.90, 200, "🍬", "https://images.unsplash.com/photo-1599599810314-dfb9b9f36ae7", 4.5, 1200),
                    new Produto(null, "Ursinhos de Gelatina", "Ursinhos coloridos de gelatina com vitaminas", "Gomas", 15.50, 300, "🧸", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908", 4.7, 2100),
                    new Produto(null, "Anel de Goma", "Anéis de goma com sabor de frutas vermelhas", "Gomas", 12.90, 250, "💍", "https://images.unsplash.com/photo-1576394508894-cff305dad881", 4.4, 890),
                    
                    // Açúcar
                    new Produto(null, "Pirulito Gigante", "Pirulito com até 50cm de altura", "Açúcar", 22.50, 80, "🍭", "https://images.unsplash.com/photo-1618164436241-4473940571db", 4.6, 650),
                    new Produto(null, "Algodão Doce Premium", "Algodão doce feito no dia com sabor natural", "Açúcar", 19.90, 60, "☁️", "https://images.unsplash.com/photo-1571115764595-644a88f46ae5", 4.8, 340),
                    new Produto(null, "Bala de Açúcar", "Balas duras com sabor cristalino", "Açúcar", 9.90, 400, "🍯", "https://images.unsplash.com/photo-1576394508894-cff305dad881", 4.3, 1500),
                    
                    // Frutas
                    new Produto(null, "Bala de Frutas Mistas", "Balas mastigáveis com 5 sabores de fruta", "Frutas", 14.50, 300, "🍓", "https://images.unsplash.com/photo-1599599810314-dfb9b9f36ae7", 4.5, 1800),
                    new Produto(null, "Doce de Morango", "Doce de morango artesanal 100% natural", "Frutas", 28.90, 100, "🍓", "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f", 4.9, 420),
                    new Produto(null, "Pastilha de Framboesa", "Pastilha com suco concentrado de framboesa", "Frutas", 16.90, 180, "🫐", "https://images.unsplash.com/photo-1576394508894-cff305dad881", 4.7, 710),
                    
                    // Caramelo
                    new Produto(null, "Caramelo Salgado", "Caramelo com flor de sal do Himalaia", "Caramelo", 24.90, 150, "🍯", "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f", 4.8, 890),
                    new Produto(null, "Bala de Caramelo", "Balas mastigáveis de caramelo puro", "Caramelo", 11.90, 400, "🍬", "https://images.unsplash.com/photo-1599599810314-dfb9b9f36ae7", 4.4, 2200),
                    
                    // Especiais
                    new Produto(null, "Caixa Deluxe com 12 Bombons", "Seleção premium com sabores diferenciados", "Especiais", 89.90, 30, "🎁", "https://images.unsplash.com/photo-1599599810694-b5ac4dd12b20", 4.9, 180),
                    new Produto(null, "Kit Degustação Especial", "Kit com 6 tipos diferentes de doces premium", "Especiais", 65.90, 45, "🎁", "https://images.unsplash.com/photo-1578985545062-69928b1d9587", 4.8, 250),
                    new Produto(null, "Doce com Ouro Comestível", "Confite artesanal com detalhes em ouro", "Especiais", 52.90, 25, "✨", "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f", 5.0, 120)
            );

            // Salvar todos os produtos
            repository.saveAll(produtos);
            System.out.println("✅ " + produtos.size() + " produtos carregados com sucesso!");
        };
    }
}
