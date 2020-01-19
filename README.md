# React Mixer Embed Video and Chat
### Lightweight component for embedding mixer into React applications.

### Available options:
 * =============================================================================
 * DEFAULT SETTINGS - the video will be embed by default. 
 * Use the following options to change the settings:
 * enableChat (optional) - set to true to enable chat together with the video.
 * chatOnly (optional) - set to true to embed only the chat.
 * channelName - the channel that you want to embed from.
 * =============================================================================


### How to use
Install the component with npm OR yarn:
```
npm install react-mixer-embed;
OR
yarn add react-mixer-embed;
```

Import the ReactMixerEmbed into your file:
```
import ReactMixerEmbed from "react-mixer-embed";
```

Use one of the following examples to embed:

Default embed:
```
<ReactMixerEmbed options={{ 
  channelName: "mixer" 
}} />
```

Video and chat embed:<br />
```
<ReactMixerEmbed options={{ 
  channelName: "mixer",
  enableChat: true
}} />
```

Chat only embed:<br />
```
<ReactMixerEmbed options={{ 
  channelName: "mixer",
  chatOnly: true
}} />
```
