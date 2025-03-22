(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('socket.io-client')) :
    typeof define === 'function' && define.amd ? define(['socket.io-client'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Connly = factory(global.socket_ioClient));
})(this, (function (socket_ioClient) { 'use strict';

    class Connly {
        constructor() {
            this.socket = {};
        }

        start ( token ) {
            if ( !token ) {
                this.onStatus( { status: 'error', msg: 'Invalid token' } );
                return;
            }

            this.socket = socket_ioClient.io( 'https://notify.telecmi.com', { query: { token } } );

            this.socket.on( 'agents-list', ( data ) => this.onAgents( data ) );
            this.socket.on( "connect_error", ( err ) => console.error( 'connect_error due to', err ) );
            this.socket.on( 'call-feed', ( data ) => this.onCalls( data ) );

            this.socket.on( "connect", () => {
                if ( this.socket.feed ) {
                    this.socket.emit( 'admin-get-feed', { ping: true } );
                }

                if ( this.socket.agent ) {
                    this.socket.emit( 'subscribeadmin-agents-list', { ping: true } );
                }

                this.onConnect( { status: 'connected' } );
            } );

            this.socket.on( "disconnect", () => {
                this.onDisconnect( { status: 'disconnected' } );
            } );

            this.socket.on( 'callback-list', ( data ) => this.onCallback( data ) );
            this.socket.on( 'cmi-status', ( data ) => this.onStatus( data ) );
            this.socket.on( 'live-call-feed', ( data ) => this.onCount( data ) );
            this.socket.on( 'agent-bridged', ( data ) => this.onagentAnswer( data ) );
            this.socket.on( 'customer-bridged', ( data ) => this.onAnswer( data ) );
        }

        subscribeAgents () {
            this.socket.agent = true;
            this.socket.emit( 'subscribeadmin-agents-list', { ping: true } );
        }

        removeAllListeners () {
            this.socket.removeAllListeners();
        }

        barge ( obj ) {
            if ( !obj ) {
                this.onStatus( { status: 'error', msg: 'Invalid UUID' } );
                return;
            }
            this.socket.emit( 'admin-call-globalbarging', obj );
        }

        subscribeCalls () {
            this.socket.emit( 'admin-get-feed', { ping: true } );
            this.socket.feed = true;
        }

        monitorCalls () {
            this.socket.emit( 'admin-call-feed', { ping: true } );
        }

        // Default event handlers (override these in your application)
        // eslint-disable-next-line no-unused-vars
        onCalls ( data ) { }
        // eslint-disable-next-line no-unused-vars
        onConnect ( data ) { }
        // eslint-disable-next-line no-unused-vars
        onDisconnect ( data ) { }
        // eslint-disable-next-line no-unused-vars
        onAgents ( data ) { }
        // eslint-disable-next-line no-unused-vars
        onStatus ( data ) { }
        // eslint-disable-next-line no-unused-vars
        onCount ( data ) { }
        // eslint-disable-next-line no-unused-vars
        onagentAnswer ( data ) { }
        // eslint-disable-next-line no-unused-vars
        onAnswer ( data ) { }
        // eslint-disable-next-line no-unused-vars
        onCallback ( data ) { }
    }

    return Connly;

}));
