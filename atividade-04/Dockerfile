# Usa imagem oficial do Node
FROM node:18-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos de dependência
COPY package.json .

# Instala dependências
RUN npm install express

# Copia o código da aplicação
COPY . .

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para iniciar o app
CMD ["npm", "start"]
