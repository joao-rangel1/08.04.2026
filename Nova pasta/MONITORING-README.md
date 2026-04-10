# Spring Cloud Microservices Monitoring Setup
# Java 21 + Prometheus + Grafana

## Serviços Rodando
- Eureka Server: http://localhost:8761/
- Service A: http://localhost:8081/
- Service B: http://localhost:8082/

## Endpoints de Métricas
- Eureka: http://localhost:8761/actuator/prometheus
- Service A: http://localhost:8081/actuator/prometheus
- Service B: http://localhost:8082/actuator/prometheus

## Como Configurar Grafana + Prometheus

### 1. Instalar Prometheus
```bash
# Baixar do site oficial: https://prometheus.io/download/
# Ou usar Docker: docker run -d -p 9090:9090 -v ./prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
```

### 2. Instalar Grafana
```bash
# Baixar do site oficial: https://grafana.com/grafana/download
# Ou usar Docker: docker run -d -p 3000:3000 grafana/grafana
```

### 3. Configurar Grafana
1. Acesse http://localhost:3000 (admin/admin)
2. Add Data Source → Prometheus → URL: http://localhost:9090
3. Import Dashboard → ID: 4701 (JVM Dashboard)
4. Ou crie dashboard personalizado com queries como:
   - `jvm_memory_used_bytes{application="eureka-server"}`
   - `http_server_requests_seconds_count{application="service-a"}`

## Métricas Disponíveis
- JVM Memory, CPU, Threads
- HTTP Requests (Spring Boot Actuator)
- Eureka Registry Status
- Custom Application Metrics

## Próximos Passos
1. Configurar alertas no Prometheus
2. Criar dashboards customizados
3. Adicionar métricas de negócio específicas