# Time Step

A time step consists of a granularity and a number of steps.
For instance, you can specify yearly steps by settings the granularity to `Years` and the number of steps to 1.
Half-yearly steps can be specified by setting the granularity to `Months` and the number of steps to 6.

| Parameter     | Type              | Description                   | Example Value |
| ------------- | ----------------- | ----------------------------- | ------------- |
| `granularity` | `TimeGranularity` | granularity of the time steps | `Months`      |
| `step`        | `i32`             | number of time steps          | 1             |

## TimeGranularity

The granularity of the time steps can take one of the following values.

| Variant   | Description  |
| --------- | ------------ |
| `Millis`  | milliseconds |
| `Seconds` | seconds      |
| `Minutes` | minutes      |
| `Hours`   | hours        |
| `Days`    | days         |
| `Months`  | months       |
| `Years`   | years        |

# Example JSON

```json
{
  "granularity": "Months",
  "step": 1
}
```
