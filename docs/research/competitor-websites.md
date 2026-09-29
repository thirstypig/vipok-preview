# Competitor website research: ortho-k and myopia-control lens makers

Research for the vipok.com rebuild. All sites were visited on **2026-09-25** with WebFetch, curl,
or a headless browser (Playwright), plus web search. No accounts were created and no forms were
submitted. On one form (Blanchard/Paragon new-account) I selected country and account-type options
so the conditional fields would appear, then closed it without submitting.

**Legend.** "Observed" means I saw it on the live page. "Inferred" means it's my reading of what I
saw, or it comes from a search result or press release rather than the site itself. WebFetch
summarizes pages with a small model, so short quotes from it are close paraphrases unless the page
was also pulled raw with curl (Contex, Brighten Optix, Alpha, DreamLens, 欧普康视) or the browser
(Art Optical, Blanchard/Paragon forms). Those raw pulls are verbatim.

---

## 1. Executive summary: best practices, ranked

1. **Keep doctor and patient content clearly separate, with a persistent switch between them.**
   Nearly every serious competitor does this. It's done with a path (`coopervision.com/practitioner`,
   `wavecontactlenses.com/ecp/`), a "Practitioners" header link (Paragon), paired "Practitioner Site"
   and "Patient Site" buttons (Contex), or two big hero buttons (Menicon Bloom: *Patients* and
   *Professionals*). Japanese sites add an "Are you a healthcare professional?" interstitial before
   professional pages (SEED: 「あなたは医療従事者ですか？」; Menicon Bloom Easyfit asks visitors to
   confirm they're "qualified professionals"). *Takeaway: two top-level zones. Put a "For Eye Care
   Professionals" entry in the header on every page.*

2. **Make the fitting tool the product, and put it at the center of the doctor experience.** The
   market has moved from charts to software:
   - Topography-based cloud design: B+L **Arise** (launched 2025), **MyEuclid**, Menicon
     **Easyfit**, J&J **FitAbiliti**, **WAVE**
   - Calculators: **Paragon CRT** Initial Lens Selector (web plus iOS/Android), Art Optical's nine
     calculators including MOONLENS, and **GOV**'s K-code/power-code calculator, which is the
     closest analog to VIPOK's Mean-K × SE chart
   - Contex publishes a readable **design code** (`43.00/-5.00(.5e)/9.06/10.6/+1.00`) with
     "if tight, raise e-value" rules. That's a direct parallel to VIPOK's `2O06`-style codes.

   *Takeaway: VIPOK's patented chart should become an interactive lens selector (enter K's and Rx,
   get a lens code, fit notes and an order button), not a static table.*

3. **Gate the tools behind a verified professional account, but keep regulatory documents
   public.**
   - **Gated:** Paragon's calculator and marketing kit sit behind the Success Center login.
     X-Cel's REMLens calculator needs an account login. MyEuclid, Easyfit and Arise are account
     platforms.
   - **Public:** Paragon's fitting guides and package inserts, the B+L Arise fitting guide and
     package insert, and Contex's quick-fit PDF and troubleshooting chart.
   - **Exception:** Art Optical keeps its calculators public (including MOONLENS at
     moonlens-art.kattdg.com) and gates only ordering.

   *Takeaway for VIPOK: gate the chart and selector as planned. Publish the package insert, patient
   instructions and a spec sheet openly, because regulators and doctors expect them to be
   findable.*

4. **Require certification before a doctor can order, and use it as the onboarding funnel.** "Get
   Certified" is a primary nav item or CTA on Paragon ("about 45 minutes", online modules), Euclid
   (five modules, "as little as 45 minutes"), Contex ("about an hour", narrated presentation with a
   multiple-choice test; VST certification number lets you skip part), PTS/DreamLens and WAVE.
   CooperVision's MiSight program has an exam, then a rep activates the account. SEED (Japan) states
   treatment is by JOS-certified ophthalmologists who completed the required course. *Takeaway: a
   "Become a VIPOK Certified Fitter" flow (short course, quiz, approval) doubles as the approval
   step for the doctor login.*

5. **Verify the doctor, and ask for the license with the state prefix.** The most detailed signup
   I found is the Paragon/Blanchard (CooperVision Specialty) new-account form. Observed fields:
   - practice name and DBA
   - "Is or will there be a practitioner(s) certified for CRT?"
   - "LICENSE # – please ensure you add your state abbreviation… EX: AZ-134"
   - address, website, phone, and billing/shipping addresses
   - primary email for invoices
   - payment method, with NET 30 terms stated
   - signer name and a drawn e-signature attesting authority
   - a promise of a welcome letter with the account number "within 2 business days"

   B+L asks for practice, fitter names and accounts-payable contact, then says "a representative will
   contact you". Art Optical's portal signup asks only for email, password and terms, so its
   verification must happen elsewhere (inferred). **No site I reached asks for an NPI on the
   public form.** VIPOK's planned license + state + NPI + credential check is stricter than the
   market norm, which is fine for a small company.

6. **Put a named consultation line on every doctor page.** Doctors expect to reach a fitting
   consultant:
   - Paragon: 800-528-8279 option 2, CRTconsult@…, "6 a.m.–5 p.m. MST"
   - B+L: svp.consultation@bausch.com, with "Contact an expert consultant" as a hero CTA
   - Euclid: consultation@euclidvision.com
   - Contex: named consultants with bios and personal emails
   - X-Cel: "NCLE-certified experts"
   - Valley Contax: free video consulting

   Contex's staff bios are an especially good trust pattern for a small company.

7. **State the warranty and exchange policy.** B+L: "full (100%) 120-day warranty… unlimited
   exchanges and patient cancellation", plus EZ-Exchange no-return remakes. Blanchard: "unlimited
   no-charge warranty exchanges within 120 days of invoice". X-Cel: "hassle-free, no return
   warranty". *Doctors compare labs on this. 120 days with unlimited exchanges is the de facto US
   benchmark.*

8. **Use the portal for more than login: ordering, uploads, tracking and billing.**
   - Art Optical's portal (portal.artoptical.com): order placement, secure image/scan/topography
     upload, order history, statements, bill pay
   - MyEuclid: topography upload, algorithm design, expert verification, "real-time order tracking"
   - Paragon: separate eBizCharge "Payments & Invoices Portal"

   Online ordering plus order history is table stakes for a lab portal in 2026. Topography upload
   and design review are the differentiators.

9. **Publish specs and materials with numbers.**
   - Euclid: "Tisilfocon A… Dk of 180", "Oprifocon A… Dk of 85", PMA #P040029, the indicated range
   - Menicon Z Night: Dk 163, BC 7.15–9.65 mm in 0.05 steps, diameters 10.20/10.60/11.00, annual
     replacement, R/L tint coding
   - Boston Equalens II / VST: Dk 127 (gas-to-gas) / 85 (ISO/Fatt), index 1.423

   *The legacy VIPOK site has none of this. It only says "FDA approved gas permeable material".*

10. **Use exact, bounded regulatory language, and repeat it.** Good examples:
    - **B+L VST/Arise:** "indicated for overnight wear… for the temporary reduction of myopia up to
      5.00 diopters with eyes having astigmatism up to 1.50 diopters", plus the federal Rx-only
      caution ("Federal (USA) law restricts this device to sale by or on the order of a licensed
      practitioner").
    - **Paragon CRT package insert (FDA):** "temporary reduction of myopia up to 6.00 diopters in
      eyes with astigmatism up to 1.75 diopters".
    - **Brighten Optix (Taiwan):** a standing 警語 (warning) block in every footer: 「配戴隱形眼鏡須經
      眼科醫師處方使用…不得逾時配戴，以免感染或潰瘍」. In English: contact lenses must be prescribed by
      an ophthalmologist, and wearing them longer than directed risks infection or ulcers.
    - **優立得 (Taiwan Euclid distributor):** shows the device license number 「衛署醫器輸字第018982號」.

    *This matters for VIPOK XC: a "−10.00 D" claim is far outside any US FDA ortho-k indication (see
    §4.5).*

11. **Build a real find-a-doctor tool, and filter it to certified fitters.** CooperVision (map
    locator, "Find an Eye Doctor" in the main nav) and Paragon (links to the CooperVision Specialty
    doctor locator) have real locators. Euclid's "Find an Eye Doctor" and Contex's "Find a Doctor"
    are **lead forms**: "a team member will email you… a list of doctors". GOV has a map at
    /map. Brighten Optix and 優立得 list sales or fitting locations (銷售據點 / 驗配據點). *For VIPOK's
    small network, a country → city list of approved, opted-in doctors beats an empty map.*

12. **Build regional and multilingual sites for Asia.**
    - Menicon: region selector with country domains (menicon.co.jp, menicon.com.au)
    - Menicon Bloom: 11 locales
    - Alpha Corp: 中文 / 日本語 / English, with a separate "Distributors" section
    - Brighten Optix: 中 / EN
    - Paragon: fitting guides in about 7 languages, plus Hong Kong and China fitting cards

    *VIPOK's main market is Asia, so launch with English plus Traditional Chinese (Taiwan and
    Hong Kong), and plan for Simplified Chinese and Malay/English for Malaysia.*

---

## 2. Feature matrix

✔ = observed; ✖ = looked for and not found; ~ = partial/limited; ? = couldn't verify; (i) = inferred
or from press/search rather than the site.

| Company (site) | ECP/patient split | Public fitting guide | Calculator / design tool | Tool gated? | Verified signup | Online ordering | Order history / tracking | Find-a-doctor | Certification required | FDA / reg. statement | Multilingual |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Paragon CRT (paragonvision.com) | ✔ header "Practitioners" → /ecp/ | ✔ PDFs via DocSend, many languages | ✔ Initial Lens Selector (web plus iOS/Android app) | ✔ Success Center login | ✔ license with state prefix, CRT-cert question, e-signature; account number in 2 business days | ✔ "Order Paragon Lenses" (details ?) | ~ payments/invoices portal | ✔ links to CooperVision SEC locator | ✔ online modules, ~45 min | ✔ "FDA-approved" (patient copy) | ✔ guides in many languages; site EN |
| CooperVision MiSight / myopia mgmt (coopervision.com) | ✔ /practitioner separate site plus "Consumer" link | ✔ Quick Start guides | ✔ OptiExpert, ToriTrack (not ortho-k) | ~ practitioner login exists | (i) rep activates Brilliant Futures account after exam | ? | ? | ✔ map locator in main nav | ✔ (i) online curriculum plus exam | (i) "first and only FDA approved… 8–12" (press) | ✔ region selector |
| B+L Specialty Vision (bauschsvp.com, Arise, VST) | ✖ mixed site, ECP-oriented | ✔ Arise fitting guide plus package insert PDFs | ✔ Arise cloud design from topography; Lens Finder | ✔ Arise account | ~ practice/fitter/AP form; rep contacts you | ✔ Arise orders in platform; PDF forms for others | ? | ✖ | (i) VST certification historically | ✔ exact indication plus Rx-only caution | ? |
| Euclid (euclidlenses.com) | ✔ Practitioners / Patients menus | ~ | ✔ MyEuclid topography design; empirical (Rx, K, HVID) | ✔ MyEuclid portal | ? | ✔ via MyEuclid | ✔ (i) "real-time order tracking" (press) | ~ lead form, not a live locator | ✔ 5 modules, "FDA-required" | ✔ "FDA-approved", PMA #P040029, Dk values | ✖ (EN); Taiwan distributor site in Chinese |
| Menicon Z Night / Bloom (menicon.com, meniconbloom.com) | ✔ Corporate/Consumer/Professional paths; Bloom Patients/Professionals plus pro confirmation gate | ? | ✔ Easyfit (topography, HVID, Rx; progression charts) | ✔ contact company for access | ? | (i) order from Easyfit | ? | ✖ on Bloom home | (i) "Bloom fitter" | ~ Z material "first FDA approved hyper-oxygen" | ✔ many country sites |
| Contex (oklens.com) | ✔ "Practitioner Site" / "Patient Site" toggle | ✔ Quick Fit PDF, troubleshooting chart PDF | ~ "OK Lens calculator" mentioned, plus public design-code rules | ? | ? | ✖ phone/email/fax; "have your account number" | ✖ | ~ lead form by specialty | ✔ ~1 hr narrated test; required to order | ✔ "FDA approved" (patient), first ortho-k FDA approval (history) | ✖ |
| Global-OK Vision (global-ok.com) | ~ practitioner-first | ✔ web fitting guide | ✔ "GOV Artmost calculator" (K-code plus power code) | ? | ? | ✖ via labs | ✖ | ✔ /map | ~ "certified GOV practitioners" | ✖ none seen | ✖ |
| DreamLens / TruForm (dreamlens.com) | ✔ Candidates / For Doctors | ? | (i) online design/order at dreamlens.com | ✔ doctor login | ✖ registration link goes to "UnderConstruction.aspx" | (i) | ? | ✖ | (i) VST certification | ✖ on home | ✖ |
| PTS Optics (MoonLens, Be Free) | ~ | ✔ PDFs | ✔ MOONLENS online calculator (KATT) | ? | ? | ? | ? | ? | ✔ certification course | ✖ on page | ? |
| Lucid Korea / DreamLens VN | patient-first (VN site) | ✖ | ✖ | – | – | ✖ | ✖ | ✖ phone only | ? | ~ "KFDA, GMP, ISO, Vietnam MOH" | ✔ KR/EN/VN |
| Procornea DreamLite (coopervisionsec.nl/.eu) | ✔ Consument / Professional | ~ leaflet | ✖ not seen (Eyelite historically) | ? | ? | ? | ? | ✔ "vind een opticien" | ? | ~ CE myopia-control approval (press) | ✔ NL/EN |
| Brighten Optix (brightenoptix.com), Taiwan | ~ consumer vs professional **contact** split only | ✖ | ~ "數位驗配" (digital fitting) mentioned | ? | ? | ✖ | ✖ | ✔ sales-location list by region | ~ Brighten Academy courses | ✔ Taiwan 警語 block on every page | ✔ 中/EN |
| Alpha Corp (alphacl-global.com), Japan | ✔ "For Eye Care Professionals", "Distributors" | ✔ web prescribing guide | ~ trial-set based | ✖ public pro pages | ? | ✖ | ✖ | ✖ | ? | ~ "first marketing approval in Japan 2009" | ✔ 中/日/EN |
| SEED Breath-O Correct (seed.co.jp), Japan | ✔ "Are you a healthcare professional?" gate | ? | ? | ✔ interstitial | – | ✖ | ✖ | ~ footer facility search | ✔ JOS-certified ophthalmologists with required course | ✔ age and caution statements | JP |
| Art Optical (artoptical.com) | ~ ECP site with patient education | ✔ | ✔ 9 public calculators incl. MOONLENS | ✖ public | ✖ email + password (verification inferred offline) | ✔ portal | ✔ order history, statements, bill pay, topo upload | ✖ | ? | ✔ MoonLens "approved… by the US FDA" | ✖ |
| Blanchard (blanchardlab.com) | ~ ECP | ✔ | ✔ order calculator (blcalculator.com) | ✔ extranet | ✔ same CooperVision SEC form (license + state) | ✔ RGP online | ? | ✖ | ✔ CRT | ? | ✔ EN/FR |
| X-Cel (REMLens) | ✔ ECP Resources / Patient Resources | ✔ PDFs | ✔ REMLens calculator | ✔ account login | ? | ✔ | ? | ? | ~ free training | ✖ on page | ✖ |
| WAVE (wavecontactlenses.com) | ✔ /ecp/ vs /patients | ✔ user guide PDF | ✔ topography CAD/CAM | ✔ "Wavers" login | ? | via labs/transfer files | ? | ✖ | ✔ "Certification" nav | ~ "approved B+L VST design" | ? |
| J&J Abiliti (jnjvisionpro.com) | ✔ separate pro domain | ? | ✔ FitAbiliti (topography) | ✔ | ? | ✔ (i) | ? | (consumer site not checked) | ? | ✔ "FDA-approved for myopia management up to 6.00 D…" | ✔ region |
| Valley Contax | ✔ Doctor / Student portals | ? | ✖ | ✔ | ? | ✖ | ✖ | ✖ | – | ~ 510(k) (non-ortho-k) | ✖ |
| Acuity Polymers (material) | ✔ ECPs / Patient Info | ✔ spec sheet | – | – | – | – | – | ✖ | – | ✔ "FDA cleared" | ✖ |
| 優立得 myok.com.tw (Taiwan Euclid distributor) | ✔ 醫師專區 (doctor area) | ? | ✖ | ? | ? | ✖ | ✖ | ✔ 驗配據點查詢 (fitting locations) | ? | ✔ 衛署醫器輸字第018982號 | ZH |
| 欧普康视 / 2eyes.net (China) | ✖ | ✖ | ✖ | – | ✖ "会员中心 正在建设中" (member center under construction) | ✖ | ✖ | ✖ QQ chat | (i) "Physician Certification" label | ~ NMPA registration and ISO 9001 claims; ICP number | ZH |

---

## 3. Per-company notes (all visited 2026-09-25)

### Paragon CRT (CooperVision Specialty EyeCare)
URLs: paragonvision.com, /ecp/, /ecp/practitioner-resources/, /become-a-provider/,
/resources/fitting-guides-package-inserts/, /crt-lenses/, /ecp/order-paragon-lenses/;
specialtysuccesscenter.com/login/; paragonvision.formstack.com/workflows/account_form_copy (reached
from Blanchard's US new-account button). paragoncrt.com failed with a TLS error.
- **Split:** patient home ("Safely correct your vision overnight"; nav Myopia Epidemic · CRT
  Lenses · FAQ) with a "Practitioners" header link to /ecp/. ECP nav: Our Products · Practitioner
  Resources · Fitting Tools · Get Certified · Order Paragon Lenses.
- **ECP hero** sells the business case: myopia "epidemic", plus "sustainable healthy margin".
- **Tools:** the Initial Lens Selector is "mobile, PC, and Mac friendly" and downloaded from the
  Success Center, which requires login. It's also on the App Store and Google Play as "Paragon CRT
  Lens Calculator" (listing text, from search: "Only licensed eye care providers may place Paragon
  CRT lens orders").
- **Public:** fitting guides and package inserts as DocSend PDFs in EN/FR/DE/IT/ES/PT-BR/ZH plus
  regional versions (HK, CA, AU, IL, UA, EC). There's also a "CRT Pocket Fitting Card (standard &
  China version)", a slide rule, and an insertion/removal video.
- **Consultation:** 800-528-8279 option 2 · CRTconsult@coopervisionsec.com · Mon–Fri 6–5 MST.
- **Certification:** online modules (~45 min), a "90-Day Integration Plan", and marketing kit
  access "from the moment you become certified".
- **Account form (observed, not submitted):** account type (Direct Bill/Group/Lab); practice name,
  DBA; "Is or will there be a practitioner(s) certified for CRT?"; "LICENSE # – PLEASE ENSURE YOU
  ADD YOUR STATE ABBREVIATION… EX: AZ-134"; address, website, locations, phone, billing = shipping?,
  primary email for invoices; NET 30 terms; payment method; signer name plus drawn signature
  ("you are an owner, corporate officer, or approved to sign"); privacy statement. The form says
  "we will send a welcome letter including your account number… within 2 business days". **No NPI
  field.**
- **Patient trust:** "FDA-approved", "More than 90% were able to see 20/40 or better" in FDA trials,
  "The risk of wearing Paragon CRT contact lenses is no greater than other contact lenses",
  1.5 million patients in 50+ countries, and a rock-climber testimonial. The locator links to
  coopervisionspecialtylenses.com/doctor-locator.

### CooperVision (MiSight, myopia management)
URLs: coopervision.com, /practitioner/myopia-management, /find-an-eye-doctor (MiSight product URLs I
tried returned 404).
- Separate practitioner site with its own nav (Our Products · Tools & Resources · ECP Viewpoints ·
  Online Success Center · Student Programs), a login, and a region selector. The consumer nav has
  "Myopia Management" and "Find an Eye Doctor".
- Tools: OptiExpert and ToriTrack calculators (soft lenses).
- Certification: "Myopia Management Certifications". From press, not the site: online curriculum
  plus exam, then a "Myopia Management Specialist" activates the Brilliant Futures account.
- The locator is map-based and needs functionality cookies.

### Bausch + Lomb Specialty Vision Products (Arise, VST, Boston materials)
URLs: bauschsvp.com, /lenses/arise-ortho-k-system/, /order/, /order/create-account/, /policies/;
bostonlensmaterials.com/vst/; ir.bausch.com Arise press release.
- **Nav:** Lenses · Lens Care · Order · Education Center · Lens Materials; utility links "Open an
  account", "Contact us", "Join VIP list". Hero CTAs include "CONTACT AN EXPERT CONSULTANT".
- **Arise:** "Capture → Design → Evaluate". It "Instantly interprets corneal images uploaded from
  your topographer", needs "No fitting set", and offers toric or spherical peripheral curves. Orders
  go through the Arise platform, and you "contact support to create an account". The fitting guide
  and package insert PDFs are public.
- **Create account (fields observed, not submitted):** office and practitioner emails; up to 3
  fitters (name/title); practice name, phone, address; accounts-payable contact. "A Bausch + Lomb
  representative will contact you with your account information." No license or NPI asked.
- **Warranty (observed):** "full (100%) 120-day warranty that provides for unlimited exchanges and
  patient cancellation"; EZ-Exchange "without returning the original lens"; multipacks
  non-warranted; "50% credit due on canceled fits" after the initial fit.
- **Regulatory:** full indication text (see §1, item 10) and "CAUTION: Federal (USA) law restricts
  this device to the sale by, or on the order of a licensed practitioner."
- **Boston VST page:** Equalens II Dk 127/85, water <1%, index 1.423; lists about 12 VST-approved
  designs (DreamLens, MoonLens, WAVE NightLens…). That's an **industry directory VIPOK is not on**.
  Whether VIPOK could qualify depends on its regulatory status (inferred).

### Euclid Vision (euclidlenses.com, formerly euclidsys.com)
URLs: /, /modules/intro/, /orthokeratology-lenses-practitioners/, /ortho-k-lenses-patients/,
/find-an-eye-doctor/; press on MyEuclid (reviewofmm.com).
- **Nav:** Products · Your Practice · Resources · Patients · About Us · Contact · MyEuclid · Get
  Certified. Hero: "The Future of Myopia Management Starts with You."
- **ECP page:** materials with Dk (Tisilfocon A Dk 180, Oprifocon A Dk 85); "approved for the
  temporary reduction of myopia up to -5.00D and astigmatism up to -1.50DC"; PMA #P040029; two
  fitting paths (MyEuclid topography, or empirical from Rx, K and HVID with "87% first-fit
  success"); "No Trial Set Required"; consultation@euclidvision.com, 1-800-477-9396; evidence
  claims ("2X More Myopia Research"…).
- **Certification:** 5 modules (Myopia, Fundamentals, Examination, Evaluation, Fitting), then a
  quiz, "as little as 45 minutes"; described as FDA-required, US only.
- **MyEuclid (press):** topography upload, algorithm design, "expert order verification",
  "advance mode", and "real-time order tracking".
- **Patients:** the "dental retainer" analogy; "cost… is decided by the eyecare professional";
  insurance generally doesn't cover it, but FSA/HSA does. The "Find an Eye Doctor" is a **lead
  form** (name, email, phone, location, intent) with marketing opt-in text, not a live locator.

### Menicon (Z Night, Bloom)
URLs: menicon.com, /professional/products/specialty-lenses/menicon-z-night, meniconbloom.com,
/professionals/menicon-bloom-easyfit/.
- Global hub with Corporate / Consumer / Professional paths and a regional selector (Asia-Pacific,
  Europe, Americas; country domains).
- **Z Night pro page:** Menicon Z Dk 163; BC 7.15–9.65 (0.05 steps); OAD 10.20/10.60/11.00; annual
  replacement; R red / L blue; toric option; ">90% first-fit success" without trial sets using
  Easyfit.
- **Bloom:** hero buttons for Patients and Professionals; 11 locales. The Easyfit page asks
  visitors to confirm they're professionals. Easyfit is "cloud-based lens fitting and tracking
  software": it auto-calculates lenses and tracks myopia progression with charts you can "share
  live with the patient's family". Doctors must contact Menicon for access. There's also a Bloom
  app for patients.

### Contex (oklens.com)
URLs (fetched over HTTP; HTTPS has a mismatched certificate): index.html, find_doctor.html,
doctor_certification.html, doctor_howtoorder.html, doctor_okesystem.html,
pdf/OK-E_Troubleshoot_Chart.pdf.
- **Two linked sites:** the patient nav (About Us · Lens Designs · Eye Conditions · Find Doctor ·
  More Info · **Practitioner Site**) and the doctor nav (Lens Designs · How to Order · Get
  Certified · More Info · **Patient Site**). Patient content is organized by age (Children, Teens,
  20s–30s…).
- **Hero:** "Improve your vision while you sleep with safe, non-surgical, FDA Approved CONTEX OK®
  LENSES".
- **Certification (verbatim):** "Eye care practitioners must obtain certification… If you have
  already been VST™ certified you can bypass the VST™ portion by entering your certification
  number… will take only about an hour… Once certified, doctors can order". The page also has
  good/poor candidate lists.
- **Ordering:** phone, email and 24/7 color fax; "Please have your account number available";
  same-day shipping for orders by noon PST. There's no online ordering.
- **Consultation:** named consultants with bios and direct emails.
- **Design code:** published nomenclature and fit-adjustment rules ("If the Lens is Tight: Raise
  the e-value… .05 loosens the fit by about 11 microns"). Inventory sets are selected by
  "cross-reference chart or the OK® Lens calculator".
- **Find Doctor:** a form ("a team member will email you shortly with a list of doctors in your
  area"), filterable by OK/VST, bifocals and similar.
- Looks mobile-responsive (Mobirise/Bootstrap build), inferred from the markup.

### Global-OK Vision (global-ok.com; globalokvision.com doesn't resolve)
URLs: /html/index.html, /html/GOVFittingGuide.html, /map, /publication.
- Practitioner-first site offering "an intelligent software & Internet service platform". Nav:
  About GOV · Orthokeratology · Find a GOV Practitioner · Procedure (6 steps) · FAQ.
- **Calculator:** "GOV Artmost calculator" computes mean K for the **K-Code** and "spec sphere no
  vertex plus half corneal cyl" for the **Power Code**. This is conceptually almost identical to
  VIPOK's Mean K × SE chart. Search results say GOV treats up to −10.00 D (a direct XC
  competitor). I couldn't tell whether the calculator is gated.
- The fitting guide is a web page. It covers the fluorescein goal ("Typical Bull's eye with proper
  edge lift") and says to "Register on www.govlenses.com". Ordering goes through a partner lab.
- No FDA statement seen.

### DreamLens / TruForm Optics; PTS Optics (MoonLens, Be Free)
URLs: dreamlens.com (Home.aspx, ForDoctors.aspx), tfoptics.com, ptsoptics.com ortho-k and
certification pages, moonlens.kattdg.com.
- **DreamLens:** a dated DotNetNuke site. Nav: Candidates · Why DreamLens · For Doctors. Hero
  "Sleep Your Way to 20/20". The doctor login says "This site offers additional features and
  content to registered doctors". The **registration link redirects to /UnderConstruction.aspx**
  (observed), which shows a broken doctor onboarding path hurts credibility.
- **PTS:** Be Free (software-driven: topography, VID, Rx) and MOONLENS ("micro-customization in 1
  micron steps"), plus certification courses and PDFs. The MOONLENS calculator is on a KATT
  subdomain; the page only showed its title, so gating is unverified.

### Lucid Korea (DreamLens distributor site in Vietnam)
URLs: lucid.co.kr/default/eng/ returned 404; dreamlens.vn.
- The VN site is patient- and parent-facing: "Vision correction while dreaming", a contact CTA,
  a phone number and no locator. It claims "KFDA, GMP, ISO and Vietnam Ministry of Health"
  approval and mentions B+L material (100 Dk). No pricing.

### Procornea DreamLite (now CooperVision Specialty EyeCare Benelux)
URLs: procornea.nl redirects to coopervisionsec.nl/en/; coopervisionsec.eu/portfolio/ortho-k/dreamlite.
- Consumer and Professional split, NL/EN, an Academy e-learning login, a "vind een opticien"
  locator, and a vision simulator.
- DreamLite: −0.75 to −5.00 D, cyl up to −2.50, Zoom add up to +1.50, Boston XO, R purple /
  L blue. Consumer framing: "a brace for your eyes", "100% reversible".
- CE myopia-control approval comes from a CooperVision press release. No online fitting tool was
  visible.

### Brighten Optix 亨泰光學 (Taiwan; being acquired by ZEISS)
URLs: brightenoptix.com (index.htm, /en/…, products17_4.htm, hard-buy0_0_0.htm). The
brightenoptix.com.tw certificate is mismatched.
- **Nav (ZH):** 關於亨泰 (about) · 先進製程 (manufacturing) · 品牌產品 (products) · 亨泰學院
  (Academy: courses, news, 衛教中心 health-education center) · 聯絡我們 (contact: 消費者諮詢
  consumer / 專業人士諮詢 professional) · 台灣銷售據點 (Taiwan sales locations). There's a 中/EN
  switch.
- **Ortho-k page:** a myOK line (standard aspheric, custom defocus, adult, 數位驗配 "digital
  fitting: software helps ophthalmologists… save fitting time") and Hiline spherical. Copy is
  deliberately non-numeric: no parameters and no Dk. I infer that's because of Taiwan's rules on
  advertising medical devices to consumers.
- **Warning block on every page (verbatim):** 「警語：配戴隱形眼鏡須經眼科醫師處方使用。本配戴隱形眼鏡後，需定期由眼科醫師追蹤檢查。配戴隱形眼鏡仍有可能發生眼角膜及結膜病變…不得逾時配戴，以免感染或潰瘍。如有不適，應立即就醫。」
  English gist: contact lenses need an ophthalmologist's prescription; wearers need regular
  follow-up; corneal and conjunctival disease can still occur, so see an ophthalmologist
  immediately for discomfort; don't wear lenses longer than directed, to avoid infection or ulcers.
- Service locations are listed by country: China, Malaysia, Philippines, Korea, Singapore,
  Vietnam. No doctor login was seen.

### Other Taiwan and China examples
- **優立得 myok.com.tw** (Taiwan Euclid distributor): nav includes 醫師專區 (doctor area) and
  常見問題 (FAQ); CTA 驗配據點查詢 (find a fitting location); shows license 衛署醫器輸字第018982號.
- **Taiwan MOHW** (mohw.gov.tw/cp-3163-28618-1.html): ortho-k lenses are medical devices that
  need a license. Ordinary hard lenses may not claim ortho-k function. It quotes the first approved
  indication (≤5.00 D myopia, ≤1.50 D astigmatism) and requires adverse-event reporting.
- **欧普康视 / 2eyes.net** (China, Beijing entity): a dated site with QQ chat buttons for
  consultation and a "会员中心 正在建设中" (member center under construction) stub. It claims
  NMPA registration and ISO 9001 and shows an ICP number. It's a weak example; I note it only for
  what the Chinese market expects to see: 企业资质 (company credentials) and online chat.

### Alpha Corporation (alphacl-global.com), Japan
WebFetch was blocked (403); I read the pages with curl.
- **Nav:** For Eye Care Professionals · About Orthokeratology · Company Information · FAQ · News ·
  Contact · Distributors, in 中文 / 日本語 / English. Mascot "Alulu" explains ortho-k to families.
- **Prescribing page:** covers informed consent before the exam, suitability and contraindications
  ("patients who want the best possible visual acuity… are not suitable"), the list of initial
  exam tests (topography, endothelial cell count, Schirmer, IOP, pupil) and the parameters needed
  (flat K from topography…).
- Trust claim: "first marketing approval in Japan" (2009).

### SEED Breath-O Correct (seed.co.jp), Japan
- The professional area starts with 「あなたは医療従事者ですか？」 ("Are you a healthcare
  professional?"), Yes/No; "No" returns to the home page.
- **Consumer page cautions:** results vary by individual; see a specialist before driving; under-20
  safety and efficacy weren't established in trials; treatment is 「日本眼科学会認定の眼科専門医」
  (by Japanese Ophthalmological Society–certified ophthalmologists) who completed the required
  course. It links to orthokeratology.jp for patients.

### US specialty GP labs
- **Art Optical** (artoptical.com, /fitting-tools/, portal.artoptical.com):
  - Nav: Products · Fitting Tools · Resources · News & Events · Customer Portal
  - Nine **public** calculators, including MOONLENS Initial Rx, standard lens design,
    diopter-radius conversion and vertex
  - Portal: order placement, secure topography/image upload, order history, statements, bill pay
  - Portal signup (browser, observed): email, password, terms checkbox only
  - Separate consultation line; Return Authorization Form
  - MoonLens "Approved for overnight orthokeratology by the US FDA"
- **Blanchard** (blanchardlab.com): nav includes Blanchard U, New Account, Extranet,
  Consultation; EN/FR. "UNLIMITED NO-CHARGE WARRANTY EXCHANGES" within 120 days. The US new-account
  button leads to the Paragon/CooperVision SEC Formstack form described above.
- **X-Cel** (xcelspecialtycontacts.com/remlens): REMLens four-curve reverse geometry, 5 diameters.
  The calculator requires an account login. Quick Start and Practice & Fitting Guide PDFs; NCLE
  consultants; 24-hour turnaround; "hassle-free, no return warranty". Nav includes ECP Resources
  and Patient Resources.
- **WAVE** (wavecontactlenses.com/ecp/products/orthok): /ecp/ vs /patients; "Certification",
  "Wavers" login and "Transfer Files" in the nav. NightLens is "an approved Bausch + Lomb Vision
  Shaping Treatment (VST) design". User Guide PDF v9.5.
- **Valley Contax:** Doctor and Student portals; free video consulting. No ortho-k lens was seen.
- **Acuity Polymers:** materials maker. ECPs and Patient Information split; "Acuity 200 is the
  only Ultra Dk material, FDA cleared"; spec sheet PDF. (A trial of Acuity 200 for ortho-k is
  listed on clinicaltrials.gov, from search.)
- **GP Specialists:** gpspecialists.com now 301-redirects to coopervision.com (absorbed).
- **Tru-Form / TruForm Optics:** tru-form.com is an unrelated metal fabricator. TruForm Optics
  (tfoptics.com) owns DreamLens and emphasizes consultation; no ortho-k content was on its home
  page.

### Fitting-calculator and tool leaders (not ortho-k makers)
- **EyeDock** (eyedock.com): a subscription (~$5/mo or $48/yr, per search) clinical toolkit that
  lists "125+ corneal RGP, scleral, and CRT/Ortho-K brands" with parameters, a CRT lens selector
  and GP calculators. **VIPOK should get listed.**
- **BHVI Myopia Calculator** (bhvi.org/myopia-calculator-resources/): free, but gated behind a name
  and email verification code with a marketing opt-in. It has 3 tools: progression, axial length,
  onset predictor. Per search it's available in EN/Mandarin/ES/HE. It's a model for a
  parent-facing "why treat myopia" explainer that doctors use chairside.
- **J&J ACUVUE Abiliti** (jnjvisionpro.com): pro-only domain; "FDA-approved for myopia management
  up to 6.00 D and astigmatism up to 1.50 D"; FitAbiliti topography-based fitting; "Schedule a
  Consult" CTA.

---

## 4. Recommendations for vipok.com

### 4.1 Information architecture

```
vipok.com
├─ Home: two doors, "For Eye Care Professionals" and "For Patients & Parents"
├─ /professionals (public)
│   ├─ VIPOK system overview: the chart method explained conceptually; no chart values
│   ├─ Products: VIPOK, VIPOK II, VIPOK XC spec sheets (parameters, material, Dk, tints,
│   │   replacement, regulatory status per country)
│   ├─ Evidence: publications (e.g., the Harris CL Spectrum article), cases, patent summary
│   ├─ Downloads: package insert / IFU, patient instructions, care guide (PDF, per language)
│   ├─ Become a VIPOK Certified Fitter (CTA) → apply → course → approval
│   ├─ Ordering, warranty & exchange policy, pricing overview or "request price list"
│   └─ Consultation: named consultants, hours by time zone (US and Taiwan), email/phone/LINE/WeChat
├─ /portal (doctor login; approved accounts only)
│   ├─ Lens Selector (interactive chart → lens code), full reference chart, fitting manual,
│   │   fluorescein gallery, troubleshooting guide, video
│   ├─ Price list; later: order, reorder, order history/tracking, exchanges/warranty log
│   └─ Marketing kit (patient brochure, clinic poster files)
├─ /patients (public)
│   ├─ What is ortho-k · Is it right for my child? · How treatment works (night/day)
│   ├─ Safety & lens care (infection risk, when to call your doctor)
│   ├─ FAQ (cost is set by your doctor; how to confirm genuine VIPOK packaging)
│   └─ Find a VIPOK doctor (country → city list of approved, opted-in doctors)
└─ Language switch: EN · 繁中 (TW/HK) · later 简中, plus a region selector if country
   regulatory claims differ
```

### 4.2 Public vs. behind the doctor login vs. patient pages

| Content | Public (pro area) | Doctor login | Patient pages |
|---|---|---|---|
| Product overview, design concept (4-curve double reverse geometry), patent number | ✔ | | simplified |
| Spec sheet: BC/OZ/OAD ranges, material name, **Dk/Dk-t**, tint, replacement schedule | ✔ (industry norm: Euclid, Menicon publish) | | ✖ |
| Regulatory status and indication per country, Rx-only caution | ✔ | ✔ | ✔ (plain-language) |
| Package insert / IFU, patient instructions for wear | ✔ (Paragon, B+L publish) | | ✔ patient IFU |
| Reference chart values and interactive Lens Selector | concept only | ✔ | ✖ |
| Fitting manual, fluorescein gallery (tight/loose/optimal), troubleshooting | teaser | ✔ | ✖ |
| Clinical cases with topography | 1–2 anonymized samples | ✔ full | carefully worded, no guarantees |
| Price list | "request pricing" | ✔ | ✖ ("cost is set by your eye doctor") |
| Inventory set options (168 / 24 / per case) | ✔ summary | ✔ detail and pricing | ✖ |
| Warranty/exchange policy | ✔ | ✔ with the account's exchange log | ✖ |
| Certification course and quiz | apply publicly | ✔ | "choose a certified VIPOK doctor" |
| Ordering, order history, reorders | | ✔ (phase 2) | ✖ |
| Find a doctor | | opt-in toggle in profile | ✔ |

### 4.3 What doctors expect that the legacy content lacks
1. **Material and Dk.** The legacy site says only "FDA approved gas permeable material". Name the
   material (e.g., Boston XO, Equalens II, Optimum, Menicon Z) with its Dk, Dk/t, and its US FDA
   510(k)/PMA status.
2. **Regulatory status by country.** Say whether each VIPOK lens is FDA-cleared or approved for
   overnight ortho-k, and give the indication range. Do the same for Taiwan (TFDA license number,
   衛部醫器…字第…號), China (NMPA 注册证号), Hong Kong and Malaysia (MDA). See §4.5.
3. **Parameters:** available BC or lens-code ranges, OZ, OAD, reverse-curve depth or an equivalent,
   and the power range, including XC.
4. **Warranty and exchange policy.** Benchmark: 120 days with unlimited exchanges (B+L,
   Blanchard). With an inventory system, also explain how swapping inventory lenses works.
5. **Pricing:** at least the structure (inventory set vs. per-case), shown after login.
6. **Consultation contact:** named people, hours in both US and Taiwan time, and channels Asian
   doctors use (LINE for Taiwan, WeChat for China, WhatsApp for Malaysia and Hong Kong). The legacy
   site offers only customer_service@vipok.com.
7. **Evidence:** citations and publications; replace the dead CL Spectrum link.
8. **Certification path:** the legacy site says patients are "cared for by certified well-trained
   practitioner" but never explains how a doctor gets certified.
9. **Patient-safety content:** microbial keratitis risk, hygiene, no tap water, and when to remove
   lenses and call the doctor. The legacy patient page has none.
10. **Genuine-product check:** the legacy FAQ ("plastic shrink-wrapping… ask to see the original
    package") is a real differentiator in Asia. Keep it and update it (lot numbers, perhaps a
    lens-code or lot lookup).

### 4.4 Account and ordering features: table stakes vs. differentiators

**Table stakes** (most US competitors have these):
- Verified professional account with manual approval. The license number with state prefix is the
  norm (Paragon/Blanchard); VIPOK's planned NPI plus credential check exceeds it.
- Gated calculator or lens selector
- Online ordering with order history and status. Art Optical and MyEuclid have these, and Paragon
  and B+L have ordering portals.
- Invoices and statements. Card payment can stay offline at first.
- Published warranty policy, and a consultation phone line and email

**Differentiators** (few competitors do these, or only the big ones):
- An interactive **Lens Selector** that turns K's and Rx into a VIPOK lens code *and* shows
  whether that code is **in the doctor's own inventory set**. That's unique to an inventory
  system: nobody else manages the doctor's on-hand stock.
- One-click **"order replacement for code 2O06"** and inventory-set replenishment
- An **exchange/warranty tracker** per patient case
- **Topography upload** with consultant review (MyEuclid's "expert order verification" model).
  VIPOK can offer consultant review without building a design algorithm.
- Light **patient case records** (Easyfit-style progression tracking). This brings HIPAA and
  Taiwan PDPA obligations, so defer it or keep it de-identified.
- A certification course with a certificate and a listing in the public doctor locator
- Multilingual portal (EN/繁中)

For identity checks: US doctors can be verified against the NPPES NPI registry and state board
lookups. For Asia, ask for the local license number and a license image, and approve manually.
Note that "OD/MD" doesn't map cleanly: in Taiwan, 驗光師 (optometrists) and 眼科醫師
(ophthalmologists) have different legal scopes for ortho-k. The Taiwan MOHW notice says only
licensed physicians may prescribe. That's inferred from the MOHW page; confirm locally.

### 4.5 Regulatory wording for legal/regulatory review (don't publish before review)
- **"Up to −10.00 D" / "Xtreme Orthokeratology" (VIPOK XC).** Every US FDA ortho-k indication I
  found tops out at 5.00 D (VST, Euclid) or 6.00 D (CRT, Abiliti), with ≤1.50–1.75 D of
  astigmatism. Promoting −10 D in the US would likely be off-label promotion unless VIPOK holds a
  matching clearance. It may be allowed in some Asian markets. Consider region-specific claims or
  a region selector.
- **"FDA approved gas permeable material".** Material approval isn't lens-design approval for
  overnight ortho-k. Competitors state the specific indication (the B+L text in §1, item 10).
- **"Day or night wear… more than 12 hours without tightening up"** (legacy doctor FAQ). This is a
  wear-schedule claim that needs to match the cleared labeling.
- **"First to produce ortho-k lenses up to −10.00 D", "85% of all cases", "80% accurate".** These
  are comparative or efficacy claims that need substantiation.
- **Myopia-control claims for children.** In the US, only specific products carry a myopia-control
  indication (MiSight, age 8–12 at initiation; Abiliti, "myopia management"). Most ortho-k lenses
  are indicated only for *temporary reduction of myopia*. Parent-facing copy should say "your
  doctor may recommend…" rather than "VIPOK slows myopia", unless VIPOK has that indication.
- **Rx-only caution:** "CAUTION: Federal (USA) law restricts this device to sale by or on the
  order of a licensed practitioner."
- **Taiwan:** device license number on promotional pages, the standard 警語 warning block (see
  Brighten Optix), and limits on consumer advertising of medical devices.
- **China:** NMPA registration number; the ICP filing if the site is hosted or served in China.
- **Privacy:** doctor PII (license, NPI) and any patient data. HIPAA applies if VIPOK stores PHI
  for US covered entities (a BAA may be needed); Taiwan PDPA, China PIPL and Malaysia PDPA also
  apply. Competitors' signup forms carry a privacy statement, e.g. Paragon's "will not be traded,
  given, sold…".
- **Trademark and patent:** make ® vs ™ consistent. US 6,361,169 (filed around 2000) has very
  likely expired, since utility patents last about 20 years. Say "patented design (US 6,361,169)"
  only if counsel approves; don't imply the patent is still in force. That the patent has expired
  is my inference; verify it.

---

## 5. Gaps and uncertainties
- **Gated areas weren't inspected** (by design): Paragon Success Center, MyEuclid, Easyfit, Arise,
  X-Cel account, Blanchard extranet, WAVE "Wavers", DreamLens doctor area, CooperVision practitioner
  login. Their features come from public descriptions and press, marked (i).
- **Signup fields** were seen only for Paragon/Blanchard (full form), B+L (summarized by WebFetch)
  and Art Optical (email and password step only). Whether any competitor verifies NPI after signup
  is unknown.
- **Not reachable or partial:** paragoncrt.com (TLS error); globalokvision.com (DNS; used
  global-ok.com); lucid.co.kr English site (404); CooperVision MiSight product pages (404 on the
  URLs I tried); hcplive.com (403); alphacl-global.com blocked WebFetch (403; read via curl); PTS
  certification page and the KATT MOONLENS calculator rendered almost no text; Blanchard's calculator
  and ordering pages weren't opened.
- **Not covered:** a dedicated Hong Kong or Malaysia ortho-k brand site. Brighten Optix lists
  Malaysia locations. Mainland brands other than 欧普康视's dated Beijing site weren't examined,
  and the corporate 欧普康视 site may be different.
- **Mobile quality** was only inferred from markup (e.g., Contex responsive, DreamLens legacy
  DotNetNuke). I didn't test pages at phone width.
- **FDA indication wording** for Paragon CRT and VST comes from FDA or B+L documents via search and
  press releases. Euclid's range is from its ECP page. I did not check each current package insert.
- **Pricing:** no competitor shows lens prices publicly. Whether prices appear after login is
  unverified everywhere.
- **Patent term:** that US 6,361,169 has expired is inferred from typical patent terms, not
  checked against USPTO records.
