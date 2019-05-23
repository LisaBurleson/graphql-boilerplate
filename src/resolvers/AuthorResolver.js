const BookResolver = {
  author( parent, args, ctx, info ) {
    console.log('author resolver parent = ', parent);
    return {
      id: 'esdkfajs',
      firstName: 'Joe',
      lastName: 'Camel'
    }
  }
};

export {BookResolver as default}
