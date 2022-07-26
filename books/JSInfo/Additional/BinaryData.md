# Binary Data, Files

# ArrayBuffer, Binary ARrays

- On web, binary data -> files (crud), image processing

- `ArrayBuffer` - Basic Binary Object - reference to fixed-length contiguous memory area
`buffer = new ArrayBuffer(16) // creates a buffer of length 16` creates a contiguous area of 15 bytes and prefills with 0.

- `ArrayBuffer` is not an array - it has fixed length, takes exactly given space in memory, to access bytes, need another view object.

- view object used to access `ArrayBuffer`, accesses bytes in groups of 4,8,12,16

# TextDecoder and TextEncoder

- Reads values into JS string given buffer/encoding
`let decoder = new TextDecoder([label], [options]);`
`let str = decoder.decode([input], [options]);`
- TextEncoder converts strings into bytes
`let encoder = new TextEncoder();`


# Blob

- binary data with type, used for upload/download operations
- converts easily bewtween other low level types
- Blob = type + blogparts
` new Blob(blobParts, options)`
- blobParts: array of Blob/BufferSource/String vals
- options: optional obj with type (image/png, MIME type), endings (whether to add new lines \n)
- Get blob slices: `blob.slice([byteStart], [byteEnd], [contentType])`
- Can be used as URL to show contents

```html
<a download="hello.txt" href='#' id="link">Download</a>

<script>
let blob = new Blob(["Hello, world!"], {type: 'text/plain'});

link.href = URL.createObjectURL(blob);
</script>
```
- allows data transfer into one binary format
- stream allows read or write portion by portion. returns readableStream which on reading returns data in Blob.

# File and FileReader

- File inherits from Blob but has filestystem related properties
- FileReader can be used with any Blobs
- File objects have `name` and `lastModified`, plus ability to read from filesystem.
- Reads from file/blob in String, ArrayBuffer, DataURL
