
TeleCMI live call feed
=======

TeleCMI live call feed  SDK for Browser and NodeJS




Documents
-------------

## **Install**

**npm**

    npm install telecmi-call-feed
    
**yarn**

    yarn add telecmi-call-feed

**Add to your page**

    <script src="dist/telecmi-call-feed.min.js"></script>

## **Get Started**

**Create Telecmi Object**  

```javascript
var telecmi = new TeleCMI(); 
```

## Method
**Register**
Using our  [Admin Login API](https://doc.telecmi.com/chub/docs/user-access) you can get access token. Using feed access token you can connect with TeleCMI platform. 
```javascript
telecmi.start('access token')
```

**Call Barge**
Barge ongoing call using call uuid and supervisor ID
```javascript
  telecmi.barge('uuid','Supervisor ID');
```

## Subscribe 
**Live Call**
Subscribe live call's events 
```javascript
  telecmi.subscribeCalls();
```
***Example***
```javascript
  telecmi.onConnect=function(data){
  if(data.status=='connected'){
   //subscribe 
       telecmi.subscribeCalls();
     }else if(data.status=='error')
     {
        // Invalid token please check your token
     }
 };
```
**Ongoing Call**
Subscribe ongoing call's events 
```javascript
  telecmi.monitorCalls();
```
***Example***
```javascript
  telecmi.onConnect=function(data){
  if(data.status=='connected'){
   //subscribe 
       elecmi.monitorCalls();
     }else if(data.status=='error')
     {
        // Invalid token please check your token
     }
 };
```

**Agent**
Subscribe Agents status and list
```javascript
  telecmi.subscribeAgents();
```
***Example***
```javascript
  telecmi.onConnect=function(data){
  if(data.status=='connected'){
   // subscribe 
       telecmi.subscribeAgents();
     }else if(data.status=='error')
     {
        // Invalid token please check your token
     }
 };
```





##  Callback
### Connect
This callback function update the status of connection.

**syntax**
 
```javascript
  telecmi.onConnect=function(data){
  //data - JSON object
  };
```
### Disconnected
This callback function invoked when socket connection disconnected.

**syntax**
 
```javascript
  telecmi.onDisconnect=function(){
  //data - JSON object
  };
```

### Calls
This callback function invoked when call started.

**syntax**
 
```javascript
  telecmi.onCalls=function(data){
  //data - JSON object
  };
```

***Example***
```javascript
  telecmi.onCalls=function(data){
   console.log(data.from) //customer number
   console.log(data.agent) //Agent Id
   console.log(data.time) //Incomming call time
   console.log(data.status) // incomming call status is it answered or still ringing
   console.log(data.uuid) //Call UUID for call barge
 };
```




**List of Response**

| action                                                                                                                         	| agent    	| group                  	| from            	| id        	| inetno      	| leguid                	| name                       	| uuid            	| state                                                                                                                                                                                         	|
|--------------------------------------------------------------------------------------------------------------------------------	|----------	|------------------------	|-----------------	|-----------	|-------------	|-----------------------	|----------------------------	|-----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| It's define channel property "ch-c" = channel create ."ch-s" = channel state change like early,answer. "ch-d" = channel deleted 	| Agent id 	| Call receiving team id 	| customer number 	| record is 	| Your app id 	| customer channel uuid 	| customer name if you saved 	| agent call uuid 	| call status is it answered or ringing  'early' = Call ringing to agent 'answer' = Call answered by agent 'bridged' = Call established between customer and agent 'hangup' = Call disconnected 	|

### Agents
This callback function invoked when Users/Agents update their status .

**syntax**
 
```javascript
  telecmi.onAgents=function(data){
  //data - JSON object
  };
```
***Example***
```javascript
  telecmi.onAgents=function(data){
  
 };
```


