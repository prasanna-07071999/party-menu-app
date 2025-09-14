const dishes = [
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "https://res.cloudinary.com/dlvmifrrd/image/upload/v1757818491/kadai-paneer-recipe_ok8ucu.jpg",
    id: 1,
    name: "Kadhai Paneer",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" }
    ]
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Spinach gravy cooked with paneer cubes and Indian spices.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757820757/palak-paneer-recipe-featured_pmhsc7.jpg',
    id: 2,
    name: "Palak Paneer",
    ingredients: [
      { name: "Spinach", quantity: "150g" },
      { name: "Paneer", quantity: "150g" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Onion", quantity: "1 medium" }
    ]
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Red kidney beans in a thick tomato-onion gravy.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757820679/rajma-masala_baehdu.jpg',
    id: 3,
    name: "Rajma Masala",
    ingredients: [
      { name: "Rajma", quantity: "200g" },
      { name: "Tomato", quantity: "2 medium" },
      { name: "Onion", quantity: "1 large" },
      { name: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Chicken pieces in creamy tomato and butter gravy.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757820565/butter-chicken-recipe_imlryc.jpg',
    id: 4,
    name: "Butter Chicken",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Tomato Puree", quantity: "1 cup" }
    ]
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Spicy boneless chicken pieces cooked in tomato-onion gravy.",
    image: "https://res.cloudinary.com/dlvmifrrd/image/upload/v1757820080/chicken-tikka-masala_sxxara.jpg",
    id: 5,
    name: "Chicken Tikka Masala",
    ingredients: [
      { name: "Chicken Breast", quantity: "200g" },
      { name: "Yogurt", quantity: "3 tbsp" },
      { name: "Masala", quantity: "2 tbsp" }
    ]
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Green peas and paneer cubes in creamy lightly spiced sauce.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757819976/matar-paneer_xpjwkg.jpg',
    id: 6,
    name: "Matar Paneer",
    ingredients: [
      { name: "Paneer", quantity: "150g" },
      { name: "Peas", quantity: "1/2 cup" },
      { name: "Tomato", quantity: "2 medium" }
    ]
  },

  // STARTER
  {
    categoryId: 2,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy golden-fried potato patties stuffed with peas.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757823191/Crispy-Aloo-Tikki-Recipe_z47qix.jpg',
    id: 7,
    name: "Aloo Tikki",
    ingredients: [
      { name: "Potato", quantity: "200g" },
      { name: "Green peas", quantity: "50g" },
      { name: "Breadcrumbs", quantity: "30g" }
    ]
  },
  {
    categoryId: 2,
    mealType: "STARTER",
    type: "NON-VEG",
    description: "Crispy fried chicken wings tossed in spicy sauce.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757823310/bbq-chicken-wings-recipe-featured-image_hstwlh.jpg',
    id: 8,
    name: "Chicken Wings",
    ingredients: [
      { name: "Chicken Wings", quantity: "6 pcs" },
      { name: "Red Chilli Paste", quantity: "1 tbsp" }
    ]
  },
  {
    categoryId: 2,
    mealType: "STARTER",
    type: "VEG",
    description: "Grilled paneer cubes marinated with spices.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757823411/DSC_4752_djfiqc.jpg',
    id: 9,
    name: "Paneer Tikka",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "50g" },
      { name: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    categoryId: 2,
    mealType: "STARTER",
    type: "NON-VEG",
    description: "Eggs boiled and spiced, tossed with fresh herbs.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757823508/egg-tikka-masala-v0-fne5zr6gvkwb1_folcgn.jpg',
    id: 10,
    name: "Masala Egg",
    ingredients: [
      { name: "Egg", quantity: "2 pcs" },
      { name: "Masala", quantity: "1 tbsp" },
      { name: "Herbs", quantity: "1 tbsp" }
    ]
  },
  {
    categoryId: 2,
    mealType: "STARTER",
    type: "NON-VEG",
    description: "Shrimp sautéed in garlic butter and herbs.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757819961/garlic-butter-shrimp-2-2023_dp3vzh.jpg',
    id: 11,
    name: "Garlic Butter Shrimp",
    ingredients: [
      { name: "Shrimp", quantity: "100g" },
      { name: "Butter", quantity: "1 tbsp" },
      { name: "Garlic", quantity: "2 cloves" }
    ]
  },
  {
    categoryId: 2,
    mealType: "STARTER",
    type: "VEG",
    description: "Spicy, batter-fried onions.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757823589/Onion-Pakora-4_yrl4mx.jpg',
    id: 12,
    name: "Onion Pakoda",
    ingredients: [
      { name: "Onion", quantity: "1 large" },
      { name: "Besan", quantity: "1/2 cup" },
      { name: "Spices", quantity: "1 tbsp" }
    ]
  },

  // DESSERT
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description: "Soft milk dumplings soaked in cardamom syrup.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757824464/gulab-jamun-featured_wi4doh.jpg',
    id: 13,
    name: "Gulab Jamun",
    ingredients: [
      { name: "Khoya", quantity: "100g" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Cardamom", quantity: "1/2 tbsp" }
    ]
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description: "Rich, traditional Indian dessert made with carrots, milk, and nuts.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757822874/carrot-halwa_stujnk.webp',
    id: 14,
    name: "Gajar Halwa",
    ingredients: [
      { name: "Carrot", quantity: "200g" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Sugar", quantity: "3 tbsp" },
      { name: "Cashew Nuts", quantity: "10 pcs" }
    ]
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description: "Creamy rice pudding flavored with cardamom and dry fruits.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757823030/Rice-Kheer-3_kvbsfw.jpg',
    id: 15,
    name: "Kheer",
    ingredients: [
      { name: "Rice", quantity: "30g" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Sugar", quantity: "2 tbsp" },
      { name: "Dry Fruits", quantity: "10g" }
    ]
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description: "Traditional Bengali sweet made of paneer and sugar.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757823731/Rasagulla_1_k9spxm.jpg',
    id: 16,
    name: "Rasgulla",
    ingredients: [
      { name: "Paneer", quantity: "100g" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Water", quantity: "2 cups" }
    ]
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "NON-VEG",
    description: "Eggs, milk, and sugar, steamed into sweet custard.",
    image: 'https://res.cloudinary.com/dbalstzto/image/upload/v1757823810/Simply-Recipes-Egg-Custard-Pie-LEAD-12-c6df123f874d4d6e919d1d58324984f5_zoqvau.jpg',
    id: 17,
    name: "Egg Custard",
    ingredients: [
      { name: "Egg", quantity: "2 pcs" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Sugar", quantity: "1/2 cup" }
    ]
  },
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "NON-VEG",
    description: "Classic apple pie with flaky pastry and spiced apple filling.",
    image:'https://res.cloudinary.com/dbalstzto/image/upload/v1757823893/2589601_Mailb_Mailbox_Apple_Pie_003-da802ff7a8984b2fa9aa0535997ab246_i5haml.jpg',
    id: 18,
    name: "Apple Pie",
    ingredients: [
      { name: "Apple", quantity: "100g" },
      { name: "Pastry", quantity: "1 pc" },
      { name: "Sugar", quantity: "2 tbsp" }
    ]
  },

  // SIDES
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description: "Soft, buttery Indian flatbread.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757820874/butter-naan_kurlsc.jpg',
    id: 19,
    name: "Butter Naan",
    ingredients: [
      { name: "Maida", quantity: "150g" },
      { name: "Butter", quantity: "1 tbsp" },
      { name: "Yeast", quantity: "1 tbsp" }
    ]
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description: "Whole wheat flatbread stuffed with spiced potatoes.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757821060/1200px-Aloo_Paratha_also_known_as_Batatay_Jo_Phulko_yhro58.jpg',
    id: 20,
    name: "Aloo Paratha",
    ingredients: [
      { name: "Wheat Flour", quantity: "100g" },
      { name: "Potato", quantity: "150g" },
      { name: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description: "Long-grain basmati rice cooked with aromatic spices.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757821126/Jeera-Rice-2-3-1_wah9gj.jpg',
    id: 21,
    name: "Jeera Rice",
    ingredients: [
      { name: "Basmati Rice", quantity: "1 cup" },
      { name: "Cumin Seeds", quantity: "1 tbsp" },
      { name: "Ghee", quantity: "1 tbsp" }
    ]
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "NON-VEG",
    description: "Crispy golden-fried fish strips served with dip.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757821187/easy-homemade-fish-sticks-fingers-1-1_w7goum.jpg',
    id: 22,
    name: "Fish Finger",
    ingredients: [
      { name: "Fish Fillet", quantity: "4 strips" },
      { name: "Bread Crumbs", quantity: "1/2 cup" },
      { name: "Egg", quantity: "1 pc" }
    ]
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description: "Spiced yogurt with chopped cucumber and coriander.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757821203/raita_RECIPE_061424_7375_VOG_final_yofxyh.jpg',
    id: 23,
    name: "Cucumber Raita",
    ingredients: [
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Cucumber", quantity: "1/2 cup" },
      { name: "Coriander", quantity: "2 tbsp" },
      { name: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "NON-VEG",
    description: "Eggs scrambled with onion, tomato and spices.",
    image: 'https://res.cloudinary.com/dlvmifrrd/image/upload/v1757821224/Egg-Bhurji-2-3_hdduhq.jpg',
    id: 24,
    name: "Egg Bhurji",
    ingredients: [
      { name: "Egg", quantity: "2 pcs" },
      { name: "Onion", quantity: "1 medium" },
      { name: "Tomato", quantity: "1 medium" }
    ]
  }
]
export default dishes