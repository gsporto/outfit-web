/* eslint-disable import/no-extraneous-dependencies */
import { sign } from 'jsonwebtoken';
import { createServer, Response } from 'miragejs';

export function makeServer() {
  const server = createServer({
    environment: 'development',
    routes() {
      this.post('authenticate', (_, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        if (email !== 'teste@teste.com' || password !== 'teste') {
          return new Response(401, {}, { errors: ['name cannot be blank'] });
        }
        const user = { id: '1' };
        const expiresIn = '1d';
        const secret = '123';
        const token = sign({}, secret, {
          subject: user.id,
          expiresIn,
        });
        return {
          user,
          token,
        };
      });
    },
  });
  return server;
}
