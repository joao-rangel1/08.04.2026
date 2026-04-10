# Multi-stage build para Doce Store
FROM maven:3.9.4-eclipse-temurin-21 AS builder

WORKDIR /app

# Copiar pom.xml pai e de todos os módulos
COPY pom.xml .
COPY eureka-server/pom.xml ./eureka-server/
COPY service-a/pom.xml ./service-a/
COPY service-b/pom.xml ./service-b/
COPY doce-store/pom.xml ./doce-store/

# Copiar código fonte
COPY doce-store/src ./doce-store/src

# Build apenas o doce-store
RUN mvn clean package -pl doce-store -DskipTests -q

# Estágio final - runtime
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copiar JAR do builder
COPY --from=builder /app/doce-store/target/*.jar app.jar

# Expor porta
EXPOSE 8083

# Health check
HEALTHCHECK --interval=10s --timeout=5s --start-period=15s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8083/actuator/health || exit 1

# Executar aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
