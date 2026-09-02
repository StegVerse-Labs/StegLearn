# TI-83 Plus and Arduino Sensor Lab

## Learning Path Summary

This path begins with restoring a low-cost TI-83 Plus and grows into a small governed measurement system.

```text
Restore
→ Program
→ Observe
→ Graph
→ Connect
→ Request
→ Validate
→ Act
→ Explain
→ Receipt
```

The calculator is not merely used to obtain answers. The learner makes it behave, tests its limits, connects observations to data, and explains why an action should sometimes be refused.

## Audience and Stewardship

- Suggested minimum age: 8
- Adult supervision: required
- Adult-only work: leaking-battery removal and initial cleanup, soldering, interface protection, and any electrical fault investigation
- Learner-ready work after cleanup: calculator inspection, TI-BASIC, data entry, graphs, supervised sensor wiring, explanations and reflection

Age is guidance rather than a mastery claim. The steward adjusts pacing and access based on the actual learner and evidence.

## Available Equipment

The path is designed around equipment already available or under consideration:

- TI-83 Plus with slide case
- four fresh matching AAA batteries
- optional CR1616 backup battery
- optional TI 2.5 mm data cable
- Arduino Mega 2560 or Nano
- photoresistor
- BMP180 pressure and temperature sensor
- humiture sensor
- PIR motion sensor
- MQ-2 gas-response sensor
- RC522 RFID reader
- nRF24L01 radio
- W5100 Ethernet module
- four-channel relay module
- breadboard, jumpers, resistors and low-voltage LEDs

## Safety Gates

The path must stop when a required gate is not satisfied.

1. An adult removes leaking batteries and completes initial residue cleanup.
2. No corroded calculator receives fresh batteries until contacts are clean and dry.
3. Kit sensors never connect directly to the TI-83 link port.
4. A protected interface is required between the Arduino and calculator.
5. Relay activities use only a battery-powered LED or comparable low-voltage load.
6. Household voltage is outside the path.
7. The MQ-2 is used only to observe relative response; it is not a certified alarm or safety decision source.
8. No flame, intentional gas release, or hazardous-material test is part of the child activity.
9. The learner may propose an actuator action; the Arduino retains the safety gate and may refuse it.
10. No receipt is accepted without parent or steward review.

## Stage 0 — Restore the Calculator

### Wonder

Can a device that appears damaged be understood, cleaned, tested and returned to useful service?

### Activity

The adult removes the leaked batteries and performs the initial neutralization and cleaning. After the residue is removed, the learner may inspect contacts, identify the battery path, install fresh batteries with the adult, and document what changed.

Texas Instruments recommends beginning with a clean, dry cloth or non-abrasive brush and using a small amount of vinegar on a cloth when further cleaning is needed. Liquid must not be poured into the calculator.

### Evidence

- before-and-after photographs
- learner drawing of the battery circuit
- condition checklist
- spoken or written explanation of why matching battery orientation matters
- boot result and contrast-adjustment observation

### Receipt Boundary

A successful boot is evidence of restoration, not proof that every key, link function or internal component works.

## Stage 1 — Make the Calculator Behave

### Wonder

How does a list of instructions become behavior?

### First TI-BASIC Program

Create a three-condition decision gate:

```text
:ClrHome
:Input "TARGET OK? 1/0",T
:Input "AREA CLEAR? 1/0",C
:Input "CONDITIONS OK? 1/0",D
:If T and C and D
:Then
:Disp "ACTION ALLOWED"
:Else
:Disp "ACTION DENIED"
:End
```

### Extensions

- bug-hunt scorekeeper
- multiplication challenge
- number-guessing game
- unit converter
- allowance calculator
- choose-your-own-adventure

### Evidence

- saved program
- learner explanation of variables and `If`
- one intentionally introduced bug and its correction
- examples that produce both `ALLOWED` and `DENIED`

## Stage 2 — Observe Sensors Before Connecting Systems

### Wonder

How does the physical world become numbers, and what can those numbers fail to tell us?

The Arduino reads one sensor and displays values through its normal development interface. The learner manually enters a short series into a TI list and graphs it.

Recommended sequence:

1. Photoresistor: compare light and shadow.
2. BMP180: observe temperature and pressure trends.
3. Humiture sensor: compare rooms or outdoor and indoor readings.
4. PIR: count motion events during a defined observation window.

### Evidence

- prediction before measurement
- list of readings
- calculator graph
- observation note
- explanation of noise, delay, range or uncertainty

### Important Limit

Manual entry is not a lesser activity. It makes the representation boundary visible: a sensor produces a signal, software interprets it, and a human decides what the value means.

## Stage 3 — Build the Arduino/TI Bridge

### Wonder

Can two devices with different responsibilities exchange evidence without becoming the same system?

The Arduino reads kit sensors and translates selected values into the TI link protocol through a protected 2.5 mm interface. The calculator receives variables or lists for display and analysis.

```text
physical condition
→ sensor
→ Arduino reading
→ validated representation
→ TI link transfer
→ calculator list or variable
→ learner interpretation
```

### Boundary

The likely USB data cable is useful for computer transfers but may not provide a direct Arduino connection. A calculator-to-calculator 2.5 mm cable or suitable jack breakout and a protected interface may be required. The adult verifies the electrical interface before connection.

### Evidence

- interface diagram
- transmitted test value
- received variable or list
- mismatch or failure observation
- learner explanation of which device performed each role

## Stage 4 — Govern a Low-Voltage Action

### Wonder

Should a command always happen merely because a user or program requested it?

The TI-83 proposes a low-voltage LED action. The Arduino accepts or refuses the request according to locally observed conditions.

Example policy:

```text
request is recognized
AND learner mode is supervised
AND load is allowlisted
AND sensor values are within the activity boundary
→ LED action may execute

otherwise
→ refuse and report the reason
```

The relay module is optional and may switch only an isolated, battery-powered LED circuit during this path.

### Evidence

- proposed action
- values used by the Arduino gate
- allowed result
- refused result
- reason for each outcome
- learner explanation of capability versus authority

## Stage 5 — Extend the System

Possible extensions include:

- RC522: identify tagged objects and compare recognized versus authorized
- nRF24L01: receive a remote environmental reading
- W5100: publish or request a reading on a local network under adult control
- multiple sensors: compare whether one reading is sufficient for a decision
- fault injection: disconnect a sensor and confirm that the action fails closed

These are extensions, not completion requirements.

## Parent Review Prompts

- What did the learner predict before seeing the result?
- What did the learner build or repair personally?
- What required adult control?
- Could the learner explain the boundary between the sensor, Arduino and calculator?
- Did the learner discover or correct a mistake?
- Did the system refuse at least one request for an understandable reason?
- What question should remain open for the next session?

## Subject Mappings

Potential mappings include mathematics, computer science, engineering, physical science, data literacy, safety, systems thinking, communication and responsible technology use.

Mappings remain parent-reviewed claims tied to observed evidence. They do not establish mastery solely because the activity occurred.

## Receipt Output

Use the standard StegLearn learner loop:

```text
Wonder
→ Build or Observe
→ Explain
→ Parent Review
→ Receipt
→ Portfolio
```

An example is available at `examples/receipts/ti83-sensor-lab-receipt.json`.
