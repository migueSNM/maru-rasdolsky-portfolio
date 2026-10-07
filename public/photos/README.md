# Adding portfolio photos

Store a category's images in a folder named after its route. For example:

```
public/photos/foto-fija/01.jpg
public/photos/foto-fija/02.jpg
```

Then update the matching entry in `src/data/sections.js`, adding the image path and its size in pixels to each gallery item:

```js
"foto-fija": {
  gallery: [
    { label: "Foto fija 1", src: "photos/foto-fija/01.jpg", width: 1600, height: 2400 },
    { label: "Foto fija 2", src: "photos/foto-fija/02.jpg", width: 2400, height: 1600 },
  ],
}
```

Every gallery is a masonry wall of evenly wide columns. Portrait tiles get a mix of heights (square to 2:3) so the wall has movement; landscape photos keep their shape, and the viewer always shows the whole photo. `width` and `height` let the wall lay out before the images load. On macOS you can read them with `sips -g pixelWidth -g pixelHeight public/photos/<folder>/01.jpg`.

The home page automatically shows a shuffled mix of every photo that has a `src`, and each one links to its section, so new photos appear there with no extra step.

For personal projects, follow the same pattern in `src/data/personalProjects.js`, using folders such as `public/photos/proyectos-personales/proyecto-1/`.
