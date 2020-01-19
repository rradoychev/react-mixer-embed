Lightweight component for embedding mixer.com video and chat into React applications.

# React Mixer Embed Video and Chat

### Available options:
 * =============================================================================
 * DEFAULT SETTINGS - the video will be embed by default. 
 * Use the following options to change the settings:
 * video (optional) - can set to false to disable the video.
 * chat (optional) - set to true to embed chat next to the video.
 * channel - the channel name.
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
  channel: "mixer" 
}} />
```

Video and chat embed:<br />
```
<ReactMixerEmbed options={{ 
  channel: "mixer",
  chat: true
}} />
```

Chat only embed:<br />
```
<ReactMixerEmbed options={{ 
  channelName: "mixer",
  video: false,
  chat: true
}} />
```

This package is only if you want to have a react component inside your directory, 
which you reuse across the application.

However, for very basic and most lightweight solution, head to https://dev.mixer.com/guides/embeds/introduction
