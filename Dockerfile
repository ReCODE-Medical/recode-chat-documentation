# Stage 1: Build the Docusaurus site
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# If using Yarn, uncomment the following line and comment out the npm install line
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If using Yarn, uncomment the following line and comment out the npm install line
# RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the static site
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:1.25-alpine

# Copy the built site from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"] 