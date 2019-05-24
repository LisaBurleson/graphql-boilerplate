const DataLoader = require( 'dataloader' )
/**
 * Create a loader to get all the keys/ids for books
 * @type {DataLoader<any, any>}
 */
export const authorLoader = new DataLoader( ( authorIds ) => {
  console.log( `authorLoader authorIds = ${authorIds}` )
} )

// I don't now how to use this yet. see Ben Awad's dataloader vid https://www.youtube.com/watch?v=_FQ1ZEWIn2s
