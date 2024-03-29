import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

if (process.env.REACT_APP_USE_MIRAGE === "true") {
  createServer({
    models: {
      transaction: Model,
    },
  
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freelancer gig',
            type: 'deposit',
            category: 'Wage',
            value: 2300,
            createdAt: new Date('2021-03-21 09:00:00'),
          },
          {
            id: 2,
            title: 'Rent',
            type: 'withdraw',
            category: 'Housing',
            value: 1100,
            createdAt: new Date('2021-03-30 10:00:00'),
          },
        ]
      })
    },
  
    routes() {
      this.namespace = 'api';
  
      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })
  
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
  
        return schema.create('transaction', data)
      })
    }
  })
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);