---
title: Pre-solo aeronautical knowledge
ac_reference: A.3
regulation: § 61.87(b)
rating:
  - student
locals:
  - date
  - student:
    - name
    - cert_number
  - instructor:
    - name
    - cert_number
    - cert_expiration
  - aircraft:
    - make
    - model
---

{{title}}: {{regulation}}.

I certify that {{student.name}} has satisfactorily completed the pre-solo knowledge test of § 61.87(b) for the {{aircraft.make}} {{aircraft.model}}.

{{date}} {{instructor.name}} {{instructor.cert_number}}, Exp. {{instructor.cert_expiration}}
