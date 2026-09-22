// Data curated from: ICMR "Treatment Guidelines for Antimicrobial Use in Common
// Syndromes", 2nd Edition, 2019 (Indian Council of Medical Research, New Delhi).
// This is a reference tool for qualified clinicians. It does not replace clinical
// judgement, local antibiograms, or institutional antimicrobial stewardship policy.

export interface Regimen {
  organism?: string;
  preferred: string;
  alternative?: string;
  duration?: string;
  comments?: string;
}

export interface Condition {
  name: string;
  regimens: Regimen[];
  notes?: string[];
}

export interface DoseEntry {
  drug: string;
  dose: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  summary: string;
  conditions: Condition[];
  doses: DoseEntry[];
  pageRef: string;
}

export const chapters: Chapter[] = [
  {
    id: "fever",
    number: "2",
    title: "Acute Undifferentiated Fever & Tropical Infections",
    summary:
      "Community-onset fever in adults, malaria, dengue, scrub typhus, typhoid, leptospirosis and rickettsial disease.",
    pageRef: "pp. 5-28",
    conditions: [
      {
        name: "Typhoid fever",
        regimens: [
          {
            organism: "Salmonella Typhi / Paratyphi A",
            preferred: "Oral: Cotrimoxazole or Azithromycin. Parenteral: Ceftriaxone",
            alternative: "Cefixime, Chloramphenicol, Ciprofloxacin",
            duration: "10-14 days",
            comments:
              "Change empiric regimen based on susceptibility. Quinolone resistance up to 69% in S. Typhi.",
          },
        ],
      },
      {
        name: "Empiric therapy for suspected Gram-positive infection",
        regimens: [
          {
            organism: "S. pneumoniae, S. pyogenes, S. aureus",
            preferred: "Cefazolin or Cloxacillin",
            alternative:
              "Amoxicillin-clavulanate, or Vancomycin (if anaphylactic penicillin allergy or MRSA possible)",
            comments: "Adjust after culture and susceptibility data.",
          },
        ],
      },
      {
        name: "Empiric therapy for suspected Gram-negative infection (e.g. pyelonephritis, intra-abdominal infection)",
        regimens: [
          {
            organism: "E. coli, K. pneumoniae, anaerobes (esp. Bacteroides in IAI)",
            preferred: "Piperacillin-tazobactam or Cefoperazone-sulbactam",
            alternative: "Imipenem, Meropenem, or Ertapenem (carbapenems preferred if more seriously ill)",
            comments:
              "Separate anaerobic coverage unnecessary for IAI when using BL-BLIs or carbapenems. De-escalate to ciprofloxacin/cotrimoxazole/3rd gen cephalosporin if sensitive.",
          },
        ],
      },
      {
        name: "Rickettsial infection / Scrub typhus",
        regimens: [
          {
            organism: "Orientia tsutsugamushi, Rickettsia conorii, R. typhi",
            preferred: "Doxycycline 100 mg twice daily (oral or IV) for 7 days (up to 15 days)",
            alternative:
              "Chloramphenicol 500 mg qid (7 days adults) or 150 mg/kg/day (5 days children); Rifampicin/azithromycin/clarithromycin in doxycycline-resistant strains",
            duration: "7 days",
            comments: "Rifampicin monotherapy strongly discouraged in TB-endemic settings such as India.",
          },
        ],
      },
      {
        name: "Leptospirosis",
        regimens: [
          {
            preferred: "Penicillin G or Doxycycline",
            alternative: "Ceftriaxone",
            duration: "7 days",
          },
        ],
      },
      {
        name: "Vivax malaria",
        regimens: [
          {
            organism: "P. vivax",
            preferred: "Oral Chloroquine, followed by Primaquine (0.25 mg/kg/day for 14 days)",
            alternative: "Artemether-lumefantrine",
          },
        ],
      },
      {
        name: "Falciparum malaria — uncomplicated",
        regimens: [
          {
            organism: "P. falciparum",
            preferred:
              "Able to take orally: Oral Artesunate + Sulfadoxine-pyrimethamine (SP) for 3 days (except NE states: Artemether-lumefantrine); all mixed infections get full ACT course + primaquine 0.25 mg/kg/day x 14 days",
            alternative: "Artemether-lumefantrine; Unable to take orally: IV Artesunate, switch to oral ASAP",
          },
        ],
      },
      {
        name: "Severe / complicated malaria",
        regimens: [
          {
            preferred: "IV/IM Artesunate 2.4 mg/kg (3 mg/kg if <20 kg) at 0, 12, 24 h then every 24 h until oral tolerated, min 24 h, then complete 3-day oral ACT",
            alternative: "Artemether IM 3.2 mg/kg loading, 1.6 mg/kg/day maintenance, if artesunate unavailable",
            comments: "Parenteral artesunate is treatment of choice — substantial mortality reduction vs quinine.",
          },
        ],
      },
      {
        name: "Acute febrile illness (empiric, malaria/dengue tests negative)",
        regimens: [
          {
            preferred: "Doxycycline may be considered empirically if RDTs for malaria and dengue are negative",
            comments: "Dengue itself needs no antibiotics — supportive fluid management per WHO grading.",
          },
        ],
      },
    ],
    doses: [
      { drug: "Cotrimoxazole", dose: "1 DS tab BD" },
      { drug: "Azithromycin (typhoid)", dose: "20 mg/kg/day" },
      { drug: "Azithromycin (standard)", dose: "500 mg PO/IV OD" },
      { drug: "Ceftriaxone", dose: "2 g IV OD" },
      { drug: "Cefixime", dose: "20 mg/kg/day" },
      { drug: "Chloramphenicol", dose: "500 mg QID" },
      { drug: "Ciprofloxacin", dose: "750 mg BD" },
      { drug: "Cefazolin", dose: "2 g IV q8h" },
      { drug: "Cloxacillin", dose: "2 g IV q6h" },
      { drug: "Amoxicillin-clavulanate", dose: "1.2 g IV q8h" },
      { drug: "Piperacillin-tazobactam", dose: "4.5 g IV q6h" },
      { drug: "Cefoperazone-sulbactam", dose: "3 g IV q12h" },
      { drug: "Imipenem", dose: "1 g IV q8h" },
      { drug: "Meropenem", dose: "1 g IV q8h" },
      { drug: "Ertapenem", dose: "1 g IV OD" },
      { drug: "Doxycycline", dose: "100 mg PO/IV BD" },
      { drug: "Penicillin G", dose: "20 lakh units IV q4h" },
      { drug: "Artesunate (severe malaria)", dose: "2.4 mg/kg IV at 0, 12, 24 h then q24h" },
      { drug: "Primaquine (P. vivax)", dose: "0.25 mg/kg/day x 14 days" },
      { drug: "Primaquine (P. falciparum)", dose: "0.75 mg/kg single dose" },
    ],
  },
  {
    id: "sepsis",
    number: "3",
    title: "Sepsis & Septic Shock",
    summary: "Surviving Sepsis 'Golden Hour' bundle and empiric therapy when the source is unclear.",
    pageRef: "pp. 29-34",
    conditions: [
      {
        name: "Sepsis or septic shock, focus unclear",
        regimens: [
          {
            preferred: "Imipenem-Cilastatin ± Amikacin",
            alternative: "Meropenem or Cefoperazone-sulbactam, ± Amikacin",
            comments:
              "Septic shock must receive empiric combination therapy with ≥2 antibiotics of different classes. Add MRSA/CR-GNB coverage or antifungals per risk factors. Avoid piperacillin-tazobactam in septic shock until cephalosporin-resistant organisms excluded (MERINO trial).",
          },
          {
            organism: "If MRSA risk",
            preferred: "Add Vancomycin or Teicoplanin",
          },
          {
            organism: "If tropical infection not excluded",
            preferred: "± Doxycycline, ± Colistin/polymyxin B",
          },
          {
            organism: "If Candida risk factors present",
            preferred: "Add an echinocandin (Caspofungin, Micafungin or Anidulafungin)",
          },
        ],
        notes: [
          "Measure lactate, obtain 2 blood cultures before antibiotics, give broad-spectrum antibiotics, start 30 mL/kg crystalloid for hypotension/lactate ≥4 mmol/L, and apply vasopressors (norepinephrine first-line) — all within the first hour.",
          "De-escalate daily once susceptibility data available. Typical duration 7-10 days; longer for bacteremic S. aureus, undrained foci, or slow response.",
        ],
      },
    ],
    doses: [
      { drug: "Imipenem-Cilastatin", dose: "500 mg IV q6h or 1 g q8h" },
      { drug: "Amikacin", dose: "15 mg/kg IV q24h" },
      { drug: "Meropenem", dose: "1 g IV q8h" },
      { drug: "Cefoperazone-sulbactam", dose: "3 g IV q12h" },
      { drug: "Vancomycin", dose: "15 mg/kg IV q8-12h" },
      { drug: "Teicoplanin", dose: "400 mg IV q12h x3 doses then 400 mg IV q24h" },
      { drug: "Doxycycline", dose: "100 mg IV q12h" },
      { drug: "Colistin", dose: "9 MU IV stat, then 4.5 MU IV q12h" },
      { drug: "Polymyxin B", dose: "15-20 lakh units IV stat, then 7.5-10 lakh IV q12h" },
      { drug: "Caspofungin", dose: "70 mg IV day 1, then 50 mg IV q24h" },
      { drug: "Micafungin", dose: "100 mg IV OD" },
      { drug: "Anidulafungin", dose: "200 mg IV stat then 100 mg IV OD" },
    ],
  },
  {
    id: "rti-cap",
    number: "4",
    title: "Respiratory Tract Infections & Community-Acquired Pneumonia",
    summary: "URTI (pharyngitis, sinusitis, otitis media), acute bronchitis, and adult/pediatric CAP.",
    pageRef: "pp. 35-44",
    conditions: [
      {
        name: "Streptococcal pharyngitis",
        regimens: [
          {
            preferred: "Penicillin V (or Amoxicillin, since Pen V not easily available in India)",
            alternative: "Benzathine penicillin single dose",
            duration: "10 days",
            comments:
              "Penicillin allergy — anaphylactic: clindamycin/clarithromycin/azithromycin; non-anaphylactic: cephalexin/cefadroxil.",
          },
        ],
      },
      {
        name: "Bacterial sinusitis",
        regimens: [
          {
            preferred: "Amoxicillin (mild)",
            alternative: "Co-amoxiclav (severe/prior antibiotics), Ceftriaxone, Cefpodoxime",
            duration: "Adults 5-7 days; children 10-14 days",
            comments: "Penicillin allergy adults: doxycycline/respiratory quinolone.",
          },
        ],
      },
      {
        name: "Acute otitis media",
        regimens: [
          {
            preferred: "Amoxicillin (first-line)",
            alternative: "Co-amoxiclav, Cefpodoxime, Cefuroxime, Cefdinir, Ceftriaxone",
            duration: "10 days if <2 yrs/severe; 7 days age 2-5 mild; 5-7 days if >5 yrs",
          },
        ],
      },
      {
        name: "Acute bronchitis",
        regimens: [
          {
            preferred: "Symptomatic treatment only — antibiotics not indicated even if sputum purulent",
            comments: "If cough >14 days, suspect pertussis/TB; use macrolides for pertussis.",
          },
        ],
      },
      {
        name: "CAP — Outpatient, no comorbidities",
        regimens: [
          {
            preferred: "Co-amoxiclav",
            alternative: "Macrolide (azithromycin/clarithromycin), Cefuroxime, Cefpodoxime",
            duration: "5 days",
            comments: "Beta-lactam preferred over macrolide due to high macrolide resistance in S. pneumoniae in India.",
          },
        ],
      },
      {
        name: "CAP — Outpatient with comorbidities or recent antibiotics",
        regimens: [
          {
            preferred: "Co-amoxiclav + macrolide/doxycycline",
            alternative: "Cefuroxime or cefpodoxime + macrolide/doxycycline",
          },
        ],
      },
      {
        name: "CAP — Inpatient, non-ICU",
        regimens: [
          {
            preferred: "Ceftriaxone + macrolide/doxycycline",
            alternative: "Cefotaxime/amoxicillin-clavulanate + macrolide/doxycycline",
            comments: "If beta-lactam hypersensitivity: respiratory fluoroquinolone (exclude TB first).",
          },
        ],
      },
      {
        name: "CAP — Inpatient ICU",
        regimens: [
          {
            preferred: "Ceftriaxone + macrolide/doxycycline",
            alternative: "Cefotaxime or piperacillin-tazobactam + macrolide",
          },
        ],
      },
      {
        name: "CAP — Inpatient ICU with Pseudomonas risk factors",
        regimens: [
          {
            preferred: "Piperacillin-tazobactam + macrolide/doxycycline",
            alternative: "Cefepime/imipenem + macrolide/doxycycline",
            comments: "Carbapenems preferred over BL-BLI in patients with septic shock. Add vancomycin/teicoplanin if CA-MRSA suspected.",
          },
        ],
      },
      {
        name: "Pediatric CAP — Age <1 month",
        regimens: [{ preferred: "Cefotaxime + gentamicin (add macrolide if Chlamydia suspected)" }],
      },
      {
        name: "Pediatric CAP — Age <5 years",
        regimens: [
          {
            preferred: "Outpatient: Amoxicillin, Co-amoxiclav, Cefuroxime",
            alternative: "Inpatient: Ceftriaxone, Cefotaxime, Co-amoxiclav",
          },
        ],
      },
      {
        name: "Pediatric CAP — Age >5 years",
        regimens: [
          {
            preferred: "Outpatient: Amoxicillin (macrolide only if mycoplasma suspected)",
            alternative: "Inpatient: Ceftriaxone, Ampicillin, Co-amoxiclav ± macrolide",
          },
        ],
      },
    ],
    doses: [
      { drug: "Penicillin V", dose: "500 mg BD (adult); 250 mg BD (child)" },
      { drug: "Amoxicillin", dose: "500-1000 mg TID PO/IV (adult); 15-20 mg/kg BD PO (child)" },
      { drug: "Co-amoxiclav", dose: "1 g BD / 625 mg TID PO; 1.2 g IV q8h" },
      { drug: "Azithromycin", dose: "500 mg OD PO/IV (adult); 10 mg/kg OD (child)" },
      { drug: "Clarithromycin", dose: "500 mg BD (adult); 7.5 mg/kg BD (child)" },
      { drug: "Oseltamivir", dose: "75 mg BD PO (adult, weight-banded in children)" },
      { drug: "Doxycycline", dose: "100 mg BD" },
      { drug: "Clindamycin", dose: "300 mg QID PO / 600 mg TID IV" },
      { drug: "Cephalexin", dose: "750 mg BD PO" },
      { drug: "Cefadroxil", dose: "1 g OD" },
      { drug: "Levofloxacin", dose: "750 mg OD PO/IV" },
      { drug: "Moxifloxacin", dose: "400 mg OD PO/IV" },
      { drug: "Cefpodoxime", dose: "200 mg BD" },
      { drug: "Cefuroxime", dose: "500 mg BD PO; 1.5 g BD IV" },
      { drug: "Ceftriaxone", dose: "2 g OD IV" },
      { drug: "Cefotaxime", dose: "2 g TID IV" },
      { drug: "Cefepime", dose: "2 g BD IV" },
      { drug: "Piperacillin-tazobactam", dose: "4.5 g TID IV" },
      { drug: "Vancomycin", dose: "1 g BD (adult); 10 mg/kg QID (child)" },
      { drug: "Linezolid", dose: "600 mg BD PO/IV" },
    ],
  },
  {
    id: "intra-abdominal",
    number: "5",
    title: "Intra-Abdominal Infections, SBP & Acute Diarrhea",
    summary: "Community and healthcare-associated IAI, cholangitis/liver abscess, spontaneous bacterial peritonitis, and diarrheal disease.",
    pageRef: "pp. 45-54",
    conditions: [
      {
        name: "Community-acquired IAI — mild to moderate severity",
        regimens: [
          { preferred: "Cefoperazone-sulbactam", alternative: "Piperacillin-tazobactam" },
        ],
      },
      {
        name: "Community-acquired IAI — high severity",
        regimens: [{ preferred: "Imipenem or Meropenem" }],
      },
      {
        name: "Healthcare-associated IAI",
        regimens: [
          {
            preferred: "Imipenem/Meropenem + Vancomycin",
            alternative: "Colistin, Tigecycline (per intraoperative cultures)",
            comments: "Add echinocandin/fluconazole if Candida risk factors. Double anaerobic cover is redundant.",
          },
        ],
      },
      {
        name: "Infected pancreatic necrosis / pancreatic abscess",
        regimens: [
          {
            preferred: "Imipenem-cilastatin + Vancomycin",
            comments: "Adjust per pancreatic aspirate/necrosectomy culture. Antifungal cover if disseminated candidiasis risk.",
          },
        ],
      },
      {
        name: "Cholangitis / cholecystitis",
        regimens: [{ preferred: "As for community-acquired complicated IAI" }],
      },
      {
        name: "Liver abscess",
        regimens: [
          {
            preferred: "Cefoperazone-sulbactam or Piperacillin-tazobactam + Metronidazole",
            comments: "Covers both bacterial and amoebic etiology; adjust per culture and amoebic serology.",
          },
        ],
      },
      {
        name: "Spontaneous bacterial peritonitis (SBP)",
        regimens: [
          {
            organism: "E. coli, Klebsiella (occasionally Staph/Enterococcus/Strep)",
            preferred: "Piperacillin-tazobactam or Cefoperazone-sulbactam",
            alternative: "Imipenem or Meropenem for suspected MDR organisms",
          },
        ],
        notes: ["ESBL prevalence >10% in the community drives first-line choice. Diagnostic criterion: ascitic fluid PMN >250 cells/mm³."],
      },
      {
        name: "Acute diarrhea — V. cholerae",
        regimens: [
          { preferred: "Doxycycline 300 mg once (avoid in children/pregnancy)", alternative: "Azithromycin 1 g single dose" },
        ],
      },
      {
        name: "Acute diarrhea — Shigella (dysentery)",
        regimens: [
          { preferred: "Ciprofloxacin 500 mg BD x 3 days", alternative: "Ceftriaxone 2 g IV single dose" },
        ],
        notes: ["Ampicillin/TMP-SMX no longer drugs of choice in India due to high resistance."],
      },
      {
        name: "Amoebiasis",
        regimens: [{ preferred: "Metronidazole 500 mg TID x 5 days" }],
      },
      {
        name: "Giardiasis",
        regimens: [{ preferred: "Metronidazole 250 mg TID x 5 days" }],
      },
      {
        name: "Campylobacter",
        regimens: [{ preferred: "Azithromycin 500 mg x 3 days" }],
      },
      {
        name: "Aeromonas",
        regimens: [
          { preferred: "Ciprofloxacin 500 mg BD x 3 days", alternative: "Norfloxacin 400 mg BD x 3 days" },
        ],
      },
    ],
    doses: [
      { drug: "Cefoperazone-sulbactam", dose: "3 g IV q12h" },
      { drug: "Piperacillin-tazobactam", dose: "4.5 g IV q6h" },
      { drug: "Imipenem/Meropenem", dose: "1 g IV q8h" },
      { drug: "Vancomycin", dose: "15-20 mg/kg IV q8-12h" },
      { drug: "Metronidazole", dose: "500 mg TID (varies by indication)" },
      { drug: "Doxycycline (cholera)", dose: "300 mg once" },
      { drug: "Azithromycin (cholera)", dose: "1 g single dose" },
      { drug: "Ciprofloxacin (dysentery)", dose: "500 mg BD x 3 days" },
    ],
  },
  {
    id: "sst",
    number: "6",
    title: "Skin & Soft Tissue Infections",
    summary: "Cellulitis, necrotizing fasciitis, erysipelas, abscess, and deep neck space infections.",
    pageRef: "pp. 55-60",
    conditions: [
      {
        name: "Cellulitis",
        regimens: [
          {
            organism: "S. pyogenes, S. aureus",
            preferred: "Cefazolin or Cephalexin or Amoxicillin-clavulanate ± Clindamycin",
            duration: "5-7 days (longer if clinically indicated)",
            comments: "Consider polymicrobial pathogens in diabetics; weigh MRSA risk/TSS before adding clindamycin.",
          },
        ],
      },
      {
        name: "Necrotizing fasciitis (polymicrobial / typical)",
        regimens: [
          {
            organism: "S. pyogenes, S. aureus, anaerobes, Gram-negatives",
            preferred: "Piperacillin-tazobactam + Clindamycin",
            duration: "~14 days if adequate source control",
            comments: "Early surgical debridement is essential. Consider IVIG for streptococcal NF/TSS.",
          },
        ],
      },
      {
        name: "Necrotizing fasciitis (fresh/salt water exposure)",
        regimens: [
          {
            organism: "Aeromonas / V. vulnificus",
            preferred: "Ciprofloxacin + Doxycycline",
            duration: "~14 days",
          },
        ],
      },
      {
        name: "Erysipelas",
        regimens: [
          { organism: "S. pyogenes / beta-hemolytic streptococci", preferred: "Amoxicillin-clavulanate", duration: "5-7 days" },
        ],
      },
      {
        name: "Abscess",
        regimens: [
          {
            organism: "S. pyogenes, oral anaerobes",
            preferred: "Clindamycin or Ampicillin-sulbactam or Amoxicillin-clavulanate",
            duration: "5-7 days",
          },
          {
            organism: "S. aureus, facultative Gram-negative anaerobes",
            preferred: "Linezolid or Vancomycin + Ciprofloxacin",
            duration: "~14 days",
          },
        ],
      },
      {
        name: "Deep neck infections (peritonsillar abscess, Ludwig's angina, odontogenic, Lemierre)",
        regimens: [
          {
            preferred: "Clindamycin or Ampicillin-sulbactam or Amoxicillin-clavulanate (immunocompetent)",
            alternative: "Piperacillin-tazobactam ± Clindamycin (immunosuppressed)",
            comments: "MRSA risk factors: use linezolid 600 mg or vancomycin 15-20 mg/kg IV q12h. Drainage where possible.",
          },
        ],
      },
    ],
    doses: [
      { drug: "Cefazolin", dose: "1-2 g IV q8h" },
      { drug: "Cephalexin", dose: "750 mg BD / 500 mg TID" },
      { drug: "Amoxicillin-clavulanate", dose: "Oral 1 g BD / IV 1.2 g TID" },
      { drug: "Clindamycin", dose: "600-900 mg IV q8h" },
      { drug: "Piperacillin-tazobactam + Clindamycin", dose: "4.5 g IV q6h + 600 mg TID" },
      { drug: "Ciprofloxacin", dose: "750 mg IV q12h" },
      { drug: "Doxycycline", dose: "200 mg stat then 100 mg BD" },
      { drug: "Ampicillin-sulbactam", dose: "3 g q6h" },
      { drug: "Ceftriaxone", dose: "1 g q12h" },
      { drug: "Linezolid", dose: "600 mg q12h" },
      { drug: "Vancomycin", dose: "15 mg/kg q12h" },
      { drug: "Metronidazole", dose: "500 mg q8h" },
    ],
  },
  {
    id: "bone-joint",
    number: "7",
    title: "Bone & Joint Infections",
    summary: "Osteomyelitis, septic arthritis, and prosthetic joint / implant-associated infections, by pathogen.",
    pageRef: "pp. 61-74",
    conditions: [
      {
        name: "MSSA",
        regimens: [
          {
            preferred: "Cloxacillin, Flucloxacillin, or Cefazolin",
            alternative: "Ceftriaxone or Daptomycin",
            comments: "Add rifampicin 300-450 mg PO/day if hardware present.",
          },
        ],
      },
      {
        name: "MRSA",
        regimens: [
          {
            preferred: "Vancomycin or Teicoplanin",
            alternative: "Daptomycin or Linezolid",
            comments: "High-dose vancomycin 15-20 mg/kg q8-12h (max 2 g/dose); monitor trough levels and renal function. Add rifampicin if hardware present.",
          },
        ],
      },
      {
        name: "β-hemolytic Streptococcus",
        regimens: [{ preferred: "Penicillin G or Ampicillin or Ceftriaxone", alternative: "Vancomycin if immediate penicillin hypersensitivity" }],
      },
      {
        name: "Enterococcus spp. — penicillin-susceptible",
        regimens: [{ preferred: "Penicillin G or Ampicillin", alternative: "Vancomycin or Teicoplanin" }],
      },
      {
        name: "Enterococcus spp. — penicillin-resistant",
        regimens: [{ preferred: "Vancomycin or Teicoplanin", alternative: "Daptomycin or Linezolid" }],
      },
      {
        name: "Pseudomonas spp.",
        regimens: [
          {
            preferred: "Ceftazidime or Cefepime",
            alternative: "Piperacillin-tazobactam, Meropenem (ESBL), or Polymyxin/Colistin",
            comments: "Ciprofloxacin 750 mg PO BD upfront if susceptible (good B&J penetration).",
          },
        ],
      },
      {
        name: "Enterobacteriaceae",
        regimens: [
          {
            preferred: "Beta-lactam per in-vitro susceptibility",
            alternative: "Piperacillin-tazobactam, Meropenem (ESBL), or Polymyxin/Colistin",
          },
        ],
      },
      {
        name: "Directed oral step-down (after 2-3 weeks IV)",
        regimens: [
          { organism: "MSSA", preferred: "Cloxacillin/Flucloxacillin 1000 mg QDS, or Cephalexin 1000 mg QDS" },
          { organism: "MRSA", preferred: "Linezolid 600 mg BD, TMP-SMX 800/160 mg BD, or Doxycycline 100 mg BD" },
          { organism: "Enterobacteriaceae/Pseudomonas", preferred: "Ciprofloxacin 750 mg BD, TMP-SMX, or Doxycycline" },
        ],
      },
    ],
    doses: [
      { drug: "Cloxacillin / Flucloxacillin", dose: "2 g q4-6h" },
      { drug: "Cefazolin", dose: "2 g q8h" },
      { drug: "Ceftriaxone", dose: "2-4 g q24h" },
      { drug: "Vancomycin", dose: "15 mg/kg q12h" },
      { drug: "Teicoplanin", dose: "12 mg/kg q12h x3 doses, then 12 mg/kg/day" },
      { drug: "Daptomycin", dose: "8-10 mg/kg/day (MRSA)" },
      { drug: "Linezolid", dose: "600 mg q12h" },
      { drug: "Penicillin G", dose: "20-24 MU/day divided q4h" },
      { drug: "Ampicillin", dose: "2 g q4-6h" },
      { drug: "Ceftazidime", dose: "2 g q8h" },
      { drug: "Cefepime", dose: "2 g q12h" },
      { drug: "Piperacillin-tazobactam", dose: "4.5 g q6-8h" },
      { drug: "Meropenem", dose: "1 g q8h" },
      { drug: "Colistin", dose: "9 MU loading, then 3 MU IV q8h" },
      { drug: "Clindamycin", dose: "600-900 mg q8h" },
    ],
  },
  {
    id: "cns",
    number: "8",
    title: "CNS Infections",
    summary: "Community-acquired and healthcare-associated meningitis/ventriculitis, CSF shunt infections, and brain abscess.",
    pageRef: "pp. 75-85",
    conditions: [
      {
        name: "Community-acquired bacterial meningitis — age <1 month",
        regimens: [
          {
            preferred: "Meropenem (add vancomycin if MRSA risk)",
            alternative: "Cefotaxime + Gentamicin",
          },
        ],
      },
      {
        name: "Community-acquired bacterial meningitis — 1 month to 50 years",
        regimens: [
          { preferred: "Ceftriaxone + Vancomycin", alternative: "Cefotaxime + Vancomycin" },
        ],
      },
      {
        name: "Community-acquired bacterial meningitis — >50 years / alcoholism / impaired CMI",
        regimens: [
          { preferred: "Ampicillin + Ceftriaxone + Vancomycin", alternative: "Meropenem + Vancomycin" },
        ],
        notes: [
          "Dexamethasone 0.15 mg/kg q6h (10 mg q6h adults) 15-20 min before first antibiotic dose, for 48-96 h — beneficial in pneumococcal (adult) and H. influenzae (child) meningitis.",
          "Duration: 7 days meningococcus/H. influenzae, 10-14 days pneumococcus, 2-3 weeks Group B strep, 3-6 weeks Listeria, 3 weeks Gram-negative.",
        ],
      },
      {
        name: "Healthcare-associated meningitis/ventriculitis",
        regimens: [
          { organism: "MSSA", preferred: "Cloxacillin", alternative: "Ceftriaxone" },
          { organism: "MRSA", preferred: "Vancomycin", alternative: "Linezolid/cotrimoxazole if susceptible" },
          { organism: "Non-ESBL Gram-negative", preferred: "Ceftriaxone", alternative: "Cefotaxime/ceftazidime" },
          { organism: "ESBL Gram-negative", preferred: "Meropenem", alternative: "Cotrimoxazole/moxifloxacin" },
          {
            organism: "Carbapenem-resistant Gram-negative",
            preferred: "Systemic colistin/polymyxin B + high-dose tigecycline/minocycline/fosfomycin",
            comments: "Plus intraventricular/intrathecal colistin/polymyxin/aminoglycosides.",
          },
        ],
        notes: ["Typical duration 2-3 weeks. Empiric choice usually high-dose meropenem + vancomycin."],
      },
      {
        name: "Brain abscess — cardiac/lung source",
        regimens: [{ preferred: "Ceftriaxone + Metronidazole ± Vancomycin" }],
      },
      {
        name: "Brain abscess — otitis/mastoiditis/sinusitis/dental source",
        regimens: [{ preferred: "Ceftriaxone + Metronidazole" }],
      },
      {
        name: "Brain abscess — neonates",
        regimens: [{ preferred: "Meropenem" }],
        notes: ["Duration ≥4-6 weeks and until radiologic stabilization; shorter (~3 weeks) if abscess is excised."],
      },
      {
        name: "CSF shunt infection (culture-negative / pending)",
        regimens: [{ preferred: "Ceftriaxone + Vancomycin" }],
        notes: ["Shunt removal + temporary EVD for confirmed infection. Duration 7-10 days (CONS) to 10-14 days (S. aureus/GNB)."],
      },
    ],
    doses: [
      { drug: "Ceftriaxone", dose: "2 g q12h (50 mg/kg q12h child)" },
      { drug: "Ceftazidime", dose: "2 g q6-8h" },
      { drug: "Cefepime", dose: "2 g q8-12h" },
      { drug: "Cefotaxime", dose: "2 g q6h" },
      { drug: "Meropenem", dose: "2 g q8h (40 mg/kg q8h child)" },
      { drug: "Vancomycin", dose: "15 mg/kg (max 2 g) q8h" },
      { drug: "Colistin", dose: "9 MU loading, then 4.5 MU q12h" },
      { drug: "Polymyxin B", dose: "20,000-25,000 U/kg loading, then 12,500-15,000 U/kg q12h" },
      { drug: "Fosfomycin", dose: "4 g q6h" },
      { drug: "Cloxacillin", dose: "2 g q4h" },
      { drug: "Rifampicin", dose: "600 mg OD" },
      { drug: "Metronidazole", dose: "400 mg q8h" },
      { drug: "Acyclovir (HSV encephalitis)", dose: "10 mg/kg q8h" },
      { drug: "Amphotericin B deoxycholate", dose: "1 mg/kg/day" },
      { drug: "Liposomal amphotericin B", dose: "3-5 mg/kg/day" },
      { drug: "Fluconazole", dose: "800 mg loading, then 400 mg OD" },
    ],
  },
  {
    id: "uti",
    number: "9",
    title: "Urinary Tract Infections",
    summary: "Asymptomatic bacteriuria, cystitis, pyelonephritis, prostatitis, epididymo-orchitis, and pediatric UTI.",
    pageRef: "pp. 86-92",
    conditions: [
      {
        name: "Acute cystitis",
        regimens: [
          {
            preferred: "Nitrofurantoin or Fosfomycin",
            alternative: "Co-trimoxazole, Ertapenem, or Amikacin (children too)",
            comments: "Avoid fosfomycin/nitrofurantoin if pyelonephritis or prostatitis suspected or systemic features present.",
          },
        ],
      },
      {
        name: "Acute pyelonephritis",
        regimens: [
          {
            preferred: "Piperacillin-tazobactam or Ertapenem",
            alternative: "Imipenem, Meropenem, or Amikacin (children too)",
            duration: "Minimum 7 days (adults); 14 days (children)",
            comments: "Same regimen extended (7-14 days) for complicated UTI.",
          },
        ],
      },
      {
        name: "Acute prostatitis",
        regimens: [
          {
            preferred: "Ertapenem 1 g IV OD",
            alternative: "Piperacillin-tazobactam, Imipenem, Meropenem, or TMP-SMX",
            duration: "Minimum 21 days",
          },
        ],
      },
      {
        name: "Epididymo-orchitis — high STI risk",
        regimens: [
          { preferred: "Ceftriaxone + Doxycycline", alternative: "Ofloxacin or Levofloxacin", duration: "14 days (10 days if levofloxacin)" },
        ],
      },
      {
        name: "Epididymo-orchitis — low STI risk (enteric/urinary organisms)",
        regimens: [{ preferred: "Ofloxacin or Levofloxacin" }],
      },
      {
        name: "Pediatric cystitis",
        regimens: [{ preferred: "Nitrofurantoin or Amoxicillin", duration: "5-7 days" }],
      },
      {
        name: "Pediatric pyelonephritis / complicated UTI",
        regimens: [
          { preferred: "Amikacin single daily dose initially, step down to oral per susceptibility", duration: "14 days" },
        ],
      },
    ],
    doses: [
      { drug: "Nitrofurantoin", dose: "100 mg BD x 5 days" },
      { drug: "Fosfomycin", dose: "3 g single dose" },
      { drug: "Co-trimoxazole", dose: "DS 1 tab BD x 3 days" },
      { drug: "Ertapenem", dose: "1 g IV OD" },
      { drug: "Amikacin", dose: "15 mg/kg/day IV/IM" },
      { drug: "Piperacillin-tazobactam", dose: "4.5 g IV q6h" },
      { drug: "Imipenem", dose: "1 g IV q8h" },
      { drug: "Meropenem", dose: "1 g IV q8h" },
      { drug: "TMP-SMX", dose: "160/800 mg BD" },
      { drug: "Ceftriaxone (epididymo-orchitis)", dose: "500 mg IM" },
      { drug: "Doxycycline", dose: "100 mg BD" },
      { drug: "Ofloxacin", dose: "200 mg BD" },
      { drug: "Levofloxacin", dose: "500 mg OD" },
    ],
  },
  {
    id: "hai",
    number: "10",
    title: "Hospital-Acquired Infections",
    summary: "Surgical site infection prophylaxis, CLABSI, HAP/VAP, and catheter-associated UTI.",
    pageRef: "pp. 93-125",
    conditions: [
      {
        name: "Surgical prophylaxis — Class I (Clean)",
        regimens: [{ preferred: "None, or single perioperative dose Cefuroxime/Cefazolin" }],
      },
      {
        name: "Surgical prophylaxis — Class II (Clean-contaminated)",
        regimens: [
          { preferred: "Cefazolin, Ampicillin-sulbactam, or Ceftriaxone", alternative: "Clindamycin or Vancomycin if beta-lactam allergic" },
        ],
      },
      {
        name: "Surgical prophylaxis — Class III (Contaminated)",
        regimens: [{ preferred: "Cefuroxime + Metronidazole", alternative: "Metronidazole + Aminoglycoside/Fluoroquinolone" }],
      },
      {
        name: "Surgical prophylaxis — Class IV (Dirty-infected)",
        regimens: [
          {
            preferred: "Cefazolin + Metronidazole, Cefoxitin, Cefotetan, Ampicillin-sulbactam, Ceftriaxone + Metronidazole, or Ertapenem",
            alternative: "Clindamycin + Aminoglycoside/Aztreonam or Fluoroquinolone + Metronidazole",
          },
        ],
        notes: ["First dose within 1 hour before incision. Do not continue beyond 24 h postop — prolonged prophylaxis increases resistance and C. diff risk."],
      },
      {
        name: "CLABSI — empiric therapy",
        regimens: [
          {
            organism: "Gram-negative (Klebsiella/Acinetobacter) more common than Gram-positive",
            preferred: "Imipenem-cilastatin + Gentamicin + Vancomycin/Teicoplanin",
            alternative: "Cefoperazone-sulbactam + Gentamicin + Vancomycin/Teicoplanin",
            comments: "Catheter removal warranted in septic shock, hemodynamic instability, suppurative thrombophlebitis, endocarditis, or persistent bacteremia >72h.",
          },
        ],
      },
      {
        name: "CLABSI — MRSA",
        regimens: [{ preferred: "Vancomycin or Teicoplanin", alternative: "Daptomycin 6 mg/kg q24h", duration: "≥2 weeks (4-6 weeks if hematogenous complications)" }],
      },
      {
        name: "CLABSI — MSSA",
        regimens: [{ preferred: "Cefazolin or Cloxacillin", alternative: "Vancomycin (if intolerant to beta-lactam)" }],
      },
      {
        name: "CLABSI — Carbapenem-resistant E. coli/Klebsiella",
        regimens: [
          { preferred: "Colistin 9 MU loading then 4.5 MU q8h", alternative: "Fosfomycin IV 4-8 g q12h" },
        ],
      },
      {
        name: "CLABSI — Candida species",
        regimens: [
          {
            preferred: "Micafungin, Anidulafungin, or Caspofungin",
            alternative: "Amphotericin B (lipid or deoxycholate), Fluconazole, or Voriconazole (for C. auris/glabrata)",
            duration: "14 days after first negative blood culture",
            comments: "Catheter removal essential for all candidemia.",
          },
        ],
      },
      {
        name: "HAP/VAP — empiric",
        regimens: [
          {
            preferred: "Cefoperazone-sulbactam or Piperacillin-tazobactam, alone or with Amikacin",
            alternative: "Meropenem or Imipenem-cilastatin + Amikacin or Colistin/polymyxin B (if carbapenem resistance >20%)",
            comments: "Empiric MRSA coverage recommended if local prevalence >10-20%. Consider nebulized colistin for CR organisms.",
          },
        ],
      },
      {
        name: "HAP/VAP — culture-proven MRSA",
        regimens: [{ preferred: "Linezolid", alternative: "Vancomycin or Teicoplanin" }],
        notes: ["Recommended duration: 7 days with good clinical response."],
      },
      {
        name: "CA-UTI (catheter-associated) — asymptomatic bacteriuria",
        regimens: [{ preferred: "Not recommended (except before urologic surgery/prosthesis implantation, or in pregnancy)" }],
      },
      {
        name: "CA-UTI — symptomatic, not severely ill",
        regimens: [
          { preferred: "Nitrofurantoin, Fosfomycin, Levofloxacin, Ciprofloxacin, or Amikacin single dose" },
        ],
      },
      {
        name: "CA-UTI — severely ill",
        regimens: [
          { preferred: "Piperacillin-tazobactam, Ertapenem, or Meropenem (preferred in sepsis/septic shock)" },
        ],
      },
    ],
    doses: [
      { drug: "Cefazolin", dose: "1-2 g IV (surgical prophylaxis dosing per procedure)" },
      { drug: "Imipenem-cilastatin", dose: "500 mg IV q6h" },
      { drug: "Meropenem", dose: "1 g IV q8h" },
      { drug: "Cefoperazone-sulbactam", dose: "3 g IV q12h" },
      { drug: "Vancomycin", dose: "15 mg/kg IV q8-12h" },
      { drug: "Teicoplanin", dose: "400 mg IV q12h x3 then 10 mg/kg q24h" },
      { drug: "Colistin", dose: "9 MU IV stat, then 4.5 MU q12h or 3 MU q8h" },
      { drug: "Polymyxin B", dose: "15,000-25,000 U/kg/day divided BD" },
      { drug: "Amikacin", dose: "15-20 mg/kg IV q24h" },
      { drug: "Levofloxacin", dose: "750 mg IV q24h" },
      { drug: "Linezolid", dose: "600 mg IV q12h" },
      { drug: "Micafungin", dose: "100 mg IV OD" },
      { drug: "Piperacillin-tazobactam (CA-UTI, severe)", dose: "4.5 g IV q6h" },
    ],
  },
  {
    id: "pelvic",
    number: "12",
    title: "Pelvic / Obstetric & Gynaecological Infections",
    summary: "GBS prophylaxis, puerperal sepsis, hysterectomy prophylaxis, PID, vaginal candidiasis, trichomoniasis and BV.",
    pageRef: "pp. 142-153",
    conditions: [
      {
        name: "Puerperal sepsis / septic abortion / chorioamnionitis",
        regimens: [
          {
            preferred: "Piperacillin-tazobactam 4.5 g IV q6h x 7-14 days",
            alternative: "If septic shock/intubated/prior antibiotics: Imipenem/Meropenem ± Amikacin + Vancomycin/Teicoplanin for MRSA",
            comments: "Cover C. sordellii and C. perfringens; amikacin may be added for puerperal sepsis in India.",
          },
        ],
      },
      {
        name: "Caesarean delivery prophylaxis",
        regimens: [
          { preferred: "Cefazolin + Azithromycin", alternative: "Clindamycin + Gentamicin (if allergic)" },
        ],
      },
      {
        name: "GBS prophylaxis (vaginal delivery)",
        regimens: [{ preferred: "Ampicillin", alternative: "Cefazolin, or Vancomycin if allergic" }],
      },
      {
        name: "Pelvic inflammatory disease (PID) — mild to moderate",
        regimens: [
          {
            preferred: "Tab. Cefixime + Tab. Metronidazole + Cap. Doxycycline (NACO-based)",
            alternative: "Levofloxacin + Metronidazole, or Ceftriaxone + Doxycycline ± Metronidazole (CDC-based)",
          },
        ],
      },
      {
        name: "PID — severe (tubo-ovarian/pelvic abscess)",
        regimens: [
          {
            preferred: "Cefotetan + Doxycycline",
            alternative: "Cefoxitin + Doxycycline, or Clindamycin + Gentamicin, or Piperacillin-tazobactam/Imipenem for severely ill",
            duration: "2 weeks (extendable)",
          },
        ],
      },
      {
        name: "Vaginal candidiasis",
        regimens: [
          { preferred: "Tab. Fluconazole or local Clotrimazole", alternative: "Miconazole or Nystatin vaginal tablets/creams" },
        ],
        notes: ["Treat 7 days in pregnancy/diabetes. Recurrent: fluconazole 150 mg day 1,4,7 then weekly x6 months."],
      },
      {
        name: "Vaginal trichomoniasis",
        regimens: [{ preferred: "Tab. Secnidazole, Tinidazole, or Metronidazole" }],
        notes: ["Partner treatment essential; avoid alcohol during and after treatment."],
      },
      {
        name: "Bacterial vaginosis",
        regimens: [
          { preferred: "Metronidazole (oral or gel)", alternative: "Secnidazole, Tinidazole, or Clindamycin (cream/ovules)" },
        ],
      },
    ],
    doses: [
      { drug: "Ampicillin (GBS)", dose: "2 g IV then 1 g IV q4-6h till delivery" },
      { drug: "Cefazolin (GBS)", dose: "2 g IV then 1 g q8h till delivery" },
      { drug: "Piperacillin-tazobactam (puerperal sepsis)", dose: "4.5 g IV q6h x 7-14 days" },
      { drug: "Metronidazole (BV/amoebiasis)", dose: "500 mg TID" },
      { drug: "Fluconazole (candidiasis)", dose: "150 mg single dose (recurrent: day 1,4,7 then weekly x6mo)" },
    ],
  },
  {
    id: "ie",
    number: "13",
    title: "Infective Endocarditis",
    summary: "Empiric therapy pending cultures, and pathogen-directed regimens for VGS, staphylococci and enterococci.",
    pageRef: "pp. 154-163",
    conditions: [
      {
        name: "Empirical therapy — native valve, no specific risk factors",
        regimens: [
          {
            preferred: "Ampicillin-sulbactam 3 g q6h + Gentamicin",
            alternative: "Ampicillin + Ceftriaxone + Gentamicin",
            comments: "Ampicillin-sulbactam covers beta-lactamase-producing enterococci and HACEK organisms.",
          },
        ],
      },
      {
        name: "Empirical therapy — native valve, S. aureus risk factors",
        regimens: [
          {
            preferred: "Vancomycin (25 mg/kg loading, then weight-based dosing)",
            alternative: "Daptomycin (right-sided 6 mg/kg; left-sided 8-10 mg/kg); Flucloxacillin/Cefazolin if MSSA likely",
          },
        ],
      },
      {
        name: "Empirical therapy — prosthetic valve, pending/negative cultures",
        regimens: [
          { preferred: "Ceftriaxone + Vancomycin + Gentamicin + Rifampicin" },
        ],
      },
      {
        name: "Native valve IE — highly penicillin-susceptible VGS (MIC ≤0.12)",
        regimens: [
          {
            preferred: "Aqueous crystalline penicillin G, or Ampicillin, or Ceftriaxone",
            duration: "4 weeks (beta-lactam alone) or 2 weeks if combined with gentamicin",
            comments: "Vancomycin is the alternative for penicillin allergy.",
          },
        ],
      },
      {
        name: "Native valve IE — VGS MIC 0.12-0.5 / >0.5",
        regimens: [
          { preferred: "Penicillin G or Ampicillin or Ceftriaxone + Gentamicin", duration: "4-6 weeks (beta-lactam) + 2 weeks gentamicin" },
        ],
      },
      {
        name: "Native valve MSSA IE",
        regimens: [{ preferred: "Cloxacillin or Flucloxacillin or Cefazolin", duration: "6 weeks" }],
      },
      {
        name: "Prosthetic valve MSSA IE",
        regimens: [{ preferred: "Cloxacillin + Rifampicin + Gentamicin (2 weeks)", duration: "6 weeks" }],
      },
      {
        name: "Native/Prosthetic valve MRSA IE",
        regimens: [
          { preferred: "Vancomycin (native) or Vancomycin + Rifampicin + Gentamicin (prosthetic)", alternative: "Daptomycin", duration: "6 weeks" },
        ],
      },
      {
        name: "Coagulase-negative Staphylococcus IE",
        regimens: [
          { preferred: "Vancomycin (native, 6 weeks); + Rifampicin + Gentamicin (prosthetic)" },
        ],
      },
      {
        name: "Enterococcus IE — Ampicillin-sensitive, non-HLAR",
        regimens: [{ preferred: "Ampicillin + Gentamicin", duration: "4-6 weeks" }],
      },
      {
        name: "Enterococcus IE — Ampicillin-resistant",
        regimens: [
          { preferred: "Ampicillin-sulbactam + Gentamicin or Ceftriaxone", alternative: "Vancomycin + Gentamicin or Daptomycin (if HLAR/nephrotoxicity risk)", duration: "6 weeks" },
        ],
      },
    ],
    doses: [
      { drug: "Ampicillin-sulbactam", dose: "3 g IV q6h" },
      { drug: "Penicillin G", dose: "20-40 lakh U/kg/day (or 12-18 MU/24h)" },
      { drug: "Ceftriaxone", dose: "2 g IV q24h" },
      { drug: "Gentamicin (synergy)", dose: "1 mg/kg q8h" },
      { drug: "Vancomycin", dose: "25 mg/kg loading, then 30-60 mg/kg/24h divided" },
      { drug: "Daptomycin", dose: "6 mg/kg q24h (right-sided); 8-10 mg/kg q24h (left-sided)" },
      { drug: "Cloxacillin", dose: "12 g/day in 3 divided doses" },
      { drug: "Rifampicin", dose: "300-600 mg q12h" },
    ],
  },
];

export const allDrugNames = Array.from(
  new Set(
    chapters.flatMap((c) =>
      c.doses.map((d) => d.drug.toLowerCase())
    )
  )
);

export function searchChapters(query: string): Chapter[] {
  const q = query.trim().toLowerCase();
  if (!q) return chapters;
  return chapters
    .map((chapter) => {
      const matchedConditions = chapter.conditions.filter((cond) => {
        const haystack = [
          cond.name,
          ...cond.regimens.flatMap((r) => [
            r.organism ?? "",
            r.preferred,
            r.alternative ?? "",
            r.comments ?? "",
          ]),
          ...(cond.notes ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
      const chapterMatches =
        chapter.title.toLowerCase().includes(q) ||
        chapter.summary.toLowerCase().includes(q);
      if (chapterMatches) return chapter;
      if (matchedConditions.length > 0) {
        return { ...chapter, conditions: matchedConditions };
      }
      return null;
    })
    .filter((c): c is Chapter => c !== null);
}
