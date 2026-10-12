# Starbie technical architecture (design proposal)

## Objective
Explore a compact circular-screen device with two buttons, a status/clock interface, and a custom PCB.

## Functional blocks
```text
USB 5 V input
    |
    v
Power protection + 3.3 V regulation [not selected]
    |
    +--> RP2040-class controller [exact part TBD]
    |       +--> SPI --> circular LCD [controller and pinout TBD]
    |       +--> GPIO --> two buttons [pull-ups/debounce TBD]
    |       +--> PWM --> display backlight [driver topology TBD]
    |
    +--> optional power monitoring [not designed]
```

## Design decisions pending
- Display diameter, LCD controller, pin count, logic voltage and connector
- MCU: full RP2040 IC versus preassembled module
- Power source: USB-only first prototype; battery support requires separate safety design
- Reset/boot access, SWD/debug, USB data routing, mounting holes and board outline
- Backlight load and whether a MOSFET driver is needed

## Electrical review checklist
- [ ] Check exact datasheets and voltage levels
- [ ] Calculate regulator thermal dissipation and current margin
- [ ] Select USB connector, ESD protection and fusing as appropriate
- [ ] Define decoupling and ground return strategy
- [ ] Confirm button debounce in firmware
- [ ] Run KiCad ERC on final schematic
- [ ] Run KiCad DRC on final routed PCB
- [ ] Independent review before ordering and applying power

## Implementation status
Browser UI exists in `app/`. `firmware/starbie_core.py` is a platform-independent Python logic prototype, **not RP2040 firmware or a flashed device**. The KiCad files in `hardware/` are an unverified LED exercise, not a routed Starbie motherboard.
