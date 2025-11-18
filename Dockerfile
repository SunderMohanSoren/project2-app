FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY src ./src
ENV PORT=3000
ARG APP_VERSION=dev
ENV APP_VERSION=${APP_VERSION}
EXPOSE 3000
CMD ["node", "src/index.js"]
