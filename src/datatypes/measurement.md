# Measurement

Measurements describe stored data, i.e. what is measured and in which unit.

## Unitless

Some values do not have a associated measurement or no information is present.

### Example JSON

```json
{
  "type": "unitless"
}
```

## Continuous

A contiuous variable that is measured in a certain unit.

### Example JSON

```json
{
  "type": "continuous",
  "measurement": "Reflectance",
  "unit": "%"
}
```

## Classification

A classification maps numbers to named classes.

### Example JSON

```json
{
  "type": "classification",
  "measurement": "Land Cover",
  "classes": {
    "0": "Grassland",
    "1": "Forest",
    "2": "Water"
  }
}
```
