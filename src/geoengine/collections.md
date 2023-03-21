# Layer Collections

Collections are groups of [`Layers`](./layers.md).
Collections themselves can be grouped inside other collections.
Every collection has a name and a description.

## Browsing

Inside Geo Engine's web interface, you can browse the available layer collections when adding data.

Inside Python, you can use the

```python
ge.layer_collection()
```

function to get a list of the root collection which contains paths to all underlying data.
