export default {
  Query:{
    book( parent, args, ctx, info ) {
      console.log('called book resolver');
      return {
        id: 'dasdkfjasdfas',
        name: 'Sorcerer\'s apprentice'
      };
    },
    books(parent, args, ctx, info){
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
  },
  Book:{
    /**
     * called when an book's author property is encountered.
     * @param parent
     * @param args
     * @param ctx
     * @param info
     * @return {{firstName: string, lastName: string, id: string}}
     */
    author(parent, args, ctx, info){
      console.log('called Book.author resolver');
      return {
        id: '2342342',
          firstName: 'David',
          lastName: 'Eddings'
      };
    }
  }
};

