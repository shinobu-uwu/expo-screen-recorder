import * as React from 'react';

import { ExpoScreenRecorderViewProps } from './ExpoScreenRecorder.types';

export default function ExpoScreenRecorderView(props: ExpoScreenRecorderViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
