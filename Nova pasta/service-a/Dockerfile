# Multi-stage build para Service A
FROM maven:3.9.4-eclipse-temurin-21 AS builder

WORKDIR /app

# Copiar pom.xml pai e dos módulos
COPY pom.xml .
COPY eureka-server/pom.xml ./eureka-server/
COPY service-a/pom.xml ./service-a/
COPY service-b/pom.xml ./service-b/
COPY doce-store/pom.xml ./doce-store/

# Copiar código fonte
COPY service-a/src ./service-a/src

# Build apenas o service-a
RUN mvn clean package -pl service-a -DskipTests -q

# Estágio final - runtime
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copiar JAR do builder
COPY --from=builder /app/service-a/target/*.jar app.jar

# Variáveis de ambiente
ENV EUREKA_SERVER_URL=http://eureka-server:8761/eureka/

# Expor porta
EXPOSE 8081

# Health check
HEALTHCHECK --interval=10s --timeout=5s --start-period=15s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8081/actuator/health || exit 1

# Executar aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
