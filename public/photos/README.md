# Adding portfolio photos

Store a category's images in a folder named after its route. For example:

```
public/photos/foto-fija/01.jpg
public/photos/foto-fija/02.jpg
```

Then update the matching entry in `src/data/sections.js`. Add the image path to each gallery item and optionally select a different tile image with `coverImage`:

```js
"foto-fija": {
  coverImage: "/photos/foto-fija/01.jpg",
  gallery: [
    { label: "Foto fija 1", src: "/photos/foto-fija/01.jpg" },
    { label: "Foto fija 2", src: "/photos/foto-fija/02.jpg" },
  ],
}
```

`coverImage` is used by the homepage project tile. If it is omitted, the first gallery image is used instead.

The Gastronomía page lays photos out in editorial rows that repeat a pair, a triple, and a single photo with space around it, in gallery order. To give a photo a row of its own, add `layout: "feature"` (offset, with empty space beside it) or `layout: "wide"` (full width, best for landscape photos) to that gallery item.

For personal projects, follow the same pattern in `src/data/personalProjects.js`, using folders such as `public/photos/proyectos-personales/proyecto-1/`. Each personal project can have a `coverImage`; the first available one becomes the cover for the **Proyectos personales** homepage tile.
