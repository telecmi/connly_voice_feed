

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

## 🛠 API Reference

### Class: `Connly`

The `Connly` class is the core of the SDK, providing methods to connect to the Connly platform, subscribe to various events, and handle real-time call data.

### Constructor

```javascript
new Connly()
```

Creates a new instance of the Connly SDK.

---

### Methods

#### `start(token)`

Connects to the Connly platform using the provided access token.

- **Parameters:**
  - `token` (string): The access token obtained from the Admin Login API.

#### `barge(uuid, to)`

Barges into an ongoing call using the call's UUID and the supervisor's ID.

- **Parameters:**
  - `uuid` (string): The unique identifier of the call.
  - `to` (string): The supervisor's ID to whom the call is being barged.

#### `subscribeCalls()`

Subscribes to live call feed events.

#### `monitorCalls()`

Subscribes to ongoing call events.

#### `subscribeAgents()`

Subscribes to agent status and list updates.

#### `removeAllListeners()`

Removes all socket event listeners.

---

### Event Handlers

These are callback functions that can be overridden to handle specific events emitted by the SDK.

#### `onConnect(data)`

Triggered when the socket connection is successfully established.

- **Parameters:**
  - `data` (object): Contains the connection status.

#### `onDisconnect(data)`

Triggered when the socket connection is disconnected.

- **Parameters:**
  - `data` (object): Contains the disconnection status.

#### `onCalls(data)`

Triggered when a new call event occurs.

- **Parameters:**
  - `data` (object): Contains information about the call.

#### `onAgents(data)`

Triggered when agent statuses or the agent list is updated.

- **Parameters:**
  - `data` (object): Contains information about agents.

#### `onStatus(data)`

Triggered on status updates or errors (e.g., invalid token).

- **Parameters:**
  - `data` (object): Contains status messages or error details.

#### `onCount(data)`

Triggered on incoming call count updates.

- **Parameters:**
  - `data` (object): Contains the count of incoming calls.

#### `onagentAnswer(data)`

Triggered when an agent answers a call.

- **Parameters:**
  - `data` (object): Contains details about the answered call.

#### `onAnswer(data)`

Triggered when a customer answers a call.

- **Parameters:**
  - `data` (object): Contains details about the answered call.

#### `onCallback(data)`

Triggered when a callback event occurs.

- **Parameters:**
  - `data` (object): Contains information about the callback event.

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


---
