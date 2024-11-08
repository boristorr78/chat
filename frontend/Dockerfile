# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json (o yarn.lock)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código del proyecto
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto en el que se ejecutará el frontend
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]
