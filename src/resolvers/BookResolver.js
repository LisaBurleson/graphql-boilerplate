export default {
  Query: {
    book( parent, args, ctx, info ) {
      console.log( `called book resolver, args = `, JSON.stringify( args ) )
      return {
        id: 'dasdkfjasdfas',
        name: 'Sorcerer\'s apprentice'
      }
    },
    books( parent, args, ctx, info ) {
      console.log( `called books resolver, args = `, JSON.stringify( args ) )
      return [
        {
          id: 'dasdkfjasdfas',
          name: 'Pawn Of Prophecy',
          authorId: '2342342'
        },
        {
          id: 's3445fsdfs',
          name: 'Sorcerer\'s apprentice',
          authorId: '2342342'
        },
        {
          id: '5354jhdsfsjdf4',
          name: 'Queen Of Sorcery',
          authorId: '2342342'
        }
      ]
    }
  },
  Book: {
    /**
     * called when an book's author property is encountered.
     * @param parent
     * @param args
     * @param ctx
     * @param info
     * @return {{firstName: string, lastName: string, id: string}}
     */
    author( parent, args, ctx, info ) {
      console.log( 'called Book.author resolver', JSON.stringify( parent ) )
      return {
        id: '2342342',
        firstName: 'David',
        lastName: 'Eddings'
      }
    }
  }
}



