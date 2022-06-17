"use strict";
window.TeleCMI = ( function () {
    var self = this;


    this.socket = {};


    TeleCMI.prototype.start = function ( token ) {


        if ( !token ) {

            this.onStatus( { status: 'error', msg: 'Invalid token' } );
            return;
        }


        this.socket = io( 'https://notify.telecmi.com', { query: { token: token } } )


        // Agent List 
        this.socket.on( 'agents-list', function ( data ) {

            self.onAgents( data );
        } )


        this.socket.on( "connect_error", ( err ) => {
            console.log( `connect_error due to ` + err );
        } );

        // On going Calls
        this.socket.on( 'call-feed', function ( data ) {



            self.onCalls( data );
        } )

        this.socket.on( "connect", () => {


            if ( this.socket.feed ) {
                this.socket.emit( 'admin-get-feed', { ping: true } );
            }

            if ( this.socket.agent ) {
                this.socket.emit( 'subscribeadmin-agents-list', { ping: true } )
            }


            self.onConnect( { status: 'connected' } )



        } );

        this.socket.on( "disconnect", () => {
            self.onDisconnect( { status: 'disconnected' } )
        } );

        //On Callback Event
        this.socket.on( 'callback-list', function ( data ) {
            self.onCallback( data )
        } )

        // On call status
        this.socket.on( 'cmi-status', function ( data ) {

            self.onStatus( data )
        } )

        // On incomming call count
        this.socket.on( 'live-call-feed', function ( data ) {

            self.onCount( data )
        } )

        // Answered agent count
        this.socket.on( 'agent-bridged', function ( data ) {
            self.onagentAnswer( data )
        } )

        // Answered customer count
        this.socket.on( 'customer-bridged', function ( data ) {
            self.onAnswer( data )
        } )

    }

    //Subscribe agent update
    TeleCMI.prototype.subscribeAgents = function () {
        this.socket.agent = true;
        this.socket.emit( 'subscribeadmin-agents-list', { ping: true } )
    }

    //Remove Listener
    TeleCMI.prototype.removeAllListeners = function ( inetno ) {

        this.socket.removeAllListeners();
    }




    //Subscribe agent update
    TeleCMI.prototype.barge = function ( uuid, to ) {

        if ( !uuid ) {

            this.onStatus( { status: 'error', msg: 'Invalid UUID' } );
            return;
        }



        this.socket.emit( 'admin-call-globalbarging', { uuid: uuid, to: to } )
    }



    //Subscribe agent update
    TeleCMI.prototype.subscribeCalls = function () {
        this.socket.emit( 'admin-get-feed', { ping: true } );
        this.socket.feed = true;
    }


    //Subscribe live call feeds
    TeleCMI.prototype.monitorCalls = function () {


        this.socket.emit( 'admin-call-feed', { ping: true } )
    }



    // Calls  callback
    TeleCMI.prototype.onCalls = function ( data ) { }


    // Calls  callback
    TeleCMI.prototype.onConnect = function ( data ) { }

    // Calls  callback
    TeleCMI.prototype.onDisconnect = function ( data ) { }


    // Agents  callback
    TeleCMI.prototype.onAgents = function ( data ) { }

    // Agents  callback
    TeleCMI.prototype.onStatus = function ( data ) { }

    // Agents  callback
    TeleCMI.prototype.onCount = function ( data ) { }

    //Answered Agents
    TeleCMI.prototype.onagentAnswer = function ( data ) { }

    //Customer Answered
    TeleCMI.prototype.onAnswer = function ( data ) { }

    //Customer Answered
    TeleCMI.prototype.onCallback = function ( data ) { }


} )