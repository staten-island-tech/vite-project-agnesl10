const vinylRecords = [
  {
    title: "21",
    artist: "Adele",
    genre: "Pop",
    releaseYear: 2011,
    price: 25.99,
    imageUrl:
      "https://cdn.webshopapp.com/shops/13847/files/411011941/650x650x2/adele-21-vinyl-lp.jpg",
    altText: "cool vinyl that says Adele 21 with her face on it",
  },
  {
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    genre: "Hip Hop",
    releaseYear: 2015,
    price: 29.99,
    imageUrl:
      "https://thesoundofvinyl.com.au/cdn/shop/products/kendrick-lamar-to-pimp-a-butterfly-2lp.jpg?v=1607471363",
    altText:
      "vinyl with a cover including a group of people crowding over each other",
  },
  {
    title: "AM",
    artist: "Arctic Monkeys",
    genre: "Rock",
    releaseYear: 2013,
    price: 24.99,
    imageUrl: "https://www.dominomusic.com/res/8yX5/2018am.jpg",
    altText: "vinyl cover with wavelengths over a black background",
  },
  {
    title: "Random Access Memories",
    artist: "Daft Punk",
    genre: "Electronic",
    releaseYear: 2013,
    price: 29.99,
    imageUrl:
      "https://uturnaudio.com/cdn/shop/products/daft_punk_album_950x.jpg?v=1632321483",
    altText:
      "vinyl cover with two helmets split half and half, one gold and one silver",
  },
  {
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    genre: "Pop",
    releaseYear: 2020,
    price: 27.99,
    imageUrl:
      "https://m.media-amazon.com/images/I/41ADPXLGixL._UF1000,1000_QL80_.jpg",
    altText:
      "vinyl cover of Dua Lipa driving with a blue moon in the back, includes pink vinyl",
  },
  {
    title: "Born to Die",
    artist: "Lana Del Rey",
    genre: "Pop",
    releaseYear: 2012,
    price: 26.99,
    imageUrl:
      "https://flyingout.co.nz/cdn/shop/products/LanaDelRey-BornToDie2xLP_VinylRecord_1024x1024_2x_4335ddce-543c-4bee-9615-8943fa0bb575.jpg?v=1690920913",
    altText:
      "vinyl cover of Lana Del Rey outside with her name in white on top and the album name in red on the bottom",
  },
  {
    title: "In the Aeroplane Over the Sea",
    artist: "Neutral Milk Hotel",
    genre: "Indie Rock",
    releaseYear: 1998,
    price: 23.99,
    imageUrl:
      "https://steadfastrecords.net/cdn/shop/products/neutral-milk-hotel-in-the-aeroplane-over-the-sea-lp-950675.jpg?v=1710949158",
    altText:
      "cover shows vintage art of a lady with a white circular object as a face and a man, both waving",
  },
  {
    title: "The Black Parade",
    artist: "My Chemical Romance",
    genre: "Rock",
    releaseYear: 2006,
    price: 24.99,
    imageUrl:
      "https://vinyl.com/cdn/shop/files/wmcstore2023_product_template_7b1bc26b-cdf4-4503-bb9f-79582a16650d.webp?v=1724148704",
    altText:
      "a cover including a parade led by a ringmaster, with a horse and a black tint",
  },
  {
    title: "folklore",
    artist: "Taylor Swift",
    genre: "Indie Folk",
    releaseYear: 2020,
    price: 28.99,
    imageUrl:
      "https://m.media-amazon.com/images/I/617oudVIaRL._UF1000,1000_QL80_.jpg",
    altText:
      "vinyl cover is gray, showing Taylor Swift in a forest with beige vinyls",
  },
  {
    title: "Channel Orange",
    artist: "Frank Ocean",
    genre: "R&B",
    releaseYear: 2012,
    price: 26.99,
    imageUrl:
      "https://img.merchbar.com/product/vinylized/upc/53/602527755304.jpg?q=40&w=1400",
    altText:
      "vinyl cover with an orange gradient featuring Frank Ocean's album name in white",
  },
  {
    title: "Lemonade",
    artist: "Beyoncé",
    genre: "R&B",
    releaseYear: 2016,
    price: 29.99,
    imageUrl:
      "https://drownedworldrecords.com/cdn/shop/products/Beyonce---Lemonade-_Yellow-Colored-Vinyl-2LP_-1668826570.jpg?v=1668826572&width=1445",
    altText:
      "cover of Beyoncé's Lemonade album with a blurred image of her wearing fur",
  },
  {
    title: "Demon Days",
    artist: "Gorillaz",
    genre: "Alternative",
    releaseYear: 2005,
    price: 24.99,
    imageUrl:
      "https://flyingout.co.nz/cdn/shop/products/gorillaz_demon_days_vinyl.jpg?v=1628740462",
    altText: "vinyl cover showing Gorillaz characters in profile view",
  },
  {
    title: "The Life of Pablo",
    artist: "Kanye West",
    genre: "Hip Hop",
    releaseYear: 2016,
    price: 27.99,
    imageUrl:
      "https://saintmarierecords.com/cdn/shop/products/kanye-west-the-life-of-pablo-00000011519-vinyl-428614_800x.jpg?v=1687240282",
    altText:
      "vinyl cover with an orange background featuring text and album photos",
  },
  {
    title: "Back to Black",
    artist: "Amy Winehouse",
    genre: "Soul",
    releaseYear: 2006,
    price: 25.99,
    imageUrl: "https://www.bluescentric.com/images/product/large/5429.jpg",
    altText:
      "vinyl cover with Amy Winehouse sitting against a black background in a white dress",
  },
  {
    title: "The Suburbs",
    artist: "Arcade Fire",
    genre: "Indie Rock",
    releaseYear: 2010,
    price: 24.99,
    imageUrl:
      "https://residentvinyl.com/cdn/shop/files/arcadefirethesuburbs.png?v=1720394451",
    altText:
      "vinyl cover with a vintage image of a car and a suburban neighborhood",
  },
  {
    title: "Good Kid, M.A.A.D City",
    artist: "Kendrick Lamar",
    genre: "Hip Hop",
    releaseYear: 2012,
    price: 29.99,
    imageUrl:
      "https://m.media-amazon.com/images/I/51q8wNf99GL._UF1000,1000_QL80_.jpg",
    altText:
      "cover featuring a van parked in front of a house, representing Kendrick Lamar's album",
  },
  {
    title: "Electric Ladyland",
    artist: "The Jimi Hendrix Experience",
    genre: "Rock",
    releaseYear: 1968,
    price: 27.99,
    imageUrl:
      "https://m.media-amazon.com/images/I/81ULBt1jLsL._UF1000,1000_QL80_.jpg",
    altText:
      "vinyl cover with vibrant, psychedelic imagery for Jimi Hendrix's album",
  },
  {
    title: "The 20/20 Experience",
    artist: "Justin Timberlake",
    genre: "Pop",
    releaseYear: 2013,
    price: 26.99,
    imageUrl:
      "https://vinyl.com/cdn/shop/files/Justin_Timberlake_-_The_20_20_Experience.jpg?v=1714730613",
    altText:
      "vinyl cover with Justin Timberlake wearing a suit with optical lenses around him",
  },
  {
    title: "What a Time to Be Alive",
    artist: "Drake & Future",
    genre: "Hip Hop",
    releaseYear: 2015,
    price: 28.99,
    imageUrl:
      "https://external-preview.redd.it/92BaMO6MgYWNGRHVH-2EPe-mDfEUWQTEckNR4TBPnRU.jpg?auto=webp&s=e1d772fa8eeb301daf046af3831bb30b73f10d79",
    altText:
      "album cover featuring a diamond-like textured pattern for Drake & Future's collaboration",
  },
];
export { vinylRecords };
