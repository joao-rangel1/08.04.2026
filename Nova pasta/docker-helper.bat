@echo off
REM Script auxiliar para Docker Compose - Spring Cloud Demo
REM Uso: docker-helper.bat [comando]

setlocal enabledelayedexpansion

set CMD=%1
if "%CMD%"=="" set CMD=help

if "%CMD%"=="start" (
    echo 🚀 Iniciando containers...
    docker-compose up -d
    echo ✅ Containers iniciados
    echo.
    echo 📊 Acessar:
    echo   - Eureka: http://localhost:8761
    echo   - Service A: http://localhost:8081/api/hello
    echo   - Service B: http://localhost:8082/api/hello
    echo   - Prometheus: http://localhost:9090
    echo   - Grafana: http://localhost:3000 ^(admin/admin^)
) else if "%CMD%"=="stop" (
    echo ⏹️  Parando containers...
    docker-compose down
    echo ✅ Containers parados
) else if "%CMD%"=="restart" (
    echo 🔄 Reiniciando containers...
    docker-compose restart
    echo ✅ Containers reiniciados
) else if "%CMD%"=="logs" (
    if "%2%"=="" (
        echo 📝 Logs de todos os serviços:
        docker-compose logs -f
    ) else (
        echo 📝 Logs de %2:
        docker-compose logs -f %2
    )
) else if "%CMD%"=="build" (
    echo 🔨 Buildando imagens...
    docker-compose build --no-cache
    echo ✅ Build concluído
) else if "%CMD%"=="status" (
    echo 📦 Status dos containers:
    docker-compose ps
) else if "%CMD%"=="test" (
    echo 🧪 Testando endpoints...
    echo.
    echo 1️⃣  Testando Eureka:
    curl http://localhost:8761 | find "Eureka" >nul && echo ✅ Eureka respondeu || echo ❌ Eureka não respondeu
    echo.
    echo 2️⃣  Testando Service A:
    curl http://localhost:8081/api/hello
    echo.
    echo 3️⃣  Testando Service B:
    curl http://localhost:8082/api/hello
    echo.
    echo 4️⃣  Service B chamando Service A:
    curl http://localhost:8082/api/call-service-a
    echo.
    echo 5️⃣  Testando Doce Store:
    curl http://localhost:8083/api/produtos
    echo.
) else if "%CMD%"=="clean" (
    echo 🧹 Removendo containers e volumes...
    docker-compose down -v
    echo ✅ Limpeza concluída
) else if "%CMD%"=="shell" (
    set SERVICE=%2
    if "!SERVICE!"=="" set SERVICE=service-a
    echo 🐚 Abrindo shell em !SERVICE!...
    docker-compose exec !SERVICE! sh
) else if "%CMD%"=="help" (
    echo 🐳 Docker Helper - Spring Cloud Demo
    echo.
    echo Uso: docker-helper.bat [comando] [serviço]
    echo.
    echo Comandos:
    echo   start       - Inicia todos os containers
    echo   stop        - Para todos os containers
    echo   restart     - Reinicia todos os containers
    echo   logs        - Mostra logs (opcional: especifique serviço^)
    echo   build       - Builda as imagens
    echo   status      - Mostra status dos containers
    echo   test        - Testa os endpoints
    echo   clean       - Remove containers e volumes
    echo   shell       - Abre shell em um container (padrão: service-a^)
    echo   help        - Mostra esta ajuda
    echo.
    echo Exemplos:
    echo   docker-helper.bat start
    echo   docker-helper.bat logs service-a
    echo   docker-helper.bat shell eureka-server
) else (
    echo ❌ Comando desconhecido: %CMD%
    echo Use "docker-helper.bat help" para ver os comandos disponíveis
    exit /b 1
)
