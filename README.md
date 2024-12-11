
# Connly Voice Feed

**Connly Voice Feed** is a JavaScript SDK that provides real-time call feed data from the Connly platform. It is compatible with both **Browser** and **Node.js** environments, enabling seamless integration of live call events, agent status updates, and callback functionalities into your applications.

## 📦 Installation

You can install Connly Voice Feed using **npm** or **yarn**.

### npm

```bash
npm install connly-voice-feed
```

### yarn

```bash
yarn add connly-voice-feed
```

### Browser (UMD)

To use Connly Voice Feed directly in the browser without a bundler, include the UMD build along with `socket.io-client`:

```html
<script src="https://cdn.jsdelivr.net/npm/socket.io-client@4.8.1/dist/socket.io.js"></script>
<script src="path/to/dist/connly-voice-feed.umd.js"></script>
```

---

## 🔧 Importing the SDK

### In Node.js (ES Modules)

```javascript
import Connly from 'connly-voice-feed';
```

### In Browser (Using ES6 Modules)

If you are using a framework like ReactJS or VueJS:

```javascript
import Connly from 'connly-voice-feed';
```

---

## 🛠 API Reference with Examples

### Class: `Connly`

The `Connly` class is the core of the SDK, providing methods to connect to the Connly platform, subscribe to various events, and handle real-time call data.

### Constructor

```javascript
new Connly()
```

Creates a new instance of the Connly SDK.

### Methods

#### `start(token)`

Connects to the Connly platform using the provided access token.

```javascript
const connly = new Connly();
connly.start('your-access-token');
```

---

#### `barge(uuid, to)`

Barges into an ongoing call using the call's UUID and the supervisor's ID.

```javascript
const CALL_UUID = 'example-uuid';
const SUPERVISOR_ID = 'supervisor-id';
connly.barge(CALL_UUID, SUPERVISOR_ID);
```

---

#### `subscribeCalls()`

Subscribes to live call feed events.

```javascript
connly.subscribeCalls();
```

---

#### `monitorCalls()`

Subscribes to ongoing call events.

```javascript
connly.monitorCalls();
```

---

#### `subscribeAgents()`

Subscribes to agent status and list updates.

```javascript
connly.subscribeAgents();
```

---

#### `removeAllListeners()`

Removes all socket event listeners.

```javascript
connly.removeAllListeners();
```

---

## 🔥 Event Handlers (With Examples)

These are callback functions that can be overridden to handle specific events emitted by the SDK.

### `onConnect(data)`

Triggered when the socket connection is successfully established.

```javascript
connly.onConnect = (data) => {
    console.log('Connected to Connly platform:', data);
    connly.subscribeCalls(); // Example: Subscribe to live calls once connected
};
```

---

### `onDisconnect(data)`

Triggered when the socket connection is disconnected.

```javascript
connly.onDisconnect = (data) => {
    console.log('Disconnected from Connly platform:', data);
};
```

---

### `onCalls(data)`

Triggered when a new call event occurs.

```javascript
connly.onCalls = (data) => {
    console.log('New Call Event:', data);
    console.log(`Caller: ${data.from}, Agent: ${data.agent}, UUID: ${data.uuid}`);
};
```

---

### `onAgents(data)`

Triggered when agent statuses or the agent list is updated.

```javascript
connly.onAgents = (data) => {
    console.log('Agent Updates:', data);
};
```

---

### `onStatus(data)`

Triggered on status updates or errors (e.g., invalid token).

```javascript
connly.onStatus = (data) => {
    console.log('Status Update:', data);
};
```

---

### `onCount(data)`

Triggered on incoming call count updates.

```javascript
connly.onCount = (data) => {
    console.log('Incoming Call Count:', data);
};
```

---

### `onagentAnswer(data)`

Triggered when an agent answers a call.

```javascript
connly.onagentAnswer = (data) => {
    console.log('Agent Answered Call:', data);
};
```

---

### `onAnswer(data)`

Triggered when a customer answers a call.

```javascript
connly.onAnswer = (data) => {
    console.log('Customer Answered Call:', data);
};
```

---

### `onCallback(data)`

Triggered when a callback event occurs.

```javascript
connly.onCallback = (data) => {
    console.log('Callback Event:', data);
};
```

---

## 📄 Response Fields

| Field   | Description                                                                                                            |
|---------|------------------------------------------------------------------------------------------------------------------------|
| action  | Defines channel property: "ch-c" = channel created, "ch-s" = channel state change (e.g., early, answer), "ch-d" = deleted |
| agent   | Agent ID receiving the call                                                                                            |
| group   | Team/Group ID handling the call                                                                                         |
| from    | Customer's phone number                                                                                                |
| id      | Record ID                                                                                                              |
| inetno  | Your App ID                                                                                                            |
| leguid  | Customer channel UUID                                                                                                  |
| name    | Customer name if previously saved                                                                                      |
| uuid    | Agent call UUID for call barging                                                                                       |
| state   | Current call state: 'early' = ringing, 'answer' = answered, 'bridged' = call established, 'hangup' = call disconnected  |

---

## 🔗 Repository

- **GitHub Repository:** [https://github.com/telecmi/connly-voice-feed](https://github.com/telecmi/connly-voice-feed)

## 🐛 Issues

If you encounter any issues or have suggestions, please open an issue on our [GitHub Issues](https://github.com/telecmi/connly-voice-feed/issues).
