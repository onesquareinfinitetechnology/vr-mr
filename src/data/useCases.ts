export type UseCase = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  heroImage: string;
  overview: string;
  challenges: string[];
  solution: string;
  impact: string[];
  deliverables: string[];
  metrics: Array<{ label: string; value: string }>;
  timeline: string[];
  techStack: string[];
  studyLink?: string;
};

export const useCases: UseCase[] = [
  {
    slug: "healthcare-vr",
    title: "Healthcare VR",
    summary:
      "Immersive VR Training for OR Scrub Nurses (Intramedullary Tibial Nailing) — Randomized Controlled Trial",
    image: "/images/vr_health.png",
    heroImage: "/images/vr_health.png",
    overview:
      "In a university-affiliated hospital simulation centre, 15 fully qualified scrub practitioners completed an immersive VR curriculum to learn the scrub-nurse role for complex revision total knee arthroplasty (rTKA), including selecting/assembling/delivering instrumentation. Skill transfer was validated using a real-world assessment with real equipment before and after training.",
    challenges: [
      "Complex orthopaedic procedures involve large instrument inventories and many time-pressured steps, making on-the-job learning risky and inconsistent.",
      "Limited opportunities to practice infrequently performed, high-variability cases (like rTKA) due to OR time pressure and patient safety constraints.",
      "Scrub staff rotate across specialties; structured, procedure-specific training pathways are often limited.",
      "Hospitals need training that is repeatable, measurable, and can demonstrate transfer to real-world performance.",
    ],
    solution:
      "A four-session immersive VR curriculum (guided mode + unguided assessment mode) where scrub practitioners repeatedly rehearsed the full procedure flow in a virtual OR using motion-tracked controllers. The program captured objective performance data (time, prompts, errors, motion) and then re-tested participants in a simulated real-world assessment using actual equipment arranged like a real operation.",
    impact: [
      "Real-world rTKA performance improved dramatically after VR training (pre vs post), indicating strong transfer of learning to physical workflow.",
      "VR practice significantly improved efficiency (time reduction) and reduced reliance on prompts and procedural errors across sessions.",
      "Participants reported increased confidence and reduced anxiety related to scrubbing for rTKA after completing the VR curriculum.",
    ],
    deliverables: [
      "Procedure-specific immersive VR module for revision total knee arthroplasty (scrub role training + guided steps).",
      "Assessment mode (no guidance) to evaluate readiness and track improvement over time.",
      "Performance analytics captured from VR sessions (time, prompts, errors, motion metrics).",
      "A real-world competency assessment protocol using actual equipment laid out to mirror the OR workflow (pre/post training).",
      "Onboarding/orientation experience to train users on VR controls and navigation.",
    ],
    metrics: [
      {
        label: "Participants",
        value: "15 fully qualified scrub practitioners (≥6 months orthopaedics experience)",
      },
      {
        label: "Training duration",
        value: "4 sessions delivered over ~4 weeks (2–10 days between sessions; sessions ≤2 hours)",
      },
      {
        label: "Real-world assessment accuracy (pre → post)",
        value: "11.3% ± 8.92% → 83.5% ± 0.12% correct (p < 0.001)",
      },
      {
        label: "Operative time in VR (Unguided Session 1 → 3)",
        value: "55.5 ± 17.6 min → 29.3 ± 12.1 min (47% reduction)",
      },
      {
        label: "Assistive prompts (Unguided Session 1 → 3)",
        value: "34.1 ± 16.8 → 8.6 ± 8.8 (75% reduction)",
      },
      {
        label: "Total procedural errors in VR (Session 1 → 3)",
        value: "88 ± 49 → 41.4 ± 29.7 (47% reduction; p < 0.001)",
      },
      {
        label: "Confidence/anxiety (post vs pre)",
        value: "Increased confidence and reduced anxiety reported (p < 0.001)",
      },
    ],
    timeline: [
      "Baseline: demographic capture + short lecture + real-world simulated assessment using real equipment",
      "VR Session 1: guided training + orientation to VR controls/environment",
      "VR Sessions 2–4: guided run-through + unguided assessment mode (2–10 days between sessions)",
      "Post-training: repeat real-world assessment using real equipment + post-training confidence/anxiety survey",
    ],
    techStack: [
      "Immersive VR: motion-tracked headset + hand-held motion controllers",
      "VR software: Attune® Revision TKA Simulator v1.1 (Pixelmolkerei, Chur, Switzerland)",
      "Procedure/instrumentation model: Attune® Revision Total Knee System (DePuy) with full inventory (506 pieces)",
      "Analytics/measurement: VR-captured time, prompts, errors, head/hand motion metrics; video-based performance review workflow",
    ],
    studyLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8317146/",
  },
  {
    slug: "industrial-simulation",
    title: "Industrial Simulation",
    summary: "Construction safety / hazard recognition VR vs Flat-Screen Training Efficacy Study",
    image: "/images/vr_industrial.png",
    heroImage: "/images/vr_industrial.png",
    overview: "A controlled experiment with novice tower-crane trainees compared immersive VR (head-mounted display) vs a semi-immersive flat-screen simulation for safety hazard recognition during crane 'pick-and-place' scenarios. Participants identified hazards in real time using a joystick, enabling measurement of correct identifications and false alarms across hazard types.",
    challenges: [
      "High-risk construction equipment training is hard to practice safely in real environments.",
      "2D/flat-screen training can limit depth perception—critical for distance-to-hazard judgments (e.g., overhead electric cables).",
      "Training programs need measurable evidence of hazard-perception improvements, not just self-reported confidence.",
      "Novice operators often have limited prior exposure to realistic jobsite hazards and timing of evasive reactions."
    ],
    solution: "A VR-vs-flat-screen comparison using identical simulated tower-crane scenarios. Participants viewed two scenarios in VR and two on flat-screen, and used an Arduino-based crane-like joystick to log hazard-detection timing and accuracy. Post-session questionnaires were analyzed with interval type-2 fuzzy AHP to quantify perceived effectiveness factors (immersion, realism, etc.).",
    impact: [
      "Much higher correct identification of critical depth-dependent hazards (electricity cables) in VR vs flat-screen.",
      "Fewer false hazard identifications when training in VR, indicating improved signal-to-noise in hazard perception.",
      "Participants identified hazardous situations earlier (more often before the incident time) when using VR compared to flat-screen."
    ],
    deliverables: [
      "Tower-crane cabin viewpoint VR training module with multiple hazard-rich pick-and-place scenarios.",
      "Hazard library (e.g., overhead cables) with incident timing markers for scoring.",
      "Real-time capture of hazard identification events (timestamped joystick inputs).",
      "Post-training evaluation survey + multi-criteria analysis framework for training effectiveness.",
      "Reporting dashboard for hazard accuracy, false identifications, and reaction timing by hazard type."
    ],
    metrics: [
      { "label": "Participants", "value": "30 novice tower-crane trainees" },
      { "label": "Electric cable hazard identification (flat-screen vs VR)", "value": "18.5% vs 78.3% correctly identified" },
      { "label": "False identifications", "value": "50% reduction when using VR headsets" },
      { "label": "MCDM outcome (global weights)", "value": "VR headset 3.36 vs flat-screen 1.42 (higher indicates more effective for training)" },
      { "label": "Scenario exposure per participant", "value": "4 simulations total (2 VR + 2 flat-screen)" }
    ],
    timeline: [
      "Pre-brief: short presentation on pick-and-place operations and common hazards",
      "Orientation: familiarize participants with VR environment and joystick input",
      "Simulation: 2 runs in VR headset + 2 runs on semi-immersive flat screen (randomized selection)",
      "Post: questionnaire + analysis of identification accuracy and reaction timing"
    ],
    techStack: [
      "VR: head-mounted display (HMD) for immersive training",
      "Simulation engine: Unity3D",
      "Input device: Arduino-based multi-axis joystick (crane-cabin style)",
      "Analytics: database logging of joystick event timestamps vs incident times",
      "Display comparison: semi-immersive flat-screen vs VR headset"
    ],
    studyLink: "https://doi.org/10.3390/buildings12122084"
  },
  {
    slug: "xr-education",
    title: "XR Education",
    summary: "Immersive lessons that drive engagement and retention at scale.",
    image: "/images/vr_education.png",
    heroImage: "/images/vr_education.png",
    overview: "A comparative meta-analysis synthesized experimental studies from 2003–2023 to estimate and compare overall learning-outcome effects of Virtual Reality (VR) vs Videoconferencing (VC) platforms in online learning contexts.",
    "challenges": [
      "Online learning often struggles with engagement and participation; institutions need evidence-backed modalities.",
      "Decision-makers need quantitative effect sizes to choose between VR classrooms and conventional VC tools.",
      "Results vary by class size, subject type, and instructional design—selection guidance is needed.",
      "Hardware and implementation costs require strong outcome justification."
    ],
    solution: "The authors conducted comparative meta-analyses across 29 articles (VR and VC studies separately) and estimated overall effect sizes for learning outcomes, then compared moderators (e.g., class size, subject domain).",
    impact: [
      "VR showed a substantially larger overall effect size on learning outcomes than VC in the pooled evidence base.",
      "Findings support VR as a stronger option when experiential/collaborative learning environments are desired."
    ],
    deliverables: [
      "Evidence synthesis report with pooled effect sizes for VR and VC",
      "Moderator guidance (e.g., contexts where VR tends to perform best)",
      "Decision inputs for program selection and pilot design"
    ],
    metrics: [
      { "label": "Studies analyzed", "value": "29 total articles (15 VR; 14 VC), spanning 2003–2023" },
      { "label": "Overall effect size (VR)", "value": "ES = 0.913" },
      { "label": "Overall effect size (VC)", "value": "ES = 0.284" }
    ],
    timeline: [
      "Literature window: 2003–2023",
      "Data coding and effect size computation",
      "Comparative meta-analysis of VR vs VC learning-outcome effects"
    ],
    techStack: [
      "Immersive VR systems (HMD-based) and non-immersive VR (desktop) as included in source studies",
      "Videoconferencing platforms (e.g., Zoom-like VC tools) as included in source studies",
      "Meta-analytic statistical pipeline (effect size aggregation + moderator analysis)"
    ],
    studyLink: "https://doi.org/10.3390/app15116293"
  },
];
