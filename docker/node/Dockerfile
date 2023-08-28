FROM node:16.14.0
ENV APP_ROOT /project

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD ./project ${APP_ROOT}

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0
