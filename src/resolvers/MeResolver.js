const MeResolver = {
  Query:{
    me( parent, args, ctx, info ) {
      return {
        id: '123098',
        userName: 'Mike',
        email: 'mike@example.com',
        password: '',
      };
    }
  }
};

export {MeResolver as default};
