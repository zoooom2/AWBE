const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error(`No Matching ${action.type} -action type `);
  }
};

export default AppReducer;
