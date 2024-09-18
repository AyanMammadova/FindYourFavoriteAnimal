const data = [
    {
        "name": "Penguin",
        "img": " https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Adapted to cold environments, with a charming waddle.",
        "price": 150,
        "id": "1"
    },
    {
        "name": "Cat",
        "img": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Independent and playful, known for their purring.",
        "price": 200,
        "id": "2"
    },
    {
        "name": "Elephant",
        "img": "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Large and gentle, with impressive memory and intelligence.",
        "price": 250,
        "id": "3"
    },
    {
        "name": "Ship",
        "img": "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Majestic and powerful, a key to global transportation.",
        "price": 300,
        "id": "4"
    },
    {
        "name": "Zebra",
        "img": "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Distinctive black and white stripes, social and graceful.",
        "price": 220,
        "id": "5"
    },
    {
        "name": "Parrot",
        "img": "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Colorful feathers, excellent mimics with a lively personality.",
        "price": 180,
        "id": "6"
    },
    {
        "name": "Tiger",
        "img": "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Powerful and solitary, with striking orange and black stripes.",
        "price": 250,
        "id": "7"
    },
    {
        "name": "Cockerel",
        "img": "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Loud and proud, known for their morning crowing.",
        "price": 280,
        "id": "8"
    },
    {
        "name": "Monkeys",
        "img": "https://images.pexels.com/photos/60023/baboons-monkey-mammal-freeze-60023.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Playful and agile, with strong social bonds.",
        "price": 230,
        "id": "9"
    },
    {
        "name": "Deer",
        "img": "https://images.pexels.com/photos/535431/pexels-photo-535431.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Graceful and gentle, known for their antlers and keen senses.",
        "price": 190,
        "id": "10"
    },
    {
        "name": "Eagle",
        "img": "https://images.pexels.com/photos/53581/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Majestic and powerful, with keen eyesight and soaring flight.",
        "price": 210,
        "id": "11"
    },
    {
        "name": "Rhinoceros",
        "img": "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Large and armored, known for their impressive horns.",
        "price": 240,
        "id": "12"
    },
    {
        "name": "Shark",
        "img": "https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Formidable predators of the ocean, with a keen sense of smell.",
        "price": 260,
        "id": "13"
    },
    {
        "name": "Kingfisher",
        "img": "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Colorful and skilled hunters, diving for fish with precision.",
        "price": 270,
        "id": "14"
    },
    {
        "name": "Flamingo",
        "img": "https://images.pexels.com/photos/39627/flamingo-valentine-heart-valentine-s-day-39627.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Elegant with long legs and a distinctive pink color.",
        "price": 200,
        "id": "15"
    },
    {
        "name": "Hedgehog",
        "img": "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Small and spiky, known for their nocturnal habits.",
        "price": 170,
        "id": "16"
    },
    {
        "name": "Meerkat",
        "img": "https://images.pexels.com/photos/60588/meerkat-animal-wild-wildlife-60588.jpeg?auto=compress&cs=tinysrgb&w=800",
        "desc": "Social and alert, known for their upright stance and teamwork.",
        "price": 220,
        "id": "17"
    },
    {
        "name": "White Bear",
        "img": "https://images.pexels.com/photos/65289/polar-bear-bear-teddy-sleep-65289.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Powerful and adapted to Arctic life, known for their white fur.",
        "price": 250,
        "id": "18"
    },
    {
        "name": "Cows",
        "img": "https://images.pexels.com/photos/33550/cows-curious-cattle-agriculture.jpg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Gentle giants, known for their milk and distinctive lowing.",
        "price": 240,
        "id": "19"
    },
    {
        "name": "Lemur",
        "img": "https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Social and agile, with large eyes and a long tail.",
        "price": 260,
        "id": "20"
    },
    {
        "name": "Goose",
        "img": "https://images.pexels.com/photos/160509/ducklings-chicks-mama-duck-160509.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Migratory and vocal, known for their honking and V-shaped flight.",
        "price": 190,
        "id": "21"
    },
    {
        "name": "Giraffe",
        "img": "https://images.pexels.com/photos/259554/pexels-photo-259554.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Tall and graceful, with a long neck and distinctive spots.",
        "price": 230,
        "id": "22"
    },
    {
        "name": "Dolphin",
        "img": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Intelligent and playful, known for their social behavior and acrobatics.",
        "price": 240,
        "id": "23"
    },
    {
        "name": "Peacock",
        "img": "https://images.pexels.com/photos/638738/pexels-photo-638738.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Colorful and eye-catching, famous for their elaborate tail feathers.",
        "price": 200,
        "id": "24"
    },
    {
        "name": "Dogs",
        "img": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Loyal and diverse, known as man's best friend with various breeds.",
        "price": 220,
        "id": "25"
    },
    {
        "name": "Jackal",
        "img": "https://images.pexels.com/photos/1301172/pexels-photo-1301172.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Cunning and adaptable, known for their scavenging behavior.",
        "price": 210,
        "id": "26"
    },
    {
        "name": "Green Sea Turtle",
        "img": "https://images.pexels.com/photos/2570524/pexels-photo-2570524.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Marine travelers, known for their long migrations and shell.",
        "price": 230,
        "id": "27"
    },
    {
        "name": "Hamster",
        "img": "https://images.pexels.com/photos/1093126/pexels-photo-1093126.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Small and nocturnal, with cheek pouches for storing food.",
        "price": 160,
        "id": "28"
    },
    {
        "name": "Hippopotamus",
        "img": "https://images.pexels.com/photos/35995/hippo-mammal-wildlife-nature.jpg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Large and semi-aquatic, known for their large mouths and territorial behavior.",
        "price": 250,
        "id": "29"
    },
    {
        "name": "Donkey",
        "img": "https://images.pexels.com/photos/768078/pexels-photo-768078.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Sturdy and reliable, known for their strength and endurance.",
        "price": 180,
        "id": "30"
    },
    {
        "name": "Owl",
        "img": "https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Nocturnal and wise, with excellent night vision and a distinctive hoot.",
        "price": 190,
        "id": "31"
    },
    {
        "name": "Stork",
        "img": "https://images.pexels.com/photos/35060/stork-bird-animal-fly.jpg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Large and migratory, known for their long legs and beak.",
        "price": 220,
        "id": "32"
    },
    {
        "name": "Squirrel",
        "img": "https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Agile and acrobatic, with a bushy tail and a love for nuts.",
        "price": 170,
        "id": "33"
    },
    {
        "name": "Snail",
        "img": "https://images.pexels.com/photos/183333/pexels-photo-183333.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Slow-moving with a spiral shell, known for their slimy trail.",
        "price": 150,
        "id": "34"
    },
    {
        "name": "Bearded Dragon",
        "img": "https://images.pexels.com/photos/751694/pexels-photo-751694.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Friendly and adaptable, known for their beard-like throat flap.",
        "price": 200,
        "id": "35"
    },
    {
        "name": "Yellow Tang",
        "img": "https://images.pexels.com/photos/3220368/pexels-photo-3220368.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Bright and colorful, with a vibrant yellow body and an oval shape.",
        "price": 220,
        "id": "36"
    },
    {
        "name": "Red Fox",
        "img": "https://images.pexels.com/photos/2786709/pexels-photo-2786709.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Sly and adaptable, with a bushy tail and reddish fur.",
        "price": 210,
        "id": "37"
    },
    {
        "name": "Pig",
        "img": "https://images.pexels.com/photos/66627/pexels-photo-66627.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Intelligent and social, known for their distinctive snouts and playful behavior.",
        "price": 200,
        "id": "38"
    },
    {
        "name": "Koi Fish",
        "img": "https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Colorful and elegant, often found in ornamental ponds.",
        "price": 180,
        "id": "39"
    },
    {
        "name": "Common Map Turtle",
        "img": "https://images.pexels.com/photos/695904/pexels-photo-695904.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Known for their map-like shell patterns, aquatic and basking.",
        "price": 190,
        "id": "40"
    },
    {
        "name": "Crocodile",
        "img": "https://images.pexels.com/photos/1386560/pexels-photo-1386560.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Ancient and fearsome, with powerful jaws and a scaly body.",
        "price": 250,
        "id": "41"
    },
    {
        "name": "Horse",
        "img": "https://images.pexels.com/photos/60112/pexels-photo-60112.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Majestic and strong, known for their speed and beauty.",
        "price": 300,
        "id": "42"
    },
    {
        "name": "Tree Frog",
        "img": "https://images.pexels.com/photos/76957/tree-frog-frog-red-eyed-amphibian-76957.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Small and colorful, adept at climbing and leaping.",
        "price": 160,
        "id": "43"
    },
    {
        "name": "Capybara",
        "img": "https://images.pexels.com/photos/160583/capybara-group-eat-meadow-160583.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Large and social, the world's largest rodent, often seen in groups.",
        "price": 220,
        "id": "44"
    },
    {
        "name": "Rabbit",
        "img": "https://images.pexels.com/photos/1461876/pexels-photo-1461876.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Cute and furry, known for their quickness and burrowing habits.",
        "price": 150,
        "id": "45"
    },
    {
        "name": "Nemo",
        "img": "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Bright orange and white clownfish, popular in aquariums.",
        "price": 180,
        "id": "46"
    },
    {
        "name": "Alpacas",
        "img": "https://images.pexels.com/photos/133387/pexels-photo-133387.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Gentle and woolly, known for their soft fleece and friendly nature.",
        "price": 220,
        "id": "47"
    },
    {
        "name": "Koala",
        "img": "https://images.pexels.com/photos/85678/koala-animals-mammals-australian-85678.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Cute and cuddly, known for their eucalyptus diet and sleepy demeanor.",
        "price": 230,
        "id": "48"
    },
    {
        "name": "Macaw",
        "img": "https://images.pexels.com/photos/1547836/pexels-photo-1547836.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Burrowing marsupials with a stocky build and a cute appearance.",
        "price": 200,
        "id": "49"
    },
    {
        "name": "orange parrotfish",
        "img": "https://images.pexels.com/photos/3062947/pexels-photo-3062947.jpeg?auto=compress&cs=tinysrgb&w=600",
        "desc": "Wildcats with striking spots, native to Central and South America.",
        "price": 250,
        "id": "50"
    }
];
