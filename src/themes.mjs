const themes = [
  { id: 0, emoji: "🍎", name: "Apple", color: "#ff0800" },
  { id: 1, emoji: "🍏", name: "Green Apple", color: "#7cb342" },
  { id: 2, emoji: "🍊", name: "Tangerine", color: "#ff9800" },
  { id: 3, emoji: "🍋", name: "Lemon", color: "#ffeb3b" },
  { id: 4, emoji: "🍌", name: "Banana", color: "#ffeb3b" },
  { id: 5, emoji: "🍉", name: "Watermelon", color: "#f44336" },
  { id: 6, emoji: "🍇", name: "Grapes", color: "#673ab7" },
  { id: 7, emoji: "🍓", name: "Strawberry", color: "#e91e63" },
  { id: 8, emoji: "🍈", name: "Melon", color: "#8bc34a" },
  { id: 9, emoji: "🍒", name: "Cherry", color: "#d32f2f" },
  { id: 10, emoji: "🍑", name: "Peach", color: "#ff5722" },
  { id: 11, emoji: "🍍", name: "Pineapple", color: "#ffeb3b" },
  { id: 12, emoji: "🥭", name: "Mango", color: "#ff9800" },
  { id: 13, emoji: "🥥", name: "Coconut", color: "#795548" },
  { id: 14, emoji: "🥝", name: "Kiwi", color: "limegreen" },
  { id: 15, emoji: "🍅", name: "Tomato", color: "#ff6347" },
  { id: 16, emoji: "🍆", name: "Eggplant", color: "#9c27b0" },
  { id: 17, emoji: "🥑", name: "Avocado", color: "#4caf50" },
  { id: 18, emoji: "🥦", name: "Broccoli", color: "#4caf50" },
  { id: 19, emoji: "🥒", name: "Cucumber", color: "#8bc34a" },
  { id: 20, emoji: "🌶️", name: "Hot Pepper", color: "#f44336" },
  { id: 21, emoji: "🌽", name: "Corn", color: "#ffeb3b" },
  { id: 22, emoji: "🥕", name: "Carrot", color: "#ff9800" },
  { id: 23, emoji: "🥔", name: "Potato", color: "#9e9e9e" },
  { id: 24, emoji: "🍠", name: "Sweet Potato", color: "#ff5722" },
  { id: 25, emoji: "🥐", name: "Croissant", color: "#795548" },
  { id: 26, emoji: "🥖", name: "Baguette", color: "#795548" },
  { id: 27, emoji: "🥨", name: "Pretzel", color: "#795548" },
  { id: 28, emoji: "🥯", name: "Bagel", color: "#795548" },
  { id: 29, emoji: "🥞", name: "Pancakes", color: "#795548" },
  { id: 30, emoji: "🍐", name: "Pear", color: "#9ccc65" },
  { id: 31, emoji: "🫐", name: "Blueberries", color: "#3f51b5" },
  { id: 32, emoji: "🫒", name: "Olive", color: "#4caf50" },
  { id: 33, emoji: "🫑", name: "Bell Pepper", color: "#8bc34a" },
  { id: 34, emoji: "🥬", name: "Leafy Green", color: "#4caf50" },
  { id: 35, emoji: "🫛", name: "Pea Pod", color: "#8bc34a" },
  { id: 36, emoji: "🧄", name: "Garlic", color: "#ffffff" },
  { id: 37, emoji: "🧅", name: "Onion", color: "#ffeb3b" },
  { id: 38, emoji: "🫚", name: "Ginger", color: "#ff9800" },
  { id: 39, emoji: "🍄", name: "Mushroom", color: "#9c27b0" },
  { id: 40, emoji: "🥜", name: "Peanuts", color: "#795548" },
  { id: 41, emoji: "🫘", name: "Beans", color: "#795548" },
  { id: 42, emoji: "🌰", name: "Chestnut", color: "#795548" },
  { id: 43, emoji: "🍞", name: "Bread", color: "#795548" },
  { id: 44, emoji: "🫓", name: "Flatbread", color: "#795548" },
  { id: 45, emoji: "🧇", name: "Waffle", color: "#795548" },
  { id: 46, emoji: "🧀", name: "Cheese Wedge", color: "#ffeb3b" },
  { id: 47, emoji: "🍖", name: "Meat on Bone", color: "#d84315" },
  { id: 48, emoji: "🍗", name: "Poultry Leg", color: "#d84315" },
  { id: 49, emoji: "🥩", name: "Cut of Meat", color: "#d84315" },
  { id: 50, emoji: "🥓", name: "Bacon", color: "#d84315" },
  { id: 51, emoji: "🍔", name: "Hamburger", color: "#d84315" },
  { id: 52, emoji: "🍟", name: "French Fries", color: "#ffeb3b" },
  { id: 53, emoji: "🍕", name: "Pizza", color: "#d84315" },
  { id: 54, emoji: "🌭", name: "Hot Dog", color: "#d84315" },
  { id: 55, emoji: "🥪", name: "Sandwich", color: "#d84315" },
  { id: 56, emoji: "🌮", name: "Taco", color: "#d84315" },
  { id: 57, emoji: "🌯", name: "Burrito", color: "#d84315" },
  { id: 58, emoji: "🫔", name: "Tamale", color: "#d84315" },
  { id: 59, emoji: "🥙", name: "Stuffed Flatbread", color: "#d84315" },
  { id: 60, emoji: "🧆", name: "Falafel", color: "#d84315" },
  { id: 61, emoji: "🥚", name: "Egg", color: "#ffeb3b" },
  { id: 62, emoji: "🍳", name: "Cooking", color: "#ffeb3b" },
  { id: 63, emoji: "🥘", name: "Shallow Pan of Food", color: "#d84315" },
  { id: 64, emoji: "🍲", name: "Pot of Food", color: "#d84315" },
  { id: 65, emoji: "🫕", name: "Fondue", color: "#d84315" },
  { id: 66, emoji: "🥣", name: "Bowl with Spoon", color: "#d84315" },
  { id: 67, emoji: "🥗", name: "Green Salad", color: "#4caf50" },
  { id: 68, emoji: "🍿", name: "Popcorn", color: "#ffeb3b" },
  { id: 69, emoji: "🧈", name: "Butter", color: "#ffeb3b" },
  { id: 70, emoji: "🧂", name: "Salt", color: "#9e9e9e" },
  { id: 71, emoji: "🥫", name: "Canned Food", color: "#9e9e9e" },
  { id: 72, emoji: "🍱", name: "Bento Box", color: "#d84315" },
  { id: 73, emoji: "🍘", name: "Rice Cracker", color: "#ffeb3b" },
  { id: 74, emoji: "🍙", name: "Rice Ball", color: "#ffffff" },
  { id: 75, emoji: "🍚", name: "Cooked Rice", color: "#ffffff" },
  { id: 76, emoji: "🍛", name: "Curry Rice", color: "#d84315" },
  { id: 77, emoji: "🍜", name: "Steaming Bowl", color: "#d84315" },
  { id: 78, emoji: "🍝", name: "Spaghetti", color: "#d84315" },
  { id: 79, emoji: "🍠", name: "Roasted Sweet Potato", color: "#ff5722" },
  { id: 80, emoji: "🍢", name: "Oden", color: "#d84315" },
  { id: 81, emoji: "🍣", name: "Sushi", color: "#d84315" },
  { id: 82, emoji: "🍤", name: "Fried Shrimp", color: "#ff5722" },
  { id: 83, emoji: "🍥", name: "Fish Cake with Swirl", color: "#ff5722" },
  { id: 84, emoji: "🥮", name: "Moon Cake", color: "#795548" },
  { id: 85, emoji: "🍡", name: "Dango", color: "#ff5722" },
  { id: 86, emoji: "🥟", name: "Dumpling", color: "#d84315" },
  { id: 87, emoji: "🥠", name: "Fortune Cookie", color: "#795548" },
  { id: 88, emoji: "🥡", name: "Takeout Box", color: "#d84315" },
  { id: 89, emoji: "🦪", name: "Oyster", color: "#ffffff" },
  { id: 90, emoji: "🍦", name: "Soft Ice Cream", color: "#ffeb3b" },
  { id: 91, emoji: "🍧", name: "Shaved Ice", color: "#03a9f4" },
  { id: 92, emoji: "🍨", name: "Ice Cream", color: "#ffeb3b" },
  { id: 93, emoji: "🍩", name: "Doughnut", color: "#795548" },
  { id: 94, emoji: "🍪", name: "Cookie", color: "#795548" },
  { id: 95, emoji: "🎂", name: "Birthday Cake", color: "#e91e63" },
  { id: 96, emoji: "🍰", name: "Shortcake", color: "#e91e63" },
  { id: 97, emoji: "🧁", name: "Cupcake", color: "#e91e63" },
  { id: 98, emoji: "🥧", name: "Pie", color: "#795548" },
  { id: 99, emoji: "🍫", name: "Chocolate Bar", color: "#795548" },
  { id: 100, emoji: "🍬", name: "Candy", color: "#ff4081" },
  { id: 101, emoji: "🍭", name: "Lollipop", color: "#ff4081" },
  { id: 102, emoji: "🍮", name: "Custard", color: "#ffeb3b" },
  { id: 103, emoji: "🍯", name: "Honey Pot", color: "#ffc107" },
  { id: 104, emoji: "🍼", name: "Baby Bottle", color: "#2196f3" },
  { id: 105, emoji: "🥛", name: "Glass of Milk", color: "#ffffff" },
  { id: 106, emoji: "☕", name: "Hot Beverage", color: "#795548" },
  { id: 107, emoji: "🫖", name: "Teapot", color: "#9e9e9e" },
  { id: 108, emoji: "🍵", name: "Teacup Without Handle", color: "#4caf50" },
  { id: 109, emoji: "🍶", name: "Sake", color: "#ffffff" },
  { id: 110, emoji: "🍾", name: "Bottle with Popping Cork", color: "#4caf50" },
  { id: 111, emoji: "🍷", name: "Wine Glass", color: "#b71c1c" },
  { id: 112, emoji: "🍸", name: "Cocktail Glass", color: "#2196f3" },
  { id: 113, emoji: "🍹", name: "Tropical Drink", color: "#ff5722" },
  { id: 114, emoji: "🍺", name: "Beer Mug", color: "#ffca28" },
  { id: 115, emoji: "🧉", name: "Mate", color: "#4caf50" },
  { id: 116, emoji: "🧊", name: "Ice", color: "#03a9f4" },
  { id: 117, emoji: "👁👄👁", name: "It Is What It is", color: "#FF69B4" },
  { id: 118, emoji: "⌐◨-◨", name: "Noggles", color: "#e9c70b" },
  { id: 119, emoji: "🙈", name: "See-No-Evil Monkey", color: "#f9a825" },
  { id: 120, emoji: "🙉", name: "Hear-No-Evil Monkey", color: "#f9a825" },
  { id: 121, emoji: "🙊", name: "Speak-No-Evil Monkey", color: "#f9a825" },
  { id: 122, emoji: "💥", name: "Collision", color: "#f44336" },
  { id: 123, emoji: "💫", name: "Dizzy", color: "#ffeb3b" },
  { id: 124, emoji: "💦", name: "Sweat Droplets", color: "#2196f3" },
  { id: 125, emoji: "💨", name: "Dashing Away", color: "#4caf50" },
  { id: 126, emoji: "🐵", name: "Monkey Face", color: "#795548" },
  { id: 127, emoji: "🐒", name: "Monkey", color: "#795548" },
  { id: 128, emoji: "🦍", name: "Gorilla", color: "#424242" },
  { id: 129, emoji: "🦧", name: "Orangutan", color: "#e65100" },
  { id: 130, emoji: "🐶", name: "Dog Face", color: "#8d6e63" },
  { id: 131, emoji: "🐕", name: "Dog", color: "#8d6e63" },
  { id: 132, emoji: "🦮", name: "Guide Dog", color: "#8d6e63" },
  { id: 133, emoji: "🐕‍🦺", name: "Service Dog", color: "#8d6e63" },
  { id: 134, emoji: "🐩", name: "Poodle", color: "#e0e0e0" },
  { id: 135, emoji: "🐺", name: "Wolf", color: "#9e9e9e" },
  { id: 136, emoji: "🦊", name: "Fox", color: "#ff5722" },
  { id: 137, emoji: "🦝", name: "Raccoon", color: "#616161" },
  { id: 138, emoji: "🐱", name: "Cat Face", color: "#757575" },
  { id: 139, emoji: "🐈", name: "Cat", color: "#757575" },
  { id: 140, emoji: "🐈‍⬛", name: "Black Cat", color: "#212121" },
  { id: 141, emoji: "🦁", name: "Lion", color: "#ff9800" },
  { id: 142, emoji: "🐯", name: "Tiger Face", color: "#ff9800" },
  { id: 143, emoji: "🐅", name: "Tiger", color: "#ff9800" },
  { id: 144, emoji: "🐆", name: "Leopard", color: "#ff9800" },
  { id: 145, emoji: "🐴", name: "Horse Face", color: "#795548" },
  { id: 146, emoji: "🐎", name: "Horse", color: "#795548" },
  { id: 147, emoji: "🦄", name: "Unicorn", color: "#e040fb" },
  { id: 148, emoji: "🦓", name: "Zebra", color: "#ffffff" },
  { id: 149, emoji: "🫏", name: "Donkey", color: "#616161" },
  { id: 150, emoji: "🦌", name: "Deer", color: "#8d6e63" },
  { id: 151, emoji: "🫎", name: "Moose", color: "#8d6e63" },
  { id: 152, emoji: "🦬", name: "Bison", color: "#8d6e63" },
  { id: 153, emoji: "🐮", name: "Cow Face", color: "#f44336" },
  { id: 154, emoji: "🐂", name: "Ox", color: "#f44336" },
  { id: 155, emoji: "🐃", name: "Water Buffalo", color: "#f44336" },
  { id: 156, emoji: "🐄", name: "Cow", color: "#f44336" },
  { id: 157, emoji: "🐷", name: "Pig Face", color: "#e91e63" },
  { id: 158, emoji: "🐖", name: "Pig", color: "#e91e63" },
  { id: 159, emoji: "🐗", name: "Boar", color: "#795548" },
  { id: 160, emoji: "🐽", name: "Pig Nose", color: "#e91e63" },
  { id: 161, emoji: "🐏", name: "Ram", color: "#9e9e9e" },
  { id: 162, emoji: "🐑", name: "Ewe", color: "#9e9e9e" },
  { id: 163, emoji: "🐐", name: "Goat", color: "#9e9e9e" },
  { id: 164, emoji: "🐪", name: "Camel", color: "#8d6e63" },
  { id: 165, emoji: "🐫", name: "Two-Hump Camel", color: "#8d6e63" },
  { id: 166, emoji: "🦙", name: "Llama", color: "#8d6e63" },
  { id: 167, emoji: "🦒", name: "Giraffe", color: "#ff9800" },
  { id: 168, emoji: "🐘", name: "Elephant", color: "#9e9e9e" },
  { id: 169, emoji: "🦣", name: "Mammoth", color: "#9e9e9e" },
  { id: 170, emoji: "🦏", name: "Rhinoceros", color: "#bdbdbd" },
  { id: 171, emoji: "🦛", name: "Hippopotamus", color: "#757575" },
  { id: 172, emoji: "🐭", name: "Mouse Face", color: "#bdbdbd" },
  { id: 173, emoji: "🐁", name: "Mouse", color: "#bdbdbd" },
  { id: 174, emoji: "🐀", name: "Rat", color: "#bdbdbd" },
  { id: 175, emoji: "🐹", name: "Hamster", color: "#f44336" },
  { id: 176, emoji: "🐰", name: "Rabbit Face", color: "#8d6e63" },
  { id: 177, emoji: "🐇", name: "Rabbit", color: "#8d6e63" },
  { id: 178, emoji: "🐿️", name: "Chipmunk", color: "#8d6e63" },
  { id: 179, emoji: "🦫", name: "Beaver", color: "#8d6e63" },
  { id: 180, emoji: "🦔", name: "Hedgehog", color: "#795548" },
  { id: 181, emoji: "🦇", name: "Bat", color: "#424242" },
  { id: 182, emoji: "🐻", name: "Bear", color: "#795548" },
  { id: 183, emoji: "🐻‍❄️", name: "Polar Bear", color: "#e0e0e0" },
  { id: 184, emoji: "🐨", name: "Koala", color: "#9e9e9e" },
  { id: 185, emoji: "🐼", name: "Panda", color: "#424242" },
  { id: 186, emoji: "🦥", name: "Sloth", color: "#8d6e63" },
  { id: 187, emoji: "🦦", name: "Otter", color: "#8d6e63" },
  { id: 188, emoji: "🦨", name: "Skunk", color: "#616161" },
  { id: 189, emoji: "🦘", name: "Kangaroo", color: "#8d6e63" },
  { id: 190, emoji: "🦡", name: "Badger", color: "#616161" },
  { id: 191, emoji: "🐾", name: "Paw Prints", color: "#616161" },
  { id: 192, emoji: "🦃", name: "Turkey", color: "#795548" },
  { id: 193, emoji: "🐔", name: "Chicken", color: "#f44336" },
  { id: 194, emoji: "🐓", name: "Rooster", color: "#f44336" },
  { id: 195, emoji: "🐣", name: "Hatching Chick", color: "#f9a825" },
  { id: 196, emoji: "🐤", name: "Baby Chick", color: "#f9a825" },
  { id: 197, emoji: "🐥", name: "Front-Facing Baby Chick", color: "#f9a825" },
  { id: 198, emoji: "🐦", name: "Bird", color: "#2196f3" },
  { id: 199, emoji: "🐦‍⬛", name: "Black Bird", color: "#212121" },
  { id: 200, emoji: "🐧", name: "Penguin", color: "#424242" },
  { id: 201, emoji: "🕊️", name: "Dove", color: "#ffffff" },
  { id: 202, emoji: "🦅", name: "Eagle", color: "#757575" },
  { id: 203, emoji: "🦆", name: "Duck", color: "#f44336" },
  { id: 204, emoji: "🦢", name: "Swan", color: "#ffffff" },
  { id: 205, emoji: "🪿", name: "Goose", color: "#bdbdbd" },
  { id: 206, emoji: "🦉", name: "Owl", color: "#795548" },
  { id: 207, emoji: "🦤", name: "Dodo", color: "#8d6e63" },
  { id: 208, emoji: "🥺", name: "UwU", color: "#e0f9f9" },
  { id: 209, emoji: "🪶", name: "Feather", color: "#8d6e63" },
  { id: 210, emoji: "🦩", name: "Flamingo", color: "#f06292" },
  { id: 211, emoji: "🦚", name: "Peacock", color: "#4caf50" },
  { id: 212, emoji: "🦜", name: "Parrot", color: "#ff9800" },
  { id: 213, emoji: "🐸", name: "Frog", color: "#4caf50" },
  { id: 214, emoji: "🐊", name: "Crocodile", color: "#4caf50" },
  { id: 215, emoji: "🐢", name: "Turtle", color: "#4caf50" },
  { id: 216, emoji: "🦎", name: "Lizard", color: "#4caf50" },
  { id: 217, emoji: "🐍", name: "Snake", color: "#4caf50" },
  { id: 218, emoji: "🐲", name: "Dragon Face", color: "#f44336" },
  { id: 219, emoji: "🐉", name: "Dragon", color: "#f44336" },
  { id: 220, emoji: "🦕", name: "Sauropod", color: "#8bc34a" },
  { id: 221, emoji: "🦖", name: "T-Rex", color: "#8bc34a" },
  { id: 222, emoji: "🐳", name: "Spouting Whale", color: "#2196f3" },
  { id: 223, emoji: "🐋", name: "Whale", color: "#2196f3" },
  { id: 224, emoji: "🐬", name: "Dolphin", color: "#2196f3" },
  { id: 225, emoji: "🦭", name: "Seal", color: "#bdbdbd" },
  { id: 226, emoji: "🐟", name: "Fish", color: "#2196f3" },
  { id: 227, emoji: "🐠", name: "Tropical Fish", color: "#ff9800" },
  { id: 228, emoji: "🐡", name: "Blowfish", color: "#ff9800" },
  { id: 229, emoji: "🦈", name: "Shark", color: "#757575" },
  { id: 230, emoji: "🐙", name: "Octopus", color: "#9c27b0" },
  { id: 231, emoji: "🪼", name: "Jellyfish", color: "#9c27b0" },
  { id: 232, emoji: "🐚", name: "Spiral Shell", color: "#f06292" },
  { id: 233, emoji: "🪸", name: "Coral", color: "#f06292" },
  { id: 234, emoji: "🐌", name: "Snail", color: "#8d6e63" },
  { id: 235, emoji: "🦋", name: "Butterfly", color: "#e040fb" },
  { id: 236, emoji: "🐛", name: "Bug", color: "#4caf50" },
  { id: 237, emoji: "🐜", name: "Ant", color: "#424242" },
  { id: 238, emoji: "🐝", name: "Honeybee", color: "#fdd835" },
  { id: 239, emoji: "🪲", name: "Beetle", color: "#424242" },
  { id: 240, emoji: "🐞", name: "Lady Beetle", color: "#f44336" },
  { id: 241, emoji: "🦗", name: "Cricket", color: "#424242" },
  { id: 242, emoji: "🪳", name: "Cockroach", color: "#424242" },
  { id: 243, emoji: "🕷️", name: "Spider", color: "#424242" },
  { id: 244, emoji: "🕸️", name: "Spider Web", color: "#ffffff" },
  { id: 245, emoji: "🦂", name: "Scorpion", color: "#424242" },
  { id: 246, emoji: "🦟", name: "Mosquito", color: "#424242" },
  { id: 247, emoji: "🪰", name: "Fly", color: "#424242" },
  { id: 248, emoji: "🪱", name: "Worm", color: "#795548" },
  { id: 249, emoji: "🦠", name: "Microbe", color: "#4caf50" },
  { id: 250, emoji: "💐", name: "Bouquet", color: "#e91e63" },
  { id: 251, emoji: "🌸", name: "Cherry Blossom", color: "#e91e63" },
  { id: 252, emoji: "💮", name: "White Flower", color: "#ffffff" },
  { id: 253, emoji: "🪷", name: "Lotus", color: "#e91e63" },
  { id: 254, emoji: "🏵️", name: "Rosette", color: "#f44336" },
  { id: 255, emoji: "🌹", name: "Rose", color: "#f44336" },
  { id: 256, emoji: "🥀", name: "Wilted Flower", color: "#9e9e9e" },
  { id: 257, emoji: "🌺", name: "Hibiscus", color: "#f06292" },
  { id: 258, emoji: "🪻", name: "Hyacinth", color: "#f06292" },
  { id: 259, emoji: "🌻", name: "Sunflower", color: "#ffeb3b" },
  { id: 260, emoji: "🌼", name: "Blossom", color: "#ffeb3b" },
  { id: 261, emoji: "🌷", name: "Tulip", color: "#e91e63" },
  { id: 262, emoji: "🌱", name: "Seedling", color: "#4caf50" },
  { id: 263, emoji: "🪴", name: "Potted Plant", color: "#4caf50" },
  { id: 264, emoji: "🌲", name: "Evergreen Tree", color: "#4caf50" },
  { id: 265, emoji: "🌳", name: "Deciduous Tree", color: "#4caf50" },
  { id: 266, emoji: "🌴", name: "Palm Tree", color: "#4caf50" },
  { id: 267, emoji: "🌵", name: "Cactus", color: "#8bc34a" },
  { id: 268, emoji: "🌾", name: "Sheaf of Rice", color: "#8bc34a" },
  { id: 269, emoji: "🌿", name: "Herb", color: "#4caf50" },
  { id: 270, emoji: "☘️", name: "Shamrock", color: "#4caf50" },
  { id: 271, emoji: "🍀", name: "Four Leaf Clover", color: "#4caf50" },
  { id: 272, emoji: "🍁", name: "Maple Leaf", color: "#ff9800" },
  { id: 273, emoji: "🍂", name: "Fallen Leaf", color: "#ff9800" },
  { id: 274, emoji: "🍃", name: "Leaf Fluttering in Wind", color: "#4caf50" },
  { id: 275, emoji: "🪹", name: "Empty Nest", color: "#8d6e63" },
  { id: 276, emoji: "🪺", name: "Nest with Eggs", color: "#8d6e63" },
  { id: 277, emoji: "🍄", name: "Mushroom", color: "#795548" },
  { id: 278, emoji: "🌰", name: "Chestnut", color: "#795548" },
  { id: 279, emoji: "🦀", name: "Crab", color: "#f44336" },
  { id: 280, emoji: "🦞", name: "Lobster", color: "#f44336" },
  { id: 281, emoji: "🦐", name: "Shrimp", color: "#f44336" },
  { id: 282, emoji: "🦑", name: "Squid", color: "#f44336" },
  { id: 283, emoji: "🪨", name: "Rock", color: "#9e9e9e" },
  { id: 284, emoji: "🌈", name: "Rainbow", color: "#e040fb" },
  { id: 285, emoji: "☂️", name: "Umbrella", color: "#2196f3" },
  { id: 286, emoji: "❄️", name: "Snowflake", color: "#90caf9" },
  { id: 287, emoji: "☄️", name: "Comet", color: "#90caf9" },
  { id: 288, emoji: "🔥", name: "Fire", color: "#ff5722" },
  { id: 289, emoji: "💧", name: "Droplet", color: "#2196f3" },
  { id: 290, emoji: "🌊", name: "Water Wave", color: "#2196f3" },
  { id: 291, emoji: "🫧", name: "Bubbles", color: "#90caf9" },
];
export default themes;
