FROM node

RUN mkdir -p /usr/src/app/
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y yarn

WORKDIR /usr/src/app

COPY ./index.js .

CMD ["node", "index.js"]
