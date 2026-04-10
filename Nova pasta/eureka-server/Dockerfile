# Multi-stage build para Eureka Server
FROM maven:3.9.4-eclipse-temurin-21 AS builder

WORKDIR /app

# Copiar pom.xml pai e dos módulos
COPY pom.xml .
COPY eureka-server/pom.xml ./eureka-server/
COPY service-a/pom.xml ./service-a/
COPY service-b/pom.xml ./service-b/
COPY doce-store/pom.xml ./doce-store/

# Copiar código fonte
COPY eureka-server/src ./eureka-server/src

# Build apenas o eureka-server
RUN mvn clean package -pl eureka-server -DskipTests -q

# Estágio final - runtime
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copiar JAR do builder
COPY --from=builder /app/eureka-server/target/*.jar app.jar

# Expor porta
EXPOSE 8761

# Health check
HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8761/actuator/health || exit 1

# Executar aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
