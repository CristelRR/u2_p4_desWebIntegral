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

# Expone el puerto en el que corre React
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
