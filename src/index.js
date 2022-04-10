import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    user: Model,
  },

  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: '1',
          name: 'John Doe',
          email: 'john_doe@email.com',
          password: 's3cr3t',
          level: 'Novato',
          description: 'Aprender NodeJS',
          status: 'Disponível',
          knowledges: [
            {
              id: '1',
              name: 'HTML5',
              score: '5',
            },
            {
              id: '2',
              name: 'CSS3',
              score: '5',
            },
            {
              id: '3',
              name: 'Javascript',
              score: '4',
            },
          ],
          created_at: '2022-02-12 09:00:00',
          updated_at: '2022-02-12 09:00:00',
        },
        {
          id: '2',
          name: 'Will Smith',
          email: 'will_smith@email.com',
          password: 's3cr3t',
          level: 'Junior',
          description: 'Aprender Postgres',
          status: 'Indisponível',
          knowledges: [
            {
              id: '1',
              name: 'Javascript',
              score: '5',
            },
            {
              id: '2',
              name: 'NodeJS',
              score: '5',
            },
            {
              id: '3',
              name: 'MySQL',
              score: '4',
            },
            {
              id: '4',
              name: 'MongoDB',
              score: '3',
            },
            {
              id: '5',
              name: 'Linux',
              score: '5',
            },
            
          ],
          created_at: '2022-02-12 09:00:00',
          updated_at: '2022-02-12 09:00:00',
        },
      ],
    });
  },

  routes() {
    this.namespace = '/';

    this.get('/', () => {
      return this.schema.all('user');
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
