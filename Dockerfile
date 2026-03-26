# Step 1: Build stage (Standard Node image use kar rahe hain build ke liye)
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
# Clean install ensure karta hai ki sahi binaries download hon
RUN npm install
COPY . .
RUN npm run build

# Step 2: Production stage (Nginx use kar rahe hain serve karne ke liye)
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
