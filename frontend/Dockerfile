# docker build -f Dockerfile -t uhhlt/corpus_browser_frontend:latest .
# docker push uhhlt/corpus_browser_frontend:latest

# STAGE 1: BUILD REACT APP

# pull image
FROM node:lts-alpine as build

# Add a work directory
WORKDIR /app

# Set production build
ENV NODE_ENV production

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --include=dev

# Copy app files
COPY . .

# build
RUN npm run build

# STAGE 2: BUILD IMAGE
FROM nginx:stable-alpine

# Copy built files
COPY --from=build /app/dist /usr/share/nginx/html

# Run
CMD ["nginx", "-g", "daemon off;"]
