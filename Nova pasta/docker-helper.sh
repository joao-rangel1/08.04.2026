#!/bin/bash

# Script auxiliar para Docker Compose - Spring Cloud Demo
# Uso: ./docker-helper.sh [comando]

set -e

CMD=${1:-help}

case $CMD in
  start)
    echo "🚀 Iniciando containers..."
    docker-compose up -d
    echo "✅ Containers iniciados"
    echo ""
    echo "📊 Acessar:"
    echo "  - Eureka: http://localhost:8761"
    echo "  - Service A: http://localhost:8081/api/hello"
    echo "  - Service B: http://localhost:8082/api/hello"
    echo "  - Prometheus: http://localhost:9090"
    echo "  - Grafana: http://localhost:3000 (admin/admin)"
    ;;

  stop)
    echo "⏹️  Parando containers..."
    docker-compose down
    echo "✅ Containers parados"
    ;;

  restart)
    echo "🔄 Reiniciando containers..."
    docker-compose restart
    echo "✅ Containers reiniciados"
    ;;

  logs)
    SERVICE=${2:-}
    if [ -z "$SERVICE" ]; then
      echo "📝 Logs de todos os serviços:"
      docker-compose logs -f
    else
      echo "📝 Logs de $SERVICE:"
      docker-compose logs -f $SERVICE
    fi
    ;;

  build)
    echo "🔨 Buildando imagens..."
    docker-compose build --no-cache
    echo "✅ Build concluído"
    ;;

  status)
    echo "📦 Status dos containers:"
    docker-compose ps
    ;;

  test)
    echo "🧪 Testando endpoints..."
    echo ""
    echo "1️⃣  Testando Eureka:"
    curl -s http://localhost:8761 | grep -o "Eureka" || echo "❌ Eureka não respondeu"
    echo ""
    echo "2️⃣  Testando Service A:"
    curl -s http://localhost:8081/api/hello && echo ""
    echo ""
    echo "3️⃣  Testando Service B:"
    curl -s http://localhost:8082/api/hello && echo ""
    echo ""
    echo "4️⃣  Service B chamando Service A:"
    curl -s http://localhost:8082/api/call-service-a && echo ""
    ;;

  clean)
    echo "🧹 Removendo containers e volumes..."
    docker-compose down -v
    echo "✅ Limpeza concluída"
    ;;

  shell)
    SERVICE=${2:-service-a}
    echo "🐚 Abrindo shell em $SERVICE..."
    docker-compose exec $SERVICE sh
    ;;

  help)
    echo "🐳 Docker Helper - Spring Cloud Demo"
    echo ""
    echo "Uso: ./docker-helper.sh [comando] [serviço]"
    echo ""
    echo "Comandos:"
    echo "  start       - Inicia todos os containers"
    echo "  stop        - Para todos os containers"
    echo "  restart     - Reinicia todos os containers"
    echo "  logs        - Mostra logs (opcional: especifique serviço)"
    echo "  build       - Builda as imagens"
    echo "  status      - Mostra status dos containers"
    echo "  test        - Testa os endpoints"
    echo "  clean       - Remove containers e volumes"
    echo "  shell       - Abre shell em um container (padrão: service-a)"
    echo "  help        - Mostra esta ajuda"
    echo ""
    echo "Exemplos:"
    echo "  ./docker-helper.sh start"
    echo "  ./docker-helper.sh logs service-a"
    echo "  ./docker-helper.sh shell eureka-server"
    ;;

  *)
    echo "❌ Comando desconhecido: $CMD"
    echo "Use './docker-helper.sh help' para ver os comandos disponíveis"
    exit 1
    ;;
esac
