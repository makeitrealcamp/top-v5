FROM node

RUN mkdir -p /usr/src/app/frontend
WORKDIR /usr/src/app/frontend

# Solo si usan yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y yarn

COPY . .

RUN yarn install --production
RUN yarn global add serve
RUN yarn build

EXPOSE 5000

CMD ["serve", "build"]
