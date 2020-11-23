FROM node:12
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
EXPOSE 3002
CMD [ "npm", "run", "docker" ]