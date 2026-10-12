# Validation plan and evidence log

This page deliberately separates planned checks from observed results.

| Check | How to verify | Current evidence |
|---|---|---|
| Browser simulator starts | Open `app/index.html` in a browser | Code present; manual browser result not recorded |
| State transitions | Run `python -m unittest discover -s tests -v` | Automated tests authored; execution not recorded here |
| Schematic electrical checks | Open final Starbie schematic in KiCad and run ERC | Not performed; final schematic not yet created |
| PCB layout checks | Route final board in KiCad and run DRC | Not performed; final board not yet created |
| Physical display | Flash target firmware and check LCD | Not performed |
| Button input | Verify both GPIO buttons on assembled board | Not performed |
| Power safety | Measure input current, regulator heat and voltage | Not performed |

## Review submission guidance
Use authentic screen recordings of the simulator and actual KiCad sessions. The concept SVG is an illustration and must not be labeled as a PCB screenshot. Log only time spent actually working. Replace 'not performed' with dated evidence and measurements after testing.
