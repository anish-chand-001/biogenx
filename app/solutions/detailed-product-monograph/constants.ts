export interface CompositionItem {
  ingredient: string;
  strength: string;
}

export interface MonographType {
  id: number;
  category: 'women' | 'children' | 'general';
  title: string;          
  genericName: string;        
  img: string;                
  tagline?: string;           
  indications: string[];     
  compositionTable?: CompositionItem[]; 
  mechanismOfAction?: string; 
  keyBenefits?: string[];     
  researchData?: { label: string; value: string }[];
  pdfUrl?: string;            
}

export const MONOGRAPH_RECORDS: MonographType[] = [
  {
    id: 1,
    category: 'women',
    title: "DIVADRO",
    genericName: "Dydrogesterone 10mg Tablets",
    img: "/oursolutions/mom/divadro.png",
    tagline: "Strengthening the Promise of Motherhood",
    indications: [
      "RPL (Recurrent Pregnancy Loss)",
      "Threatened Abortion",
      "Luteal Phase Deficiency",
      "Dysfunctional bleeding",
      "Dysmenorrhea",
      "Pre-Menstrual syndrome"
    ],
    researchData: [
      { label: "Purity Engine", value: "99.9% Purity" },
      { label: "Dissolution Rate", value: "30 Min. Dissolution" },
      { label: "Bioavailability", value: "5.6 Times more Bioavailable than NMP" }
    ],
    keyBenefits: [
      "Rapid onset of action.",
      "Recommended by FOGSI* and EPC* guidelines.",
      "Low dosage requirement with 1.5 times better affinity than oral MCP.",
      "Significantly improves pregnancy outcomes in women with a history of threatened miscarriage."
    ],
    compositionTable: [
      { ingredient: "Dydrogesterone", strength: "10 mg" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  },
  {
    id: 2,
    category: 'women',
    title: "FOLBIOGEN",
    genericName: "L-Methylfolate Calcium 1 mg + Methylcobalamin 1500 mcg + Pyridoxal-5-Phosphate 0.5 mg Tablets",
    img: "/oursolutions/mom/folbiogen.png",
    tagline: "From Pre-conception to Delivery",
    indications: [
      "Preconception care to enhance probability of conception",
      "Improves the oocyte quality and maturity",
      "Ensures healthy full term pregnancy",
      "Prevents NTDs (Neural Tube Defects) & other birth defects"
    ],
    mechanismOfAction: "Vitamin B6, B9, & B12 supplementation reduces hyperhomocysteinemia.",
    keyBenefits: [
      "Provides the right supplement profiling during pregnancy for better outcomes.",
      "Supports neural and operational cellular division from preconception onward."
    ],
    compositionTable: [
      { ingredient: "L-Methylfolate Calcium", strength: "1 mg" },
      { ingredient: "Methylcobalamin", strength: "1500 mcg" },
      { ingredient: "Pyridoxal-5-Phosphate", strength: "0.5 mg" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  },
  {
    id: 3,
    category: 'women',
    title: "MAVITOL",
    genericName: "Metformin 500 mg (Sustained Release) + Myo Inositol 600mg Tablets",
    img: "/oursolutions/mom/mavitol.png",
    tagline: "Recommended and trusted choice in PCOS",
    indications: [
      "Polycystic Ovary Syndrome (PCOS)",
      "Insulin Resistance Management",
      "Ovarian Dysfunction",
      "Anovulatory Infertility"
    ],
    keyBenefits: [
      "Controls Insulin Resistance effectively.",
      "Regulates Ovarian Function metrics seamlessly.",
      "Assists Conception pathways in PCOS profiles.",
      "Right and Trusted Choice for PCOS management."
    ],
    compositionTable: [
      { ingredient: "Metformin Hydrochloride (Sustained Release)", strength: "500 mg" },
      { ingredient: "Myo-Inositol", strength: "600 mg" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  },
  {
    id: 4,
    category: 'women',
    title: "ARGI FAITH",
    genericName: "L-Arginine (3gm in 5gm) Sachet",
    img: "/oursolutions/mom/argifaith.png",
    tagline: "Ensure Safe Pregnancy at Every Step With...",
    indications: [
      "Pre-eclampsia prevention",
      "Oligohydramnios mitigation",
      "IUGR (Intrauterine Growth Restriction)",
      "PIH (Pregnancy-Induced Hypertension)",
      "Pre-term Labor protection"
    ],
    keyBenefits: [
      "Reduces the incidence of Pre-Eclampsia in High Risk Conditions.",
      "Significant Improvement in Amniotic Fluid index parameters.",
      "Increases birth weight and placental circulation.",
      "Reduces the chances of early miscarriages."
    ],
    compositionTable: [
      { ingredient: "L-Arginine", strength: "3 gm (in 5 gm sachet)" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  },
  {
    id: 5,
    category: 'women',
    title: "GENDOX",
    genericName: "Doxylamine Succinate 20mg + Pyridoxine Hydrochloride 20mg + Folic Acid 5mg Tablets",
    img: "/oursolutions/mom/gendox.png",
    tagline: "Makes Every Morning A Good Morning",
    indications: [
      "Nausea & Vomiting in Pregnancy (NVP)",
      "Morning Sickness",
      "Hyperemesis gravidarum"
    ],
    mechanismOfAction: "Doxylamine Succinate + Pyridoxine Hydrochloride acts as the first-line pharmacotherapy for managing pregnancy-induced emesis, supplemented with Folic Acid to secure embryonic spinal formation.",
    keyBenefits: [
      "First line treatment for nausea and vomiting during pregnancy with a proven clinical history.",
      "Shows rapid improvement in clinical symptoms of morning distress.",
      "Shows favorable safety profile without any reports of causing fetal anomalies.",
      "Folic Acid explicitly reduces the risk of neural tube defects."
    ],
    compositionTable: [
      { ingredient: "Doxylamine Succinate", strength: "20 mg" },
      { ingredient: "Pyridoxine Hydrochloride", strength: "20 mg" },
      { ingredient: "Folic Acid", strength: "5 mg" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  },
  {
    id: 6,
    category: 'women',
    title: "BONENANO-60K (Maternal Option)",
    genericName: "Cholecalciferol 60,000 IU Nanoshot",
    img: "/oursolutions/mom/bonenano-60k.png",
    tagline: "Power your Day with Vitamin D3 / The Vitamin D for Every Mother",
    indications: [
      "Pregnancy Hypovitaminosis D",
      "Lactation nutritional shortfalls",
      "Menopause vitamin management",
      "PCOS-linked metabolic vulnerabilities"
    ],
    researchData: [
      { label: "Deficiency Statistic", value: "96.3% of pregnant Indian women present hypovitaminosis D" },
      { label: "Pre-eclampsia Risk Reduction", value: "40% elevated risk with deficit states" },
      { label: "Preterm Birth Association", value: "8.6% variation risk reduction" },
      { label: "LBW Infant Risk Avoidance", value: "12-fold safety optimization margin" },
      { label: "GDM Vulnerability Safety", value: "2.66-Fold reduction profile" }
    ],
    keyBenefits: [
      "Directly acts on muscle fat cells & reduces insulin resistance.",
      "Regulates calcium homeostasis & helps in oocyte maturation.",
      "Supports better pregnancy outcomes & healthier foetal development.",
      "Minimizes the chances of Vitamin D Deficiency and prevents Gestational Diabetes (GDM)."
    ],
    compositionTable: [
      { ingredient: "Cholecalciferol (Vitamin D3)", strength: "60,000 IU" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  },
  {
    id: 7,
    category: 'children',
    title: "BONENANO-60K (Pediatric Option)",
    genericName: "Cholecalciferol 60,000 IU Nano Shots",
    img: "/oursolutions/baby/bonenano-60k.png",
    tagline: "For Vitamin D Sufficiency / An ideal treatment option for Vitamin D deficiency",
    indications: [
      "Pediatric Vitamin D Deficiency states",
      "Immune system down-regulation profiles",
      "Recurrent Upper Respiratory Tract Infections (URTI)",
      "Childhood Asthma symptom optimization"
    ],
    researchData: [
      { label: "Absorption Metric", value: ">90% Nano-Absorption Delivery" },
      { label: "Recovery Efficiency", value: "Faster systemic restoration of Vitamin D3 levels" }
    ],
    keyBenefits: [
      "Enhances mental development & structural cognitive abilities.",
      "Helps prevent early onset of Heart Disease & Type 2 Diabetes.",
      "Boosts baseline immunity indicators powerfully.",
      "Prevents recurrent URTI and reduces structural attacks of pediatric asthma.",
      "Maintains overall bone health through premium nanotechnology."
    ],
    compositionTable: [
      { ingredient: "Cholecalciferol (Vitamin D3)", strength: "60,000 IU" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  },
  {
    id: 8,
    category: 'children',
    title: "BONENANO-D3 DROPS",
    genericName: "Cholecalciferol 800 IU/ml Drops",
    img: "/oursolutions/baby/bonenano-drops.png",
    tagline: "For every New Born & Infants / For Healthy & Strong Babies",
    indications: [
      "Infantile Vitamin D deficiency correction",
      "Rickets prevention profile",
      "Neonatal skeletal structural optimization"
    ],
    researchData: [
      { label: "Infant Deficiency Metric", value: "96% of infants are found Vitamin D Deficient" },
      { label: "AAP Recommendation", value: "All infants should receive minimum daily intake of 400 IU soon after birth" }
    ],
    keyBenefits: [
      "Promotes bone density right from neonatal infancy.",
      "Ensures proper growth & developmental milestones.",
      "Develops early core immunity matrices.",
      "Corrects Vitamin D deficiency directly to reduce the risk of rickets.",
      "Builds and maintains core structural bone density."
    ],
    compositionTable: [
      { ingredient: "Cholecalciferol (Vitamin D3)", strength: "800 IU per ml" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  },
  {
    id: 9,
    category: 'children',
    title: "RAGONIST SYRUP",
    genericName: "Ranitidine 75mg/5ml Syrup",
    img: "/oursolutions/baby/ragonist.png",
    tagline: "In Pediatrics GER and GERD / Happy tummies... Happy Kids",
    indications: [
      "Gastroesophageal Reflux Disease (GERD)",
      "Pediatric Gastroesophageal Reflux (GER)",
      "Drug-induced Gastritis anomalies",
      "Erosive Esophagitis",
      "Flatulence and Abdominal Colic discomfort"
    ],
    researchData: [
      { label: "Pediatric Reference", value: "Recommended as First Line Therapy by Nelson Text Book of Pediatrics" },
      { label: "Regulatory Clearance", value: "USFDA approved for use in children from 1 month of age" }
    ],
    keyBenefits: [
      "Faster onset and sustainable duration of gastrointestinal action.",
      "Provides complete relief from distressing day & nocturnal acidity indicators.",
      "Formulated in an infant-friendly Mango flavor to ensure adherence."
    ],
    compositionTable: [
      { ingredient: "Ranitidine", strength: "75 mg per 5 ml" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  },
  {
    id: 10,
    category: 'children',
    title: "PROBIOLAC Z",
    genericName: "9 Strains of Probiotic Bacteria (total 2.5 Billion CFUs) + FOS 100mg + Zinc 10mg Sachet",
    img: "/oursolutions/baby/probiolac-z.png",
    tagline: "To Renormalize GUT Flora / Healthy Gut, Healthy life",
    indications: [
      "Diarrhoea & Dysentery (alongside Antibiotic treatments)",
      "Acute Diarrhoea management protocols",
      "General Debility and Chronic Illness recovery states",
      "Travelers' Debility ecosystem normalization"
    ],
    mechanismOfAction: "Combines 9 specific strains of probiotic microorganisms (4 Lactobacillus species + 3 Bifidobacteria species + 1 S. thermophilus + 1 S. boulardii) with FOS prebiotic scaffolding and Zinc mineral cofactors to balance intestinal cell homeostasis.",
    keyBenefits: [
      "Zinc content directly matches WHO & IAP specifications in diarrhea therapies.",
      "Minimizes the overall severity and duration metrics of acute diarrhea events.",
      "Restores natural microbial equilibrium across the gastrointestinal tract.",
      "Controls epithelial cell proliferation & restores optimal homeostatic immune function."
    ],
    compositionTable: [
      { ingredient: "B. breve, B. longum, B. infantis, L. acidophilus, L. plantarum, L. casei, L. rhamnosus, Streptococcus thermophilus, S. Boulardii", strength: "2.5 Billion CFUs (Total)" },
      { ingredient: "Fructooligosaccharides (FOS)", strength: "100 mg" },
      { ingredient: "Zinc", strength: "10 mg" }
    ],
    pdfUrl: "/oursolutions/Biogenx.pdf"
  }
];