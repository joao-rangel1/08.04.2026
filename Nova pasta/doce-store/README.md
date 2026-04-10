# 🍰 Doce Store - Loja de Doces

Uma loja de doces moderna e elegante construída com Spring Boot e frontend responsivo!

## 🌟 Características

✅ **Catálogo de 19 produtos** com categorias:
- 🍫 Chocolates Premium
- 🍬 Gomas e Gomas Gelatinosas
- 🍭 Doces de Açúcar
- 🍓 Frutas
- 🍯 Caramelos
- ✨ Especiais (Caixas e Kits)

✅ **Interface Moderna**
- Design gradiente responsivo
- Filtros por categoria
- Busca em tempo real
- Notificações visuais
- Animações suaves

✅ **API REST Completa**
- CRUD de produtos
- Suporte a categorias
- Busca por termo
- Métricas Prometheus

✅ **Dados Iniciais Automáticos**
- 19 produtos carregados na inicialização
- Com descrições, preços, estoques reais
- Rating e número de avaliações

## 📋 Estrutura

```
doce-store/
├── src/
│   ├── main/
│   │   ├── java/com/example/docestore/
│   │   │   ├── DoceStoreApplication.java      (Main)
│   │   │   ├── controller/                     (API REST)
│   │   │   ├── service/                        (Negócio)
│   │   │   ├── model/                          (Entidades)
│   │   │   ├── repository/                     (Data Access)
│   │   │   └── config/                         (Configurações)
│   │   └── resources/
│   │       ├── application.yml                 (Config)
│   │       └── static/
│   │           └── index.html                  (Frontend)
│   └── test/
├── pom.xml                                     (Dependencies)
└── Dockerfile
```

## 🚀 Como Usar

### Opção 1: Com Docker Compose (Recomendado)

```bash
# Na raiz do projeto
docker-compose up --build

# Acessar a loja
# http://localhost:8083
```

### Opção 2: Executar Localmente

```bash
# Compilar
mvn clean package

# Executar
cd doce-store
mvn spring-boot:run

# Acessar
# http://localhost:8083
```

## 📡 Endpoints da API

### Produtos
```bash
# Listar todos
GET http://localhost:8083/api/produtos

# Obter um produto
GET http://localhost:8083/api/produtos/{id}

# Buscar por termo
GET http://localhost:8083/api/produtos/buscar?termo=chocolate

# Listar por categoria
GET http://localhost:8083/api/produtos/categoria/{categoria}

# Criar produto
POST http://localhost:8083/api/produtos
Content-Type: application/json
{
  "nome": "Novo Doce",
  "descricao": "Descrição",
  "categoria": "Chocolate",
  "preco": 29.90,
  "estoque": 100,
  "emoji": "🍫",
  "imagemUrl": "url",
  "rating": 5.0,
  "avaliacoes": 10
}

# Atualizar
PUT http://localhost:8083/api/produtos/{id}

# Deletar
DELETE http://localhost:8083/api/produtos/{id}

# Listar categorias
GET http://localhost:8083/api/produtos/categorias/lista
```

## 🎨 Frontend

### Recursos da Interface
- **Busca**: Encontre produtos por nome ou descrição
- **Filtros**: Navegue por categoria
- **Cards Interativos**: Hover effects e animações
- **Notificações**: Feedback ao adicionar ao carrinho
- **Responsivo**: Funciona em mobile, tablet e desktop

### Dados Exibidos em Cada Produto
- 🎨 Emoji representativo
- 📝 Nome e descrição
- 🏷️ Categoria
- 💰 Preço
- ⭐ Rating e número de avaliações
- 📦 Quantidade em estoque
- 🛒 Botão adicionar ao carrinho

## 💾 Banco de Dados

- **Tipo**: H2 (em memória)
- **Auto-Reset**: Dados são recarregados a cada inicialização
- **Tabela**: `produtos` com 19 registros iniciais

## 📊 Monitoramento

A Doce Store expõe métricas Prometheus:
```
http://localhost:8083/actuator/prometheus
```

Visualize no Grafana (http://localhost:3000) com o dashboard "Spring Cloud Services"

## 🐳 Docker

```dockerfile
# Build manual
docker build -t doce-store:1.0 -f doce-store/Dockerfile .

# Rodar container
docker run -p 8083:8083 doce-store:1.0
```

## 📦 Produtos Pré-carregados

### Chocolates
1. Chocolate Belga Premium (R$ 45,90)
2. Chocolate ao Leite Deluxe (R$ 38,50)
3. Brigadeiro Gourmet (R$ 32,90)
4. Bombom Assado (R$ 29,90)

### Gomas
5. Gominhas Tropical (R$ 18,90)
6. Ursinhos de Gelatina (R$ 15,50)
7. Anel de Goma (R$ 12,90)

### Açúcar
8. Pirulito Gigante (R$ 22,50)
9. Algodão Doce Premium (R$ 19,90)
10. Bala de Açúcar (R$ 9,90)

### Frutas
11. Bala de Frutas Mistas (R$ 14,50)
12. Doce de Morango (R$ 28,90)
13. Pastilha de Framboesa (R$ 16,90)

### Caramelo
14. Caramelo Salgado (R$ 24,90)
15. Bala de Caramelo (R$ 11,90)

### Especiais
16. Caixa Deluxe com 12 Bombons (R$ 89,90)
17. Kit Degustação Especial (R$ 65,90)
18. Doce com Ouro Comestível (R$ 52,90)

## 🛠️ Tecnologias

- **Backend**: Spring Boot 3.1.5
- **Database**: H2 Database
- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Build**: Maven
- **Container**: Docker
- **Monitoramento**: Prometheus + Micrometer

## 📝 Melhorias Futuras

- [ ] Integrar com carrinho de compras real
- [ ] Sistema de pedidos
- [ ] Login e autenticação
- [ ] Integração com gateway de pagamento
- [ ] Email de confirmação
- [ ] Avaliações de clientes
- [ ] Dashboard administrativo
- [ ] Histórico de compras

## 📞 Suporte

Para problemas, consulte os logs:
```bash
docker-compose logs doce-store
```

Ou acesse o console H2:
```
http://localhost:8083/h2-console
JDBC URL: jdbc:h2:mem:docestoredb
User: sa
Password: (vazio)
```

---

🍰 **Aproveite sua visita à Doce Store!** 🍭
