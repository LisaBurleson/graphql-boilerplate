const DataLoader = require( 'dataloader' )
/**
 * Create a loader to get all the keys/ids for books
 * @type {DataLoader<any, any>}
 */
const bookLoader = new DataLoader( ( bookIds ) => {
  console.log( `bookLoader bookIds = ${bookIds}` )
} )

export default {
  Query:{
    author( parent, args, ctx, info ) {
      console.log( `called author resolver args = `, JSON.stringify( args ) )
      return {
        id: 'esdkfajs',
        firstName: 'Joe',
        lastName: 'Camel'
      }
    }
  },
  Author:{
    books( parent, args, ctx, info){
      console.log( `called author.books resolver parent = `, JSON.stringify( parent ) )
      return [
        {
          id: 'dasdkfjasdfas',
          name: 'Pawn Of Prophecy'
        },
        {
          id: 'dasdkfjasdfas',
          name: 'Sorcerer\'s apprentice'
        },
        {
          id: 'dasdkfjasdfas',
          name: 'Queen Of Sorcery'
        }
      ]
    }
  }
};

