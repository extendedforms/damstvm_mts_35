// Format: { id, image?, question, options[], answerIndex, correctAnswerText }

window.questions = [
  {
    id: 1,
    image: "images/IMG_7451.jpeg",
    question: "A 9-month-old infant is brought with developmental regression, inability to sit without support, exaggerated startle response to sound, progressive hypotonia evolving into spasticity, and recurrent choking episodes. Fundus examination shows a cherry-red spot. There is no hepatosplenomegaly.\nWhich of the following is the most likely biochemical defect?",
    options: [
      "Accumulation of GM2 ganglioside due to deficiency of hexosaminidase A",
      "Accumulation of GM2 ganglioside due to deficiency of hexosaminidase A and B",
      "Accumulation of glucocerebroside due to deficiency of glucocerebrosidase",
      "Accumulation of sphingomyelin due to deficiency of sphingomyelinase"
    ],
    answerIndex: 0,
    correctAnswerText: "Accumulation of GM2 ganglioside due to deficiency of hexosaminidase A"
  },
  {
    id: 2,
    image: "images/IMG_7452.jpeg",
    question: "A 17-year-old boy presents with tendon xanthomas over the Achilles tendon and recurrent episodes of exertional chest discomfort. His father died of myocardial infarction at 38 years of age. Lipid profile shows markedly elevated LDL cholesterol, while triglycerides are normal.\nWhich of the following is the most likely underlying defect?",
    options: [
      "Deficiency of lipoprotein lipase causing impaired chylomicron clearance",
      "Defective LDL receptor or mutation in apo B-100 ligand region causing impaired LDL uptake",
      "Deficiency of apo C-II causing severe hypertriglyceridemia",
      "Defective apo E causing accumulation of chylomicron remnants and IDL"
    ],
    answerIndex: 1,
    correctAnswerText: "Defective LDL receptor or mutation in apo B-100 ligand region causing impaired LDL uptake"
  },
  {
    id: 3,
    image: "",
    question: "A 2-month-old infant detected on newborn screening has hyperphenylalaninemia with low tyrosine levels. However, enzyme assay shows normal phenylalanine hydroxylase activity. The baby later develops poor feeding, seizures, hypotonia, and developmental delay. CSF analysis shows decreased dopamine and serotonin metabolites.\nWhich of the following is the most likely underlying defect?",
    options: [
      "Deficiency of phenylalanine hydroxylase",
      "Deficiency of tyrosinase enzyme",
      "Deficiency of tetrahydrobiopterin regeneration or synthesis",
      "Deficiency of homogentisate oxidase"
    ],
    answerIndex: 2,
    correctAnswerText: "Deficiency of tetrahydrobiopterin regeneration or synthesis"
  },
  {
    id: 4,
    image: "images/IMG_7453.jpeg",
    question: "A 28-year-old man with poor dietary intake presents with bleeding gums, perifollicular hemorrhages, delayed healing of a fractured arm, and easy bruising. Examination shows swollen spongy gums and petechiae over the lower limbs.\nWhich of the following enzymatic steps is most likely impaired in this patient?",
    options: [
      "Conversion of lysine to allysine by lysyl oxidase",
      "Conversion of procollagen to tropocollagen by procollagen peptidase",
      "Glycosylation of hydroxylysine residues in Golgi apparatus",
      "Hydroxylation of proline residues by prolyl hydroxylase"
    ],
    answerIndex: 3,
    correctAnswerText: "Hydroxylation of proline residues by prolyl hydroxylase"
  },
  {
    id: 5,
    image: "",
    question: "A researcher introduces a single nucleotide insertion at the 4th nucleotide of a coding sequence that normally produces a 900-nucleotide mRNA. Translation is initiated normally, but the final protein is found to be completely non-functional with a garbled amino acid sequence.\nWhich of the following best explains this outcome?",
    options: [
      "Reading frame is shifted, altering all downstream codons and producing a premature stop codon",
      "Only one amino acid is deleted, while the remaining protein sequence stays unchanged",
      "One codon is replaced by another codon coding for the same amino acid",
      "Only one amino acid is substituted without affecting the downstream sequence"
    ],
    answerIndex: 0,
    correctAnswerText: "Reading frame is shifted, altering all downstream codons and producing a premature stop codon"
  },
  {
    id: 6,
    image: "images/IMG_7454.jpeg",
    question: "A 52-year-old vegetarian man presents with macrocytic anemia, paresthesia in both lower limbs, gait instability, impaired vibration sense, and a positive Romberg sign. Laboratory evaluation shows elevated total homocysteine and elevated methylmalonic acid.\nWhich of the following biochemical conversions is most directly impaired causing accumulation of homocysteine?",
    options: [
      "Homocysteine to cystathionine",
      "Homocysteine to methionine",
      "Methylmalonyl-CoA to propionyl-CoA",
      "Phenylalanine to tyrosine"
    ],
    answerIndex: 1,
    correctAnswerText: "Homocysteine to methionine"
  },
  {
    id: 7,
    image: "",
    question: "A 32-year-old man is rescued after being trapped without food for 5 days. He has low insulin, high glucagon, increased lipolysis, and marked hepatic β-oxidation. Despite reduced glucose availability, his brain continues to function using an alternative fuel produced in the liver.\nWhich of the following is now the major source of energy for his brain?",
    options: [
      "Glucose released by hepatic glycogenolysis",
      "Free fatty acids directly entering the brain",
      "Ketone bodies formed from acetyl-CoA in liver mitochondria",
      "Amino acids released from skeletal muscle proteolysis"
    ],
    answerIndex: 2,
    correctAnswerText: "Ketone bodies formed from acetyl-CoA in liver mitochondria"
  },
  {
    id: 8,
    image: "images/IMG_7455.jpeg",
    question: "A 3-year-old child is brought with delayed milestones, coarse facial features, short stature, recurrent upper respiratory infections, noisy breathing, joint stiffness, hepatosplenomegaly, umbilical hernia, and cloudy corneas. X-ray shows thick ribs and ovoid vertebral bodies. Enzyme assay reveals deficiency of α-L-iduronidase.\nWhich of the following substances is most likely accumulated in this child?",
    options: [
      "Keratan sulfate only",
      "Heparan sulfate only",
      "Sphingomyelin and cholesterol",
      "Dermatan sulfate and heparan sulfate"
    ],
    answerIndex: 3,
    correctAnswerText: "Dermatan sulfate and heparan sulfate"
  },
  {
    id: 9,
    image: "images/IMG_7456.jpeg",
    question: "A 12-year-old boy presents with recurrent throat discomfort, large orange-yellow tonsils, muscle wasting, and episodic peripheral neuropathy. Lipid profile shows markedly reduced HDL cholesterol with reduced LDL levels. Tissue biopsy shows accumulation of cholesterol esters inside macrophages.\nWhich of the following is the most likely underlying molecular defect?",
    options: [
      "Defective ATP-binding cassette transporter-1 causing impaired cholesterol efflux to HDL",
      "Defective LDL receptor causing impaired hepatic uptake of LDL",
      "Apo E mutation causing accumulation of IDL and chylomicron remnants",
      "Lipoprotein lipase deficiency causing impaired chylomicron clearance"
    ],
    answerIndex: 0,
    correctAnswerText: "Defective ATP-binding cassette transporter-1 causing impaired cholesterol efflux to HDL"
  },
  {
    id: 10,
    image: "",
    question: "An 8-year-old girl develops severe blistering and pigmentation after minimal sun exposure. Examination shows dry hyperpigmented facial skin, multiple lentigines, corneal scarring, and hyperkeratotic lesions suspicious for early squamous cell carcinoma. Her parents report similar photosensitivity since early childhood.\nWhich of the following DNA repair mechanisms is defective in this child?",
    options: [
      "Base excision repair of uracil residues",
      "Nucleotide excision repair of thymine dimers",
      "Mismatch repair of replication errors",
      "Double-strand break repair by homologous recombination"
    ],
    answerIndex: 1,
    correctAnswerText: "Nucleotide excision repair of thymine dimers"
  },
  {
    id: 11,
    image: "",
    question: "A 58-year-old chronic alcoholic hypertensive man on long-term diuretic therapy presents with unsteady gait, horizontal nystagmus, confusion, bilateral symmetric sensory-motor neuropathy, pedal edema, raised JVP, and breathlessness.\nWhich of the following cofactors is most likely deficient in this patient?",
    options: [
      "Nicotinamide adenine dinucleotide",
      "Flavin adenine dinucleotide",
      "Thiamine pyrophosphate",
      "Pyridoxal phosphate"
    ],
    answerIndex: 2,
    correctAnswerText: "Thiamine pyrophosphate"
  },
  {
    id: 12,
    image: "",
    question: "A 61-year-old man undergoes total gastrectomy for gastric adenocarcinoma. Six months later, he is advised lifelong micronutrient supplementation to prevent a deficiency caused by loss of a glycoprotein normally secreted by gastric parietal cells. This glycoprotein forms a complex with the vitamin, which is then absorbed through specific receptors in the distal ileum.\nWhich of the following supplements is most essential in this patient?",
    options: [
      "Vitamin K due to impaired gamma-carboxylation of clotting factors",
      "Folate due to defective proximal jejunal absorption",
      "Vitamin D due to impaired chylomicron formation",
      "Vitamin B12 due to impaired intrinsic factor production"
    ],
    answerIndex: 3,
    correctAnswerText: "Vitamin B12 due to impaired intrinsic factor production"
  },
  {
    id: 13,
    image: "images/IMG_7457.jpeg",
    question: "A 7-year-old child from a poor socioeconomic background is brought with rough, dry, scaly skin and multiple cone-shaped keratotic follicular papules over the elbows and knees. The mother gives a history of poor intake of fruits, vegetables, and dietary oils. The child also complains of difficulty seeing in dim light and has dry conjunctiva.\nWhich of the following is the most likely diagnosis?",
    options: [
      "Phrynoderma due to deficiency of vitamin A, B-complex, C, E, and essential fatty acids",
      "Pellagra due to niacin deficiency causing photosensitive dermatitis",
      "Scurvy due to defective collagen hydroxylation causing perifollicular hemorrhage",
      "Acrodermatitis enteropathica due to zinc deficiency causing periorificial dermatitis"
    ],
    answerIndex: 0,
    correctAnswerText: "Phrynoderma due to deficiency of vitamin A, B-complex, C, E, and essential fatty acids"
  },
  {
    id: 14,
    image: "",
    question: "A 10-year-old child presents with recurrent episodes of severe epigastric pain radiating to the back, eruptive xanthomas over the buttocks, and lipemic serum. Lipid profile shows markedly elevated triglycerides due to impaired clearance of chylomicrons. Enzyme assay reveals that lipoprotein lipase is present but functionally inactive due to absence of its required activator.\nWhich of the following is the most likely molecular defect?",
    options: [
      "Deficiency of LDL receptor causing impaired LDL uptake",
      "Deficiency of apolipoprotein C-II causing failure of lipoprotein lipase activation",
      "Defective apolipoprotein E causing accumulation of remnant particles",
      "Deficiency of ABCA1 transporter causing impaired cholesterol efflux to HDL"
    ],
    answerIndex: 1,
    correctAnswerText: "Deficiency of apolipoprotein C-II causing failure of lipoprotein lipase activation"
  },
  {
    id: 15,
    image: "",
    question: "A 2-year-old boy is brought with developmental delay, dystonic movements, intellectual disability, and repeated biting of lips and fingers. His mother also gives a history of orange-colored crystals in the diaper during infancy. Laboratory evaluation shows marked hyperuricemia.\nWhich of the following is the most likely enzymatic defect?",
    options: [
      "Deficiency of adenosine deaminase causing accumulation of dATP",
      "Deficiency of xanthine oxidase causing reduced uric acid production",
      "Deficiency of hypoxanthine-guanine phosphoribosyltransferase causing impaired purine salvage",
      "Deficiency of orotic acid phosphoribosyltransferase causing pyrimidine synthesis defect"
    ],
    answerIndex: 2,
    correctAnswerText: "Deficiency of hypoxanthine-guanine phosphoribosyltransferase causing impaired purine salvage"
  },
  {
    id: 16,
    image: "images/IMG_7459.jpeg",
    question: "A 12-day-old neonate develops lethargy, poor feeding, vomiting, jaundice, hepatomegaly, and hypoglycemia after initiation of milk feeds. Examination reveals oil-drop cataract. Urine shows positive Benedict’s test, but glucose oxidase test is negative. Blood culture later grows Escherichia coli.\nWhich of the following is the most likely enzyme deficiency?",
    options: [
      "Galactokinase deficiency",
      "UDP-galactose 4-epimerase deficiency",
      "Aldolase B deficiency",
      "Galactose-1-phosphate uridyltransferase deficiency"
    ],
    answerIndex: 3,
    correctAnswerText: "Galactose-1-phosphate uridyltransferase deficiency"
  },
  {
    id: 17,
    image: "images/IMG_7460.jpeg",
    question: "A 9-year-old boy is evaluated for developmental delay, tall slender build, long extremities, arachnodactyly, kyphosis, osteoporosis, and subluxation of the ocular lens. He has a past history of ischemic stroke-like episode. Blood investigation shows markedly elevated total homocysteine.\nWhich of the following supplements can improve enzyme activity in a significant proportion of such patients?",
    options: [
      "Pyridoxine",
      "Cobalamin",
      "Niacin",
      "Riboflavin"
    ],
    answerIndex: 0,
    correctAnswerText: "Pyridoxine"
  },
  {
    id: 18,
    image: "images/IMG_7462.jpeg",
    question: "A 6-year-old child living in an old house with peeling wall paint is brought with facial pallor, constipation, recurrent colicky abdominal pain, irritability, and poor school performance. Peripheral smear shows microcytic anemia with basophilic stippling. The clinician wants a screening test to indicate lead exposure before confirmatory testing.\nWhich of the following investigations is most appropriate as a screening test?",
    options: [
      "Serum porphobilinogen level",
      "Urinary coproporphyrin level",
      "Serum unconjugated bilirubin level",
      "Urinary homogentisic acid level"
    ],
    answerIndex: 1,
    correctAnswerText: "Urinary coproporphyrin level"
  },
  {
    id: 19,
    image: "",
    question: "A researcher studies oxygen consumption in isolated mitochondria using NADH as the electron donor. After adding a barbiturate drug, the transfer of electrons from NADH to coenzyme Q is blocked, proton pumping falls, and the rate of oxygen consumption decreases.\nWhich of the following ETC complexes is most likely inhibited?",
    options: [
      "Complex IV — Cytochrome c oxidase",
      "Complex II — Succinate-Q reductase",
      "Complex I — NADH-Q oxidoreductase",
      "Complex V — ATP synthase"
    ],
    answerIndex: 2,
    correctAnswerText: "Complex I — NADH-Q oxidoreductase"
  },
  {
    id: 20,
    image: "images/IMG_7464.jpeg",
    question: "A 6-year-old child is evaluated for recurrent bone pain, easy bruising, fatigue, anemia, thrombocytopenia, and massive hepatosplenomegaly. Bone marrow examination shows lipid-laden macrophages with fibrillary cytoplasm giving a “crumpled tissue paper” appearance.\nWhich of the following enzyme deficiencies is most likely responsible?",
    options: [
      "Sphingomyelinase deficiency",
      "Hexosaminidase A deficiency",
      "α-L-iduronidase deficiency",
      "β-glucocerebrosidase deficiency"
    ],
    answerIndex: 3,
    correctAnswerText: "β-glucocerebrosidase deficiency"
  },
  {
    id: 21,
    image: "",
    question: "A 36-year-old woman from a low socioeconomic background presents with loss of appetite, weakness, irritability, abdominal pain, vomiting, diarrhea, and progressive forgetfulness. Examination shows bright red glossitis and a pigmented scaly rash over sun-exposed areas, forming a ring-like lesion around the neck. Dietary history reveals a predominantly corn-based diet.\nWhich of the following supplementation is most likely to improve her symptoms?",
    options: [
      "Oral nicotinamide",
      "Oral pyridoxine",
      "Oral riboflavin",
      "Oral ascorbic acid"
    ],
    answerIndex: 0,
    correctAnswerText: "Oral nicotinamide"
  },
  {
    id: 22,
    image: "",
    question: "A 4-month-old infant is brought with difficulty in feeding, failure to thrive, generalized hypotonia, macroglossia, and hepatomegaly. Chest X-ray shows massive cardiomegaly, and echocardiography reveals hypertrophic cardiomyopathy. Muscle biopsy shows glycogen-positive vacuoles within muscle fibers.\nWhich of the following enzyme deficiencies is most likely responsible?",
    options: [
      "Muscle phosphorylase deficiency",
      "Lysosomal acid α-glucosidase deficiency",
      "Glucose-6-phosphatase deficiency",
      "Debranching enzyme deficiency"
    ],
    answerIndex: 1,
    correctAnswerText: "Lysosomal acid α-glucosidase deficiency"
  },
  {
    id: 23,
    image: "",
    question: "A 5-year-old child is brought with recurrent episodes of fatigue and muscle weakness after exercise. During fasting illness, he develops hypoglycemia without ketosis and mild hyperammonemia. Muscle biopsy shows fat vacuoles, and biochemical testing reveals impaired oxidation of long-chain fatty acids.\nWhich of the following is the most likely underlying defect?",
    options: [
      "Defective breakdown of glycogen in skeletal muscle",
      "Defective conversion of acetyl-CoA into ketone bodies",
      "Defective transport of long-chain fatty acyl-CoA into mitochondria",
      "Defective conversion of pyruvate into acetyl-CoA"
    ],
    answerIndex: 2,
    correctAnswerText: "Defective transport of long-chain fatty acyl-CoA into mitochondria"
  },
  {
    id: 24,
    image: "",
    question: "A 6-month-old male infant is brought with failure to thrive, seizures, truncal hypotonia, recurrent infections, anemia, neutropenia, and sparse depigmented kinky hair. X-ray shows subperiosteal hemorrhage, Pelkan spurs, Frenkel line, and Wimberger ring sign. Serum copper and ceruloplasmin levels are low.\nWhich of the following is the most likely underlying defect?",
    options: [
      "Vitamin C deficiency causing defective proline hydroxylation",
      "ATP7B mutation causing impaired biliary copper excretion",
      "Phenylalanine hydroxylase deficiency causing low tyrosine formation",
      "ATP7A mutation causing impaired intestinal copper transport with defective lysyl oxidase activity"
    ],
    answerIndex: 3,
    correctAnswerText: "ATP7A mutation causing impaired intestinal copper transport with defective lysyl oxidase activity"
  },
  {
    id: 25,
    image: "",
    question: "A 4-year-old child develops recurrent abdominal pain, bloating, vomiting, flatulence, and watery diarrhea every time he consumes milk or dairy products. Symptoms improve when milk is avoided. Stool is acidic, and the pediatrician explains that an undigested disaccharide is being fermented by intestinal bacteria in the gut lumen.\nWhich of the following enzymes is most likely deficient?",
    options: [
      "Lactase",
      "Sucrase-isomaltase",
      "Galactose-1-phosphate uridyltransferase",
      "Pancreatic amylase"
    ],
    answerIndex: 0,
    correctAnswerText: "Lactase"
  },
  {
    id: 26,
    image: "",
    question: "A pharmacology researcher studies an enzyme-catalyzed reaction in the presence of a reversible inhibitor. On increasing the substrate concentration, the enzyme finally achieves the same maximum velocity as before, but a higher substrate concentration is required to reach half of this maximum velocity. On Lineweaver-Burk plot, the Y-intercept remains unchanged, while the slope becomes steeper.\nWhich of the following best describes this type of inhibition?",
    options: [
      "Vmax decreases with unchanged Km",
      "Vmax remains unchanged with increased Km",
      "Both Vmax and Km decrease proportionately",
      "Vmax decreases with decreased Km"
    ],
    answerIndex: 1,
    correctAnswerText: "Vmax remains unchanged with increased Km"
  },
  {
    id: 27,
    image: "images/IMG_7466.jpeg",
    question: "A 19-year-old hostel student is admitted with fever, headache, neck stiffness, petechial rash, and altered sensorium. CSF shows gram-negative kidney-shaped diplococci. His roommates and close contacts are asymptomatic but anxious. The physician decides to give chemoprophylaxis to prevent secondary cases and recolonization.\nWhich of the following drugs is classically used for chemoprophylaxis in close contacts?",
    options: [
      "Doxycycline",
      "Azithromycin",
      "Rifampicin",
      "Amoxicillin"
    ],
    answerIndex: 2,
    correctAnswerText: "Rifampicin"
  },
  {
    id: 28,
    image: "images/IMG_7588.jpeg",
    question: "A 6-year-old child is brought with intense perianal itching at night and disturbed sleep. The mother reports seeing tiny white thread-like worms in the child’s undergarments. Microscopy of the suspected egg shows a planoconvex, D-shaped egg. Routine stool examination is repeatedly negative.\nWhich of the following is the best diagnostic method for this condition?",
    options: [
      "Stool concentration technique for ova",
      "Duodenal aspirate microscopy",
      "Blood smear examination at night",
      "Perianal cellophane tape test / NIH swab"
    ],
    answerIndex: 3,
    correctAnswerText: "Perianal cellophane tape test / NIH swab"
  },
  {
    id: 29,
    image: "images/IMG_7586.jpeg",
    question: "A 42-year-old abattoir worker presents with a painless papule on the forearm after handling animal hides. It rapidly becomes a vesicle and then forms a black necrotic eschar with surrounding induration. Gram stain from the lesion shows large rectangular gram-positive bacilli arranged in chains with a bamboo-stick appearance. Culture on nutrient agar shows medusa-head colonies.\nWhich of the following is the most likely causative organism?",
    options: [
      "Bacillus anthracis",
      "Clostridium tetani",
      "Corynebacterium diphtheriae",
      "Listeria monocytogenes"
    ],
    answerIndex: 0,
    correctAnswerText: "Bacillus anthracis"
  },
  {
    id: 30,
    image: "images/IMG_7470.jpeg",
    question: "A 46-year-old neutropenic patient on chemotherapy develops persistent fever, cough, pleuritic chest pain, and hemoptysis despite broad-spectrum antibiotics. CT chest shows nodular pulmonary infiltrates. Bronchoalveolar lavage microscopy shows septate hyphae with dichotomous acute-angle branching, and serum test detects galactomannan antigen.\nWhich of the following is the most likely causative organism?",
    options: [
      "Mucor species",
      "Aspergillus fumigatus",
      "Candida albicans",
      "Cryptococcus neoformans"
    ],
    answerIndex: 1,
    correctAnswerText: "Aspergillus fumigatus"
  },
  {
    id: 31,
    image: "images/IMG_7471.jpeg",
    question: "A 32-year-old man from an endemic area presents with recurrent fever, painful inguinal lymphadenitis, and progressive swelling of the left lower limb. Initially the edema was pitting, but later became hard and non-pitting. Peripheral smear collected at night shows a sheathed microfilaria with a tail tip free of nuclei.\nWhich of the following best explains the pathogenesis of his limb swelling?",
    options: [
      "Direct invasion of skeletal muscle by larvae causing myositis",
      "Immune complex deposition in glomeruli causing protein loss",
      "Obstruction of lymphatic vessels by adult worms causing lymph stasis",
      "Granulomatous inflammation of intestinal lymphatics causing malabsorption"
    ],
    answerIndex: 2,
    correctAnswerText: "Obstruction of lymphatic vessels by adult worms causing lymph stasis"
  },
  {
    id: 32,
    image: "images/IMG_7473.jpeg",
    question: "A 48-year-old smoker presents with chronic cough, fever, dyspnea, weight loss, and hemoptysis. Chest X-ray shows old cavitary pulmonary lesions with hilar lymphadenopathy. He gives a history of cleaning an old building contaminated with bird and bat droppings. Tissue microscopy shows tiny oval yeast cells of 2–4 μm within macrophages, showing narrow-based budding.\nWhich of the following is the most likely causative organism?",
    options: [
      "Blastomyces dermatitidis",
      "Cryptococcus neoformans",
      "Coccidioides immitis",
      "Histoplasma capsulatum"
    ],
    answerIndex: 3,
    correctAnswerText: "Histoplasma capsulatum"
  },
  {
    id: 33,
    image: "",
    question: "A 9-year-old child develops fever, sore throat, tonsillar exudates, and tender anterior cervical lymphadenopathy. Throat swab culture grows β-hemolytic gram-positive cocci in chains, identified as Group A Streptococcus. During the earliest step of infection, the organism attaches firmly to pharyngeal epithelial cells by binding to host fibronectin.\nWhich of the following bacterial components is mainly responsible for this adhesion?",
    options: [
      "Lipoteichoic acid",
      "Streptolysin O",
      "C-carbohydrate antigen",
      "Streptokinase"
    ],
    answerIndex: 0,
    correctAnswerText: "Lipoteichoic acid"
  },
  {
    id: 34,
    image: "images/IMG_7476.jpeg",
    question: "A 21-year-old man develops fever, malaise, severe crampy abdominal pain, and bloody diarrhea 2 days after consuming unpasteurized milk at a local farm. Stool microscopy shows polymorphonuclear cells with curved comma-shaped gram-negative rods. Dark-field microscopy shows darting motility, and culture grows on Skirrow’s selective medium.\nWhich of the following is the most likely causative organism?",
    options: [
      "Vibrio cholerae",
      "Campylobacter jejuni",
      "Escherichia coli O157:H7",
      "Salmonella typhi"
    ],
    answerIndex: 1,
    correctAnswerText: "Campylobacter jejuni"
  },
  {
    id: 35,
    image: "",
    question: "A 5-year-old child is admitted with fever, neck stiffness, altered sensorium, and seizures. CSF analysis suggests acute meningitis, but the clinician wants a single molecular test that can simultaneously screen for multiple possible bacterial and viral pathogens causing the same clinical syndrome.\nWhich of the following molecular techniques is most appropriate?",
    options: [
      "Uniplex PCR using one primer set for one organism",
      "Nested PCR using two sequential primer sets for the same target",
      "Multiplex PCR using multiple primer sets in a single reaction",
      "RT-PCR using reverse transcriptase to amplify RNA viruses only"
    ],
    answerIndex: 2,
    correctAnswerText: "Multiplex PCR using multiple primer sets in a single reaction"
  },
  {
    id: 36,
    image: "images/IMG_7477.jpeg",
    question: "A 17-year-old boy presents with recurrent episodes of purulent urethral discharge and dysuria. Gram stain shows gram-negative intracellular diplococci. He also gives a history of previous meningococcal meningitis. Immunological workup reveals failure to form the membrane attack complex, resulting in defective lysis of target bacterial cells.\nDeficiency of which of the following complement components best explains his recurrent infections?",
    options: [
      "C1, C2, and C4",
      "C3 only",
      "Factor B, Factor D, and Properdin",
      "C5, C6, C7, and C8"
    ],
    answerIndex: 3,
    correctAnswerText: "C5, C6, C7, and C8"
  },
  {
    id: 37,
    image: "images/IMG_7479.jpeg",
    question: "A 34-year-old sewage worker presents with high-grade fever, severe headache, vomiting, myalgia, intense conjunctival suffusion, jaundice, oliguria, and features of renal dysfunction. He gives a history of working in flood-contaminated drains with multiple abrasions over his feet.\nWhich of the following organisms is most likely responsible?",
    options: [
      "Leptospira interrogans",
      "Treponema pallidum",
      "Borrelia burgdorferi",
      "Spirillum minus"
    ],
    answerIndex: 0,
    correctAnswerText: "Leptospira interrogans"
  },
  {
    id: 38,
    image: "",
    question: "A 16-year-old hostel student presents with sudden high-grade fever, severe headache, neck stiffness, vomiting, altered sensorium, and a rapidly spreading petechial rash over the trunk and limbs. CSF examination shows gram-negative kidney-shaped diplococci inside neutrophils. Within hours, he develops hypotension, DIC, and adrenal hemorrhage.\nWhich of the following is the most likely causative organism?",
    options: [
      "Streptococcus pneumoniae",
      "Neisseria meningitidis",
      "Haemophilus influenzae type b",
      "Listeria monocytogenes"
    ],
    answerIndex: 1,
    correctAnswerText: "Neisseria meningitidis"
  },
  {
    id: 39,
    image: "images/IMG_7480.jpeg",
    question: "A 42-year-old immunocompromised man presents with fever, cough, chest pain, and non-resolving pneumonia. He also has ulcerated verrucous skin lesions over exposed parts of the body with central scarring and raised advancing borders. Microscopy from the skin lesion shows thick-walled round yeast cells with a single broad-based bud.\nWhich of the following is the most likely causative organism?",
    options: [
      "Histoplasma capsulatum",
      "Cryptococcus neoformans",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    answerIndex: 2,
    correctAnswerText: "Blastomyces dermatitidis"
  },
  {
    id: 40,
    image: "",
    question: "A 19-year-old student presents with continuous fever for 5 days, headache, abdominal discomfort, coated tongue, and mild right iliac fossa tenderness. His pulse rate is lower than expected for the degree of fever. Similar febrile illness is reported in his hostel. No antibiotic has been started yet.\nAmong the following, which investigation is most sensitive at this stage?",
    options: [
      "Widal test",
      "Stool culture",
      "Urine culture",
      "Blood culture"
    ],
    answerIndex: 3,
    correctAnswerText: "Blood culture"
  },
  {
    id: 41,
    image: "",
    question: "A 23-year-old woman presents with recurrent burning micturition and increased urinary frequency. Urine culture grows gram-negative bacilli. The microbiologist explains that the organism initially colonizes the urinary tract by using hair-like surface appendages that bind to receptors on uroepithelial cells and prevent easy flushing by urine flow.\nWhich bacterial structure is primarily responsible for this initial adherence?",
    options: [
      "Fimbriae / pili",
      "Flagella",
      "Capsule",
      "Lipopolysaccharide"
    ],
    answerIndex: 0,
    correctAnswerText: "Fimbriae / pili"
  },
  {
    id: 42,
    image: "images/IMG_7481.jpeg",
    question: "A 7-year-old child with sickle cell disease is brought with sudden worsening pallor, fever, malaise, tachycardia, and tachypnea. There is no major bleeding. Hemoglobin is markedly reduced, and reticulocyte count is very low. The mother says a classmate recently had fever with a slapped-cheek rash.\nWhich infection most likely triggered this acute event?",
    options: [
      "Epstein-Barr virus",
      "Parvovirus B19",
      "Human herpesvirus 6",
      "Adenovirus"
    ],
    answerIndex: 1,
    correctAnswerText: "Parvovirus B19"
  },
  {
    id: 43,
    image: "",
    question: "A 24-year-old man develops acute watery diarrhea, abdominal cramps, nausea, and low-grade fever after eating undercooked seafood at a coastal restaurant. Stool culture grows curved gram-negative bacilli. On TCBS agar, the colonies appear green, and on Wagatsuma agar containing 2% NaCl, the pathogenic isolate produces a clear zone of hemolysis.\nWhich phenomenon is being demonstrated?",
    options: [
      "Elek phenomenon",
      "Satellitism phenomenon",
      "Kanagawa phenomenon",
      "CAMP phenomenon"
    ],
    answerIndex: 2,
    correctAnswerText: "Kanagawa phenomenon"
  },
  {
    id: 44,
    image: "",
    question: "A 62-year-old diabetic man has a central venous catheter for long-term IV antibiotics. Despite appropriate culture-sensitive antibiotics, he continues to have recurrent fever spikes. Culture from the catheter tip shows organisms embedded in a self-produced extracellular polysaccharide matrix with quorum-sensing activity. Which of the following is the most appropriate reason for treatment failure in this patient?",
    options: [
      "Increased endotoxin release from bacterial cell wall",
      "Slime layer-mediated biofilm formation",
      "IgA protease-mediated mucosal immune evasion",
      "Superantigen-mediated polyclonal T-cell activation"
    ],
    answerIndex: 1,
    correctAnswerText: "Slime layer-mediated biofilm formation"
  },
  {
    id: 45,
    image: "images/IMG_7483.jpeg",
    question: "A 34-year-old construction worker develops low-grade fever, cough, pleuritic chest pain, migratory arthralgia, and tender nodular lesions over the shins after returning from a desert excavation site. Chest imaging shows patchy pneumonic infiltrates. Tissue biopsy reveals large thick-walled round structures filled with multiple internal spores. Which of the following is the most likely diagnosis?",
    options: [
      "Histoplasmosis",
      "Blastomycosis",
      "Coccidioidomycosis",
      "Paracoccidioidomycosis"
    ],
    answerIndex: 2,
    correctAnswerText: "Coccidioidomycosis"
  },
  {
    id: 46,
    image: "images/IMG_7484.jpeg",
    question: "A 28-year-old man from a village near fruit orchards develops high-grade fever, cough, drowsiness, confusion, and rapidly progressive encephalitis. Two family members who cared for him develop similar illness within a few days. The local health team finds fruit bats roosting near the patient’s house. Which of the following agents is most likely responsible?",
    options: [
      "Japanese encephalitis virus",
      "Rabies virus",
      "Hendra virus",
      "Nipah virus"
    ],
    answerIndex: 3,
    correctAnswerText: "Nipah virus"
  },
  {
    id: 47,
    image: "images/IMG_7485.jpeg",
    question: "A 22-year-old sexually active woman presents with dysuria, increased urinary frequency, and suprapubic discomfort. Urine culture grows gram-positive cocci in clusters, which are coagulase-negative, non-hemolytic, and show resistance to novobiocin.\nWhich of the following is the most likely causative organism?",
    options: [
      "Staphylococcus epidermidis",
      "Staphylococcus saprophyticus",
      "Enterococcus faecalis",
      "Escherichia coli"
    ],
    answerIndex: 1,
    correctAnswerText: "Staphylococcus saprophyticus"
  },
  {
    id: 48,
    image: "",
    question: "A 7-year-old child develops severe abdominal cramps and bloody diarrhea 3 days after eating an undercooked beef burger at a picnic. There is no high-grade fever, but after a few days he develops pallor, oliguria, thrombocytopenia, and rising creatinine. Stool culture grows a lactose-fermenting gram-negative bacillus.\nWhich of the following findings is most characteristic of the causative strain?",
    options: [
      "Pink colonies on sorbitol MacConkey agar with heat-labile toxin production",
      "Invasion of colonic mucosa with actin-tail formation",
      "Clear colonies on sorbitol MacConkey agar with Shiga-like toxin production",
      "Comma-shaped organism showing darting motility on dark-field microscopy"
    ],
    answerIndex: 2,
    correctAnswerText: "Clear colonies on sorbitol MacConkey agar with Shiga-like toxin production"
  },
  {
    id: 49,
    image: "images/IMG_7487.jpeg",
    question: "A 62-year-old diabetic ICU patient with a central venous catheter develops persistent fever despite broad-spectrum antibiotics. Blood culture grows brown-buff yeast-like colonies, and microscopy shows gram-positive budding yeast cells with pseudohyphae. The isolate forms elongated outgrowths within 2 hours when incubated in serum at 37°C.\nWhich of the following is the most characteristic diagnostic feature of the organism?",
    options: [
      "Intracellular oval yeast with narrow-based budding inside macrophages",
      "Encapsulated yeast showing clear halo on India ink preparation",
      "Septate hyphae with acute-angle dichotomous branching",
      "Germ tube formation in serum with chlamydospores on corn meal agar"
    ],
    answerIndex: 3,
    correctAnswerText: "Germ tube formation in serum with chlamydospores on corn meal agar"
  },
  {
    id: 50,
    image: "images/IMG_7488.jpeg",
    question: "A farmer presents with chronic swelling of the foot with multiple discharging sinuses draining thick, foul-smelling material. Aspirate shows branching filamentous gram-positive organisms, and modified acid-fast staining demonstrates red filamentous partially acid-fast rods.\nWhich of the following best describes the causative organism?",
    options: [
      "Aerobic, weakly acid-fast, branching filamentous bacterium",
      "Anaerobic, non-acid-fast organism producing sulfur granules",
      "Encapsulated yeast showing narrow-based budding",
      "Septate hyphae with acute-angle dichotomous branching"
    ],
    answerIndex: 0,
    correctAnswerText: "Aerobic, weakly acid-fast, branching filamentous bacterium"
  },
  {
    id: 51,
    image: "",
    question: "A 24-year-old sexually active woman presents with mucopurulent cervical discharge, dysuria, dyspareunia, and intermittent lower abdominal pain. On examination, cervical motion tenderness is present. Gram stain of the discharge shows kidney-shaped gram-negative diplococci inside neutrophils.\nWhich of the following laboratory features best supports the diagnosis?",
    options: [
      "Acidifies both glucose and maltose; grows on blood agar",
      "Acidifies glucose but not maltose; grows on Thayer-Martin agar",
      "Produces swarming growth on blood agar; urease positive",
      "Shows elementary bodies inside epithelial cells; does not grow on routine culture"
    ],
    answerIndex: 1,
    correctAnswerText: "Acidifies glucose but not maltose; grows on Thayer-Martin agar"
  },
  {
    id: 52,
    image: "",
    question: "A 38-year-old HIV-positive man presents with recurrent watery diarrhea, abdominal discomfort, cough, and episodic wheeze. He also complains of a rapidly progressing serpiginous urticarial track starting near the perianal region. Stool wet mount shows rhabditiform larvae only, with no ova.\nWhich of the following parasites is most likely responsible?",
    options: [
      "Ancylostoma duodenale",
      "Enterobius vermicularis",
      "Strongyloides stercoralis",
      "Ascaris lumbricoides"
    ],
    answerIndex: 2,
    correctAnswerText: "Strongyloides stercoralis"
  },
  {
    id: 53,
    image: "",
    question: "A 24-year-old man presents on day 5 of fever with severe myalgia, gum bleeding, abdominal tenderness, and hepatosplenomegaly. His CBC shows leukopenia, thrombocytopenia, and anemia. Over the next 12 hours, his platelet count falls further, while his hematocrit rises rapidly despite no obvious external blood loss.\nWhich of the following is the most important prognostic marker in this patient?",
    options: [
      "Rising hematocrit due to plasma leakage",
      "Absolute leukocyte count",
      "Degree of myalgia",
      "Duration of fever"
    ],
    answerIndex: 0,
    correctAnswerText: "Rising hematocrit due to plasma leakage"
  },
  {
    id: 54,
    image: "",
    question: "A family is brought to the emergency department 45 minutes after eating contaminated food at a village function. They develop intense thirst, constriction in the throat, severe projectile vomiting, colicky abdominal pain, and profuse watery diarrhea later resembling rice-water stools. On examination, the breath has a distinct garlic-like odor, and one patient rapidly develops oliguria with circulatory collapse.\nWhich of the following is the most likely poisoning?",
    options: [
      "Cholera toxin–mediated food poisoning",
      "Acute arsenic poisoning",
      "Yellow phosphorus poisoning",
      "Organophosphorus compound poisoning"
    ],
    answerIndex: 1,
    correctAnswerText: "Acute arsenic poisoning"
  },
  {
    id: 55,
    image: "",
    question: "A forensic medicine resident is asked to demonstrate an early postmortem muscular response in a body brought within 90 minutes of death. On striking the lower third of the quadriceps femoris muscle, about 10 cm above the patella, there is an upward movement of the patella due to contraction of the quadriceps muscle.\nWhich of the following best describes this phenomenon?",
    options: [
      "Cadaveric spasm occurring at the time of death",
      "Postmortem hypostasis due to settling of blood",
      "Zasko’s phenomenon due to postmortem tendon reaction",
      "Rigor mortis due to ATP depletion in muscle"
    ],
    answerIndex: 2,
    correctAnswerText: "Zasko’s phenomenon due to postmortem tendon reaction"
  },
  {
    id: 56,
    image: "images/IMG_7489.jpeg",
    question: "A woman is found dead with multiple bruises around the neck, grouped finger-shaped contusions below the angle of mandible, curved scratch marks over the neck, petechial hemorrhages in the eyes, and bruises over the trunk suggesting struggle. Autopsy shows fracture of the superior horn of thyroid cartilage with carotid intimal tear. No ligature mark is present.\nWhat is the most likely cause of death?",
    options: [
      "Hanging",
      "Ligature strangulation",
      "Smothering",
      "Throttling"
    ],
    answerIndex: 3,
    correctAnswerText: "Throttling"
  },
  {
    id: 57,
    image: "",
    question: "A 16-year-old girl is brought for medicolegal examination after alleged inappropriate sexual contact by a school staff member. The accused argues that the act should not come under child protection law because the victim is “almost adult” and the act was not penetrative. The medical officer explains that protection under the relevant law applies irrespective of sex and includes non-penetrative offences also.\nWhich of the following statements is most appropriate?",
    options: [
      "All individuals below 18 years, both male and female, are protected under POCSO Act",
      "Only female children below 16 years are protected under POCSO Act",
      "Mandatory reporting is optional if the family refuses police intimation",
      "Sexual offences by a person in authority are treated as non-aggravated offences"
    ],
    answerIndex: 0,
    correctAnswerText: "All individuals below 18 years, both male and female, are protected under POCSO Act"
  },
  {
    id: 58,
    image: "",
    question: "A man accused of causing grievous injury is produced before the Court. During trial, he gives irrelevant answers, claims that “voices from the sky ordered him,” and is unable to understand the nature of the proceedings against him. The Magistrate feels that the accused may not be mentally fit to face trial.\nWhat is the most appropriate legal step?",
    options: [
      "Proceed with trial and record conviction if evidence is sufficient",
      "Refer the accused for comprehensive psychiatric evaluation",
      "Release the accused immediately without further inquiry",
      "Transfer the case directly to civil court for guardianship proceedings"
    ],
    answerIndex: 1,
    correctAnswerText: "Refer the accused for comprehensive psychiatric evaluation"
  },
  {
    id: 59,
    image: "images/IMG_7491.jpeg",
    question: "A 28-year-old woman is found dead in bed after an alleged assault. Autopsy shows facial congestion, petechial hemorrhages over the conjunctiva, cyanosis, and congested lungs. However, one finding is considered more useful in pointing toward the specific mechanism of death rather than merely suggesting nonspecific asphyxia.\nWhich of the following findings most reliably indicates smothering?",
    options: [
      "Petechial hemorrhages over conjunctiva and face",
      "Congested emphysematous lungs with serosanguinous fluid",
      "Abrasions around the mouth with lesions within the lips",
      "Dark-colored fluid blood due to carbon dioxide retention"
    ],
    answerIndex: 2,
    correctAnswerText: "Abrasions around the mouth with lesions within the lips"
  },
  {
    id: 60,
    image: "",
    question: "A boy involved in a medico-legal case claims that he is below 18 years, but his physical appearance and school records suggest that he may be older. The court requests an objective skeletal age assessment to resolve whether he has crossed the legal age threshold.\nWhich radiographs will be most useful to resolve this discrepancy?",
    options: [
      "Elbow and ankle joint radiographs",
      "Hip joint radiograph",
      "Shoulder joint radiograph",
      "Wrist and knee joint radiographs"
    ],
    answerIndex: 3,
    correctAnswerText: "Wrist and knee joint radiographs"
  },
  {
    id: 61,
    image: "",
    question: "A 34-year-old married man is brought for evaluation because he repeatedly wears his wife’s clothes in private and experiences intense sexual arousal during the act. He has normal male genitalia, no hormonal abnormality, and does not wish to permanently change his gender. He feels distressed because the behavior is becoming difficult to control.\nWhat is the most likely diagnosis?",
    options: [
      "Transvestic fetishism",
      "Gender dysphoria",
      "Exhibitionism",
      "Voyeurism"
    ],
    answerIndex: 0,
    correctAnswerText: "Transvestic fetishism"
  },
  {
    id: 62,
    image: "",
    question: "A pregnant woman loses her husband in a road traffic accident. Four months later, she delivers a live baby. A property dispute arises in the family, and the relatives question whether the child can legally claim inheritance from the deceased father.\nWhich of the following best describes this child?",
    options: [
      "Supposititious child",
      "Posthumous child",
      "Legitimated child",
      "Adopted child"
    ],
    answerIndex: 1,
    correctAnswerText: "Posthumous child"
  },
  {
    id: 63,
    image: "images/IMG_7492.jpeg",
    question: "A 19-year-old boy is brought to the emergency department after consuming seeds from a roadside plant during a “recreational experiment.” He is restless, disoriented, seeing imaginary insects, febrile, tachycardic, with dry flushed skin, dry mouth, dilated pupils, blurred vision, and urinary retention. Gastric emptying is expected to be delayed.\nWhich of the following is the most appropriate antidotal therapy in severe poisoning?",
    options: [
      "Atropine",
      "Pralidoxime",
      "Physostigmine",
      "Naloxone"
    ],
    answerIndex: 2,
    correctAnswerText: "Physostigmine"
  },
  {
    id: 64,
    image: "images/IMG_7493.jpeg",
    question: "A forensic expert receives a dried stain from the clothing of a victim in a suspected sexual assault case. On adding a saturated aqueous/alcoholic picric acid solution to the extracted fluid, microscopy shows yellow needle-shaped rhombic crystals.\nWhich of the following tests has been performed?",
    options: [
      "Acid phosphatase test",
      "Takayama test",
      "Florence test",
      "Barberio test"
    ],
    answerIndex: 3,
    correctAnswerText: "Barberio test"
  },
  {
    id: 65,
    image: "",
    question: "During autopsy of an adult male, the forensic surgeon notes that stiffness has already appeared in the eyelids, jaw and neck, is beginning to involve the chest, but the lower limbs are still comparatively flaccid. Later, the relatives ask whether this stiffness will disappear in the reverse direction.\nWhich of the following is the most appropriate principle explaining this postmortem change?",
    options: [
      "Rigor mortis appears from head to toe and disappears in the same order",
      "Rigor mortis first appears in lower limbs and disappears from head to toe",
      "Rigor mortis appears only in voluntary muscles and never involves the heart",
      "Rigor mortis disappears in the reverse order of its appearance"
    ],
    answerIndex: 0,
    correctAnswerText: "Rigor mortis appears from head to toe and disappears in the same order"
  },
  {
    id: 66,
    image: "",
    question: "A 3-year-old child is brought to the emergency department after accidental ingestion of multiple tablets kept at home. He initially develops vomiting, abdominal pain, diarrhea and gastrointestinal bleeding, followed by a brief apparently silent phase. A few hours later, he develops metabolic acidosis, cyanosis, hypoglycemia and features of hepatic injury. Abdominal X-ray shows multiple radiopaque tablets in the stomach.\nWhich of the following is the most appropriate chelating agent in this child?",
    options: [
      "Dimercaprol",
      "Deferoxamine",
      "Deferiprone",
      "Penicillamine"
    ],
    answerIndex: 1,
    correctAnswerText: "Deferoxamine"
  },
  {
    id: 67,
    image: "",
    question: "A 17-year-old survivor of sexual assault is required to depose before the court. The judge directs that the proceedings should not be open to the general public and only essential persons connected with the case may remain inside the courtroom.\nWhich of the following legal provisions best supports this direction?",
    options: [
      "BNSS 196 / CrPC 176 – Magistrate inquest",
      "BNSS 195 / CrPC 175 – Power of police officer to summon persons",
      "BNSS 366(2) / CrPC 327 – In-camera trial for rape",
      "BNSS 389 / CrPC 350 – Summary punishment for non-attendance of witness"
    ],
    answerIndex: 2,
    correctAnswerText: "BNSS 366(2) / CrPC 327 – In-camera trial for rape"
  },
  {
    id: 68,
    image: "",
    question: "A 36-year-old man dies after a road traffic accident. The body is brought to the mortuary with multiple external injuries. There is no history of custody, dowry allegation, psychiatric hospital admission, or police firing. The relatives ask whether their consent is required before postmortem examination.\nWhich of the following is the most appropriate legal procedure in this case?",
    options: [
      "Magistrate inquest is mandatory under BNSS 196 / CrPC 176",
      "Autopsy can be done only after written consent of relatives",
      "Postmortem must be ordered directly by the District Magistrate",
      "Police inquest under BNSS 194 / CrPC 174, with autopsy at the request of the investigating police officer"
    ],
    answerIndex: 3,
    correctAnswerText: "Police inquest under BNSS 194 / CrPC 174, with autopsy at the request of the investigating police officer"
  },
  {
    id: 69,
    image: "images/IMG_7494.jpeg",
    question: "A young man is brought to the emergency department after ingesting a clear, colourless liquid kept in a garage. He has vomiting, lethargy, tachypnea, hypotension, high anion gap metabolic acidosis, hypocalcemia, oliguria, and evolving renal failure. Urine microscopy shows envelope-shaped crystals.\nWhich of the following findings most strongly supports the diagnosis?",
    options: [
      "Calcium oxalate crystals in urine",
      "Cherry-red discoloration of skin and venous blood",
      "Garlic odour of breath with rice-water stools",
      "Optic neuritis with sudden visual loss"
    ],
    answerIndex: 0,
    correctAnswerText: "Calcium oxalate crystals in urine"
  },
  {
    id: 70,
    image: "images/IMG_7543.jpeg",
    question: "A 48-year-old agricultural worker presents with progressive weakness, numbness in the feet, and dark mottled pigmentation over the trunk and flexures. Examination shows hyperkeratosis of palms and soles and transverse pale bands across multiple fingernails. He has a history of repeated exposure to pesticide-containing water.\nWhich of the following findings is most characteristic of the suspected poisoning?",
    options: [
      "Burtonian blue line over gums",
      "Aldrich-Mees lines with raindrop pigmentation",
      "Cherry-red discoloration of skin and blood",
      "Greenish-blue urine with oxalate crystalluria"
    ],
    answerIndex: 1,
    correctAnswerText: "Aldrich-Mees lines with raindrop pigmentation"
  },
  {
    id: 71,
    image: "",
    question: "A 32-year-old man is brought for autopsy with a circular entry wound over the chest. The margins show an abrasion collar, surrounding black soot deposition, and multiple punctate reddish-brown marks around the wound. On wiping with a wet gauze, the black discoloration partially disappears, but the punctate marks persist. There is no muzzle imprint or explosive tearing of the skin.\nWhat is the most likely range of firing?",
    options: [
      "Contact range",
      "Distant range",
      "Close range",
      "Ricochet injury"
    ],
    answerIndex: 2,
    correctAnswerText: "Close range"
  },
  {
    id: 72,
    image: "",
    question: "A group of young men develop symptoms after consuming cheap locally brewed alcohol at a party. One of them presents after a latent period with vomiting, abdominal pain, confusion, severe high anion gap metabolic acidosis, and complains that “everything looks blurred like snow.” Fundus examination suggests optic nerve involvement. Blood analysis shows accumulation of a toxic metabolite responsible for visual damage.\nWhich metabolite is most directly responsible for the ocular toxicity in this patient?",
    options: [
      "Acetaldehyde",
      "Oxalic acid",
      "Glycolic acid",
      "Formic acid"
    ],
    answerIndex: 3,
    correctAnswerText: "Formic acid"
  },
  {
    id: 73,
    image: "",
    question: "A decomposed body is recovered from a pond. There are no reliable external signs of drowning. During autopsy, tissue is subjected to acid digestion, centrifuged, and the residue is examined under dark-ground illumination. The finding is considered meaningful only if it indicates that water particles entered the circulation while the victim was still alive.\nWhich of the following findings most strongly supports antemortem drowning?",
    options: [
      "Diatoms in femoral bone marrow matching the water sample",
      "Diatoms only on the skin surface of the recovered body",
      "Absence of diatoms in lung tissue in a decomposed body",
      "Diatoms in stomach contents after swallowing pond water"
    ],
    answerIndex: 0,
    correctAnswerText: "Diatoms in femoral bone marrow matching the water sample"
  },
  {
    id: 74,
    image: "",
    question: "A woman who is already pregnant continues to ovulate during early pregnancy. After intercourse, the newly released ovum is fertilized. Later, she delivers two fetuses, but one appears more mature, while the other is relatively immature, suggesting conception at different times.\nWhich phenomenon best explains this finding?",
    options: [
      "Superfecundation",
      "Superfetation",
      "Posthumous child",
      "Pseudocyesis"
    ],
    answerIndex: 1,
    correctAnswerText: "Superfetation"
  },
  {
    id: 75,
    image: "",
    question: "A postpartum woman develops massive uncontrolled hemorrhage after delivery. Conservative measures fail, she becomes unconscious, and no relative or guardian is immediately available. The obstetrician proceeds with emergency hysterectomy to save her life.\nWhich legal provision best protects the doctor’s action?",
    options: [
      "BNS Section 25 / IPC 87 – Act done with consent, not intended to cause death",
      "BNS Section 26 / IPC 88 – Act done in good faith with patient’s consent",
      "BNS Section 30 / IPC 92 – Act done in good faith for benefit without consent",
      "BNS Section 28 / IPC 89 – Act done for child or person of unsound mind by guardian consent"
    ],
    answerIndex: 2,
    correctAnswerText: "BNS Section 30 / IPC 92 – Act done in good faith for benefit without consent"
  },
  {
    id: 76,
    image: "",
    question: "A body is recovered from a damp, poorly aerated burial site several weeks after death. On examination, the soft tissues are converted into a greyish-white, waxy, greasy material with an offensive-sweetish odour. Facial features are still recognizable, helping in identification.\nWhich of the following best explains this postmortem change?",
    options: [
      "Dehydration of body tissues producing dry, leathery preservation",
      "Bacterial putrefaction producing greenish discoloration and gas formation",
      "ATP depletion causing postmortem stiffening of muscles",
      "Anaerobic hydrolysis and hydrogenation of body fat causing saponification"
    ],
    answerIndex: 3,
    correctAnswerText: "Anaerobic hydrolysis and hydrogenation of body fat causing saponification"
  },
  {
    id: 77,
    image: "",
    question: "A 58-year-old hypertensive man presents with profuse recurrent nasal bleeding. Initial measures including pinching of nose, forward leaning posture, cauterization, and nasal packing fail to control the bleed. Endoscopic vessel ligation is planned near the posterior end of the middle turbinate.\nWhich artery should be ligated first?",
    options: [
      "Sphenopalatine artery",
      "Internal maxillary artery",
      "External carotid artery",
      "Anterior ethmoidal artery"
    ],
    answerIndex: 0,
    correctAnswerText: "Sphenopalatine artery"
  },
  {
    id: 78,
    image: "",
    question: "A 24-year-old woman has intermittent, non-foul-smelling ear discharge for 3 years with mild conductive hearing loss. The ear has been dry for the last 8 weeks. Otoscopy shows a large central subtotal perforation of pars tensa, with intact ossicular chain, no attic retraction, and no cholesteatoma.\nWhat is the most appropriate management?",
    options: [
      "Canal wall down mastoidectomy",
      "Myringoplasty",
      "Stapedotomy",
      "Ossiculoplasty with tympanoplasty"
    ],
    answerIndex: 1,
    correctAnswerText: "Myringoplasty"
  },
  {
    id: 79,
    image: "",
    question: "A 28-year-old patient with suspected conductive hearing loss is sent for formal audiological assessment. During plotting of the audiogram, the technician records air conduction thresholds across a wider frequency range and bone conduction thresholds across a narrower range using pure tones generated by an audiometer.\nWhich of the following statements is most appropriate regarding this test?",
    options: [
      "Bone conduction is tested from 125–8000 Hz and air conduction from 250–4000 Hz",
      "A pure tone contains multiple frequencies and is increased in 10 dB steps",
      "Air conduction is tested from 125–8000 Hz, while bone conduction is tested from 250–4000 Hz",
      "Bone conduction thresholds are plotted only after speech audiometry confirms hearing loss"
    ],
    answerIndex: 2,
    correctAnswerText: "Air conduction is tested from 125–8000 Hz, while bone conduction is tested from 250–4000 Hz"
  },
  {
    id: 80,
    image: "",
    question: "A 62-year-old chronic smoker presents with progressive hoarseness, dysphagia, and noisy breathing. Laryngoscopy shows a growth crossing the glottis with fixed vocal cord. Imaging suggests involvement of supraglottic and subglottic compartments. The surgeon plans a procedure after which the patient will breathe permanently through a tracheal opening in the neck.\nWhich of the following is the most appropriate indication for this procedure?",
    options: [
      "Small T1 glottic lesion with preserved cord mobility",
      "Laryngeal carcinoma with distant metastasis",
      "Unilateral arytenoid involvement with mobile vocal cord",
      "Transglottic carcinoma with cord fixation"
    ],
    answerIndex: 3,
    correctAnswerText: "Transglottic carcinoma with cord fixation"
  },
  {
    id: 81,
    image: "",
    question: "A 15-year-old boy presents with recurrent spontaneous epistaxis, progressive unilateral nasal obstruction, and hyponasal speech. Examination shows a reddish mass in the nasopharynx. Imaging demonstrates anterior bowing of the posterior wall of the maxillary sinus.\nWhich of the following is the most appropriate next step in management?",
    options: [
      "Surgical excision after preoperative embolization",
      "Punch biopsy of the mass before treatment",
      "Intranasal steroid spray and observation",
      "Radiotherapy as first-line treatment in all cases"
    ],
    answerIndex: 0,
    correctAnswerText: "Surgical excision after preoperative embolization"
  },
  {
    id: 82,
    image: "",
    question: "A 58-year-old man presents with dysphagia and deep-seated throat pain radiating to the ear. On barium swallow, a small amount of residual contrast is seen in a paired recess lying lateral to the laryngeal inlet. A fish bone is also suspected to be lodged in this recess.\nWhich anatomical site is most likely involved?",
    options: [
      "Vallecula",
      "Pyriform sinus",
      "Laryngeal vestibule",
      "Postcricoid region"
    ],
    answerIndex: 1,
    correctAnswerText: "Pyriform sinus"
  },
  {
    id: 83,
    image: "",
    question: "A 4-year-old child suddenly develops choking while eating peanuts. He initially has severe cough and respiratory distress, but by the time he reaches the emergency room, he is unresponsive, cyanosed, and not breathing adequately. The foreign body is not visible in the mouth.\nWhat is the most appropriate immediate step?",
    options: [
      "Perform blind finger sweep to remove the foreign body",
      "Give repeated abdominal thrusts until the object is expelled",
      "Activate emergency response and begin CPR with chest compressions",
      "Perform laryngoscopy and push the foreign body distally"
    ],
    answerIndex: 2,
    correctAnswerText: "Activate emergency response and begin CPR with chest compressions"
  },
  {
    id: 84,
    image: "images/IMG_7544.jpeg",
    question: "A 24-year-old male boxer presents after a direct blow to the nose with nasal deformity, swelling, epistaxis, and unilateral nasal obstruction. Examination shows a depressed nasal bridge with no septal hematoma. Imaging supports a displaced fracture of the nasal bones. Closed reduction is planned after edema subsides.\nWhich instrument is most appropriate for reducing this fracture?",
    options: [
      "Tilley’s forceps",
      "Asch’s forceps",
      "Luc’s forceps",
      "Walsham forceps"
    ],
    answerIndex: 3,
    correctAnswerText: "Walsham forceps"
  },
  {
    id: 85,
    image: "",
    question: "A 58-year-old chronic smoker presents with progressive hoarseness for 4 months. Direct laryngoscopy shows an irregular growth over the vocal cord. The surgeon wants to identify carcinoma in situ, early infiltrating carcinoma, and exact tumour margins before transoral laser microsurgery. A supravital stain is applied, and the suspicious area takes up a dark royal-blue colour.\nWhich stain is being used?",
    options: [
      "Toluidine blue",
      "Lugol iodine",
      "Methylene blue",
      "Indigo carmine"
    ],
    answerIndex: 0,
    correctAnswerText: "Toluidine blue"
  },
  {
    id: 86,
    image: "",
    question: "A 22-year-old man is posted for a minor procedure on the external ear. During local anaesthetic planning, the surgeon explains that the tragus and crus of helix, the major part of medial surface, and the concha with retroauricular groove are supplied by different nerves.\nWhich of the following is the correct matching of nerve supply of the pinna?",
    options: [
      "Greater auricular nerve — most medial surface; Auriculotemporal nerve — tragus/crus helix; Facial + Vagus nerve — concha",
      "Lesser occipital nerve — tragus; Greater auricular nerve — concha; Auriculotemporal nerve — medial surface",
      "Auriculotemporal nerve — entire medial surface; Vagus nerve — upper medial surface; Facial nerve — lobule",
      "Facial nerve — crus helix; Lesser occipital nerve — tragus; Greater auricular nerve — concha only"
    ],
    answerIndex: 0,
    correctAnswerText: "Greater auricular nerve — most medial surface; Auriculotemporal nerve — tragus/crus helix; Facial + Vagus nerve — concha"
  },
  {
    id: 87,
    image: "",
    question: "A professional singer develops difficulty in producing high-pitched notes after surgery in the upper neck. On examination, vocal cord mobility is otherwise preserved, but there is defective elongation and tensing of the vocal folds.\nWhich of the following muscle–nerve pairs is most likely affected?",
    options: [
      "Posterior cricoarytenoid — Recurrent laryngeal nerve",
      "Cricothyroid — External branch of superior laryngeal nerve",
      "Lateral cricoarytenoid — Internal branch of superior laryngeal nerve",
      "Thyroarytenoid — Hypoglossal nerve"
    ],
    answerIndex: 1,
    correctAnswerText: "Cricothyroid — External branch of superior laryngeal nerve"
  },
  {
    id: 88,
    image: "",
    question: "A 5-year-old child with bilateral severe sensorineural hearing loss not improving with hearing aids undergoes cochlear implantation. Postoperative skull X-ray shows an extracochlear electrode component acting as a reference/return pathway for electrical stimulation, while the main electrode array is placed inside the cochlea.\nWhich marked structure is being described?",
    options: [
      "Internal magnet",
      "Receiver-stimulator antenna",
      "Ground electrode",
      "Electrode array in scala tympani"
    ],
    answerIndex: 2,
    correctAnswerText: "Ground electrode"
  },
  {
    id: 89,
    image: "images/IMG_7545.jpeg",
    question: "A 14-year-old boy presents with progressive unilateral nasal obstruction, mucoid nasal discharge, and hyponasal voice. Posterior rhinoscopy shows a soft, globular mass filling the choana and hanging behind the soft palate. Lateral soft-tissue nasopharyngeal X-ray shows a crescent of air behind the mass.\nThe lesion most likely arises from which site?",
    options: [
      "Frontal sinus mucosa",
      "Ethmoidal sinus mucosa",
      "Sphenoidal sinus mucosa",
      "Maxillary antrum near accessory ostium"
    ],
    answerIndex: 3,
    correctAnswerText: "Maxillary antrum near accessory ostium"
  },
  {
    id: 90,
    image: "images/IMG_7546.jpeg",
    question: "A 3-year-old child is brought with sudden gagging, dysphagia, excessive salivation, and refusal to feed after playing with coins. X-ray neck shows a round radio-opaque shadow seen face-on in AP view and as a thin edge in lateral view.\nWhich of the following is the most common site of impaction in this condition?",
    options: [
      "Cricopharyngeus",
      "Aortic arch crossing",
      "Left main bronchus crossing",
      "Gastroesophageal junction"
    ],
    answerIndex: 0,
    correctAnswerText: "Cricopharyngeus"
  },
  {
    id: 91,
    image: "",
    question: "A 24-year-old patient undergoes nasal reconstructive surgery for post-traumatic external nasal deformity. During the procedure, the surgeon makes an incision across the columella, elevates the nasal skin–soft tissue envelope, and obtains wide exposure of the underlying osteocartilaginous framework.\nWhich of the following procedures is most specifically associated with this incision?",
    options: [
      "Endoscopic septoplasty",
      "Open rhinoplasty",
      "Caldwell-Luc operation",
      "Functional endoscopic sinus surgery"
    ],
    answerIndex: 1,
    correctAnswerText: "Open rhinoplasty"
  },
  {
    id: 92,
    image: "images/IMG_7547.jpeg",
    question: "A 32-year-old woman presents with recurrent crusting inside the nose, occasional epistaxis, and a peculiar whistling sound during breathing. She gives a history of surgery done a few years ago for long-standing nasal obstruction due to deviated nasal septum. Examination shows a perforation in the nasal septum.\nWhich previous surgical procedure is most classically associated with this complication?",
    options: [
      "Septoplasty with Freer’s incision and unilateral flap elevation",
      "Inferior turbinectomy with mucosal preservation",
      "Submucous resection with bilateral mucoperichondrial flap elevation",
      "Functional endoscopic sinus surgery"
    ],
    answerIndex: 2,
    correctAnswerText: "Submucous resection with bilateral mucoperichondrial flap elevation"
  },
  {
    id: 93,
    image: "",
    question: "A 40-year-old woman presents with slowly progressive bilateral hearing loss for several years, which worsened after pregnancy. She has tinnitus but no ear discharge. Pure tone audiometry shows conductive hearing loss with an air–bone gap and a characteristic dip in bone conduction around 2000 Hz. On otoscopy, a reddish hue is seen through the tympanic membrane over the promontory.\nWhich of the following best explains the otoscopic finding in this patient?",
    options: [
      "Bluish mass behind tympanic membrane due to glomus tumor",
      "Retraction pocket in pars flaccida due to attic cholesteatoma",
      "Flamingo-pink tympanic membrane due to acute otitis media",
      "Active otospongiotic focus over the promontory producing Schwartze sign"
    ],
    answerIndex: 3,
    correctAnswerText: "Active otospongiotic focus over the promontory producing Schwartze sign"
  },
  {
    id: 94,
    image: "",
    question: "A young man presents with unilateral hearing loss after a small traumatic perforation of the left tympanic membrane. On examination, there is no vertigo and no facial weakness. A 512 Hz tuning fork is used for bedside hearing assessment.\nWhich of the following tuning fork findings is most likely in this patient?",
    options: [
      "Rinne negative in left ear with Weber lateralized to left ear",
      "Rinne positive in left ear with Weber lateralized to right ear",
      "Rinne negative in right ear with Weber lateralized to right ear",
      "Rinne positive bilaterally with Weber lateralized to left ear"
    ],
    answerIndex: 0,
    correctAnswerText: "Rinne negative in left ear with Weber lateralized to left ear"
  },
  {
    id: 95,
    image: "images/IMG_7548.jpeg",
    question: "A 48-year-old woman presents with progressive right-sided hearing loss and pulsatile tinnitus. Otoscopy shows a reddish mass behind an intact tympanic membrane. CT temporal bone shows erosion around the jugular bulb with loss of the bony crest separating the carotid canal from the jugular foramen.\nWhich of the following radiological signs is most specifically suggested?",
    options: [
      "Holman-Miller sign",
      "Phelps sign",
      "Schwartze sign",
      "Carhart notch"
    ],
    answerIndex: 1,
    correctAnswerText: "Phelps sign"
  },
  {
    id: 96,
    image: "",
    question: "A 9-year-old child with long-standing renal disease is brought with progressive bowing of legs, poor growth, and bone pain. Investigations show hypocalcemia, hyperphosphatemia, low 1,25-dihydroxyvitamin D, and elevated parathyroid hormone levels.\nWhich of the following is the most appropriate initial management for the skeletal abnormality in this child?",
    options: [
      "Immediate hemodialysis as first-line therapy",
      "Dietary calcium restriction with high phosphate intake",
      "Calcium and active vitamin D supplementation",
      "Observation until renal transplantation is planned"
    ],
    answerIndex: 2,
    correctAnswerText: "Calcium and active vitamin D supplementation"
  },
  {
    id: 97,
    image: "",
    question: "A newborn is evaluated for prolonged jaundice, lethargy, poor feeding, constipation, and macroglossia. Thyroid profile shows low T3 and low T4 with elevated TSH. Ultrasound neck shows a normally located and structurally normal thyroid gland, but radionuclide scan shows absent radioactive iodine uptake.\nWhich step of thyroid hormone synthesis is most likely defective in this child?",
    options: [
      "Coupling of MIT and DIT within thyroglobulin",
      "Oxidation of iodide by thyroid peroxidase",
      "Proteolysis of thyroglobulin in lysosomes",
      "Iodide trapping by sodium-iodide symporter"
    ],
    answerIndex: 3,
    correctAnswerText: "Iodide trapping by sodium-iodide symporter"
  },
  {
    id: 98,
    image: "",
    question: "A 17-year-old boy is brought for evaluation of progressive blurred vision. He is unusually tall with long slender fingers, pectus deformity, scoliosis, and an arm span greater than height. Ophthalmic examination shows upward and outward lens displacement. Echocardiography reveals aortic root dilatation with early valvular regurgitation.\nWhich of the following proteins is most likely defective in this condition?",
    options: [
      "Fibrillin-1",
      "Type III collagen",
      "Lysyl hydroxylase",
      "TGF-β receptor"
    ],
    answerIndex: 0,
    correctAnswerText: "Fibrillin-1"
  },
  {
    id: 99,
    image: "",
    question: "A 24-year-old primigravida at 14 weeks of gestation is detected to be HIV-positive during routine antenatal screening. She is asymptomatic, her CD4 count is 720 cells/mm³, and there is no evidence of opportunistic infection. She asks whether ART can be postponed since her immunity is preserved.\nWhat is the most appropriate next step under PPTCT services?",
    options: [
      "Defer ART until CD4 count falls below 350 cells/mm³",
      "Start lifelong Tenofovir + Lamivudine + Dolutegravir immediately",
      "Give single-dose Nevirapine only during labour",
      "Start ART only if plasma viral load is high at 32–36 weeks"
    ],
    answerIndex: 1,
    correctAnswerText: "Start lifelong Tenofovir + Lamivudine + Dolutegravir immediately"
  },
  {
    id: 100,
    image: "images/IMG_7550.jpeg",
    question: "A newborn has absence of the index finger, asymmetric constriction rings over the limbs, and distal limb deformities. Antenatal history is unremarkable and karyotype is normal. The pediatrician explains that the affected body parts were initially formed normally but were later damaged by fibrous strands floating in the amniotic cavity.\nWhich developmental mechanism best explains this condition?",
    options: [
      "Deformation due to sustained intrauterine mechanical pressure",
      "Malformation due to primary intrinsic defect in organogenesis",
      "Disruption due to destruction of a previously normal structure",
      "Dysplasia due to abnormal organization of tissue cells"
    ],
    answerIndex: 2,
    correctAnswerText: "Disruption due to destruction of a previously normal structure"
  },
  {
    id: 101,
    image: "",
    question: "A 2-year-old child is brought to the emergency room with high-grade fever and generalized tonic-clonic movements for the last 8 minutes. The airway is positioned, oxygen is given, and IV access is secured. The child is still convulsing.\nWhich of the following is the most appropriate immediate drug to abort the seizure?",
    options: [
      "IV phenytoin",
      "IV valproate",
      "IV phenobarbitone",
      "IV diazepam"
    ],
    answerIndex: 3,
    correctAnswerText: "IV diazepam"
  },
  {
    id: 102,
    image: "",
    question: "A 7-month-old breastfed infant is brought for routine growth monitoring. The mother says she has started semi-solid home food but is unsure about the correct frequency and amount of complementary feeding. The child is active, gaining weight, and continues to breastfeed frequently.\nAs per IYCF guidelines, what is the most appropriate feeding advice?",
    options: [
      "½–1 katori, 3 times/day along with frequent breastfeeding",
      "2–3 tablespoons, 2 times/day along with frequent breastfeeding",
      "¾ katori, 3 meals + 1 snack along with breastfeeding",
      "Full katori, 3 meals + 2 snacks along with breastfeeding"
    ],
    answerIndex: 0,
    correctAnswerText: "½–1 katori, 3 times/day along with frequent breastfeeding"
  },
  {
    id: 103,
    image: "",
    question: "A 3-year-old child is evaluated in a nutrition clinic. His weight-for-age curve shows repeated crossing of growth percentiles and later drops below –2 SD. On further anthropometric assessment, the clinician wants to identify the best indicator of long-term nutritional deprivation rather than acute recent weight loss.\nWhich of the following anthropometric interpretations is most appropriate?",
    options: [
      "Low weight-for-height indicates chronic malnutrition",
      "Low height-for-age indicates stunting due to chronic malnutrition",
      "Low weight-for-age specifically differentiates wasting from stunting",
      "High weight-for-height indicates acute severe malnutrition"
    ],
    answerIndex: 1,
    correctAnswerText: "Low height-for-age indicates stunting due to chronic malnutrition"
  },
  {
    id: 104,
    image: "images/IMG_7551.jpeg",
    question: "A neonate is brought with seizures, enlarged head circumference, and poor visual fixation. Fundus examination shows bilateral chorioretinitis, and neuroimaging shows diffuse intracranial calcifications with hydrocephalus. The mother gives a history of febrile illness with lymphadenopathy during early pregnancy after exposure to cats.\nWhich investigation would best confirm the diagnosis in this neonate?",
    options: [
      "Anti-toxoplasma IgG in neonatal serum",
      "Maternal anti-toxoplasma IgG titre",
      "Anti-toxoplasma IgM / IgA antibodies in the neonate",
      "Blood culture for Toxoplasma gondii"
    ],
    answerIndex: 2,
    correctAnswerText: "Anti-toxoplasma IgM / IgA antibodies in the neonate"
  },
  {
    id: 105,
    image: "",
    question: "A pediatrician explains growth patterns to interns using four standard growth curves. One curve reaches almost adult size very early in life, another overshoots adult size during childhood and later regresses, another shows a sigmoid pattern with pubertal spurt, and the last remains nearly flat until puberty before rising rapidly.\nWhich of the following correctly matches these curves?",
    options: [
      "1—Waldeyer’s ring, 2—Brain, 3—Testicular growth, 4—Somatic growth",
      "1—Somatic growth, 2—Brain, 3—Waldeyer’s ring, 4—Testicular growth",
      "1—Brain, 2—Somatic growth, 3—Waldeyer’s ring, 4—Testicular growth",
      "1—Brain, 2—Waldeyer’s ring, 3—Somatic growth, 4—Testicular growth"
    ],
    answerIndex: 3,
    correctAnswerText: "1—Brain, 2—Waldeyer’s ring, 3—Somatic growth, 4—Testicular growth"
  },
  {
    id: 106,
    image: "images/IMG_7552.jpeg",
    question: "A 6-year-old child is brought with chronic diarrhea, abdominal pain, weight loss, short stature, fatigue, and iron-deficiency anemia. Upper GI endoscopy with duodenal biopsy shows villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes. The pediatrician suspects an autoimmune enteropathy triggered by gluten.\nWhich of the following is the best initial serological investigation?",
    options: [
      "Anti-tissue transglutaminase IgA with total IgA level",
      "Anti-Saccharomyces cerevisiae antibody",
      "Anti-intrinsic factor antibody",
      "Stool reducing substance test"
    ],
    answerIndex: 0,
    correctAnswerText: "Anti-tissue transglutaminase IgA with total IgA level"
  },
  {
    id: 107,
    image: "images/IMG_7553.jpeg",
    question: "A 14-year-old child presents with recurrent occipital headache, neck pain, intermittent dizziness, and hand weakness. MRI craniovertebral junction shows downward displacement of cerebellar tonsils through the foramen magnum, with associated syringomyelia.\nWhich of the following is the most likely diagnosis?",
    options: [
      "Dandy-Walker malformation",
      "Chiari type I malformation",
      "Chiari type II malformation",
      "Joubert syndrome"
    ],
    answerIndex: 1,
    correctAnswerText: "Chiari type I malformation"
  },
  {
    id: 108,
    image: "",
    question: "A full-term neonate develops severe respiratory distress immediately after birth. On examination, there is scaphoid abdomen, decreased breath sounds on the left side, and bowel sounds are heard over the chest. Chest X-ray shows bowel loops in the thorax with mediastinal shift and paucity of bowel gas in the abdomen.\nWhich of the following is the most likely anatomical defect?",
    options: [
      "Right anterior parasternal defect",
      "Central tendon defect",
      "Left posterolateral pleuroperitoneal membrane defect",
      "Esophageal hiatus defect"
    ],
    answerIndex: 2,
    correctAnswerText: "Left posterolateral pleuroperitoneal membrane defect"
  },
  {
    id: 109,
    image: "",
    question: "A 5-month-old infant is brought with failure to thrive, persistent oral thrush, chronic diarrhea, recurrent pneumonia, and extensive diaper rash. Examination shows absent tonsils and poorly palpable lymph nodes. Chest X-ray shows a very small thymic shadow. Flow cytometry reveals severe lymphopenia involving multiple lymphocyte subsets.\nWhich of the following defects best explains this child’s condition?",
    options: [
      "Mutation in Bruton tyrosine kinase",
      "Defect in CD40 ligand",
      "Mutation in common gamma chain of cytokine receptors",
      "Deficiency of adenosine deaminase"
    ],
    answerIndex: 3,
    correctAnswerText: "Deficiency of adenosine deaminase"
  },
  {
    id: 110,
    image: "images/IMG_7554.jpeg",
    question: "A 9-month-old infant is brought with acute watery non-bloody diarrhea, vomiting, low-grade fever, and moderate dehydration. Stool electron microscopy shows a cartwheel / spoke-wheel appearance. The pediatric resident explains that the organism has a segmented genome and therefore can undergo genetic reassortment.\nWhich of the following statements about this organism is most appropriate?",
    options: [
      "It has 11 segments of double-stranded RNA and is not included in catch-up immunization",
      "It is an enveloped single-stranded RNA virus causing bloody diarrhea",
      "It commonly causes diarrhea in adults through preformed toxin production",
      "It is diagnosed mainly by stool ova and cyst examination"
    ],
    answerIndex: 0,
    correctAnswerText: "It has 11 segments of double-stranded RNA and is not included in catch-up immunization"
  },
  {
    id: 111,
    image: "images/IMG_7555.jpeg",
    question: "A 4-month-old infant is evaluated for progressively increasing head circumference, repeated vomiting, seizures, and developmental delay. Neuroimaging shows a posterior fossa cystic lesion with obstructed CSF flow causing non-communicating hydrocephalus.\nWhich of the following imaging associations most strongly points to the diagnosis?",
    options: [
      "Downward herniation of cerebellar tonsils through foramen magnum",
      "Cystic dilatation of the fourth ventricle with hypoplastic cerebellar vermis and enlarged posterior fossa",
      "Small posterior fossa with myelomeningocele and downward displacement of medulla",
      "Molar-tooth appearance due to cerebellar vermis hypoplasia and thickened superior cerebellar peduncles"
    ],
    answerIndex: 1,
    correctAnswerText: "Cystic dilatation of the fourth ventricle with hypoplastic cerebellar vermis and enlarged posterior fossa"
  },
  {
    id: 112,
    image: "images/IMG_7556.jpeg",
    question: "A 6-year-old child is evaluated for recurrent chest infections and intermittent postprandial respiratory discomfort. Chest imaging shows bowel gas shadows in the anterior cardiophrenic angle. The surgeon explains that the defect is through the space between the sternum and costal cartilages, rather than through the oesophageal opening or posterolateral diaphragm.\nWhich of the following best identifies this hernia?",
    options: [
      "Sliding hiatal hernia through oesophageal hiatus",
      "Bochdalek hernia through posterolateral diaphragm",
      "Morgagni hernia through sternocostal triangle",
      "Traumatic diaphragmatic rupture through central tendon"
    ],
    answerIndex: 2,
    correctAnswerText: "Morgagni hernia through sternocostal triangle"
  },
  {
    id: 113,
    image: "",
    question: "A 3-year-old boy is brought with delayed milestones, dystonic posturing, repeated biting of lips and fingers, and reddish-orange crystals in the diaper since infancy. Examination shows choreoathetoid movements and multiple self-inflicted injuries. Serum uric acid is markedly elevated.\nWhich of the following is the most likely diagnosis?",
    options: [
      "Ataxia telangiectasia",
      "Wiskott-Aldrich syndrome",
      "Severe combined immunodeficiency",
      "Lesch-Nyhan syndrome"
    ],
    answerIndex: 3,
    correctAnswerText: "Lesch-Nyhan syndrome"
  },
  {
    id: 114,
    image: "",
    question: "A 42-year-old man with chronic renal impairment is taken for emergency laparotomy. After induction, the anesthetist chooses a non-depolarizing neuromuscular blocker with organ-independent elimination. Within minutes of a rapid IV bolus, the patient develops facial flushing, erythema over the chest, wheeze, and sudden hypotension. There is no prior drug allergy history.\nWhich of the following drugs was most likely administered?",
    options: [
      "Rocuronium",
      "Vecuronium",
      "Cisatracurium",
      "Atracurium"
    ],
    answerIndex: 3,
    correctAnswerText: "Atracurium"
  },
  {
    id: 115,
    image: "",
    question: "A 35-year-old man is brought after a road traffic accident with severe maxillofacial trauma. He has copious oral debris, active oropharyngeal bleeding, falling oxygen saturation, and repeated attempts at orotracheal intubation fail. The anesthetist performs an emergency airway through the cricothyroid membrane to rapidly oxygenate the patient.\nWhich of the following is the most appropriate true statement regarding this procedure?",
    options: [
      "It is a temporary emergency airway and should be followed by tracheostomy",
      "It is preferred as a definitive long-term airway over tracheostomy",
      "It provides excellent CO₂ clearance when done as needle cricothyrotomy",
      "It is avoided in emergencies because tracheostomy is faster and safer"
    ],
    answerIndex: 0,
    correctAnswerText: "It is a temporary emergency airway and should be followed by tracheostomy"
  },
  {
    id: 116,
    image: "",
    question: "A 32-year-old man develops rapid-onset severe dyspnea 3 days after severe pancreatitis. ABG shows refractory hypoxemia. Chest imaging shows bilateral diffuse pulmonary infiltrates without cardiomegaly. His PaO₂/FiO₂ ratio is 90 mmHg while receiving PEEP of 5 cm H₂O.\nWhich ventilator strategy is most appropriate to reduce ventilator-induced lung injury in this patient?",
    options: [
      "High tidal volume with low PEEP",
      "Low tidal volume with high PEEP",
      "Low respiratory rate with zero PEEP",
      "High tidal volume with permissive hyperoxia"
    ],
    answerIndex: 1,
    correctAnswerText: "Low tidal volume with high PEEP"
  },
  {
    id: 117,
    image: "",
    question: "A 19-year-old boy undergoing emergency appendicectomy receives sevoflurane for induction and succinylcholine for muscle relaxation. Within minutes, the anesthetist notices rapidly rising end-tidal CO₂ despite adequate ventilation, generalized muscle rigidity, tachycardia, hyperthermia, metabolic acidosis, and hyperkalemia.\nWhich drug should be given immediately to directly stop the underlying skeletal muscle pathology?",
    options: [
      "Flumazenil",
      "Neostigmine",
      "Dantrolene",
      "Calcium gluconate"
    ],
    answerIndex: 2,
    correctAnswerText: "Dantrolene"
  },
  {
    id: 118,
    image: "",
    question: "A 3-year-old child is posted for venipuncture. To reduce pain, a topical eutectic local anaesthetic cream is applied under an occlusive dressing 1 hour before the procedure. After accidental excessive application over a large area, the child develops cyanosis not improving with oxygen, chocolate-brown colored blood, and pulse oximetry persistently around 85%.\nWhich component of the applied preparation is most likely responsible for this complication?",
    options: [
      "Lidocaine",
      "Prilocaine",
      "Ropivacaine",
      "Bupivacaine"
    ],
    answerIndex: 1,
    correctAnswerText: "Prilocaine"
  },
  {
    id: 119,
    image: "",
    question: "A 32-year-old trauma patient is drowsy but still has a preserved gag reflex. Bag-mask ventilation is difficult because of macroglossia and limited mouth opening. There is no evidence of facial trauma, CSF rhinorrhea, or suspected basal skull fracture. The resident chooses a lubricated soft airway inserted through the nostril.\nWhich of the following is the most appropriate true statement regarding this airway device?",
    options: [
      "It commonly causes dental trauma because it is inserted through the oral cavity",
      "It is absolutely contraindicated in conscious patients due to gag reflex stimulation",
      "It can be used in conscious patients as it bypasses the gag reflex",
      "It is preferred in patients with basilar skull fracture and midface trauma"
    ],
    answerIndex: 2,
    correctAnswerText: "It can be used in conscious patients as it bypasses the gag reflex"
  },
  {
    id: 120,
    image: "images/IMG_7557.jpeg",
    question: "A patient with severe respiratory distress has pneumothorax with marked tracheal deviation. An emergency surgical airway is being considered, but the surgeon warns that tracheostomy will be technically difficult in this patient.\nWhat is the most important reason for difficulty in performing tracheostomy in this situation?",
    options: [
      "Thyroid isthmus cannot be displaced during tracheostomy",
      "Strap muscles cannot be retracted laterally in pneumothorax",
      "Tracheal incision must always be made through the first tracheal ring",
      "The trachea is displaced from the midline, making accurate localization difficult"
    ],
    answerIndex: 3,
    correctAnswerText: "The trachea is displaced from the midline, making accurate localization difficult"
  },
  {
    id: 121,
    image: "",
    question: "A 42-year-old man undergoes laparoscopic cholecystectomy under general anaesthesia. Rocuronium was used for muscle relaxation. At the end of surgery, the patient has persistent neuromuscular blockade, but renal function tests are normal. The anaesthetist chooses a drug that forms a 1:1 encapsulating complex with the relaxant and reverses blockade rapidly without relying on acetylcholinesterase inhibition.\nWhich of the following is the most appropriate drug?",
    options: [
      "Neostigmine",
      "Edrophonium",
      "Sugammadex",
      "Glycopyrrolate"
    ],
    answerIndex: 2,
    correctAnswerText: "Sugammadex"
  },
  {
    id: 122,
    image: "",
    question: "A 36-year-old patient on mechanical ventilation suddenly develops severe hypoxia, tachycardia, hypotension, and markedly reduced air entry on the left side. Chest radiograph shows a hyperlucent left hemithorax, absent peripheral bronchovascular markings, collapsed lung margin, and mediastinal shift to the opposite side.\nWhich of the following is the most likely diagnosis?",
    options: [
      "Massive pulmonary embolism",
      "Left lower lobe atelectasis",
      "Main bronchus obstruction",
      "Tension pneumothorax"
    ],
    answerIndex: 3,
    correctAnswerText: "Tension pneumothorax"
  },
  {
    id: 123,
    image: "",
    question: "A 7-year-old child is brought to the emergency department in a stuporous state with absent effective circulation. Monitor shows a wide-complex tachyarrhythmia with continuously changing QRS morphology and axis, suggestive of polymorphic ventricular tachycardia.\nWhat is the most appropriate immediate management?",
    options: [
      "Immediate defibrillation followed by CPR for 2 minutes",
      "IV adenosine rapid bolus followed by rhythm reassessment",
      "Synchronized cardioversion after procedural sedation",
      "IV magnesium sulfate and observation until rhythm stabilizes"
    ],
    answerIndex: 0,
    correctAnswerText: "Immediate defibrillation followed by CPR for 2 minutes"
  },
  {
    id: 124,
    image: "",
    question: "A patient is being manually ventilated through a Mapleson-C anaesthetic breathing system. During ventilation, the anaesthetist adjusts a small valve near the reservoir bag so that excessive airway pressure does not build up. The valve is designed to vent excess gas once airway pressure crosses a safety limit.\nWhich of the following statements best describes this marked component?",
    options: [
      "It is a unidirectional inspiratory valve that opens only during spontaneous inspiration",
      "It is an adjustable pressure-limiting valve that opens at around 30–40 cm H₂O",
      "It is a soda lime canister attachment that prevents carbon dioxide rebreathing",
      "It is a fixed PEEP valve that maintains alveolar recruitment during expiration"
    ],
    answerIndex: 1,
    correctAnswerText: "It is an adjustable pressure-limiting valve that opens at around 30–40 cm H₂O"
  },
  {
    id: 125,
    image: "",
    question: "An unconscious trauma victim is brought to the emergency area after a road traffic accident. He is unresponsive, but carotid pulse is palpable and spontaneous breathing is present. There is no active seizure. While waiting for definitive help, the junior resident wants to position him in a way that reduces the risk of aspiration and tongue-fall airway obstruction, while allowing continued airway observation.\nWhich of the following is the most appropriate position?",
    options: [
      "Supine position with neck hyperextension",
      "Trendelenburg position",
      "Modified lateral recovery position",
      "Prone position with chest compression"
    ],
    answerIndex: 2,
    correctAnswerText: "Modified lateral recovery position"
  },
  {
    id: 126,
    image: "",
    question: "During elective laparoscopic surgery under general anaesthesia, the anaesthetist observes a normal capnogram. The resident is asked to identify the portion of the waveform that represents CO₂-rich alveolar gas, where the last part of exhaled alveolar air is sampled to measure ETCO₂.\nWhich phase of the capnographic waveform is being described?",
    options: [
      "Phase 0 – Inspiratory downstroke",
      "Phase I – Inspiratory baseline",
      "Phase II – Expiratory upstroke",
      "Phase III – Alveolar plateau"
    ],
    answerIndex: 3,
    correctAnswerText: "Phase III – Alveolar plateau"
 },
  {
    id: 127,
    image: "",
    question: "A 28-year-old man is posted for a short forearm procedure. After exsanguination of the limb, a double-cuff tourniquet is applied and local anaesthetic is injected intravenously into the isolated limb. The surgeon asks for a longer-acting agent, but the anaesthetist refuses because accidental early tourniquet release may cause fatal cardiotoxicity.\nWhich drug should be avoided in this technique?",
    options: [
      "Bupivacaine",
      "Lignocaine",
      "Prilocaine",
      "Chloroprocaine"
    ],
    answerIndex: 0,
    correctAnswerText: "Bupivacaine"
  },
  {
    id: 128,
    image: "",
    question: "A 42-year-old obese male is planned for elective endotracheal intubation. The anaesthetist places a pillow under the occiput, elevates the head about 5–10 cm, and then performs laryngoscopy after adjusting the head and neck to optimize glottic visualization. During teaching, the resident is asked which anatomical alignment is being achieved.\nWhich of the following statements is most accurate regarding this position?",
    options: [
      "It is achieved by extension of the cervical spine with flexion at the atlanto-occipital joint",
      "It is achieved by flexion of the lower cervical spine with extension at the atlanto-occipital joint",
      "It is the preferred position when cervical spine injury is suspected",
      "It requires the Miller blade tip to be placed in the vallecula"
    ],
    answerIndex: 1,
    correctAnswerText: "It is achieved by flexion of the lower cervical spine with extension at the atlanto-occipital joint"
  },
  {
    id: 129,
    image: "",
    question: "A 6-year-old child develops persistent biphasic stridor and mild hoarseness a few weeks after prolonged ICU ventilation. Flexible airway evaluation shows a circumferential narrowing just below the vocal cords. On endoscopic assessment, the airway lumen is reduced by approximately 80%, but a small lumen is still visible.\nAccording to Cotton-Myer grading, this stenosis belongs to which grade?",
    options: [
      "Grade I",
      "Grade II",
      "Grade III",
      "Grade IV"
    ],
    answerIndex: 2,
    correctAnswerText: "Grade III"
  },
  {
    id: 130,
    image: "images/IMG_7558.jpeg",
    question: "A 5-year-old child is brought with painful clustered vesicles and shallow ulcers around the lips and oral mucosa. The mother says the child had fever and poor oral intake for 2 days. A smear from the lesion shows multinucleated giant cells with moulded nuclei and ground-glass chromatin. The clinician wants the most sensitive test that can also differentiate HSV-1 from HSV-2.\nWhich of the following is the best investigation?",
    options: [
      "Tzanck smear from the base of vesicle",
      "HSV DNA PCR from lesion swab",
      "Serum HSV IgG antibody level",
      "Routine bacterial culture of vesicular fluid"
    ],
    answerIndex: 1,
    correctAnswerText: "HSV DNA PCR from lesion swab"
  },
  {
    id: 131,
    image: "images/IMG_7559.jpeg",
    question: "A 4-year-old child is brought by parents for a single pale patch present since infancy over the trunk. The lesion has remained stable in size and distribution, with normal sensation and texture. There is no hyperpigmented border. On Wood’s lamp examination, the lesion shows off-white accentuation, and diascopy does not make it disappear.\nWhat is the most likely diagnosis?",
    options: [
      "Nevus anemicus",
      "Vitiligo",
      "Nevus depigmentosus",
      "Ash-leaf macule of tuberous sclerosis"
    ],
    answerIndex: 2,
    correctAnswerText: "Nevus depigmentosus"
  },
  {
    id: 132,
    image: "images/IMG_7560.jpeg",
    question: "A 32-year-old barefoot agricultural worker presents with a slowly progressive, painless swelling of the foot for 3 years. Multiple discharging sinuses are seen, and the discharge contains black granules. The clinician suspects a fungal etiology and sends the crushed granules for KOH mount.\nWhich of the following microscopic findings is most likely?",
    options: [
      "Thin branching filaments less than 1 μm in diameter",
      "Budding yeast cells with pseudohyphae",
      "Broad aseptate ribbon-like hyphae",
      "Septate hyphae measuring 4–5 μm"
    ],
    answerIndex: 3,
    correctAnswerText: "Septate hyphae measuring 4–5 μm"
  },
  {
    id: 133,
    image: "images/IMG_7561.jpeg",
    question: "A 6-year-old child is brought with dry rough skin, lustreless hair, and multiple follicular hyperkeratotic papules over the extensor surfaces. The mother also mentions poor dietary intake. On examination, the lesions are consistent with phrynoderma.\nWhat is the next most important step in evaluation?",
    options: [
      "Ocular examination for xerophthalmia",
      "KOH mount from skin scrapings",
      "Skin biopsy for hyperkeratosis",
      "Serum zinc level estimation"
    ],
    answerIndex: 0,
    correctAnswerText: "Ocular examination for xerophthalmia"
  },
  {
    id: 134,
    image: "images/IMG_7563.jpeg",
    question: "A 28-year-old man presents with a slowly progressive, painless reddish-brown plaque over the cheek extending to the side of the neck. The lesion has an elevated serpiginous border, central atrophy, and heals with scarring. On diascopy, apple-jelly nodules are seen. Chest X-ray shows an old healed apical lesion.\nWhich investigation is most useful to confirm the diagnosis?",
    options: [
      "Diascopy",
      "Polymerase chain reaction",
      "Ziehl-Neelsen staining of skin smear",
      "Chest X-ray"
    ],
    answerIndex: 1,
    correctAnswerText: "Polymerase chain reaction"
  },
  {
    id: 135,
    image: "images/IMG_7564.jpeg",
    question: "A 24-year-old man presents with severely itchy grouped vesicles and papules over the extensor surfaces of both elbows and knees. He also gives a history of intermittent loose stools after wheat-containing meals. Skin biopsy shows subepidermal blistering with neutrophilic microabscesses at papillary tips. Direct immunofluorescence shows granular deposits at the dermal papillae.\nWhich of the following is the most likely target antigen in this condition?",
    options: [
      "Desmoglein-3",
      "BP180 hemidesmosomal antigen",
      "Epidermal transglutaminase-3",
      "Type VII collagen"
    ],
    answerIndex: 2,
    correctAnswerText: "Epidermal transglutaminase-3"
  },
  {
    id: 136,
    image: "",
    question: "A 52-year-old man presents with burning sensation in the mouth, especially while eating spicy food. Oral examination shows reticular white lacy patches with erosions over the buccal mucosa. He was started on medication for hypertension several months ago. Biopsy shows hyperkeratosis, hypergranulosis, saw-tooth acanthosis, and a band-like lymphocytic infiltrate in the upper dermis.\nWhich of the following drugs is most likely responsible for this condition?",
    options: [
      "Hydrochlorothiazide",
      "Lithium",
      "Methyldopa",
      "Propranolol"
    ],
    answerIndex: 3,
    correctAnswerText: "Propranolol"
  },
  {
    id: 137,
    image: "images/IMG_7566.jpeg",
    question: "A middle-aged patient presents with diffuse orange-red scaly plaques over the trunk and limbs. Examination shows well-demarcated islands of normal skin within erythematous plaques, rough follicular papules over the elbows and wrists, and orange-yellow thickening of palms and soles. Biopsy is planned to differentiate it from psoriasis.\nWhich of the following histopathological findings is most characteristic of this condition?",
    options: [
      "Alternating orthokeratosis and parakeratosis with follicular plugging",
      "Band-like lymphocytic infiltrate with saw-tooth acanthosis",
      "Subepidermal blister with papillary tip neutrophilic microabscesses",
      "Munro microabscesses with regular elongation of rete ridges"
    ],
    answerIndex: 0,
    correctAnswerText: "Alternating orthokeratosis and parakeratosis with follicular plugging"
  },
  {
    id: 138,
    image: "",
    question: "A young adult presents with a single hypopigmented patch over the forearm with definite sensory loss. The nearby ulnar nerve is thickened. Skin biopsy shows well-formed epithelioid granulomas with Langhans giant cells, arranged along neurovascular bundles and extending close to the epidermis.\nWhich of the following findings is most likely in this patient?",
    options: [
      "Prominent Grenz zone with numerous foamy macrophages",
      "Strongly positive lepromin test with granulomas obscuring the Grenz zone",
      "Numerous acid-fast bacilli arranged in globi",
      "Diffuse symmetric skin infiltration with negative cell-mediated immunity"
    ],
    answerIndex: 1,
    correctAnswerText: "Strongly positive lepromin test with granulomas obscuring the Grenz zone"
  },
  {
    id: 139,
    image: "images/IMG_7567.jpeg",
    question: "A 28-year-old woman presents with a single, well-defined indurated ivory-colored plaque over the trunk with a faint violaceous rim. The lesion is non-pruritic and slowly progressive. Skin biopsy from the active indurated edge shows thick horizontally arranged collagen bundles, loss of adnexal structures, and squared-off edges of dermal sclerosis extending into subcutaneous septa.\nWhich of the following is the most likely diagnosis?",
    options: [
      "Lichen sclerosus",
      "Systemic sclerosis",
      "Morphea",
      "Scleredema"
    ],
    answerIndex: 2,
    correctAnswerText: "Morphea"
  },
  {
    id: 140,
    image: "",
    question: "A 24-year-old sexually active woman presents with multiple painful grouped vesicles and shallow ulcers over the vulva and perineum. She also has burning micturition, low-grade fever, and tender inguinal lymph nodes. She gives a history of similar but milder episodes in the past.\nWhich of the following is the most likely diagnosis?",
    options: [
      "Primary syphilis",
      "Chancroid",
      "Granuloma inguinale",
      "Genital herpes"
    ],
    answerIndex: 3,
    correctAnswerText: "Genital herpes"
  },
  {
    id: 141,
    image: "",
    question: "A 27-year-old man presents with non-itchy coppery macules over the trunk, generalized lymphadenopathy, moist grey perianal plaques, patchy moth-eaten alopecia, and shallow serpiginous grey-white lesions over the oral mucosa resembling snail-track ulcers. He had a painless genital ulcer 2 months ago that healed without treatment.\nWhich of the following is the most likely causative organism?",
    options: [
      "Treponema pallidum",
      "Haemophilus ducreyi",
      "Chlamydia trachomatis L1–L3",
      "Klebsiella granulomatis"
    ],
    answerIndex: 0,
    correctAnswerText: "Treponema pallidum"
  },
  {
    id: 142,
    image: "",
    question: "A 16-year-old boy complains of increased body odour from the axilla after attaining puberty. On histology, the responsible gland has a large lumen, is associated with hair follicles, releases a viscid secretion rich in lipids and proteins, and is supplied by postganglionic sympathetic adrenergic fibres.\nWhich of the following glands is most likely responsible?",
    options: [
      "Sebaceous gland",
      "Apocrine sweat gland",
      "Eccrine sweat gland",
      "Ceruminous gland"
    ],
    answerIndex: 1,
    correctAnswerText: "Apocrine sweat gland"
  },
  {
    id: 143,
    image: "images/IMG_7569.jpeg",
    question: "A 9-year-old child presents with patchy alopecia and broken hair shafts over the scalp. KOH examination of plucked hair shows multiple fungal spores packed inside the hair shaft, while the outer surface of the hair shaft is relatively spared.\nWhich of the following organisms is most likely responsible?",
    options: [
      "Microsporum canis",
      "Trichophyton schoenleinii",
      "Trichophyton tonsurans",
      "Trichophyton verrucosum"
    ],
    answerIndex: 2,
    correctAnswerText: "Trichophyton tonsurans"
  },
  {
    id: 144,
    image: "",
    question: "A 48-year-old man with long-standing Hansen disease presents with a well-demarcated, painless ulcer over the sole. The ulcer has regular punched-out margins with hyperkeratotic callus, and there is loss of protective sensation over the foot. There is no surrounding warmth, tenderness, or rapidly spreading cellulitis.\nWhat is the most appropriate primary management?",
    options: [
      "High-dose systemic corticosteroids",
      "Immediate wide local excision",
      "Daily topical antifungal therapy",
      "Limb rest with non-weight-bearing splints and regular foot care"
    ],
    answerIndex: 3,
    correctAnswerText: "Limb rest with non-weight-bearing splints and regular foot care"
  },
  {
    id: 145,
    image: "",
    question: "A 19-year-old male presents with multiple painful nodules, cystic lesions, and comedones over the face, chest, and upper back for 2 years. He has already taken topical benzoyl peroxide, topical retinoids, and oral antibiotics with only partial response. Examination shows deep inflammatory nodules with early scarring.\nWhich of the following is the most appropriate definitive treatment?",
    options: [
      "Oral isotretinoin",
      "Topical adapalene alone",
      "Topical benzoyl peroxide alone",
      "Oral doxycycline with topical retinoid only"
    ],
    answerIndex: 0,
    correctAnswerText: "Oral isotretinoin"
  },
  {
    id: 146,
    image: "",
    question: "A 42-year-old woman presents with painful oral erosions followed by flaccid bullae over the trunk. The bullae rupture easily, leaving raw erosions. Gentle lateral pressure on normal-looking skin produces epidermal separation. Biopsy from perilesional skin is sent for direct immunofluorescence.\nWhich of the following findings is most characteristic of this condition?",
    options: [
      "Linear IgG and C3 deposition along the basement membrane",
      "Intercellular IgG and C3 deposition within the epidermis",
      "Granular IgA deposition at tips of dermal papillae",
      "Linear IgA deposition along the basement membrane"
    ],
    answerIndex: 1,
    correctAnswerText: "Intercellular IgG and C3 deposition within the epidermis"
  },
  {
    id: 147,
    image: "",
    question: "A renal transplant recipient on long-term immunosuppression presents with slowly progressive, painless, nodulo-ulcerative yellowish-purple plaques in the perianal region. Biopsy shows sheets of large foamy macrophages containing laminated basophilic intracellular inclusions that are positive on Von Kossa stain.\nWhich of the following microscopic findings is most characteristic of this condition?",
    options: [
      "Michaelis–Gutmann bodies within foamy macrophages",
      "Donovan bodies within macrophages",
      "Leishman-Donovan bodies inside histiocytes",
      "Asteroid bodies within giant cells"
    ],
    answerIndex: 0,
    correctAnswerText: "Michaelis–Gutmann bodies within foamy macrophages"
  },
  {
    id: 148,
    image: "images/IMG_7589.jpeg",
    question: "A 62-year-old man presents with irregularly irregular pulse, palpitations, and mild dyspnea for the last 3 days. ECG confirms atrial fibrillation. He is conscious, BP is stable, there is no pulmonary edema, and there is no evidence of pre-excitation. The treating physician plans elective rhythm control.\nWhat is the most appropriate next step before cardioversion?",
    options: [
      "Immediate DC cardioversion without anticoagulation",
      "Anticoagulation for 3 weeks before cardioversion or TEE-guided exclusion of left atrial thrombus",
      "IV verapamil followed by cardioversion after 6 hours",
      "Aspirin alone followed by cardioversion after symptom relief"
    ],
    answerIndex: 1,
    correctAnswerText: "Anticoagulation for 3 weeks before cardioversion or TEE-guided exclusion of left atrial thrombus"
  },
  {
    id: 149,
    image: "",
    question: "A 24-year-old woman with bronchial asthma has been using only an inhaled reliever. She now reports wheezing and breathlessness waking her from sleep several nights per week, with daytime limitation during exercise. There is no cyanosis, altered sensorium, or silent chest. Which is the most appropriate next step in long-term management?",
    options: [
      "Continue only as-needed short-acting β₂ agonist",
      "Add oral prednisolone as daily maintenance therapy",
      "Start inhaled corticosteroid + long-acting β₂ agonist therapy",
      "Add omalizumab as first-line controller therapy"
    ],
    answerIndex: 2,
    correctAnswerText: "Start inhaled corticosteroid + long-acting β₂ agonist therapy"
  },
  {
    id: 150,
    image: "",
    question: "A 32-year-old man newly diagnosed with HIV infection is started on standard anti-tubercular therapy for sputum-positive pulmonary tuberculosis. He has no headache, altered sensorium, neck stiffness, or focal neurological deficit. After initial tolerance of anti-TB drugs, the treating physician plans to reduce mortality while minimizing paradoxical clinical worsening. What is the most appropriate strategy?",
    options: [
      "Start ART immediately before anti-TB therapy",
      "Delay ART until completion of the full anti-TB regimen",
      "Start ART only after radiological resolution of tuberculosis",
      "Start ART after 2 weeks of anti-TB therapy"
    ],
    answerIndex: 3,
    correctAnswerText: "Start ART after 2 weeks of anti-TB therapy"
  },
  {
    id: 151,
    image: "",
    question: "A 62-year-old woman develops sudden-onset dyspnea, pleuritic chest discomfort, tachycardia, and mild hemoptysis 7 days after knee replacement surgery. She is anxious but hemodynamically stable. Chest auscultation is largely normal, and clinical probability score is high. Which is the most appropriate next diagnostic test?",
    options: [
      "CT pulmonary angiography",
      "D-dimer assay",
      "Ventilation-perfusion scan",
      "Lower limb venous Doppler alone"
    ],
    answerIndex: 0,
    correctAnswerText: "CT pulmonary angiography"
  },
  {
    id: 152,
    image: "",
    question: "A 38-year-old woman with a history of rheumatic heart disease presents with worsening dyspnea and palpitations. Pulse is irregularly irregular. Auscultation reveals a loud S1, opening snap, and a low-pitched mid-diastolic murmur at the apex. ECG shows absent P waves with irregular RR intervals. Which of the following statements is not expected in this patient?",
    options: [
      "Increased risk of systemic embolization",
      "Presystolic accentuation of mid-diastolic murmur",
      "Absence of ‘a’ wave in JVP",
      "Absence of fourth heart sound"
    ],
    answerIndex: 1,
    correctAnswerText: "Presystolic accentuation of mid-diastolic murmur"
  },
  {
    id: 153,
    image: "",
    question: "A 62-year-old man is brought to the emergency department with acute onset dyspnea, drowsiness, and shallow breathing. ABG shows:\npH = 7.22\npCO₂ = 66 mmHg\nHCO₃⁻ = 26 mEq/L\nWhich is the most likely acid–base disorder?",
    options: [
      "High anion gap metabolic acidosis",
      "Metabolic alkalosis with respiratory compensation",
      "Respiratory acidosis with partial metabolic compensation",
      "Normal anion gap metabolic acidosis"
    ],
    answerIndex: 2,
    correctAnswerText: "Respiratory acidosis with partial metabolic compensation"
  },
  {
    id: 154,
    image: "",
    question: "A 28-year-old woman has recurrent episodes of sudden-onset palpitations that start and stop abruptly. ECG during one episode shows a regular narrow-complex tachycardia. Her attacks are terminated in the emergency room with vagal manoeuvre followed by IV adenosine. She now asks for a drug to prevent further episodes.\nWhich drug is most appropriate for long-term prophylaxis in this condition?",
    options: [
      "IV adenosine",
      "IV lignocaine",
      "Oral amiodarone",
      "Oral verapamil"
    ],
    answerIndex: 3,
    correctAnswerText: "Oral verapamil"
  },
  {
    id: 155,
    image: "",
    question: "A 35-year-old HIV-positive man recently started evaluation for chronic cough, weight loss, evening rise of fever, and night sweats. CBNAAT detects Mycobacterium tuberculosis with rifampicin resistance, and further testing shows no contraindication to newer oral MDR-TB drugs. He is counselled about possible paradoxical worsening after immune recovery.\nWhich is the most appropriate treatment regimen for his tuberculosis?",
    options: [
      "Bedaquiline + Pretomanid + Linezolid + Moxifloxacin for 6 months",
      "Isoniazid + Rifampicin + Pyrazinamide + Ethambutol for 6 months",
      "Streptomycin + Isoniazid + Rifampicin + Ethambutol for 9 months",
      "Kanamycin-based injectable MDR-TB regimen for 18–24 months"
    ],
    answerIndex: 0,
    correctAnswerText: "Bedaquiline + Pretomanid + Linezolid + Moxifloxacin for 6 months"
  },
  {
    id: 156,
    image: "",
    question: "A 42-year-old man is brought to the emergency department with deep rapid breathing, altered sensorium, and dehydration. ABG and electrolytes show:\npH = 7.30\nHCO₃⁻ = 16 mEq/L\npCO₂ = 44 mmHg\nNa⁺ = 132 mEq/L\nCl⁻ = 86 mEq/L\nWhich of the following is the most likely acid–base abnormality?",
    options: [
      "Normal anion gap metabolic acidosis with adequate respiratory compensation",
      "High anion gap metabolic acidosis with anion gap of 30 mEq/L",
      "Primary respiratory alkalosis with metabolic compensation",
      "Metabolic alkalosis with paradoxical aciduria"
    ],
    answerIndex: 1,
    correctAnswerText: "High anion gap metabolic acidosis with anion gap of 30 mEq/L"
  },
  {
    id: 157,
    image: "images/IMG_7572.jpeg",
    question: "A 36-year-old man presents with high-grade fever, productive cough, pleuritic chest pain, and bronchial breath sounds over the right infraclavicular area. Chest X-ray shows a homogeneous opacity in the right upper zone with a sharply defined lower margin, corresponding to the horizontal fissure. There is no tracheal deviation.\nWhat is the most likely radiological diagnosis?",
    options: [
      "Right upper lobe collapse",
      "Right-sided pleural effusion",
      "Right upper lobe consolidation",
      "Right pneumothorax"
    ],
    answerIndex: 2,
    correctAnswerText: "Right upper lobe consolidation"
  },
  {
    id: 158,
    image: "",
    question: "A 62-year-old man is admitted with septic shock and receives large-volume IV fluid resuscitation over 24 hours. His blood pressure improves, but repeat ABG shows metabolic acidosis with normal anion gap. Serum chloride is markedly elevated.\nWhich IV fluid is most likely responsible for this acid–base disorder?",
    options: [
      "5% dextrose water",
      "Ringer lactate",
      "Plasma-Lyte",
      "0.9% normal saline"
    ],
    answerIndex: 3,
    correctAnswerText: "0.9% normal saline"
  },
  {
    id: 159,
    image: "",
    question: "A 68-year-old woman with long-standing systemic sclerosis presents with progressive exertional dyspnea, chest discomfort, loud P2, and pedal edema. Echocardiography shows right ventricular hypertrophy, and right heart catheterisation confirms pulmonary arterial hypertension. Acute vasoreactivity testing is negative.\nWhich drug class is most appropriate to improve her symptoms?",
    options: [
      "Endothelin receptor antagonist",
      "High-dose calcium channel blocker",
      "Beta blocker",
      "Nitrates"
    ],
    answerIndex: 0,
    correctAnswerText: "Endothelin receptor antagonist"
  },
  {
    id: 160,
    image: "",
    question: "A middle-aged man treated for pulmonary tuberculosis years ago presents with progressive exertional dyspnea, pedal edema, raised JVP, ascites, and a sharp high-pitched early diastolic sound on auscultation. His venous pulse shows a steep fall immediately after the v wave.\nWhich of the following findings best explains the venous pulse abnormality in this patient?",
    options: [
      "Loss of atrial contraction due to atrial fibrillation",
      "Rapid early ventricular filling followed by sudden restriction",
      "Delayed right ventricular relaxation due to myocardial ischemia",
      "Uniform restriction of ventricular filling throughout diastole"
    ],
    answerIndex: 1,
    correctAnswerText: "Rapid early ventricular filling followed by sudden restriction"
  },
  {
    id: 161,
    image: "",
    question: "A 42-year-old man presents with acute fever, chills, productive cough, pleuritic chest pain, and breathlessness. On examination, there is bronchial breath sound over the right infrascapular area. Chest imaging shows a lobar opacity with air bronchograms.\nWhich investigation is considered the gold standard initial test to establish the diagnosis in this patient?",
    options: [
      "Sputum culture and sensitivity",
      "High-resolution CT chest",
      "Plain chest X-ray showing infiltrate",
      "Blood culture before antibiotics"
    ],
    answerIndex: 2,
    correctAnswerText: "Plain chest X-ray showing infiltrate"
  },
  {
    id: 162,
    image: "images/IMG_7573.jpeg",
    question: "A 48-year-old man working in a stone-quarrying unit presents with gradually progressive exertional dyspnea and dry cough. Chest imaging shows multiple small rounded opacities predominantly in the upper lobes, with eggshell calcification of hilar lymph nodes.\nWhich occupational lung disease is most likely responsible for this presentation?",
    options: [
      "Coal worker pneumoconiosis",
      "Asbestosis",
      "Byssinosis",
      "Silicosis"
    ],
    answerIndex: 3,
    correctAnswerText: "Silicosis"
  },
  {
    id: 163,
    image: "",
    question: "A 68-year-old man presents with exertional chest pain, dizziness, and episodes of syncope. On examination, the carotid pulse is low in volume and slow rising, with delayed peak. Auscultation reveals an ejection systolic murmur in the aortic area radiating to the carotids. Which of the following pulse findings is classically seen in this condition?",
    options: [
      "Pulsus paradoxus",
      "Collapsing pulse",
      "Pulsus alternans",
      "Pulsus parvus et tardus"
    ],
    answerIndex: 3,
    correctAnswerText: "Pulsus parvus et tardus"
  },
  {
    id: 164,
    image: "images/IMG_7591.jpeg",
    question: "A 58-year-old man presents with sudden-onset palpitations and mild breathlessness. Pulse is regular at 150/min. ECG shows a narrow QRS rhythm with no normal P waves and repetitive saw-tooth baseline deflections, best seen in the inferior leads. The atrial activity is around 300/min.\nWhich of the following is the most appropriate interpretation?",
    options: [
      "Regular atrial rhythm at 250–300/min with saw-tooth flutter waves replacing P waves",
      "Irregularly irregular rhythm with absent P waves and fibrillatory baseline",
      "AV nodal re-entry tachycardia with hidden retrograde P waves",
      "Polymorphic ventricular tachycardia requiring immediate magnesium therapy"
    ],
    answerIndex: 0,
    correctAnswerText: "Regular atrial rhythm at 250–300/min with saw-tooth flutter waves replacing P waves"
  },
  {
    id: 165,
    image: "images/IMG_7576.jpeg",
    question: "A 24-year-old woman presents with sudden-onset palpitations after emotional stress. Pulse is regular, very rapid, and BP is stable. ECG shows regular narrow-complex tachycardia with QRS duration < 0.12 seconds. No clear P waves are seen before the QRS complexes.\nWhich ECG finding best supports the diagnosis?",
    options: [
      "Irregularly irregular rhythm with absent P waves",
      "Regular narrow QRS tachycardia with absent or hidden P waves",
      "Wide QRS tachycardia with AV dissociation",
      "Saw-tooth flutter waves with atrial rate 250–300/min"
    ],
    answerIndex: 1,
    correctAnswerText: "Regular narrow QRS tachycardia with absent or hidden P waves"
  },
  {
    id: 166,
    image: "images/IMG_7590.jpeg",
    question: "A 62-year-old man with a history of previous myocardial infarction presents with sudden palpitations, dizziness, and hypotension. ECG shows regular broad-complex tachycardia with QRS duration > 0.12 seconds. P waves are not clearly related to QRS complexes.\nWhich ECG feature most strongly supports the diagnosis?",
    options: [
      "Regular narrow QRS tachycardia with hidden P waves",
      "Saw-tooth flutter waves with atrial rate 250–300/min",
      "Wide QRS complexes with ventriculoatrial dissociation",
      "Irregularly irregular rhythm with absent P waves"
    ],
    answerIndex: 2,
    correctAnswerText: "Wide QRS complexes with ventriculoatrial dissociation"
  },
  {
    id: 167,
    image: "images/IMG_7578.jpeg",
    question: "A 58-year-old man with chronic kidney disease presents with weakness and palpitations. ECG shows tall, narrow, tented T waves. Serum potassium is markedly elevated.\nWhat is the most appropriate immediate step in management?",
    options: [
      "Oral sodium polystyrene sulfonate",
      "IV regular insulin with 50% dextrose",
      "Nebulized salbutamol",
      "IV calcium gluconate"
    ],
    answerIndex: 3,
    correctAnswerText: "IV calcium gluconate"
  },
  {
    id: 168,
    image: "images/IMG_7579.jpeg",
    question: "A 42-year-old woman on loop diuretics presents with fatigue, muscle cramps, and palpitations. ECG shows ST depression, flattened T waves, prominent U waves, and prolonged repolarization.\nWhich electrolyte abnormality best explains these findings?",
    options: [
      "Hypokalemia",
      "Hyperkalemia",
      "Hypocalcemia",
      "Hypercalcemia"
    ],
    answerIndex: 0,
    correctAnswerText: "Hypokalemia"
  },
  {
    id: 169,
    image: "",
    question: "A 55-year-old man with recurrent renal stones, constipation, polyuria, and bone pain is found to have an electrolyte abnormality. His ECG shows shortening of the QT interval with reduced ST-segment duration.\nWhich electrolyte disturbance best explains this ECG finding?",
    options: [
      "Hypokalemia",
      "Hypercalcemia",
      "Hypocalcemia",
      "Hyperkalemia"
    ],
    answerIndex: 1,
    correctAnswerText: "Hypercalcemia"
  },
  {
    id: 170,
    image: "",
    question: "A 50-year-old woman presents with exertional dyspnea, angina, and one episode of syncope while climbing stairs. On examination, she has a harsh ejection systolic murmur radiating to the carotids. Echocardiography shows a calcified narrowed aortic valve with left ventricular hypertrophy.\nWhich pathophysiological change best explains her angina despite normal coronary arteries?",
    options: [
      "Increased LV volume overload causing eccentric hypertrophy",
      "Reduced pulmonary capillary wedge pressure causing myocardial ischemia",
      "Increased LV pressure work causing concentric hypertrophy and increased myocardial oxygen demand",
      "Reduced systemic vascular resistance causing coronary steal phenomenon"
    ],
    answerIndex: 2,
    correctAnswerText: "Increased LV pressure work causing concentric hypertrophy and increased myocardial oxygen demand"
  },
  {
    id: 171,
    image: "",
    question: "A 28-year-old man presents with low-grade fever, weight loss, dry cough, and pleuritic chest pain. Chest examination shows stony dullness over the right lower chest. Pleural tap reveals the following:\nPleural fluid protein / Serum protein = 0.58\nPleural fluid LDH / Serum LDH = 0.52\nWhich of the following is the most likely cause of this type of pleural effusion?",
    options: [
      "Congestive cardiac failure",
      "Nephrotic syndrome",
      "Cirrhosis with ascites",
      "Tuberculosis"
    ],
    answerIndex: 3,
    correctAnswerText: "Tuberculosis"
  },
  {
    id: 172,
    image: "",
    question: "A 19-year-old basketball player collapses suddenly during intense training and is declared dead despite resuscitation. He had no prior diagnosed cardiac disease. Autopsy shows a small left ventricular cavity, marked asymmetric septal hypertrophy, and histology shows haphazard arrangement of hypertrophied cardiac muscle fibers.\nWhich of the following is the most characteristic pathological finding in this condition?",
    options: [
      "Myofiber disarray with interstitial fibrosis",
      "Four-chamber dilatation with mural thrombi",
      "Transmural myocardial necrosis with neutrophilic infiltrate",
      "Vegetations along the line of valve closure"
    ],
    answerIndex: 0,
    correctAnswerText: "Myofiber disarray with interstitial fibrosis"
  },
  {
    id: 173,
    image: "",
    question: "A 46-year-old patient presents with chest discomfort, palpitations, raised JVP, muffled heart sounds, and mild hypotension. Echocardiography shows a large pericardial effusion, swinging heart, plethoric IVC, and diastolic collapse of the right atrium. The patient is conscious and vitals are currently maintained.\nWhat is the most appropriate next step in management?",
    options: [
      "IV furosemide with fluid restriction",
      "Echocardiography-guided pericardiocentesis",
      "Oral beta-blocker and observation",
      "Emergency pericardiectomy"
    ],
    answerIndex: 1,
    correctAnswerText: "Echocardiography-guided pericardiocentesis"
  },
  {
    id: 174,
    image: "",
    question: "A 42-year-old chronic alcoholic develops severe epigastric pain radiating to the back with vomiting. Serum amylase and lipase are elevated. After 48 hours, he develops progressive breathlessness. Chest X-ray shows diffuse bilateral lung opacities obscuring pulmonary vascular markings. There is poor response to diuretics.\nWhich mechanism best explains the respiratory complication in this patient?",
    options: [
      "Increased pulmonary venous pressure due to left ventricular failure",
      "Bronchial obstruction with distal collapse of alveoli",
      "Increased alveolocapillary permeability due to systemic inflammation",
      "Pulmonary infarction due to thromboembolism"
    ],
    answerIndex: 2,
    correctAnswerText: "Increased alveolocapillary permeability due to systemic inflammation"
  },
  {
    id: 175,
    image: "images/IMG_7581.jpeg",
    question: "A 68-year-old man presents with progressive exertional dyspnea and dry cough for 2 years. Examination reveals fine end-inspiratory “Velcro” crackles and digital clubbing. HRCT shows basal subpleural reticulations, honeycombing, and traction bronchiectasis. Lung biopsy shows multiple fibroblastic foci.\nWhich is the most likely cause of death in this patient?",
    options: [
      "Massive pulmonary embolism",
      "Acute myocardial infarction",
      "Bronchogenic carcinoma",
      "Respiratory failure"
    ],
    answerIndex: 3,
    correctAnswerText: "Respiratory failure"
  },
  {
    id: 176,
    image: "images/IMG_7582.jpeg",
    question: "A 52-year-old man with poor dental hygiene presents with fever, chronic cough, copious foul-smelling sputum, weight loss, and clubbing. Chest imaging shows a thick-walled cavitary lesion with an air-fluid level surrounded by pulmonary infiltrates. The cavity forms an acute angle with the chest wall.\nWhat is the most likely diagnosis?",
    options: [
      "Lung abscess",
      "Empyema thoracis",
      "Pulmonary tuberculosis cavity",
      "Bronchiectasis"
    ],
    answerIndex: 0,
    correctAnswerText: "Lung abscess"
  },
  {
    id: 177,
    image: "images/IMG_7583.jpeg",
    question: "A 58-year-old diabetic patient develops fever, pleuritic chest pain, and persistent toxic symptoms after partially treated bacterial pneumonia. Contrast CT chest shows a lenticular pleural collection with enhancement and separation of both visceral and parietal pleura at the margin of the collection.\nWhich diagnosis is most strongly suggested by this imaging finding?",
    options: [
      "Peripheral lung abscess",
      "Empyema thoracis",
      "Hydropneumothorax",
      "Bronchogenic cyst"
    ],
    answerIndex: 1,
    correctAnswerText: "Empyema thoracis"
  },
  {
    id: 178,
    image: "",
    question: "A 42-year-old man is evaluated before elective surgery. He is asymptomatic, pulse is regular, and ECG shows each P wave followed by a QRS complex, but the PR interval is fixed at 0.21 seconds throughout the tracing. No QRS complex is dropped.\nWhich is the most likely diagnosis?",
    options: [
      "Mobitz type I second-degree AV block",
      "Mobitz type II second-degree AV block",
      "First-degree AV block",
      "Complete heart block"
    ],
    answerIndex: 2,
    correctAnswerText: "First-degree AV block"
  },
  {
    id: 179,
    image: "",
    question: "A 28-year-old man was found to be HBsAg positive 1 year ago during routine screening. He now presents for follow-up serology. Current testing shows persistent HBsAg positivity along with HBeAg positivity.\nWhich of the following best explains his present serological status?",
    options: [
      "Resolved hepatitis B infection with protective immunity",
      "Acute hepatitis B infection in the window period",
      "Vaccinated individual with no infectivity",
      "Chronic hepatitis B with high viral replication"
    ],
    answerIndex: 3,
    correctAnswerText: "Chronic hepatitis B with high viral replication"
  },
  {
    id: 180,
    image: "",
    question: "A 72-year-old woman with non-valvular atrial fibrillation is evaluated before discharge. She has hypertension, diabetes mellitus, and a previous history of myocardial infarction. There is no history of stroke or TIA.\nWhich is the most appropriate thromboprophylaxis strategy?",
    options: [
      "Start oral anticoagulation because stroke risk is high",
      "Aspirin alone because she has no previous stroke",
      "No antithrombotic therapy because rhythm is intermittently irregular",
      "Add antiplatelet therapy only because prior MI is already covered"
    ],
    answerIndex: 0,
    correctAnswerText: "Start oral anticoagulation because stroke risk is high"
  }
];
