---
title: "Beat Taurus - Closed Beta Telemetry & Upgrades"
description: "Analyzing the first wave of closed beta telemetry. Input offsets, UI overhauls, and gameplay loops."
date: 2026-06-25
categories: ["Devlog", "Updates"]
tags: ["Beta", "Roadmap", "Feedback"]
image: "@assets/blog/beta-telemetry.jpg"
imageAlt: "Beta Telemetry Matrix"
---

# System Override: Closed Beta Telemetry Processed

Pilots, the first wave of Closed Beta data has been successfully extracted. Thanks to our vanguard testers, we have gathered critical telemetry regarding combat ergonomics, boss engagements, and system optimization. 

Instead of treating these as mere bug reports, we are integrating them directly into our core development matrix. Here is the current upgrade roadmap and module compilation status for **Beat Taurus**.

### [████████░░] 80% - Control & Ergonomics

The most critical data point: The ship must not be obscured by the pilot's thumb during high-velocity maneuvers. 

* **Input Offset System:** The ship's transform being relocated and field of view has been clarified.
* **UI Layout Revision:** Skill buttons and Hype/HP bars are being relocated from the bottom edge to the left/right mid-screen zones.
* **Visual Contrast:** Strict color palette enforcement. Enemy projectiles and player lasers will now have distinct, high-contrast neon profiles to eliminate visual clutter.

### [███████░░░] 70% - Combat Flow & Level Design

We detected an exploit and identified a steep difficulty curve transition. These are being neutralized.

* **Bullet Stacking Exploit Patched:** Firing at spawning enemies off-screen will no longer stack damage values. 
* **Hard Mode Architecture:** Hard mode will no longer be a simple mathematical stat increase. Expect mechanical shifts: enemy teleportation, charge attacks, and randomized salvos.
* **Boss Hit Feedback:** Sustained fire will now trigger micro-hit flashes and stage-phase destruction animations. You will feel every hit.
* **Difficulty Curve:** Level 1 is transitioning to safer environment to establish the baseline mechanics before the true bullet hell begins.

### [█████████░] 90% - Core System Optimization

Frame drops and hardware limits have been identified and are undergoing optimization.

* **Thermal & Sleep Bypass:** `Screen.sleepTimeout` is integrated. The screen will no longer dim during gameplay. Background vsync loops causing thermal throttling are being heavily optimized.
* **Load Stutter:** The 0.5ms instantiate lag when entering the arena is being pre-warmed in the loading sequence.
* **Economy Respec:** A "Redistribute" module is being added. You will be able to refund misclicked upgrades for an 80% Scrap/Credit return.

### [████░░░░░░] 40% - UX Polish & Vanguard Features

To increase replayability and immersion, the hangar is getting an overhaul.

* **Hangar 360:** The hangar will support rotate functionality.
* **Base Stats:** Ships will no longer be purely cosmetic. Different hulls will feature unique base stats (Armor, Agility, Fire Rate).
* **Lore Integration:** We are drafting an introductory sequence to contextualize your deployment into the Taurus Sector. 

*End of transmission. Stay sharp.*