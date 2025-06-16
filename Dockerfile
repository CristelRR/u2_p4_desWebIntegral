# Imagen base de Node.js
FROM node:24

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Puerto
ENV PORT=4300
EXPOSE 4300
CMD ["npm", "start"]


# Comando para iniciar la app
CMD ["npm", "start"]
