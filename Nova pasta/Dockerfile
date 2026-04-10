# Builder - compilar todos os módulos
FROM maven:3.9.4-eclipse-temurin-21 AS builder

WORKDIR /app-build

# Copiar tudo pra compilação
COPY . .

# Build de todos os módulos
RUN mvn clean package -DskipTests -q

# ============ EUREKA SERVER ============
FROM eclipse-temurin:21-jre-alpine AS eureka
WORKDIR /app
COPY --from=builder /app-build/eureka-server/target/*.jar app.jar
EXPOSE 8761
HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8761/actuator/health || exit 1
ENTRYPOINT ["java", "-jar", "app.jar"]

# ============ SERVICE A ============
FROM eclipse-temurin:21-jre-alpine AS service-a
WORKDIR /app
COPY --from=builder /app-build/service-a/target/*.jar app.jar
EXPOSE 8081
HEALTHCHECK --interval=10s --timeout=5s --start-period=15s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8081/actuator/health || exit 1
ENTRYPOINT ["java", "-jar", "app.jar"]

# ============ SERVICE B ============
FROM eclipse-temurin:21-jre-alpine AS service-b
WORKDIR /app
COPY --from=builder /app-build/service-b/target/*.jar app.jar
EXPOSE 8082
HEALTHCHECK --interval=10s --timeout=5s --start-period=15s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8082/actuator/health || exit 1
ENTRYPOINT ["java", "-jar", "app.jar"]

# ============ DOCE STORE ============
FROM eclipse-temurin:21-jre-alpine AS doce-store
WORKDIR /app
COPY --from=builder /app-build/doce-store/target/*.jar app.jar
EXPOSE 8083
HEALTHCHECK --interval=10s --timeout=5s --start-period=15s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8083/actuator/health || exit 1
ENTRYPOINT ["java", "-jar", "app.jar"]
