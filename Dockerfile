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

# Puerto de exposición
EXPOSE 4300

# Comando para iniciar la app en el puerto deseado
CMD ["npm", "start"]
