"""Starbie platform-independent state logic. Prototype; no physical hardware tested."""
from dataclasses import dataclass

MODES = ("clock", "status", "settings")

@dataclass
class StarbieState:
    mode_index: int = 0
    brightness: int = 60
    battery_percent: int = 100

    @property
    def mode(self):
        return MODES[self.mode_index]

    def next_mode(self):
        self.mode_index = (self.mode_index + 1) % len(MODES)
        return self.mode

    def previous_mode(self):
        self.mode_index = (self.mode_index - 1) % len(MODES)
        return self.mode

    def set_brightness(self, value):
        self.brightness = max(0, min(100, int(value)))
        return self.brightness

    def set_battery(self, value):
        self.battery_percent = max(0, min(100, int(value)))
        return self.battery_percent

    def view_model(self):
        return {
            "mode": self.mode,
            "brightness": self.brightness,
            "battery_percent": self.battery_percent,
        }
