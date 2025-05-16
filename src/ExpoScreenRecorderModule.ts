import { NativeModule, requireNativeModule } from 'expo';

import { ExpoScreenRecorderModuleEvents } from './ExpoScreenRecorder.types';

declare class ExpoScreenRecorderModule extends NativeModule<ExpoScreenRecorderModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoScreenRecorderModule>('ExpoScreenRecorder');
