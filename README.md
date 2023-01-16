<h1 align="center">
  <br>
  <a href="https://b4a.com.br"><img src="https://b4a.com.br/_next/static/img/d2365d96976f12917d18f53ad82f564f.png" alt="B4a" width="200"></a>
  <br>
  Influencer Connect Backend (Em Construção)
  <br>
</h1>
<br>
<h4 align="center">Projeto de Backend para o portal Influencer Connect/</h4>
<h4 align="center">Em construção - Utilizando NestJs e Prisma/</h4>
<br>
<p align="center">
  <a href="#">
 <img alt="NestJs" src="https://img.shields.io/badge/NestJs-DD0031?logo=nestjs&logoColor=white&style=for-the-badge" />
  </a>
  <a href="#">
      <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white&style=for-the-badge" />
  </a>
  <a href="#">
   <img alt="Sass" src="https://img.shields.io/badge/Prisma-CC6699?logo=prisma&logoColor=white&style=for-the-badge" />
  </a>
</p>

## Informações Importantes:

### Proteção de rotas:

<h5> A aplicação trabalha com dois tipos de proteção de rotas | Local e JWT </h5>
<h5> A rota de Login é a unica rota desprotegida </h5>
<h5> Para tornar uma rota publica utilizar o decorator @IsPublic() </h5>

### Gerenciamento de Banco de Dados:

<h5> O gerenciamento do banco de dados é feito através do Prisma </h5>
<h5> Pode ser migrado para qualquer banco de dados através do comando migrate dev </h5>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
