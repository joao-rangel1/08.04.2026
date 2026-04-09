# Spring Cloud Demo - Exemplo Mínimo

Este é um exemplo mínimo de uma arquitetura de microserviços usando **Spring Cloud**.

## Arquitetura

- **Eureka Server**: Servidor de descoberta de serviços (porta 8761)
- **Service A**: Microserviço A (porta 8081)
- **Service B**: Microserviço B que se comunica com Service A (porta 8082)

## Como Executar

### 1. Compilar o projeto
```bash
cd "Nova pasta"
mvn clean install
```

### 2. Executar Eureka Server
```bash
cd eureka-server
mvn spring-boot:run
```

Acesse: http://localhost:8761

### 3. Executar Service A (novo terminal)
```bash
cd service-a
mvn spring-boot:run
```

Teste: http://localhost:8081/api/hello

### 4. Executar Service B (novo terminal)
```bash
cd service-b
mvn spring-boot:run
```

## Endpoints

### Service A
- `GET http://localhost:8081/api/hello` - Retorna mensagem
- `GET http://localhost:8081/api/status` - Status do serviço

### Service B
- `GET http://localhost:8082/api/hello` - Retorna mensagem
- `GET http://localhost:8082/api/call-service-a` - Chama Service A através do Eureka (service discovery + load balancing)

## Conceitos Aplicados

✅ **Service Discovery**: Eureka Server registra os serviços
✅ **Service Registration**: Service A e B se registram automaticamente
✅ **Client-Side Load Balancing**: RestTemplate com @LoadBalanced
✅ **Inter-Service Communication**: Service B chama Service A
✅ **Health Checks**: Eureka monitora o status dos serviços
