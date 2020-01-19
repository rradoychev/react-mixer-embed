/**
 * ReactMixerEmbed
 * 
 * @description: Lightweight component for embedding mixer into React applications.
 * @author: rradoychev
 * 
 * Available options:
 * =============================================================================
 * DEFAULT SETTINGS - the video will be embed by default. 
 * Use the following options to change the settings:
 * video (optional) - can set to false to disable the video.
 * chat (optional) - set to true to embed chat next to the video.
 * channel - the channel name.
 * =============================================================================
 * 
 * Example usage:
 * <ReactMixerEmbed options={{
 *  channel: "mixer",
 *  chat: true
 * }} />
 * 
 * @param {*} options Add options to the embedded element
 */

import React from 'react';

const ReactMixerEmbed = ({
  options = {
    channel: "mixer", 
    video: true,
    chat: false
  }
}) => {
  const { channel, video = true, chat } = options;
  const embedClassName = "react-mixer-embed-wrapper";

  return (
    <>
      {video &&
        <iframe 
          className={`${embedClassName} video`}
          title={`Mixer video embed for ${channel}`} 
          src={`https://mixer.com/embed/player/${channel}`}></iframe>
      }

      {chat && 
        <iframe 
          className={`${embedClassName} chat`}
          title={`Mixer chat embed for ${channel}`} 
          src={`https://mixer.com/embed/chat/${channel}`}></iframe>
      }
    </>
  );
}

export default ReactMixerEmbed;
