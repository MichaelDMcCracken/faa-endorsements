---
title: Solo flight (first 90-day period)
ac_reference: A.5
regulation: § 61.87(n)
rating:
  - student
locals:
  - date
  - student:
    - name
    - cert_number
    - gender
    - limitations
  - instructor:
    - name
    - cert_number
    - cert_expiration_date
  - aircraft:
    - make
    - model
---

{{title}}: {{regulation}}.

I certify that {{student.name}} has received the required training to qualify for
solo flying. I have determined {{student.gender}} meets the applicable requirements of § 61.87(n)
and is proficient to make solo flights in a {{aircraft.make}} {{aircraft.model}}.

Limitations: {{student.limitations}}

{{date}} {{instructor.name}} {{instructor.cert_number}} Exp. {{instructor.cert_expiration}}
