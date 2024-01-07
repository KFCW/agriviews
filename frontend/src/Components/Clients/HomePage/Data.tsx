export interface Product {
  id: number;
  titre: string;
  domaine: string;
  description?:string;
  price: number;
  image: string;
}

const Data: Product[]  = [
  {"id": 1, "titre": "Blé", "domaine": "Céréales et grains","description": "Le blé est l'une des céréales les plus cultivées dans le monde. Il est utilisé pour la production de farine et de nombreux produits alimentaires.", "price": 250.00, "image": "https://images.unsplash.com/photo-1595507102940-362eba018186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
 {
    "id": 2,
    "titre": "Riz",
    "domaine": "Céréales et grains",
    "price": 180.50,
    "description": "Le riz est un aliment de base dans de nombreuses cultures. Il est cultivé pour ses graines comestibles et est une source importante de glucides.",
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 3,
    "titre": "Maïs",
    "domaine": "Céréales et grains",
    "price": 120.75,
    "description": "Le maïs est une céréale cultivée pour ses grains riches en amidon. Il est utilisé dans de nombreux plats et peut être transformé en divers produits.",
    "image": "https://images.unsplash.com/photo-1623066798929-946425dbe1b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 4,
    "titre": "Sorgho",
    "domaine": "Céréales et grains",
    "price": 150.25,
    "description": "Le sorgho est une céréale cultivée pour ses graines et ses tiges. Il est utilisé dans l'alimentation humaine, animale et la production de biocarburants.",
    "image": "https://img.passeportsante.net/1200x675/2022-10-27/shutterstock-1771638275.webp"
  },
  {
    "id": 5,
    "titre": "Orge",
    "domaine": "Céréales et grains",
    "price": 200.50,
    "description": "L'orge est une céréale polyvalente utilisée dans la production de malt pour la bière, les aliments pour animaux et divers produits alimentaires.",
    "image": "https://www.anjou-fourrage-tradition.fr/user/documents/images/illustrations/mcith/orge_cropped_676x560.jpg"
  },
  {
    "id": 6,
    "titre": "Millet",
    "domaine": "Céréales et grains",
    "price": 90.75,
    "description": "Le millet est une petite céréale riche en nutriments. Il est consommé dans de nombreuses régions du monde et est une source de glucides et de protéines.",
    "image": "https://ooofarms.com/cdn/shop/products/Foxtail_wholemillet.jpg?v=1672252979&width=1500"
  },
  {
    "id": 7,
    "titre": "Quinoa",
    "domaine": "Céréales et grains",
    "price": 120.00,
    "description": "Le quinoa est une pseudo-céréale riche en protéines et en fibres. Il est souvent utilisé comme substitut de céréales dans divers plats.",
    "image": "https://cuisinersansgaspiller.files.wordpress.com/2020/05/recettes-restes-quinoa-cuit.jpg"
  },
  {
    "id": 8,
    "titre": "Seigle",
    "domaine": "Céréales et grains",
    "price": 180.25,
    "description": "Le seigle est une céréale cultivée pour ses grains et utilisée dans la production de pain, de spiritueux et d'autres produits alimentaires.",
    "image": "https://lamilanaise.com/wp-content/uploads/2017/08/600x400xseigle-bio.jpg.pagespeed.ic.QiOGZiDCst.jpg"
  },
 {
  "id": 10,
  "titre": "Épeautre",
  "domaine": "Céréales et grains",
  "price": 160.00,
  "description": "L'épeautre est une ancienne variété de blé. Il est apprécié pour son goût unique et est utilisé dans la fabrication de pains et de produits de boulangerie.",
  "image": "https://lamilanaise.com/wp-content/uploads/2017/08/%C3%A9pautre-bio-min-1.jpg"
},
{
  "id": 11,
  "titre": "Tomate",
  "domaine": "Légumes",
  "price": 80.25,
  "description": "La tomate est un fruit largement utilisé comme légume dans la cuisine. Elle est riche en nutriments, y compris la vitamine C et le lycopène.",
  "image": "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 12,
  "titre": "Carotte",
  "domaine": "Légumes",
  "price": 60.50,
  "description": "La carotte est une racine comestible, riche en bêta-carotène. Elle est utilisée dans de nombreux plats et est appréciée pour sa saveur sucrée.",
  "image": "https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 13,
  "titre": "Poivron",
  "domaine": "Légumes",
  "price": 120.00,
  "description": "Le poivron est un légume coloré et savoureux. Il est utilisé dans divers plats et peut être consommé cru ou cuit.",
  "image": "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 14,
  "titre": "Aubergine",
  "domaine": "Légumes",
  "price": 100.75,
  "description": "L'aubergine est un légume polyvalent utilisé dans de nombreuses cuisines. Elle a une texture crémeuse et absorbe bien les saveurs.",
  "image": "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 15,
  "titre": "Courgette",
  "domaine": "Légumes",
  "price": 150.50,
  "description": "La courgette est un légume à la saveur douce. Elle est utilisée dans une variété de plats, des sautés aux pains.",
  "image": "https://images.pexels.com/photos/3375263/pexels-photo-3375263.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 16,
  "titre": "Concombre",
  "domaine": "Légumes",
  "price": 70.25,
  "description": "Le concombre est un légume rafraîchissant souvent consommé cru. Il est faible en calories et riche en eau.",
  "image": "https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 17,
  "titre": "Radis",
  "domaine": "Légumes",
  "price": 95.00,
  "description": "Le radis est un légume croquant et piquant. Il est souvent consommé cru dans les salades et apporte une touche de fraîcheur.",
  "image": "https://images.pexels.com/photos/1257078/pexels-photo-1257078.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 18,
  "titre": "Oignon",
  "domaine": "Légumes",
  "price": 120.25,
  "description": "L'oignon est un légume aromatique largement utilisé dans la cuisine. Il ajoute de la saveur aux plats et peut être consommé cru ou cuit.",
  "image": "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lnbm9ufGVufDB8fDB8fHww"
},
{
  "id": 19,
  "titre": "Pomme de terre",
  "domaine": "Légumes",
  "price": 80.50,
  "description": "La pomme de terre est un tubercule polyvalent utilisé dans de nombreux plats. Elle est riche en amidon et constitue une excellente source d'énergie.",
  "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9tbWUlMjBkZSUyMHRlcnJlfGVufDB8fDB8fHww"
},
  {
  "id": 20,
  "titre": "Haricot vert",
  "domaine": "Légumes",
  "price": 130.00,
  "description": "Les haricots verts sont des légumes verts riches en fibres et en nutriments. Ils sont souvent cuits à la vapeur, sautés ou ajoutés aux salades.",
  "image": "https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 21,
  "titre": "Pomme",
  "domaine": "Fruits",
  "price": 200.00,
  "description": "La pomme est un fruit croquant et sucré, riche en fibres et en antioxydants. Elle peut être dégustée telle quelle ou utilisée dans divers plats et desserts.",
  "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UG9tbWV8ZW58MHx8MHx8fDA%3D"
},
{
  "id": 22,
  "titre": "Banane",
  "domaine": "Fruits",
  "price": 150.25,
  "description": "La banane est un fruit énergétique et nutritif. Elle est riche en potassium, en vitamines et en glucides. Idéale comme collation saine.",
  "image": "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5lfGVufDB8fDB8fHww"
},
{
  "id": 23,
  "titre": "Orange",
  "domaine": "Fruits",
  "price": 120.75,
  "description": "L'orange est un agrume juteux et riche en vitamine C. Elle est consommée fraîche, en jus ou utilisée comme ingrédient dans de nombreux plats.",
  "image": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8T3JhbmdlfGVufDB8fDB8fHww"
},
{
  "id": 24,
  "titre": "Avocats",
  "domaine": "Fruits",
  "price": 100.75,
  "description": "L'avocat est un fruit crémeux et riche en graisses saines. Il est souvent utilisé dans les salades, les guacamoles et les plats à base d'avocat.",
  "image": "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZvY2F0JTIwZnJ1aXRzfGVufDB8fDB8fHww"
},
{
  "id": 25,
  "titre": "Papayes",
  "domaine": "Fruits",
  "price": 110.75,
  "description": "La papaye est un fruit sucré et tropical. Elle est riche en enzymes digestives et en vitamines. Souvent consommée fraîche.",
  "image": "https://images.unsplash.com/photo-1623492229905-ebc1202e8904?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UEFQQVlFfGVufDB8fDB8fHww"
},
{
  "id": 26,
  "titre": "Ananas",
  "domaine": "Fruits",
  "price": 160.00,
  "description": "L'ananas est un fruit tropical sucré et juteux. Il est délicieux frais, en jus ou intégré à des plats sucrés et salés.",
  "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW5hbmFzfGVufDB8fDB8fHww"
},
{
  "id": 27,
  "titre": "Mangue",
  "domaine": "Fruits",
  "price": 110.75,
  "description": "La mangue est un fruit tropical sucré et parfumé. Elle est consommée fraîche, en smoothies, ou ajoutée à des salades de fruits.",
  "image": "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuZ3VlfGVufDB8fDB8fHww"
},
{
  "id": 28,
  "titre": "Citron",
  "domaine": "Fruits",
  "price": 140.50,
  "description": "Le citron est un agrume acidulé et riche en vitamine C. Son jus est utilisé pour assaisonner les plats et les boissons.",
  "image": "https://images.unsplash.com/photo-1590502593747-42a996133562?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q0lUUk9OfGVufDB8fDB8fHww"
},
  {
  "id": 29,
  "titre": "Noix de coco",
  "domaine": "Fruits",
  "price": 95.25,
  "description": "La noix de coco est un fruit tropical à la chair blanche et à l'eau rafraîchissante. Elle est utilisée dans de nombreux plats sucrés et salés.",
  "image": "https://images.unsplash.com/photo-1560769680-ba2f3767c785?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Tm9peCUyMGRlJTIwY29jb3xlbnwwfHwwfHx8MA%3D%3D"
},
{
  "id": 31,
  "titre": "Haricots",
  "domaine": "Légumineuses",
  "price": 90.50,
  "description": "Les haricots sont des légumineuses riches en protéines et en fibres. Ils sont utilisés dans de nombreux plats, tels que les ragoûts et les salades.",
  "image": "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  "id": 32,
  "titre": "Pois chiches",
  "domaine": "Légumineuses",
  "price": 80.00,
  "description": "Les pois chiches sont des légumineuses riches en protéines et en fibres. Ils sont utilisés dans de nombreux plats, y compris les curry et les soupes.",
  "image": "https://plus.unsplash.com/premium_photo-1675237625824-40a9c6400ad8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UG9pcyUyMGNoaWNoZXN8ZW58MHx8MHx8fDA%3D"
},
{
  "id": 35,
  "titre": "Fèves",
  "domaine": "Légumineuses",
  "price": 130.00,
  "description": "Les fèves sont des légumineuses riches en nutriments, y compris les protéines. Elles peuvent être utilisées dans les salades et les plats cuisinés.",
  "image": "https://images.pexels.com/photos/4157754/pexels-photo-4157754.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 36,
  "titre": "Soja",
  "domaine": "Légumineuses",
  "price": 100.25,
  "description": "Le soja est une légumineuse polyvalente utilisée pour produire divers produits alimentaires tels que le tofu, le lait de soja et d'autres alternatives.",
  "image": "https://images.pexels.com/photos/273838/pexels-photo-273838.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 39,
  "titre": "Cacahuètes",
  "domaine": "Légumineuses",
  "price": 150.75,
  "description": "Les cacahuètes sont des arachides riches en protéines et en graisses saines. Elles sont souvent consommées grillées ou sous forme de beurre d'arachide.",
  "image": "https://images.pexels.com/photos/7717463/pexels-photo-7717463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
  "id": 41,
  "titre": "Basilic",
  "domaine": "Herbes et épices",
  "price": 30.50,
  "description": "Le basilic est une herbe aromatique populaire utilisée dans la cuisine méditerranéenne. Il ajoute une saveur fraîche et parfumée aux plats.",
  "image": "https://images.pexels.com/photos/2334636/pexels-photo-2334636.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 43,
  "titre": "Piment",
  "domaine": "Herbes et épices",
  "price": 40.00,
  "description": "Le piment est une épice qui ajoute de la chaleur et de la saveur aux plats. Il est utilisé dans de nombreuses cuisines du monde entier.",
  "image": "https://images.pexels.com/photos/68170/paprika-green-red-vegetables-68170.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 44,
  "titre": "Persil",
  "domaine": "Herbes et épices",
  "price": 35.25,
  "description": "Le persil est une herbe fraîche utilisée comme assaisonnement dans de nombreux plats. Il apporte une saveur verte et légère aux recettes.",
  "image": "https://images.pexels.com/photos/60560/parsley-seasoning-greens-salad-60560.jpeg?auto=compress&cs=tinysrgb&w=400"
},
  {
  "id": 47,
  "titre": "Curcuma",
  "domaine": "Herbes et épices",
  "price": 28.50,
  "description": "Le curcuma est une épice jaune vif utilisée pour sa saveur distincte dans de nombreux plats. Il est également connu pour ses propriétés bénéfiques pour la santé.",
  "image": "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 52,
  "titre": "Aneth",
  "domaine": "Herbes et épices",
  "price": 29.75,
  "description": "L'aneth est une herbe aromatique au goût frais et légèrement sucré. Elle est couramment utilisée pour parfumer les plats, en particulier les plats de poisson.",
  "image": "https://images.pexels.com/photos/4197829/pexels-photo-4197829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},
{
  "id": 53,
  "titre": "Menthe",
  "domaine": "Herbes et épices",
  "price": 34.50,
  "description": "La menthe est une herbe fraîche et parfumée souvent utilisée pour aromatiser les boissons, les desserts et les plats salés. Elle offre une saveur rafraîchissante.",
  "image": "https://images.pexels.com/photos/214165/pexels-photo-214165.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 56,
  "titre": "Fenouil",
  "domaine": "Herbes et épices",
  "price": 43.75,
  "description": "Le fenouil est un légume bulbeux au goût anisé. Il est utilisé dans les salades, les plats cuits et les tisanes. Les graines de fenouil sont également utilisées comme épice.",
  "image": "https://images.pexels.com/photos/735719/pexels-photo-735719.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 57,
  "titre": "Poivre noir",
  "domaine": "Herbes et épices",
  "price": 39.50,
  "description": "Le poivre noir est une épice populaire qui ajoute une saveur piquante et piquante aux plats. Il est utilisé moulu dans de nombreuses cuisines du monde.",
  "image": "https://images.pexels.com/photos/15005890/pexels-photo-15005890/free-photo-of-ingredients-nature-morte-pimenter-arriere-plan-blanc.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 58,
  "titre": "Gingembre",
  "domaine": "Herbes et épices",
  "price": 45.25,
  "description": "Le gingembre est une racine aromatique utilisée pour sa saveur intense et épicée. Il est couramment utilisé dans la cuisine asiatique et ajoute une touche de chaleur aux plats.",
  "image": "https://images.pexels.com/photos/7342140/pexels-photo-7342140.jpeg?auto=compress&cs=tinysrgb&w=400"
},
{
  "id": 60,
  "titre": "Curry",
  "domaine": "Herbes et épices",
  "price": 46.75,
  "description": "Le curry est un mélange d'épices utilisé dans de nombreuses cuisines du monde. Il apporte une saveur complexe et parfumée aux plats.",
  "image": "https://images.pexels.com/photos/5273033/pexels-photo-5273033.jpeg?auto=compress&cs=tinysrgb&w=400"
},
]


export default Data