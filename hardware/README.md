# Motherboard development status

**No motherboard has been designed or fabricated yet.**

This folder is a starting point for actual electronic design. A rendered image or SVG is not a substitute for native KiCad project files.

## Candidate architecture (unverified)
- RP2040-class microcontroller
- Circular SPI display, exact module TBD
- Two navigation buttons
- Power source and safe power management, exact topology TBD

## Before creating a PCB
1. Pick actual display and microcontroller parts, read their datasheets.
2. Draw a schematic in KiCad with exact pin connections and power design.
3. Run electrical rules checks and review power/current requirements.
4. Place and route the PCB, run design rules checks.
5. Get experienced electronics review before ordering or powering the board.

Do not claim a working motherboard or 11 hours of work based on this scaffold.
