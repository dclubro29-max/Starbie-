"""Run with: python -m unittest discover -s tests -v"""
import sys
from pathlib import Path
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "firmware"))
from starbie_core import StarbieState, MODES


class TestStarbieState(unittest.TestCase):
    def test_initial_state(self):
        s = StarbieState()
        self.assertEqual(s.mode, "clock")
        self.assertEqual(s.brightness, 60)

    def test_mode_cycle(self):
        s = StarbieState()
        for _ in MODES:
            s.next_mode()
        self.assertEqual(s.mode, "clock")

    def test_previous_mode_wrap(self):
        s = StarbieState()
        self.assertEqual(s.previous_mode(), "settings")

    def test_brightness_clamp(self):
        s = StarbieState()
        self.assertEqual(s.set_brightness(140), 100)
        self.assertEqual(s.set_brightness(-8), 0)

    def test_battery_clamp(self):
        s = StarbieState()
        self.assertEqual(s.set_battery(999), 100)
        self.assertEqual(s.set_battery(-1), 0)

    def test_view_model(self):
        s = StarbieState()
        self.assertEqual(s.view_model()["mode"], "clock")


if __name__ == "__main__":
    unittest.main()
