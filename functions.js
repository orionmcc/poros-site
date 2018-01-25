'use strict';

//SOME Static Data or operator I care about
//Has access to query function as well maybe?
//Or maybe more complicated database queries likely.

/* i.e.
  porosGetSiteData();
  porosGetModel();
  */

module.exports = {
  getData (param) {
    console.log('getData', param);
    if(param == 'casual') return Promise.resolve("'Sup");
    return Promise.resolve("Howdy");
  },

  // APIs
  postFeedback (data) {
    //Add the post data to the postfeedback collection
    return this.isLoggedIn()
    .then((loggedIn) => {
      console.log( loggedIn === true ? 'LOGGED IN' : 'NOT LOGGED IN');
      if (loggedIn) return 200;
      return 403;
    });
  },
};
