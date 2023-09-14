FROM --platform=linux/amd64 node:18.17.1

WORKDIR /project
COPY . .

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0

CMD [ "npm", "run", "start" ]