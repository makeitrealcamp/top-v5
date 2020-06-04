FROM node

RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend

# Solo si usan yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y yarn

COPY . .
RUN yarn install --production

EXPOSE 8000

CMD ["yarn", "start"]

