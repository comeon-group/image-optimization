# Image-Optimization with Web Assembly Encoders

The code will generate below formats

Using the [squoosh](https://github.com/GoogleChromeLabs/squoosh/) 💥 encoders compiled to wasm + emscripten. We utilize wasm encoders for webp, avif and mozjpeg to encode our images and create optimized images.

Using sharp~ library for resizing the image before encoding.

Before encoding need to convert the image buffers to unit8Clipped pixels array for png and jpg for the wasm encoders to compress.

We are getting awesome results for AVIF, WEBP and JPEG images 💡

```
avif
jpg
png±
webp
```

and sizes

```
 640px, 480px, 420px, 360px, 300px, 240px, 180px, 140px
```

For Backgrounds

```
4k, 2K, FHD, HD, 720P
```

of an image

## How to run locally

```
npm install

npm run test
```

## Build for AWS

```
npm install
rm -rf node_modules/sharp
npm install --arch=x64 --platform=linux sharp
```

Create a zip file and upload to lamda

```
zip -r image-optimization.zip index.js config.js package.json node_modules
```

± Work in progress

~ Can be changed to better encoders in future

SAMPLE IMAGES GENERATED

AVIF
(33.5 KB)
![AVIF](https://revolver-imageoptimization-lamda-srcset.s3-eu-west-1.amazonaws.com/images/640w/201.avif)

WEBP
(48.2 KB)
![WEBP](https://revolver-imageoptimization-lamda-srcset.s3-eu-west-1.amazonaws.com/images/640w/201.webp)

JPEG
(52.8KB)
![JPEG](https://revolver-imageoptimization-lamda-srcset.s3-eu-west-1.amazonaws.com/images/640w/201.jpeg)
