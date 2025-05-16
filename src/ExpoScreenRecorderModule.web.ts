import { registerWebModule, NativeModule } from 'expo';

import { ExpoScreenRecorderModuleEvents } from './ExpoScreenRecorder.types';

class ExpoScreenRecorderModule extends NativeModule<ExpoScreenRecorderModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoScreenRecorderModule, 'ExpoScreenRecorderModule');
