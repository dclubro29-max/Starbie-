# Starbie

Early-stage software simulator and hardware planning workspace for a small circular-screen device.

## Current status
- Working browser-based **software simulator**, not firmware running on hardware.
- Hardware documentation is **planning only**. No completed motherboard schematic, routed PCB, or fabricated board is included.
- This starter code was generated with AI assistance. Any Hack Club time logs should reflect only work actually done by the participant.

## Run
Open `app/index.html` in a browser. No install needed.

## Suggested next steps
1. Try the simulator and identify a real issue or improvement.
2. Modify the code yourself and test it.
3. Choose exact hardware parts and create a real KiCad schematic/PCB.
4. Record your actual progress and decisions for the reel.

## Visual concept

![Starbie software and PCB learning concept](docs/starbie-concept.svg)

This is an illustration, **not a photo of completed hardware**.

## KiCad files

The `hardware/starbie-led-test.kicad_sch` and `hardware/starbie-led-test.kicad_pcb` files are a **preliminary LED/resistor exercise board**, not the Starbie motherboard. They have not been opened or verified in KiCad, and should not be fabricated without review. The Starbie motherboard remains to be designed.

## Engineering additions

- [Candidate bill of materials](hardware/BOM.csv): subsystem roles, quantities and outstanding part selection
- [Architecture proposal](docs/ARCHITECTURE.md): power, display, input and controller blocks
- [Python state-logic prototype](firmware/starbie_core.py): portable UI state model, **not flashed firmware**
- [Automated test source](tests/test_starbie_core.py): run with `python -m unittest discover -s tests -v`
- [Validation and evidence checklist](docs/VALIDATION.md): distinguishes planned tests from observed results

The repository now includes a fuller design proposal and code prototype. A complete Starbie motherboard schematic, routed board, physical validation and production-ready BOM are still outstanding. No specific time-log duration is implied by these additions.
