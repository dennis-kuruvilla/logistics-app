import { gql} from '@apollo/client'



const allPersons = gql`
query {
  allPersons {
    name
  }
}
`


const allPersons1 = gql`
query {
  allPersons {
    name
    street
  }
}
`

const ADD_SHIPMENT = gql`
mutation createShipment($shipment: InputShipment!) {
    addShipment( input: $shipment)
    {
        distance
         carrier
         fromCord{
           lat
           lng
         }
         Products{
           ProductDetails{
             name
             description
             price
             quantity
             id
             _id
           }
           RequiredQuantity
         }
         creationTime
         
       }
     }
`

const ADD_PERSON = gql `mutation createPerson($person: String!){
    addPerson( input: $person
    
    ) {
      name
      
    }
  }`

// client.query({ query })
//   .then((response) => {
//     console.log(response.data)
//   })

export {allPersons,allPersons1,ADD_SHIPMENT,ADD_PERSON}