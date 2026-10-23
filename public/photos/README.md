# Adding portfolio photos

Don't commit camera originals: they are many megabytes each and slow the site down. Run them through the photo script instead, writing into a folder named after the section's route:

```
npm run photos -- ~/Desktop/originales-teatro public/photos/teatro
```

For each original it writes a web-sized copy (`teatro/01.webp`, at most 2000px on the long side) and a thumbnail for the photo walls (`teatro/thumbs/01.webp`, 800px wide), then prints gallery entries ready to paste into the matching section in `src/data/sections.js`:

```js
teatro: {
  gallery: [
    {
      label: "Teatro 1",
      src: "photos/teatro/01.webp",
      thumb: "photos/teatro/thumbs/01.webp",
      width: 2000,
      height: 1333,
    },
  ],
}
```

The walls load `thumb` and the photo viewer loads `src`. `width` and `height` let the wall lay out before the images load. To add thumbnails to photos that are already web-sized, pass the same folder twice plus `--thumbs-only`.

A section can be split into headed subsections (as Foto fija is, one per film) by using `groups` instead of `gallery`:

```js
groups: [
  { title: "Magic Farm", credit: "Amalia Ulman", gallery: [ /* … */ ] },
  { title: "Corto Emi", gallery: [ /* … */ ] },
]
```

Every gallery is a masonry wall of evenly wide columns. Portrait tiles get a mix of heights (square to 2:3) so the wall has movement; landscape photos keep their shape, and the viewer always shows the whole photo.

The home page automatically shows a shuffled mix of up to 10 photos from each section, and each one links to its section, so new photos appear there with no extra step.

For personal projects, follow the same pattern in `src/data/personalProjects.js`, using folders such as `public/photos/proyectos-personales/proyecto-1/`.
