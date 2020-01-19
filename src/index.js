/**
 * ReactMixerEmbed
 * 
 * @description: Lightweight component for embedding mixer into any Javascript application.
 * @author: rradoychev
 * 
 * Available options:
 * =============================================================================
 * DEFAULT SETTINGS - the video will be embed by default. 
 * Use the following options to change the settings:
 * enableChat (optional) - set to true to enable chat together with the video.
 * chatOnly (optional) - set to true to embed only the chat.
 * channelName - the channel that you want to embed from.
 * =============================================================================
 * 
 * Example usage:
 * <ReactMixerEmbed options={{
 *  channelName: "mixer",
 *  enableChat: true
 * }} />
 * 
 * @param {*} options Add options to the embedded element
 */

import React from 'react';
import './react-mixer-embed.css';

const ReactMixerEmbed = ({
  options = {
    channelName: "mixer", 
    enableChat: false, 
    chatOnly: false
  }
}) => {
  const { channelName, enableChat, chatOnly } = options;
  const embedClassName = "react-mixer-embed-wrapper";

  if (enableChat || chatOnly) {
    if (enableChat) {
      return (
        <>
          <iframe 
            className={`${embedClassName} video`}
            title={`Mixer video embed for ${channelName}`} 
            src={`https://mixer.com/embed/player/${channelName}`}></iframe>
          <iframe 
            className={`${embedClassName} chat`}
            title={`Mixer chat embed for ${channelName}`} 
            src={`https://mixer.com/embed/chat/${channelName}`}></iframe>
        </>
      );
    }
    if (chatOnly) {
      return (
        <>
          <iframe 
            className={`${embedClassName} chat`}
            title={`Mixer video embed for ${channelName}`} 
            src={`https://mixer.com/embed/chat/${channelName}`}></iframe>
        </>
      );
    }
  }
  else {
    return (
      <>
        <iframe 
          className={`${embedClassName} video`}
          title={`Mixer video embed for ${channelName}`} 
          src={`https://mixer.com/embed/player/${channelName}`}></iframe>
      </>
    );
  }
}

export default ReactMixerEmbed;
