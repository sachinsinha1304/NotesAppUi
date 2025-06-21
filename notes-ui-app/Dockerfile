FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the production-ready static files
RUN npm run build

# Serve with a simple HTTP server
RUN npm install -g serve

EXPOSE 3001
CMD ["serve", "-s", "build", "-l", "3001"]
