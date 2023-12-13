/*option-Z for word wrap*/

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}


function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }




    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}
/*
function roomGP() {
  document.body.style.backgroundImage = "url('media/grocery.jpg')";

  document.container.style.backgroundImage = "url('media/gpExterior.jpg')";
} 


function photoChangeGP() {
  if (textNodes.location(gpExt)) {

  }
}*/



const textNodes = [
  {
    id: 1, 
    text: "You stand on the bow of your boat beneath the wings of a pair of seagulls. They glide overhead, leading the way down the channel and toward the town of La Conner. Your dad always used say that seagulls guide the way home for the souls of the recently departed, but you've never believed in that sort of thing. You head back into the cabin and survey the items you've collected there.",
    options: [
        {
            text: "You pick up a pen.",
            setState: {getPen: true},
            nextText: 2
        },
        {
            text: "You pick up a flashlight",
            setState: {getFlashlight: true},
            nextText: 2
        },

    ]
  },
  {
    id: 2,
    text: "You reach the marina and tie up your boat to the dock. You don't really feel like going in to work tonight, but you know better than to call out sick. Cameron would never let it go. You make your way up to the boardwalk above the channel. A blanket of snow has fallen on the town, and you find yourself mesmerized by the twinkle lights and the icicles hanging from eaves.",
    options: [
        {
            text: "Walk the rest of the way to work.",
            nextText: 3
        },
        {
            text: "Turn to the right to explore the courtyard.",
            nextText: 4
        }
      ]
  },
  {
    id: 3,
    text: "You follow the boardwalk out toward the Main Street. The sign for Giuseppe's Place, the Italian restaurant and bar where you work, swings in a mild wind. You step inside and are immediately greeted with the almost overwhelming aroma of garlic and stewing tomatoes. \n\n You walk up to the bar. Cameron is flying back there, pouring faster than you've ever seen and still unable to keep glasses full. ",
    options: [
      {
        text: "Offer to help Cameron.",
        nextText: 5
      },
      {
        text: "Check in with your boss.",
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: "Before heading for work, you stop at the fountain in the courtyard. To be honest, it's always freaked you out. The fact that it's frozen solid makes it even worse. At the center of the fountain, there's a statue of a crow, graven from stone, beak wide open with ice spewing from its mouth. Part way down, the creature's tail morphs into tentacles. The tentacles spiral and twist down into the water, disappearing below the frozen surface. ",
    options: [
      {
        text: "Take a closer look at the fountain",
        nextText: 7
      },
      {
        text: "Head to work",
        nextText: 3
      }
    ]
  },
  {
    id: 5,
    text: "You walk up to the bar. Cameron sees you and visibly relaxes. \n\n CAMERON: About time you showed up.",
    options: [
      {
        text: "YOU: Please. I covered your entire shift twice last week.",
        nextText: 8
      },
      {
        text: "YOU: Yeah, sorry I'm late.",
        nextText: 8
      }
    ]
  },
  {
    id: 6,
    text: "You head back to the kitchen where you find your boss. You ask her if you should start your normal shift, but she asks you to head behind the bar and help Cameron instead. The restaurant isn't that busy tonight, but for some reason the lounge in the back is practically overrun. You walk up to the bar. Cameron sees you and visibly relaxes. \n\n CAMERON: About time you showed up." ,
    options: [
        {
            text: "YOU: Please. I covered your entire shift twice last week.",
            nextText: 8
        },
        {
            text: "YOU: Sorry I'm late.",
            nextText: 8
        }
      ]
  },
  {
    id: 7,
    text: "There's a row of symbols etched in the base of the fountain. You've worked in this town for over a year, but you still have no idea what those symbols mean.",
    options: [
      {
        text: "Head to work.",
        nextText: 3
      }
    ]
  },
  {
    id: 8,
    text: "CAMERON: I'm just giving you a bad time. Now that you're here, though, do you think you could find me a pen?",
    options: [
      {
        text: "YOU: Here you go.",
        requiredState: (currentState) => currentState.getPen,
        setState: {getPen: false},
        nextText: 9
      },
      {
        text: "YOU: No, sorry. I'll see if I can find one for you.",
        requiredState: (currentState) => currentState.getFlashlight,
        setState: {getFlashlight: true},
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: "CAMERON: Thanks! It's like someone cleaned out every pen in the place! \n\n YOU: Some kind of pen bandit, I guess. \n\n CAMERON: Yep. So, how was your sailing trip?",
    options: [
      {
        text: "YOU: Great! Going back out tomorrow ",
        nextText: 11
      },
      {
        text: "YOU: Not nearly long enough, but I'm going back out tomorrow.",
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: "CAMERON: Nice! Hey, so you know how the writer swore up and down he would never set foot in our establishment again? \n\n  YOU: Yeah. \n\n CAMERON: Well, he's back. \n\n YOU: Don't worry about it. I'll take care of him. \n\n CAMERON: Thanks. He wants a Moscow Mule.",
    options: [
      {
        text: "You head behind the counter and grab a copper mug.",
        nextText: 12
      },
    ]
  },
  {
    id: 12,
    text: "Even though Cameron is swamped tonight, the drink station is still relatively clean and organized except for a little melted ice dribbling onto the floor. You swipe it up quickly and start to choose the ingredients for your drink.",
    options: [
      {
        text: "You add a shot of vodka, half a can of ginger beer, and a lime to the copper cup.",
        setState: {getMoscow: true},
        nextText: 13
      },
      {
        text: "You add whiskey, a dash of bitters, and some orange peel to the copper cup.",
        nextText: 14
      },
      {
        text: "You add rum, cola, and a lime to the copper cup.",
        nextText: 14
      }
    ]
  },
  {
    id: 13,
    text: "You take the drink and enter the kitchen through the door behind the bar. It's much quieter back here. Apparently there aren't that many people ordering food at eleven o'clock at night. \n\n You sidestep the dishwasher and step out into the lounge. It's busy back here, but quiet. That's how it always is. Bustling but silent.",
    options: [
      {
        text: "Explore",
        nextText: 15
      }
    ]
  },
  {
    id: 14,
    text: "Incorrect! Try again!",
    options: [
      {
        text: "You pour out the mug and try again.",
        nextText: 12
      }
    ]
  },
  {
    id: 15,
    text: "You've always loved this part of the restaurant. There's a tall bookshelf to your left, surrounded by people reading and typing on their computers. You spot the writer sitting next to the fire, working on his computer. On the other side of the room there is a mini arcade next to the back door, which leads out of the building and back to the boardwalk.",
    options: [
      {
        text: "Go to the mini library",
        nextText: 16
      },
      {
        text: "Go to the arcade",
        nextText: 17
      },      {
        text: "Go to the back door",
        nextText: 18
      },      {
        text: "Talk to the writer",
        nextText: 19
      },      /*{
        text: "Go back to the restaurant",
        requiredState: (currentState) => currentState.moscowDelivered && currentState.lockedCloset,
  
        nextText: 1.1
      }, */
      {
        text: "Go back to the restaurant.",
        requiredState: (currentState) => currentState.drinkQuest1,
        nextText: 2.7
      }
    ]
  },
  {
    id: 16,
    text: "Giuseppe has been collecting these books from the local bookstores for the past few months. He has some interesting stuff in there. ",
    options: [
      {
        text: "Pick up a book",
        nextText: 21
      },
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 17,
    text: "You make your way over to the Snakes Bending Time machine on the far end of the room. You're pretty good at the game, and you always keep quarters in your pocket for this exact purpose. \n\n As you stand next to the games, you think you catch the scent of smoke wafting from the back hall.",
    options: [
     {
        text: "Play Snakes Bending Time",
        nextText: 22
      }, 
      {
        text: "Investigate the smokey smell",
        nextText: 23
      },
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 18,
    text: "For some reason Cameron has the back door propped open. You walk up to it and look out over the channel. You can see your boat from here, and you can't wait to get back out there in the morning. As soon as the sun comes up, you're taking off. You haven't told anyone that this is your last night working here yet. ",
    options: [
      {
        text: "Go outside",
        nextText: 24
      },
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 19,
    text: "You walk up to the writer. He's wearing a deep purple-colored cardigan, his glasses have slipped halfway down his nose, and he's typing madly at a laptop that seems just a little too small for him. He looks up as you approach.",
    options: [
      {
        text: "Hand him the Moscow Mule.",
        requiredState: (currentState) => currentState.getMoscow,
        setState: {getMoscow: false, moscowDelivered: true},
        nextText: 25
      },
      {
        text: "YOU: What are you working on?",
        setState: {get5Tip: true},
        nextText: 34
      },
      {
        text: "Go back to lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 20,
    text: "You probably better deliver that drink first.",
    options: [
      {
        text: "Go to the Writer",
        nextText: 19
      },
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 21,
    text: "You look through the selection of books. Several catch your eye.",
    options: [
      {
        text: "Code-Breaking For Beginners",
        nextText: 26
      },
      {
        text: "Poems By Emily Dickinson",
        nextText: 27 
      },
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 22,
    text: "The game starts up normally, but just as you're about to jam the joystick to the right, the screen suddenly blinks out and the entire machine goes quiet. That's never happened before.",
    options: [
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 23,
    text: "You leave the lounge and head back to the storeroom at the end of the hall. The smell of smoke grows stronger as you approach. You twist the knob on the storeroom door and are surprised to find that it doesn't open. It must be locked. You make a mental note to ask Cameron about it.",
    options: [
      {
        text: "Go back to the lounge",
        setState: {lockedCloset: true},
        nextText: 15
      },
    ]
  },
  {
    id: 24,
    text: "There's really no reason to go outside right now.",
    options: [
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 25,
    text: "WRITER: Thank you. I've been waiting for this for an ungodly amount of time. Here's a little something for your trouble. \n\n The writer hands you a five-dollar bill.",
    options: [
      {
        text: "YOU: What are you working on?",
        setState: {get5Tip: true},
        nextText: 34
      },
      {
        text: "Go back to lounge",
        setState: {get5Tip: true},
        nextText: 15
      }
    ]
  },

  {
    id: 26,
    text: "Code-Breaking for Beginners \n\n Chapter Five: Book Codes \n\n There are several ways to implement a good book code. One common way to do so is by writing down pairs of numbers to indicate certain words and letters on a page. First, you find a word on a page of a book that contains the letter you need. Then you write down the number corresponding to the word, followed by the number correspoding to the specific letter. \n\n For example, let's say that you want to isolate the letter 'z' from the sentence 'All chickens are lazy.' Since 'lazy' is the forth word and 'z' is the third letter of that word, you would write down '4.3'.",
    options: [
      {
        text: "Go back to the bookshelf",
        nextText: 16
      },
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 27,
    text: "Poems By Emily Dickinson \n\n As Imperceptibly as Grief: \nAs imperceptibly as grief \nThe summer lapsed away, \n --Too imperceptible, at last,\nTo seem like perfidy. \n\nA quietness distilled, \nAs twilight long begun, \nOr Nature, spending with herself \nSequestered afternoon.",
    options: [
      {
        text: "Go back to the bookshelf",
        nextText: 16
      },
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 30,
    text: "There's really no reason to go to your boat right now. You can always grab a pen later.",
    options: [
      {
        text: "Go to the crow fountain",
        nextText: 31
      },
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 31,
    text: "To be honest, the crow fountain behind the restaurant has always freaked you out. The fact that it's frozen solid makes it even worse. At the center of the fountain, there's a statue of a crow, graven from stone, beak wide open with ice spewing from its mouth. Part way down, the creature's tail morphs into tentacles. The tentacles spiral and twist down into the water, disappearing below the frozen surface.",
    options: [
      {
        text: "Take a closer look at the fountain",
        nextText: 32
      },
      {
        text: "Go down to your boat",
        nextText: 30
      },
      {
        text: "Return to the lounge",
        nextText: 15
      }
    ]
  },
  {
    id: 32,
    text: "There's a row of symbols etched in the base of the fountain. You've worked in town for over a year, but you still have no idea what those symbols mean.",
    options: [

      {
        text: "Go down to your boat",
        nextText: 30
      },
      {
        text: "Go back to the lounge",
        nextText: 15
      }
    ]
  },

  {
    id: 34,
    text: "The Writer takes a sip of his drink. \n\n WRITER: It's my latest novel. It's a historical piece that takes place during the fall of the Roman Empire. Would you like to read the first chapter? I believe I have a copy of the manuscript somewhere around here.",
    options: [
      {
        text: "YOU: Sure! That sounds interesting. You say this even though there's a good chance you'll never see the Writer again after tonight.",
        nextText: 35
      },
      {
        text: "YOU: No thanks. Historical fiction isn't my thing. You feel a little guilty, but you doubt you'll ever see the writer again after tonight.", 
        nextText: 36
      }
    ]
  },
  {
    id: 35,
    text: "WRITER: Great! Here you go! \n\n The writer digs into his leather bag and produces a copy of his manuscript. \n\n You take it. \n\n WRITER: On another note, do you know anything about the strange smell coming from the back hallway? It smells a bit like a campfire back there." ,
    options: [
      {
        text: "I'll check it out.",
        nextText: 15
      }
    ]
  },
  {
    id: 36,
    text: "The writer looks slightly offended. \n\n WRITER: Suit yourself, I suppose. On another note, do you know anything about the strange smell coming from the back hallway? It smells a bit like a campfire back there.",
    options: [
      {
        text: "I'll see what I can do.",
        nextText: 37,
      }
    ]
  },
  {
    id: 37,
    text: "Congratulations! You have reached then end of the demo!",
    options: [
      {
        text: "Restart",
        nextText: 1,
      }
    ]
  },




  {
    id: 1.1,
    text: "Every once in a while, someone forgets to unlock the closet door at the beginning of their shift, and every once in a while, some part-time employee sneaks back there for a smoke break. The weird part is that those two things rarely happen in conjunction. You head back to the bar, snagging a few empty glasses and tidying a few tables on your way. \n\n Cameron is busy at the bar.",
    options: [
      {
        text: "Talk to Cameron",
        nextText: 1.2
      },
      {
        text: "Go to the kitchen",
        nextText: 1.4
      }
    ]
  },
  {
    id: 1.2,
    text: "YOU: Hey, the door to the supply closet is still locked. \n\n CAMERON: Yeah, the key wasn't in its usual spot this morning. Maybe Denise knows where it went?",
    options: [
      {
        text: "YOU: I'll go check.",
        nextText: 1.3
      }
    ]
  },
  {
    id: 1.3,
    text: "Animated laughter and conversation fill the room around you. All of the words mingle together into one tangled mass, like spaghetti in a pot. ",
    options: [
      {
        text: "Go to the kitchen",
        nextText: 1.4
      },
      {
        text: "Talk to Cameron",
        nextText: 1.5
      },
      {
        text: "Go to Mango's Grocery",
        requiredState: (currentState) => currentState.mangoKey, 
        nextText: 1.9
      }
    ]
  },
  {
    id: 1.4,
    text: "The kitchen is busy, but quiet. That's how it always is. Bustling and quiet. \n\n Denise is pulling something out of the oven. You've always liked that about Denise. She's a manager who's not afraid to work in the trenches.",
    options: [
      {
        text: "Talk to Denise",
        requiredState: (currentState) => currentState.mangoKey,
        nextText: 1.6
      },
      {
        text: "Go to the lounge",
        nextText: 15
      },
      {
        text: "Go to the restaurant",
        nextText: 1.3
      }
    ]
  },
  {
    id: 1.5,
    text: "Cameron flies behind the bar, filling drinks, passing out menus, and yelling orders back to the kitchen.",
    options: [
      {
        text: "Go to the kitchen",
        nextText: 1.4
      },
      {
        text: "Go to the restaurant",
        nextText: 1.7
      },
      {
        text: "Give Cameron the coffee",
        requiredState: (currentState) => currentState.getCoffee,
        setState: {getCoffee: false},
        nextText: 1.18
      }
    ]
  },
  {
    id: 1.6,
    text: "Denise, a small woman with spiraling curly hair, glances up at you as you approach. \n\n DENISE: How's my favorite full-time Tuesday night bartender? ",
    options: [
      {
        text: "YOU: Looks like I'm more than a bartender tonight!",
        nextText: 1.8
      },
      {
        text: "YOU: Locked out of the storeroom.",
        nextText: 1.8
      }
    ]
  },
  {
    id: 1.8,
    text: "DENISE: I don't know why we've been so busy this week. It's like somebody cast a spell on us or something! Made us irresistible! \n\n YOU: I think someone also cast a spell on the storeroom. The door is locked. \n\n DENISE: That's my fault. I ran over to Mango's and I left my wallet over there while I was paying. My keys are in the front fold. Sara is holding on to it for me, but I haven't had a chance to get back over there yet. It's been so busy. I know this is lame, but do you think you could go grab it for me? ",
    options: [
      {
        text: "YOU: Sure!",
        setState: {mangoKey: true},
        nextText: 1.4
      },
      {
        text: "YOU: I just have a few things to do first.",
        setState: {mangoKey: true},
        nextText: 1.4
      }
    ]
  },
  {
    id: 1.9,
    text: "You step out into the silence of a snow-blanketed night and make your way down the street to Mango's Grocery. They'll be closing soon, but their lights still spill out into the street, beckoning travelers from all sides, and so you push the door open and step inside. \n\n The store is well stocked with town favorites, and those town favorites are not necessarily what you would expect for such a tiny grocery store. The coffee section alone is huge.",
    options: [
      {
        text: "Carol, a young woman wearing a flannel jacket over a band t-shirt, holds up a small black pouch as you approach.",
        nextText: 1.101
      },
      {
        text: "Browse the store",
        nextText: 1.11
      }
    ]
  },
  {
    id: 1.101,
    text: "CAROL: You must be here for this. \n\n YOU: Yes. Thank you!",
    options: [
      {
        text: "Examine the wallet.",
        setState: {getWallet: true},
        nextText: 1.12
      },
      {
        text: "Take the wallet.",
        setState: {getWallet: true},
        nextText: 1.13
      }
    ]
  },
  {
    id: 1.12,
    text: "You find the key in the front flap, just like Denise said. You also find a couple of tickets to a grade school musical, scheduled for tomorrow morning. You know from casual conversation that Denise has a couple of young kids. Knowing Denise, she'll probably pull a double shift and head straight to the musical. That woman works harder than anyone else you've ever met.",
    options: [
      {
        text: "You take the key out of the wallet and shove the wallet in your pocket to give to Denise later.",
        setState: {getClosetKey: true},
        nextText: 1.14
      }
    ]
  },
  {
    id: 1.13,
    text: "Normally you would snoop in a situation like this, but you like Denise too much.",
    options: [
      {
        text: "You take the key out of the wallet and shove the wallet in your pocket to give to Denise later.",
        setState: {getClosetKey: true},
        nextText: 1.14
      }
    ]
  },
  {
    id: 1.14,
    text: "The store is well stocked with town favorites, and those town favorites are not necessarily what you would expect for such a tiny grocery store. The coffee section alone is huge. ",
    options: [
      {
        text: "Talk to Carol",
        nextText: 1.101
      },
      {
        text: "Browse the store",
        nextText: 1.11
      },
      {
        text: "Go to the restaurant",
        nextText: 1.15
      }
    ]
  },
  {
    id: 1.11,
    text: "Sometimes, on particularly busy nights, you buy snacks for your coworkers. The bar has all kinds of snacks, of course, but you know as well as anyone how easy it is to get sick of the same old stuff.",
    options: [
      {
        text: "Buy Cameron's favorite iced caramel coffee for $4.",
        requiredState: (currentState) => currentState.get5Tip,
        setState: {getCoffee: true, get5Tip: false},
        nextText: 1.14
      },
      {
        text: "Buy Denises's favorite barbecue chips for $4.",
        requiredState: (currentState) => currentState.get5Tip,
        setState: {getChips: true, get5Tip: false},
        nextText: 1.14
      },
      {
        text: "Go to the restaurant",
        nextText: 1.15
      }
    ]
  },
  {
    id: 1.15,
    text: "The sign for Giuseppe's Place swings in a mild wind. You step inside and are immediately greeted with the almost overwhelming aroma of garlic and stewing tomatoes.",
    options: [
      {
        text: "Go to the kitchen",
        nextText: 1.18
      },
      {
        text: "Go to the bar",
        nextText: 1.16
      }
    ]
  },
  {
    id: 1.16,
    text: "Cameron flies behind the bar, filling drinks, passing out menus, and yelling orders back to the kitchen.",
    options: [
      {
        text: "Go to the kitchen",
        nextText: 1.18
      },
      {
        text: "Give Cameron the coffee",
        requiredState: (currentState) => currentState.getCoffee,
        setState: {getCoffee: false},
        nextText: 1.19
      },
      {
        text: "Go to the cocktail station",
        nextText: 1.17
      },
      {
        text: "Go to the restaurant",
        nextText: 1.7
      }
    ]
  },
  {
    id: 1.17,
    text: "You step behind the bar just as a customer approaches. He greets you and orders a Moscow Mule.",
    options: [
      {
        text: "Make drink",
        nextText: 1.16
      }
    ]
  },
  {
    id: 1.18,
    text: "The kitchen is busy, but quiet. That's how it always is. Bustling and quiet. Denise is pulling something out of the oven. You've always liked that about Denise. She's a manager who's not afraid to work in the trenches.",
    options: [
      {
        text: "Talk to Denise",
        nextText: 1.21
      },
      {
        text: "Go to the lounge",
        nextText: 15
      },
      {
        text: "Go to the restaurant",
        nextText: 1.7
      }
    ]
  },
  {
    id: 1.21,
    text: "Denise, a small woman with spiraling curly hair, glances up at you as you approach. \n\n DENISE: How's my favorite full-time Tuesday night bartender?",
    options: [
      {
        text: "Here's your wallet back. I got you some chips too.",
        requiredState: (currentState) => currentState.getChips && currentState.getWallet,
        setState: {getChips: false, getWallet: false},
        nextText: 1.22
      },
      {
        text: "Here's your wallet back.",
        requiredState: (currentState) => currentState.getWallet,
        setState: {getWallet: false},
        nextText: 1.23
      },
      {
        text: "Go to kitchen",
        nextText: 1.18
      }
    ]
  },
  {
    id: 1.22,
    text: "DENISE: Thank you so much! What would I do without you? \n\n You look away and try not to look guilty. \n\n YOU: Same thing you did before I got here, I guess! \n\n DENISE: Nah, you're worth like three other people.",
    options: [
      {
        text: "Go to the lounge",
        nextText: 15
      },
      {
        text: "Go to the kitchen",
        nextText: 1.18
      }
    ]
  },
  {
    id: 1.23,
    text: "DENISE: Thanks for taking care of that!",
    options: [
      {
        text: "Go to the lounge",
        nextText: 15
      },
      {
        text: "Go to the kitchen",
        nextText: 1.18 
      },
      {
        text: "Go to the restaurant",
        nextText: 1.16
      }
    ]
  },
  {
    id: 1.19,
    text: "Cameron looks up as you set the coffee down in front of him, and a smile spreads across his face. \n\n CAMERON: Thank you! It's been that kind of night for sure! \n\n He glances up at the line of customers on the far end of the bar, but then he opens up his coffee and looks back at me. \n\n CAMERON: I've been meaning to ask you—how's school going?",
    options: [
      {
        text: "YOU: It's been good.",
        nextText: 1.24
      },
      {
        text: "YOU: To be honest, it doesn't feel like it's going anywhere. I feel stuck.",
        nextText: 1.25
      }
    ]
  },
  {
    id: 1.24,
    text: "CAMERON: Glad to hear it!",
    options: [
      {
        text: "Go to kitchen",
        nextText: 1.18
      },
      {
        text: "Go to cocktail station",
        nextText: 1.17
      },
      {
        text: "Go to the restaurant",
        nextText: 1.3
      }
    ]
  },
  {
    id: 1.25,
    text: "CAMERON: I don't think you're going to be stuck forever. Aren't you boating tomorrow? \n\n YOU: True.",
    options: [
      {
        text: "Investigate the locked storeroom door.",
        nextText: 2.1
      },
    ]
  },
  {
    id: 2.1,
    text: "You head back to the storeroom to unlock the door, preparing to confront whatever teenager is most likely smoking back there. \n\n When you get to the storeroom, however, you hear a soft sound--it's almost musical--vibrating through the door.",
    options: [
      {
        text: "Unlock the door",
        nextText: 2.2
      },
      {
        text: "Knock",
        nextText: 2.3
      }
    ]
  },
  {
    id: 2.2,
    text: "You unlock the door, but when you try to push it open you find that it only opens a couple of inches. Something is still blocking the door.",
    options: [
      {
        text: "Knock",
        nextText: 2.3
      }
    ]
  },
  {
    id: 2.3,
    text: "The vibrations of the musical sound grow stronger. You place your hand on the door and feel the vibrations run down your arm and through your body.",
    options: [
      {
        text: "YOU: Hello? Who's in there?",
        nextText: 2.4
      },
      {
        text: "YOU: This isn't funny. Let me in right now.",
        nextText: 2.4
      }
    ]
  },
  {
    id: 2.4,
    text: "The voice that finally responds to you is so deep and low and quiet that you actually can't be sure you're hearing it at all—it's more like you're feeling it. Like it's traveling through the door along with the vibrations. \n\n VOICE: Bring me an old fashioned.",
    options: [
      {
        text: "YOU: I don't think so. Open the door.",
        nextText: 2.5
      },
      {
        text: "YOU: Okay. I guess",
        nextText: 2.5
      }
    ]
  },
  {
    id: 2.5,
    text: "Normally you wouldn't even entertain the thought of obeying some unseen person hiding in a supply closet, but you have to admit there's something strange about this voice. It's not like any human you've ever heard. VOICE: Bring me an old fashioned or I will not let you in. Bring me an old fashioned and I will tell you a secret. ",
    options: [
      {
        text: "YOU: Okay. Yeah. Fine",
        nextText: 2.6
      },
      {
        text: "YOU: I don't think I like your tone.",
        nextText: 2.6
      }
    ]
  },
  {
    id: 2.6,
    text: "You are met by silence. You knock again, but this time there's no reply.",
    options: [
      {
        text: "Go back to lounge",
        setState: {drinkQuest1: true},
        nextText: 15
      }
    ]
  },
  {
    id: 2.7,
    text: "You walk back into the restaurant confused about what just happened. The voice was strange--eerie and unsettling--and somehow you know without proof that there's something strange going on here tonight. You step up to the drink station, feeling uneasy. \n\n CAMERON: Everything okay back there? \n\n YOU: I don't know what's going on in that closet, but I just heard a really weird voice that told me if I bring it an old fashioned it will tell me the secrets of the universe. \n\n CAMERON: I would very much like to be part of that conversation.",
    options: [
      {
        text: "YOU: That's okay. I got it.",
        setState: {teamMe: true},
        nextText: 2.8
      },
      {
        text: "YOU: Sure thing.",
        setState: {teamCam: true},
        nextText: 2.8
      }
    ]
  },
  {
    id: 2.8,
    text: "You gather your ingredients and set to work on the drink.",
    options: [
      {
        text: "Make a perfect old fashioned.",
        nextText: 2.9
      },
      {
        text: "Make an incorrect old fashioned.",
        nextText: 2.10
      }
    ]
  },
  {
    id: 2.9,
    text: "The strange vision of the glass with the monster in it fades away, and you're left bracing yourself against the counter, palms flat against the cold surface. What was that? You steady yourself and pick up the drink you just made.",
    options: [
      {
        text: "Go to supply closet.",
        requiredState: (currentState) => currentState.teamCam,
        setState: {drinkQuest1OF: true},
        nextText: 2.11
      },
      {
        text: "Go to supply closet.",
        requiredState: (currentState) => currentState.teamMe,
        setState: {drinkQuest1OF: true},
        nextText: 2.12
      }
    ]
  },
  {
    id: 2.10,
    text: "Incorrect! Try again!",
    options: [
      {
        text: "Make a perfect old fashioned.",
        nextText: 2.9
      },
      {
        text: "Make an incorrect old fashioned.",
        nextText: 2.10
      }
    ]
  },
  {
    id: 2.11,
    text: "You and Cameron make your way back to the supply closet. If you're being honest, you're kind of glad that he has your back. You're pretty good at dealing with all kinds of crazy, but something about that voice makes you nervous, and the vision of the monster makes it even worse. \n\n YOU: Okay, Weirdo, I brought you an old fashioned. The door creaks open and a voice comes from within. \n\n VOICE: Throw it on the floor." ,
    options: [
      {
        text: "You look at Cameron, shrug, and throw the drink through the crack in the door.",
        nextText: 2.15
      },
      {
        text: "YOU: Why?",
        nextText: 2.16
      }
    ]
  },
  {
    id: 2.12,
    text: "You make your way back to the supply closet. Maybe you should have brought Cameron with you, but to be honest, there's a part of you that wants to keep this mystery to yourself. It feels important somehow, and you aren't sure you want to share it. \n\n YOU: Okay, Weirdo, I brought you an old fashioned. The door creaks open and a voice comes from within. \n\n VOICE: Throw it on the floor.",
    options: [
      {
        text: "You throw the drink through the crack in the door.",
        nextText: 2.15
      },
      {
        text: "YOU: Why?",
        nextText: 2.16
      }
    ]
  },
  {
    id: 2.15,
    text: "Whoever or whatever is inside gives something like a low, rumbling sigh. You hold your breath for a moment. After a moment, the voice reverberates through the floorboards once again. \n\n VOICE: Very well. You may ask me one question.",
  },
  {
    id: 2.16,
    text: "Your only answer comes in the form of a ropey shadow moving toward the crack in the door. It flicks out toward you like a snake licking at the air, and disappears just as suddenly. ",
    options: [
      {
        text: "You throw the drink through the crack in the door.",
        nextText: 2.15
      }
    ]
  },

]


startGame() 

/*

  {
    id: ,
    text: "",
    options: [
      {
        text: "",
        nextText: 
      },
      {
        text: "",
        nextText: 
      }
    ]
  },


*/ 