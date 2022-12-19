FROM mcr.microsoft.com/playwright:v1.27.0-focal

WORKDIR /boilerplate-tests/

COPY package-lock.json package.json /boilerplate-tests/

RUN npm install

COPY . /boilerplate-tests/

CMD ["sh", "scripts/docker.sh"]
