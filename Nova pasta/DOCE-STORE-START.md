# 🍰 Doce Store - Quick Start

## 🚀 Rodar Tudo em Um Comando

```bash
docker-compose up --build
```

**Pronto!** Tudo está rodando. Entre em:

## 🌐 Acessos Principais

| O que | URL | Status |
|------|-----|--------|
| **🍰 Doce Store** | http://localhost:8083 | **⭐ NOVO!** |
| Dashboard | http://localhost:80 (arquivo `dashboard.html`) | - |
| Eureka | http://localhost:8761 | Service Discovery |
| Prometheus | http://localhost:9090 | Métricas |
| Grafana | http://localhost:3000 | admin/admin |

## 📦 Produtos Disponíveis

A Doce Store vem com **19 produtos pré-carregados**:

### 🍫 Chocolates (4)
- Chocolate Belga Premium - R$ 45,90
- Chocolate ao Leite Deluxe - R$ 38,50
- Brigadeiro Gourmet - R$ 32,90
- Bombom Assado - R$ 29,90

### 🍬 Gomas (3)
- Gominhas Tropical - R$ 18,90
- Ursinhos de Gelatina - R$ 15,50
- Anel de Goma - R$ 12,90

### 🍭 Açúcar (3)
- Pirulito Gigante - R$ 22,50
- Algodão Doce Premium - R$ 19,90
- Bala de Açúcar - R$ 9,90

### 🍓 Frutas (3)
- Bala de Frutas Mistas - R$ 14,50
- Doce de Morango - R$ 28,90
- Pastilha de Framboesa - R$ 16,90

### 🍯 Caramelo (2)
- Caramelo Salgado - R$ 24,90
- Bala de Caramelo - R$ 11,90

### ✨ Especiais (4)
- Caixa Deluxe com 12 Bombons - R$ 89,90
- Kit Degustação Especial - R$ 65,90
- Doce com Ouro Comestível - R$ 52,90

## 🎨 Recursos da Loja

✅ Busca em tempo real  
✅ Filtros por categoria  
✅ Notificações de compra  
✅ Design responsivo  
✅ Animações suaves  
✅ Rating e avaliações  
✅ Controle de estoque  

## 🔌 API REST

```bash
# Listar todos os produtos
curl http://localhost:8083/api/produtos

# Buscar produtos
curl http://localhost:8083/api/produtos/buscar?termo=chocolate

# Listar por categoria
curl http://localhost:8083/api/produtos/categoria/Chocolate

# Listar categorias
curl http://localhost:8083/api/produtos/categorias/lista
```

## 📊 Ver Métricas

A Doce Store expõe métricas em:
```
http://localhost:8083/actuator/prometheus
```

Visualize no Grafana: http://localhost:3000

## 🛑 Parar Tudo

```bash
docker-compose down
```

## 📁 Estrutura

```
doce-store/
├── Dockerfile
├── pom.xml
├── README.md
├── src/
│   ├── main/
│   │   ├── java/com/example/docestore/
│   │   │   ├── DoceStoreApplication.java
│   │   │   ├── controller/ProdutoController.java
│   │   │   ├── service/ProdutoService.java
│   │   │   ├── model/Produto.java
│   │   │   ├── repository/ProdutoRepository.java
│   │   │   └── config/DataInitializer.java
│   │   └── resources/
│   │       ├── application.yml
│   │       └── static/index.html
│   └── test/
│       └── java/com/example/docestore/
│           └── controller/ProdutoControllerTest.java
```

## 🧪 Testar a Loja

```bash
# Testar todos os endpoints
.\docker-helper.bat test

# Ver logs da loja
docker-compose logs doce-store

# Acessar shell
docker-compose exec doce-store sh
```

## 💾 Banco de Dados

- **Tipo**: H2 (em memória)
- **Console**: http://localhost:8083/h2-console
- **URL**: jdbc:h2:mem:docestoredb
- **User**: sa
- **Senha**: (vazio)

## 🎯 Próximos Passos

1. Explore a interface da Doce Store em http://localhost:8083
2. Busque e filtre produtos
3. Veja as métricas em Prometheus (http://localhost:9090)
4. Configure dashboards no Grafana (http://localhost:3000)
5. Teste a API completamente

## 📚 Documentação Completa

- [Doce Store README](doce-store/README.md)
- [Docker Setup](DOCKER-SETUP.md)
- [Quick Start Original](QUICK-START.md)

---

🎉 **Aproveite e bom shopping!**
