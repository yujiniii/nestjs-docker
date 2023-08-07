# NestJS Docker

간단하게 docker-compose를 이용하여 NestJS를 배포하는 예제입니다.
(많이 부족하지만,,)

## Before you start

`.env.skel`을 참고하여 루트에 `.env` 파일을 생성합니다.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Docker

```bash
$ docker-compose up 
```

