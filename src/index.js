import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// import ProdApp from './production/ProdApp';

import { 
  ApolloClient, ApolloProvider, HttpLink, InMemoryCache
} from '@apollo/client' 

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_SERVER,
  })
})

// console.log(process.env.REACT_APP_GRAPHQL_SERVER)

// const query = gql`
// query {
//   allPersons {
//     name
//   }
// }
// `

// client.query({ query })
//   .then((response) => {
//     console.log(response.data)
//   })


ReactDOM.render(
  <ApolloProvider client={client}>
    <NotificationContainer/> 
    <App />
    
  </ApolloProvider>,
  document.getElementById('root')
);


