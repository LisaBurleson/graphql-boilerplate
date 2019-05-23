export default {
  Query:{
    author( parent, {name}, ctx, info ) {
      console.log(`called author resolver args = ${name}`);
      return {
        id: 'esdkfajs',
        firstName: 'Joe',
        lastName: 'Camel'
      }
    }
  },
  Author:{
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
  }
};
