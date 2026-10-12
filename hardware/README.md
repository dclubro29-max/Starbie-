# Starbie hardware design

Starbie is a proposed compact circular-display electronics device. This folder documents the **candidate system architecture** and an initial KiCad learning exercise.

## Work represented in this repository
- A browser-based UI simulator exists in `app/`. It is a software demonstration, not device firmware.
- `BOM.csv` lists the proposed subsystems, quantities, design roles, and verification steps. It is a **preliminary bill of materials**, not a purchase-ready parts list or costed manufacturing BOM.
- `starbie-led-test.kicad_sch` and `starbie-led-test.kicad_pcb` are preliminary KiCad-format files for an LED/resistor exercise, **not the Starbie motherboard**. They have not been validated in KiCad.
- The concept illustration in `docs/` shows the intended visual direction, not completed hardware.

## Proposed system architecture
USB 5 V input → reviewed 3.3 V regulation → RP2040-class controller → circular SPI display. Two pushbuttons connect to controller inputs. Final electrical connections depend on the selected modules and their datasheets.

## Next engineering milestones
1. Select exact controller, display and power components with part numbers.
2. Confirm electrical compatibility, current draw, dimensions, pinout and available footprints.
3. Draw and check a complete Starbie schematic in KiCad.
4. Lay out and route the PCB, run ERC/DRC and independently review it.
5. Only after review, request fabrication and test a prototype.

This documentation is meant to show **what is proposed, what files exist, and what remains**, without treating concept imagery as verified PCB work.
