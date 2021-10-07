FROM node:14.17-alpine

WORKDIR /app

RUN npm install --unsafe-perm --force -g yarn && \
  chmod +x /usr/local/bin/yarn

# RUN ls -la

ENTRYPOINT rm -rf node_modules && \
  yarn && \
  yarn dev