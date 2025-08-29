# Usa uma imagem base Python
FROM python:3.12-slim

# Define o diretório de trabalho dentro do container
WORKDIR /code

# Copia o arquivo de requisitos e instala as dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código da sua aplicação
COPY . .

# Define o comando para rodar a aplicação (opcional, pode ser movido para o docker-compose.yml)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]