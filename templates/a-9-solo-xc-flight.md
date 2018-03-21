---
title: Solo cross-country flight
ac_reference: A.9
regulation: § 61.93(c)(1) and (2)
rating:
  - student
locals:
  - date
  - student:
    - name
    - gender
  - instructor:
    - name
    - cert_number
    - cert_expiration
  - aircraft:
    - make
    - model
    - category
---

{{title}}: {{regulation}}.

I certify that {{student.name}} has received the required solo cross-country training. I find {{#if student.gender === "male"}}he{{else}}she{{/if}} has met the applicable requirements of § 61.93, and is proficient to make solo cross-country flights in a {{aircraft.make}} {{aircraft.model}}, {{aircraft.category}}.

{{date}} {{instructor.name}} {{instructor.cert_number}} Exp. {{instructor.cert_expiration}}
