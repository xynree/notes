 # Electronics Foundations: Fundamentals[^1]


Introduction
----

* buy stuff on parts list

Fundamentals
---

## Electrical Charge
- Protons (+), Electrons(-), Neutrons()
- Coloumbs measure charge (C)
    - 1 coloumb = 6.242 x 10^18 protons
- Protons + Neutrons are clumped into nucleus, Electrons move around the nucleus & sometimes leave.
- Same charges Repel, Opposite charges attract
- When + and - are equal, neutrally charged.
- When electrons move from one area to other - Electricity


## Conductors / Insulator

- Conductivity: How freely electrons move
- Conductor: High conductivity (Copper, Gold)
- Insulator: Low conductivity (Glass, Rubber, Fiberglass)
- Some factors like temperature affect conductivity
- Materials affect flow of electricity ex. Wire core with Plastic Casing


## Voltage

- Inbalance of charge chanzges potential energy
- Voltage - difference between electric potential energy between two points (V)
- Point of Reference - Voltage difference between two terminals
    - In battery - 9V between two sides of battery. Insulator between + and - terminals.
- Ground (GND) Common(COM): Reference point in circuit from which voltage is measured
- Red Wires : Positive Voltage
- Black Wires : Negative Voltage


## Current

- Current: Flow of Electric Charge (A): Amps
    - 1 ampere = 1 coulomb per second
- Which way is current flowing?
    - Current flows from negative to positive (Electrons move over)
        - However, electricity graphs and formulas are written as positive to negative.
        - Convential Current Notation
            - Current flows from positive to negative
            
## Circuits

- Looped pathway connecting terminals
- Batteries pump electricity from negative to positive side
- 3 elements
    - Voltage Source
    - Electric Load (components that cosumes power)
    - Conductive pathway 
- Open circuit: Break in the loop   
    - Often used to turn switches on and off
- Short Circuit: Direct electric connection, abnormal connection. Can cause circuits to overheat


## Resistance and Ohm's Law

-How much objectr esists electric current
    - Measured in Ohms
- Ohm's Law
    - Voltage = Current x Resistance
    - V= I x R


## SI Prefixes

- Metric Prefixes:
    - Describe quantities using powers of 10
    - giga, mega, kilo (10^9, ^6, ^3)
    - milli, micro, nano, pico (10^-3, ^-6, ^-9, ^-12)


## Challenge

- LED:
    - Semiconductor component
        - Does not follow Ohm's law
- LED very tiny resistance : 0 ohm
- Current flowing through resistor
- Target goal is 15 mA current to LED
15 mA = resistor x 7V
- Resistors protect electronics from drawing too much current


# Multimeteer Measurements

- Multimeter is a device that measures electrical quantities.
    - Digital multimeter
    - Voltage, Current, Resistance, Electrical Continuity
        + Capacitiance, Frequence, Temperature + Auto ranging DMM
    - 3 parts:
        - Display
        - Selector: Chooses type to measure
        - 3 ports: connects probes
            - Black, Red. Black = common/ground or negative circuits
            - Black -> Comm
            - Red -> mA, v, Ohm
            - Third port for larger measurements

- AC voltage: alternating Current (VAC, V~)
- DC voltage: VDC, V- (always one direction)
- should set to the smallest range exceeding voltage of source
    - Set black probe first and then red.
- For measuring current, multimeter is placed in current
    - connect source of probe to resister with DMM 
- Make sure you don't test voltage while testing current

# Power

## Electric Power

    - ability to do work
    - Producers/ Consumers
        - Producers convert some energy into electric energy
        - Consumers convert electric energy -> other form
    - Electrical Energy
        - Potential Energy (Voltage)
        - Kinetic Energy (current)
    - Energy (Joule) J: How much energy is transferred
    - Electric Power: Rate at which energy is transferred/transformmed (1 W = 1 J per second)
    - P =  I * V 

 
## Ideal vs Real World Power Sources

- don't overload power sourc
- power supply should supply at least 25% more power than circuit requires

## Battery Capacity

- Voltage on batteries are "Nominal Voltage"
    - Output of battery after 50% discharge
- Capacity
    - Amount of charge a battery can provide
    - Measured in units of amp-hours (amount of electrons)
    -1 aH = 1 amp for 1 hr
    - Capacity + Typical Drain
    - Lifespan:
        - Capacity / Discharge Rate

## Batteries in series and parallel

- Series : linked end to end. Sum = combined voltage. Same discharge rate. Capacity and current handling = same
- Batteries in Parallel - Positive to positive and negative to negative
    - Combined voltage is equal to individuals
    - Both batteries contribute to total current
    - Batteries last longer. Capacity = sum of individual capacities
    - Increases current output
- Combining batteries
    - should have same "freshness"

## Grounded vs. Floating Power Sources

- Earth-ground: Grounded Sources    
    -GND. Tied/referenced to earth
    - Power Outlets
- Floating Sources
    - Ex: battery
        - Referenced to its own common point (COM)
- 

 [^1] https://www.linkedin.com/learning/electronics-foundations-fundamentals/the-fundamentals-of-electronics?u=57685729

