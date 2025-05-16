import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoScreenRecorderViewProps } from './ExpoScreenRecorder.types';

const NativeView: React.ComponentType<ExpoScreenRecorderViewProps> =
  requireNativeView('ExpoScreenRecorder');

export default function ExpoScreenRecorderView(props: ExpoScreenRecorderViewProps) {
  return <NativeView {...props} />;
}
