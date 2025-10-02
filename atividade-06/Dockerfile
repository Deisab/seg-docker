# Base image
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto (respeitando .dockerignore)
COPY . .

# Comando para rodar o app
CMD ["node", "src/index.js"]
