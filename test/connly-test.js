import Connly from 'connly-voice-feed';

const connly = new Connly();
connly.onConnect = ( data ) => {
    console.log( "Connected:", data );
};
connly.start( 'your-token-here' );
