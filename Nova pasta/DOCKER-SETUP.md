# Docker Setup - Spring Cloud Demo

Este guia explica como executar a aplicação em containers usando Docker e Docker Compose.

## Pré-requisitos

- Docker (versão 20.10+)
- Docker Compose (versão 2.0+)

## Quick Start - Execute tudo de uma vez

```bash
# Na raiz do projeto (Nova pasta)
docker-compose up --build
```

Isso irá:
1. Build das imagens Docker
2. Iniciar todos os serviços
3. Configurar a rede entre containers
4. Expor as portas necessárias

## Serviços e Portas

| Serviço | Porta | URL |
|---------|-------|-----|
| Eureka Server | 8761 | http://localhost:8761 |
| Service A | 8081 | http://localhost:8081/api/hello |
| Service B | 8082 | http://localhost:8082/api/hello |
| Prometheus | 9090 | http://localhost:9090 |
| Grafana | 3000 | http://localhost:3000 (admin/admin) |

## Testando a Aplicação

### 1. Verificar Eureka
```bash
curl http://localhost:8761
```

### 2. Chamar Service A
```bash
curl http://localhost:8081/api/hello
curl http://localhost:8081/api/status
```

### 3. Chamar Service B
```bash
curl http://localhost:8082/api/hello
curl http://localhost:8082/api/call-service-a
```

### 4. Visualizar Métricas
- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3000 (user: admin, password: admin)

## Comandos Úteis

```bash
# View logs de um serviço
docker-compose logs eureka-server
docker-compose logs service-a
docker-compose logs service-b

# Ver logs em tempo real
docker-compose logs -f service-a

# Parar todos os serviços
docker-compose down

# Parar e remover volumes
docker-compose down -v

# Rebuild de uma imagem específica
docker-compose up --build eureka-server

# Executar em background
docker-compose up -d

# Ver status dos containers
docker-compose ps

# Acessar shell de um container
docker-compose exec service-a sh

# Visualizar variáveis de ambiente
docker-compose exec service-a env
```

## Comunicação Entre Serviços em Container

Dentro do docker-compose, os serviços se comunicam usando seus nomes:
- Eureka Server: `http://eureka-server:8761`
- Service A: `http://service-a:8081`
- Service B: `http://service-b:8082`

Isso é possível porque estão na mesma rede Docker (`spring-cloud-network`).

## Volumes Persistentes

- `prometheus-data`: Armazena métricas do Prometheus
- `grafana-data`: Armazena configurações e dashboards do Grafana

## Build Manual (Opcional)

Se preferir buildar as imagens manualmente:

```bash
# Build Eureka Server
docker build -t spring-cloud-demo/eureka-server:1.0 -f eureka-server/Dockerfile .

# Build Service A
docker build -t spring-cloud-demo/service-a:1.0 -f service-a/Dockerfile .

# Build Service B
docker build -t spring-cloud-demo/service-b:1.0 -f service-b/Dockerfile .
```

## Solução de Problemas

### Serviços não se conectam ao Eureka
- Verifique se estão na mesma rede: `docker network ls`
- Altere o nome do container em `docker-compose.yml` se necessário
- Confirme a URL do Eureka está correta

### Porta já em uso
```bash
# Encontrar processo usando porta
netstat -ano | findstr :8761

# Mudar a porta em docker-compose.yml
# De: "8761:8761"
# Para: "9761:8761"
```

### Container crasheia logo após iniciar
```bash
# Ver logs detalhados
docker-compose logs eureka-server

# Executar sem background para ver saída
docker-compose up eureka-server
```

## Próximos Passos

1. Configure dashboards no Grafana
2. Implante em Kubernetes (opcional)
3. Configure CI/CD para build automático
4. Configure variáveis de ambiente para produção
