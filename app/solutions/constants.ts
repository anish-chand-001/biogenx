export interface ProductType {
  id: number
  title: string
  desc: string
  img: string
}

export const WOMEN_PRODUCTS: ProductType[] = [
  { 
    id: 1, 
    title: "Divadro", 
    desc: "Premium 99.9% pure dydrogesterone tablets for recurrent pregnancy loss, threatened abortion, and luteal phase deficiency management.", 
    img: "/oursolutions/mom/divadro.png" 
  },
  { 
    id: 2, 
    title: "Folbiogen", 
    desc: "Advanced L-methylfolate calcium tablets engineered to enhance oocyte quality, optimize conception, and prevent neural tube defects", 
    img: "/oursolutions/mom/folbiogen.png" 
  },
  { 
    id: 3, 
    title: "Mavitol", 
    desc: "Sustained-release metformin and myo-inositol tablets configured to control insulin resistance and regulate ovarian function in PCOS", 
    img: "/oursolutions/mom/mavitol.png" 
  },
  { 
    id: 4, 
    title: "ArgiFaith", 
    desc: "High-absorption L-arginine granules to improve amniotic fluid index, optimize placental circulation, and mitigate pre-eclampsia risks.", 
    img: "/oursolutions/mom/argifaith.png" 
  },
   { 
    id: 5, 
    title: "Gendox", 
    desc: "First-line doxylamine succinate, pyridoxine, and folic acid tablets providing rapid symptom relief for severe morning sickness.", 
    img: "/oursolutions/mom/gendox.png" 
  },
   { 
    id: 6, 
    title: "Bonenano-60K(Maternal)", 
    desc: "Bioavailable vitamin D3 nanoshots designed to combat maternal hypovitaminosis, reduce insulin resistance, and prevent gestational diabetes.", 
    img: "/oursolutions/mom/bonenano-60k.png" 
  }
]

export const CHILDREN_PRODUCTS: ProductType[] = [
  { 
    id: 1, 
    title: "Bonenano-60K(Pediatric)", 
    desc: "Advanced cholecalciferol nanotechnology liquid shots with over 90% absorption to boost baseline immunity and bone health.", 
    img: "/oursolutions/baby/Bonenano-60K.png" 
  },
  { 
    id: 2, 
    title: "Bonenano-drops", 
    desc: "Infant cholecalciferol drops delivering 800 IU/ml to correct vitamin D deficiency and provide essential rickets prevention.", 
    img: "/oursolutions/baby/bonenano-drops.png" 
  },
  { 
    id: 3, 
    title: "Ragonist", 
    desc: "Professional pediatric ranitidine syrup offering fast onset and sustainable duration of action against GERD and gastritis.", 
    img: "/oursolutions/baby/ragonist.png" 
  },
  { 
    id: 4, 
    title: "Probiolac-Z", 
    desc: "Premium sachet combining nine probiotic strains, prebiotic FOS, and zinc to renormalize gut flora and treat diarrhea.", 
    img: "/oursolutions/baby/probiolac-z.png" 
  }
]

// export const GENERAL_PRODUCTS: ProductType[] = [
//   { 
//     id: 1, 
//     title: "Family Immunity Shield", 
//     desc: "High-potency antioxidant and zinc complex formulated for multi-generational immune system optimization.", 
//     img: "/oursolutions/mom/img1.png" 
//   },
//   { 
//     id: 2, 
//     title: "Advanced Sleep Magnesium", 
//     desc: "Pure elemental magnesium glycinate to support neuromuscular relaxation and deep sleep cycles.", 
//     img: "/oursolutions/mom/img1.png" 
//   },
//   { 
//     id: 3, 
//     title: "Daily Marine Collagen", 
//     desc: "Hydrolyzed Type I & III collagen peptides engineered to support cellular repair and connective tissue elasticity.", 
//     img: "/oursolutions/mom/img1.png" 
//   }
// ]