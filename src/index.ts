// Reexport the native module. On web, it will be resolved to ExpoScreenRecorderModule.web.ts
// and on native platforms to ExpoScreenRecorderModule.ts
export { default } from './ExpoScreenRecorderModule';
export { default as ExpoScreenRecorderView } from './ExpoScreenRecorderView';
export * from  './ExpoScreenRecorder.types';
