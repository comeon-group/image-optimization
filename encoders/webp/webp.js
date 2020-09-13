import webp_enc, { WebPModule } from '../../codecs/webp/enc/webp_enc';
import wasmUrl from '../../codecs/webp/enc/webp_enc.wasm';
// import { EncodeOptions } from './encoder-meta';
import { initEmscriptenModule } from '../util';

let emscriptenModule;

export async function encode(data, options) {
    if (!emscriptenModule) emscriptenModule = initEmscriptenModule(webp_enc, wasmUrl);

    const module = await emscriptenModule;
    const result = module.encode(data.data, data.width, data.height, options);
    if (!result) {
        throw new Error('Encoding error.');
    }
    // wasm can’t run on SharedArrayBuffers, so we hard-cast to ArrayBuffer.
    return result.buffer;
}