# Starbie software logic prototype

`starbie_core.py` models the clock/status/settings screen states, brightness and battery display values without depending on hardware. It can be imported in regular Python.

Run the tests from the repository root:

```sh
python -m unittest discover -s tests -v
```

This is **not** deployable firmware for an RP2040. Hardware drivers, display pin mapping, button reading, clock source and boot/flash procedures still need implementation after choosing real parts.
