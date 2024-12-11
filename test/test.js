

import Connly from '../src/Connly.js';

// Note: This test requires a valid token and a responsive endpoint 
// to see actual connection and events. Otherwise, you'll see errors or status events.
const connly = new Connly();

connly.onStatus = ( data ) => {
    console.log( "Status:", data );
};

connly.onConnect = ( data ) => {
    console.log( "Connected:", data );
};

connly.start( 'your-test-token-here' );
