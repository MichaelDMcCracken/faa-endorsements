---
title: Pre-solo flight training
ac_reference: A.4
regulation: § 61.87(c)
rating:
  - student
locals:
  - date
  - student:
    - name
    - cert_number
    - gender
  - instructor:
    - name
    - cert_number
    - cert_expiration
  - aircraft:
    - make
    - model
---

{{title}}: {{regulation}}.

I certify that {{student.name}} has received the required pre-solo flight
training in a {{aircraft.make}} {{aircraft.model}}. I have determined {{#if student.gender === "male"}}he{{else}}she{{/if}} has demonstrated satisfactory proficiency and safety on the maneuvers and procedures required by {{regulation}} in this or similar make and model of aircraft to be flown.

{{date}} {{instructor.name}} {{instructor.cert_number}} Exp. {{instructor.cert_expiration}}
