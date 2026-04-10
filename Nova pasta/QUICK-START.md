# 🚀 Quick Start - Docker

## 1️⃣ Pré-requisitos
- Docker instalado
- Docker Compose instalado

## 2️⃣ Rodar tudo

```bash
docker-compose up --build
```

**Pronto!** Todos os serviços estarão rodando:

| Serviço | URL | Credenciais |
|---------|-----|-----|
| 🌍 Eureka | http://localhost:8761 | - |
| 📡 Service A | http://localhost:8081/api/hello | - |
| 📡 Service B | http://localhost:8082/api/hello | - |
| 📊 Prometheus | http://localhost:9090 | - |
| 📈 **Grafana** | http://localhost:3000 | admin / admin |

## 3️⃣ Testar endpoints

```bash
# Service A
curl http://localhost:8081/api/hello

# Service B
curl http://localhost:8082/api/hello

# Service B chamando Service A  
curl http://localhost:8082/api/call-service-a
```

## 4️⃣ Grafana

Acesse: **http://localhost:3000**

- **Login**: admin / admin
- **Data Source**: Prometheus (já configurado automaticamente ✅)
- **Dashboard**: "Spring Cloud Services" (já criado automaticamente ✅)

## 5️⃣ Parar tudo

```bash
docker-compose down
```

---

💡 **Dica**: Use os helpers para facilitar
```bash
# Windows
.\docker-helper.bat start
.\docker-helper.bat logs service-a
.\docker-helper.bat stop

# Linux/Mac
./docker-helper.sh start
./docker-helper.sh logs service-a
./docker-helper.sh stop
```
