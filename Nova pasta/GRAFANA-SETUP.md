# Como Testar Grafana com os Microservices

## 📋 Pré-requisitos
- Serviços Java 21 rodando (Eureka, Service A, Service B)
- Prometheus instalado e configurado
- Grafana instalado

## 🚀 Passo a Passo

### 1. Instalar Grafana
```bash
# Download: https://grafana.com/grafana/download
# Versão: Windows AMD64 (recomendada)

# Após download, extraia o ZIP
# Execute: grafana\bin\grafana-server.exe
```

### 2. Instalar Prometheus
```bash
# Download: https://prometheus.io/download/
# Versão: Windows AMD64

# Arquivo de configuração já criado: prometheus.yml
# Execute: prometheus.exe --config.file=prometheus.yml
```

### 3. Acessar Grafana
- **URL**: http://localhost:3000
- **Login**: admin
- **Senha**: admin (mude na primeira vez)

### 4. Configurar Data Source
1. Menu lateral → Connections → Data sources
2. Add data source → Prometheus
3. **URL**: http://localhost:9090
4. **Scrape interval**: 15s
5. Save & test

### 5. Criar Dashboard
1. Menu lateral → Dashboards → New → New Dashboard
2. Add visualization → Escolher "Prometheus"

### 6. Queries Úteis

#### JVM Memory (Service A)
```
jvm_memory_used_bytes{application="service-a", area="heap"}
```

#### HTTP Requests por Segundo
```
rate(http_server_requests_seconds_count[5m])
```

#### CPU Usage
```
system_cpu_usage{application="service-b"}
```

#### Threads por Estado
```
jvm_threads_states_threads{application="eureka-server"}
```

### 7. Importar Dashboard Pronto
- **JVM Dashboard**: ID 4701
- **Spring Boot Dashboard**: ID 12900

## 🔍 Testando Métricas

### No Browser:
1. http://localhost:3000 (Grafana)
2. http://localhost:9090 (Prometheus)
3. http://localhost:8761 (Eureka Dashboard)

### Gerar Dados:
```bash
# Fazer várias chamadas para gerar métricas
for i in {1..10}; do
  curl http://localhost:8081/api/hello
  curl http://localhost:8082/api/call-service-a
  sleep 1
done
```

## 📊 Dashboards Recomendados

### Dashboard 1: Visão Geral
- Status dos 3 serviços
- CPU/Memory de cada um
- HTTP requests total

### Dashboard 2: JVM Deep Dive
- Heap usage por serviço
- GC collections
- Thread states
- Classes loaded

### Dashboard 3: Application Metrics
- HTTP response times
- Error rates
- Throughput por endpoint

## 🎯 Próximos Passos
1. Configurar alertas no Grafana
2. Criar dashboards customizados
3. Adicionar métricas de negócio
4. Configurar backup dos dados