Vue.component('cards', {
  template: '#cards',
  data: function() {
    return {
      showFilters: false,
      filters: {
        name: '',
        set: {
          core: true,
          expansion: true
        },
        level: {
          i: true,
          ii: true,
          iii: true,
          iv: true
        },
        type: {
          site: true,
          attachment: true,
          event: true,
          reaction: true
        },
        cost: {
          zero: true,
          one: true,
          two: true,
          three: true,
        },
        quantity: ''
      },
      cards: [
        {
          "name": "Archaeology",
          "url": "http://time-barons.com/cardbible/archaeology/#top",
          "stats": {
            "image": "images/cards/archaeology.png",
            "set": "Core",
            "level": "III",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 59,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Draw a total of 3 cards from levels lower than your current level."
              },
              {
                "cost": 0,
                "follower": 0,
                "description": "Put any 1 discarded card into your hand."
              }
            ]
          }
        },
        {
          "name": "Church",
          "url": "http://time-barons.com/cardbible/church/#top",
          "stats": {
            "image": "images/cards/church.png",
            "set": "Core",
            "level": "I",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 25,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 3,
                "description": "Gain 1 follower on any site you own."
              }
            ]
          }
        },
        {
          "name": "Computer Network",
          "url": "http://time-barons.com/cardbible/computer-network/#top",
          "stats": {
            "image": "images/cards/computer-network.png",
            "set": "Core",
            "level": "III",
            "type": "Attachment",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 56,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "This site's abilities require no followers to activate."
              }
            ]
          }
        },
        {
          "name": "Bioweapon",
          "url": "http://time-barons.com/cardbible/bioweapon/#top",
          "stats": {
            "image": "images/cards/bioweapon.png",
            "set": "Core",
            "level": "III",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 58,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Kill 1 of an opponent's followers for each card in their hand. Divide these kills among up to 2 sites."
              }
            ]
          }
        },
        {
          "name": "Conversion",
          "url": "http://time-barons.com/cardbible/conversion/#top",
          "stats": {
            "image": "images/cards/conversion.png",
            "set": "Core",
            "level": "II",
            "type": "Event",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 0,
            "id": 43,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Gain a total of 3 followers on any combination of sites you own."
              }
            ]
          }
        },
        {
          "name": "Divine Inspiration",
          "url": "http://time-barons.com/cardbible/divine-inspiration/#top",
          "stats": {
            "image": "images/cards/divine-inspiration.png",
            "set": "Core",
            "level": "I",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 32,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Draw 1 card from a level one higher than your current level."
              }
            ]
          }
        },
        {
          "name": "Air Strike",
          "url": "http://time-barons.com/cardbible/air-strike/#top",
          "stats": {
            "image": "images/cards/air-strike.png",
            "set": "Core",
            "level": "III",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 57,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Do 2 damage to each of an opponent's Level I sites and 1 damage to each of their Level II sites. (Starting sites are Level I.)"
              }
            ]
          }
        },
        {
          "name": "Force Field",
          "url": "http://time-barons.com/cardbible/force-field/#top",
          "stats": {
            "image": "images/cards/force-field.png",
            "set": "Core",
            "level": "IV",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 63,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 1,
                "description": "When one of your other sites is damaged, prevent that damage."
              }
            ]
          }
        },
        {
          "name": "Fort",
          "url": "http://time-barons.com/cardbible/fort/#top",
          "stats": {
            "image": "images/cards/fort.png",
            "set": "Core",
            "level": "I",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 23,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When Fort enters play, gain 3 followers on Fort."
              }
            ]
          }
        },
        {
          "name": "Blockade",
          "url": "http://time-barons.com/cardbible/blockade/#top",
          "stats": {
            "image": "images/cards/blockade.png",
            "set": "Core",
            "level": "II",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 47,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Kill 1 follower on each of an opponent's sites."
              }
            ]
          }
        },
        {
          "name": "Hospital",
          "url": "http://time-barons.com/cardbible/hospital/#top",
          "stats": {
            "image": "images/cards/hospital.png",
            "set": "Core",
            "level": "II",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 40,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "After your followers are killed, gain followers on Hospital equal to half the number killed (rounded down)."
              },
              {
                "cost": 0,
                "follower": 3,
                "description": "Round up instead."
              }
            ]
          }
        },
        {
          "name": "Catapult",
          "url": "http://time-barons.com/cardbible/catapult/#top",
          "stats": {
            "image": "images/cards/catapult.png",
            "set": "Core",
            "level": "I",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 17,
            "cost": 2,
            "abilities": [
              {
                "cost": 1,
                "follower": 3,
                "description": "Do 1 damage."
              },
              {
                "cost": 0,
                "follower": 5,
                "description": "Do 1 damage."
              }
            ]
          }
        },
        {
          "name": "Ark",
          "url": "http://time-barons.com/cardbible/ark/#top",
          "stats": {
            "image": "images/cards/ark.png",
            "set": "Core",
            "level": "IV",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 62,
            "cost": 3,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When Ark enters play, gain 10 followers on Ark."
              }
            ]
          }
        },
        {
          "name": "Escape Route",
          "url": "http://time-barons.com/cardbible/escape-route/#top",
          "stats": {
            "image": "images/cards/escape-route.png",
            "set": "Core",
            "level": "I",
            "type": "Reaction",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 34,
            "cost": 0,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When one of your sites is damaged, you may first relocate up to 3 followers from this site to another site you own."
              }
            ]
          }
        },
        {
          "name": "Display of Power",
          "url": "http://time-barons.com/cardbible/display-of-power/#top",
          "stats": {
            "image": "images/cards/display-of-power.png",
            "set": "Core",
            "level": "I",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 33,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Sacrifice a site of cost 2 or greater to gain 3 actions."
              }
            ]
          }
        },
        {
          "name": "Library",
          "url": "http://time-barons.com/cardbible/library/#top",
          "stats": {
            "image": "images/cards/library.png",
            "set": "Core",
            "level": "II",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 39,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 3,
                "description": "Draw 1 card."
              },
              {
                "cost": 1,
                "follower": 5,
                "description": "Put 1 discarded card of your level or lower into your hand. Then discard 1 card from your hand."
              }
            ]
          }
        },
        {
          "name": "Fortify",
          "url": "http://time-barons.com/cardbible/fortify/#top",
          "stats": {
            "image": "images/cards/fortify.png",
            "set": "Core",
            "level": "II",
            "type": "Attachment",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 45,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Upon attachment, remove all damage counters from this site. This site is now fortified. (Damage done to this site does not kill followers unless this site is destroyed.)"
              }
            ]
          }
        },
        {
          "name": "Misinformation",
          "url": "http://time-barons.com/cardbible/misinformation/#top",
          "stats": {
            "image": "images/cards/misinformation.png",
            "set": "Core",
            "level": "I",
            "type": "Reaction",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 35,
            "cost": 0,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When one of your sites is damaged, you may damage another site you own instead."
              }
            ]
          }
        },
        {
          "name": "Sniper Nest",
          "url": "http://time-barons.com/cardbible/sniper-nest/#top",
          "stats": {
            "image": "images/cards/sniper-nest.png",
            "set": "Core",
            "level": "II",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 41,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 1,
                "description": "After an opponent relocates, kill 1 of their followers."
              },
              {
                "cost": 0,
                "follower": 3,
                "description": "Kill 2 of their followers instead."
              }
            ]
          }
        },
        {
          "name": "Ruthless Efficiency",
          "url": "http://time-barons.com/cardbible/ruthless-efficiency/#top",
          "stats": {
            "image": "images/cards/ruthless-efficiency.png",
            "set": "Core",
            "level": "III",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 60,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Sacrifice any number of followers and discard any number of cards from your hand. Gain 1 action for each follower sacrificed and 1 action for each card discarded. You may not gain more than 6 actions this way."
              }
            ]
          }
        },
        {
          "name": "Missile Silo",
          "url": "http://time-barons.com/cardbible/missile-silo/#top",
          "stats": {
            "image": "images/cards/missile-silo.png",
            "set": "Core",
            "level": "III",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 51,
            "cost": 1,
            "abilities": [
              {
                "cost": 2,
                "follower": 2,
                "description": "Do 2 damage to a single site."
              },
              {
                "cost": 2,
                "follower": 2,
                "description": "Do 1 damage each to 2 different sites."
              }
            ]
          }
        },
        {
          "name": "Mission",
          "url": "http://time-barons.com/cardbible/mission/#top",
          "stats": {
            "image": "images/cards/mission.png",
            "set": "Core",
            "level": "I",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 21,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Discard 1 card from your hand to relocate."
              },
              {
                "cost": 0,
                "follower": 0,
                "description": "Discard 1 card from your hand to gain 2 followers on Mission."
              }
            ]
          }
        },
        {
          "name": "Cannon Fodder",
          "url": "http://time-barons.com/cardbible/cannon-fodder/#top",
          "stats": {
            "image": "images/cards/cannon-fodder.png",
            "set": "Expansion",
            "level": "I",
            "type": "Reaction",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 0,
            "id": 82,
            "cost": 0,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When one of your sites is damaged, sacrifice any number of followers to prevent 1 damage to that site for each follower sacrificed."
              }
            ]
          }
        },
        {
          "name": "Arms Factory",
          "url": "http://time-barons.com/cardbible/arms-factory/#top",
          "stats": {
            "image": "images/cards/arms-factory.png",
            "set": "Expansion",
            "level": "III",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 101,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 3,
                "description": "Do 1 damage to a single site and 1 additional damage to that site for each level you are higher than that site's owner."
              },
              {
                "cost": 2,
                "follower": 3,
                "description": "Do 1 damage each to a number of sites. That number cannot exceed your level."
              }
            ]
          }
        },
        {
          "name": "Sentient AI",
          "url": "http://time-barons.com/cardbible/sentient-ai/#top",
          "stats": {
            "image": "images/cards/sentient-ai.png",
            "set": "Core",
            "level": "IV",
            "type": "Attachment",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 64,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "After this site activates an ability, site owner may immediately activate the same ability again for no actions."
              }
            ]
          }
        },
        {
          "name": "Alien Monolith",
          "url": "http://time-barons.com/cardbible/alien-monolith/#top",
          "stats": {
            "image": "images/cards/alien-monolith.png",
            "set": "Expansion",
            "level": "I",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 74,
            "cost": 1,
            "abilities": [
              {
                "cost": 1,
                "follower": 3,
                "description": "Draw 1 card from a level one higher than your current level."
              },
              {
                "cost": 0,
                "follower": 0,
                "description": "Sacrifice Alien Monolith to upgrade."
              }
            ]
          }
        },
        {
          "name": "Radio Station",
          "url": "http://time-barons.com/cardbible/radio-station/#top",
          "stats": {
            "image": "images/cards/radio-station.png",
            "set": "Core",
            "level": "III",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 55,
            "cost": 1,
            "abilities": [
              {
                "cost": 1,
                "follower": 2,
                "description": "Steal 1 follower and place it on any site you own."
              },
              {
                "cost": 0,
                "follower": 4,
                "description": "Steal 1 follower and place it on any site you own."
              }
            ]
          }
        },
        {
          "name": "Robotics Lab",
          "url": "http://time-barons.com/cardbible/robotics-lab/#top",
          "stats": {
            "image": "images/cards/robotics-lab.png",
            "set": "Core",
            "level": "III",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 53,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 2,
                "description": "Gain 1 action."
              }
            ]
          }
        },
        {
          "name": "Bank",
          "url": "http://time-barons.com/cardbible/bank/#top",
          "stats": {
            "image": "images/cards/bank.png",
            "set": "Expansion",
            "level": "III",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 103,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Tuck 1 card under Bank to allow another site to activate abilities again, even if that site already activated an ability this turn."
              },
              {
                "cost": 0,
                "follower": 3,
                "description": "Gain 1 action for each card tucked under Bank."
              }
            ]
          }
        },
        {
          "name": "Castle",
          "url": "http://time-barons.com/cardbible/castle/#top",
          "stats": {
            "image": "images/cards/castle.png",
            "set": "Expansion",
            "level": "I",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 5,
            "id": 72,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Relocate followers to Castle."
              },
              {
                "cost": 0,
                "follower": 0,
                "description": "Relocate followers off Castle."
              }
            ]
          }
        },
        {
          "name": "Sabotage",
          "url": "http://time-barons.com/cardbible/sabotage/#top",
          "stats": {
            "image": "images/cards/sabotage.png",
            "set": "Core",
            "level": "II",
            "type": "Attachment",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 48,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "This site cannot activate abilities."
              }
            ]
          }
        },
        {
          "name": "Conscription",
          "url": "http://time-barons.com/cardbible/conscription/#top",
          "stats": {
            "image": "images/cards/conscription.png",
            "set": "Expansion",
            "level": "II",
            "type": "Attachment",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 0,
            "id": 93,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Upon attachment, gain 2 followers on this site. At the start of site owner's turn, gain 1 follower on this site."
              }
            ]
          }
        },
        {
          "name": "Dilemma",
          "url": "http://time-barons.com/cardbible/dilemma/#top",
          "stats": {
            "image": "images/cards/dilemma.png",
            "set": "Expansion",
            "level": "III",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 107,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Choose 2 sites owned by an opponent. They choose 1 of those sites to save. Do 5 damage to the other site. If an opponent has only 1 site Dilemma has no effect on them."
              }
            ]
          }
        },
        {
          "name": "Brain Emulation",
          "url": "http://time-barons.com/cardbible/brain-emulation/#top",
          "stats": {
            "image": "images/cards/brain-emulation.png",
            "set": "Expansion",
            "level": "IV",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 114,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Gain 2 followers on each site you own."
              },
              {
                "cost": 0,
                "follower": 0,
                "description": "Gain 7 followers on a single site."
              }
            ]
          }
        },
        {
          "name": "Battering Ram",
          "url": "http://time-barons.com/cardbible/battering-ram/#top",
          "stats": {
            "image": "images/cards/battering-ram.png",
            "set": "Expansion",
            "level": "I",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 66,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 3,
                "description": "Do 1 structural damage."
              },
              {
                "cost": 0,
                "follower": 2,
                "description": "Sacrifice Battering Ram to do 2 structural damage to a single site."
              }
            ]
          }
        },
        {
          "name": "Fertility Fest",
          "url": "http://time-barons.com/cardbible/fertility-fest/#top",
          "stats": {
            "image": "images/cards/fertility-fest.png",
            "set": "Expansion",
            "level": "I",
            "type": "Event",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 0,
            "id": 80,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Gain 1 follower each on up to 3 sites you own."
              },
              {
                "cost": 0,
                "follower": 0,
                "description": "Gain followers on a single site equal to the number of occupied sites an opponent owns."
              }
            ]
          }
        },
        {
          "name": "Radicalism",
          "url": "http://time-barons.com/cardbible/radicalism/#top",
          "stats": {
            "image": "images/cards/radicalism.png",
            "set": "Expansion",
            "level": "I",
            "type": "Event",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 0,
            "id": 78,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Do damage to an opponent's site, where the damage dealt equals their level."
              }
            ]
          }
        },
        {
          "name": "Farm",
          "url": "http://time-barons.com/cardbible/farm/#top",
          "stats": {
            "image": "images/cards/farm.png",
            "set": "Expansion",
            "level": "I",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 70,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Tuck 1 card under Farm to gain 1 follower on any site."
              },
              {
                "cost": 0,
                "follower": 1,
                "description": "Gain 1 follower on Farm for each card tucked under Farm."
              }
            ]
          }
        },
        {
          "name": "Demolition",
          "url": "http://time-barons.com/cardbible/demolition/#top",
          "stats": {
            "image": "images/cards/demolition.png",
            "set": "Expansion",
            "level": "II",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 98,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Do 4 damage to a site with at least 1 damage counter on it."
              }
            ]
          }
        },
        {
          "name": "Mortar",
          "url": "http://time-barons.com/cardbible/mortar/#top",
          "stats": {
            "image": "images/cards/mortar.png",
            "set": "Expansion",
            "level": "II",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 86,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 3,
                "description": "Do 1 damage."
              },
              {
                "cost": 1,
                "follower": 5,
                "description": "Do 1 damage each to 2 different sites."
              }
            ]
          }
        },
        {
          "name": "Nanobots",
          "url": "http://time-barons.com/cardbible/nanobots/#top",
          "stats": {
            "image": "images/cards/nanobots.png",
            "set": "Expansion",
            "level": "IV",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 115,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Remove a total of up to 4 damage counters from any combination of sites. Then do 1 damage for each counter removed, divided among any number of sites."
              }
            ]
          }
        },
        {
          "name": "Onslaught",
          "url": "http://time-barons.com/cardbible/onslaught/#top",
          "stats": {
            "image": "images/cards/onslaught.png",
            "set": "Expansion",
            "level": "I",
            "type": "Event",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 0,
            "id": 76,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Do 1 damage each to up to 3 different sites."
              }
            ]
          }
        },
        {
          "name": "Mason's Guild",
          "url": "http://time-barons.com/cardbible/masons-guild/#top",
          "stats": {
            "image": "images/cards/masons-guild.png",
            "set": "Expansion",
            "level": "I",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 73,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 2,
                "description": "Move 1 damage counter from a site you own to another site you own."
              },
              {
                "cost": 0,
                "follower": 4,
                "description": "Move all damage counters from a site you own to another site you own."
              }
            ]
          }
        },
        {
          "name": "Pillage",
          "url": "http://time-barons.com/cardbible/pillage/#top",
          "stats": {
            "image": "images/cards/pillage.png",
            "set": "Expansion",
            "level": "I",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 84,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Do 3 damage to an unoccupied site."
              },
              {
                "cost": 0,
                "follower": 0,
                "description": "Look at all cards tucked under all sites and put 1 into your hand."
              }
            ]
          }
        },
        {
          "name": "Outrage",
          "url": "http://time-barons.com/cardbible/outrage/#top",
          "stats": {
            "image": "images/cards/outrage.png",
            "set": "Expansion",
            "level": "II",
            "type": "Reaction",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 96,
            "cost": 0,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When one of your sites is destroyed, draw cards equal to that site's level. Draw 1 additional card for each card tucked under that site and for each attachment on that site."
              }
            ]
          }
        },
        {
          "name": "Mine",
          "url": "http://time-barons.com/cardbible/mine/#top",
          "stats": {
            "image": "images/cards/mine.png",
            "set": "Expansion",
            "level": "I",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 75,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 3,
                "description": "Do 2 structural damage to a starting site you own to gain 1 action."
              },
              {
                "cost": 0,
                "follower": 3,
                "description": "Do 1 structural damage to a non-starting site you own to gain 1 action."
              }
            ]
          }
        },
        {
          "name": "Oil Drilling",
          "url": "http://time-barons.com/cardbible/oil-drilling/#top",
          "stats": {
            "image": "images/cards/oil-drilling.png",
            "set": "Expansion",
            "level": "III",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 106,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Do any amount of structural damage to sites you own, but not more than is required to destroy them. Gain 1 action for every 2 damage you do to a starting site and 1 action for every 1 damage you do to a non-starting site. You cannot gain more than 6 actions this way."
              }
            ]
          }
        },
        {
          "name": "Port",
          "url": "http://time-barons.com/cardbible/port/#top",
          "stats": {
            "image": "images/cards/port.png",
            "set": "Expansion",
            "level": "II",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 88,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Tuck 1 card under Port to relocate."
              },
              {
                "cost": 0,
                "follower": 3,
                "description": "Draw 1 card for each card tucked under Port."
              }
            ]
          }
        },
        {
          "name": "Power Plant",
          "url": "http://time-barons.com/cardbible/power-plant/#top",
          "stats": {
            "image": "images/cards/power-plant.png",
            "set": "Expansion",
            "level": "III",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 105,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When Power Plant is destroyed, Power Plant's owner chooses 2 sites they own. Both sites take 1 structural damage for each card tucked under Power Plant."
              },
              {
                "cost": 2,
                "follower": 2,
                "description": "Play a discarded event for no actions. Then tuck that event under Power Plant."
              }
            ]
          }
        },
        {
          "name": "Bad Omen",
          "url": "http://time-barons.com/cardbible/bad-omen/#top",
          "stats": {
            "image": "images/cards/bad-omen.png",
            "set": "Expansion",
            "level": "I",
            "type": "Attachment",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 85,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When any player upgrades do 1 damage to this site. When a draw stack runs out, do 3 damage to this site."
              }
            ]
          }
        },
        {
          "name": "Alien Weapon",
          "url": "http://time-barons.com/cardbible/alien-weapon/#top",
          "stats": {
            "image": "images/cards/alien-weapon.png",
            "set": "Expansion",
            "level": "IV",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 112,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Tuck 1 card under Alien Weapon to discard up to 4 cards from the top of any draw stack."
              },
              {
                "cost": 0,
                "follower": 2,
                "description": "Do 2 damage for each card tucked under Alien Weapon, divided among up to 2 sites."
              }
            ]
          }
        },
        {
          "name": "Assimilation",
          "url": "http://time-barons.com/cardbible/assimilation/#top",
          "stats": {
            "image": "images/cards/assimilation.png",
            "set": "Expansion",
            "level": "IV",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 113,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Choose a site owned by an opponent. They must relocate followers off that site, if able. Then gain ownership of that site."
              }
            ]
          }
        },
        {
          "name": "Barracks",
          "url": "http://time-barons.com/cardbible/barracks/#top",
          "stats": {
            "image": "images/cards/barracks.png",
            "set": "Expansion",
            "level": "I",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 68,
            "cost": 2,
            "abilities": [
              {
                "cost": 1,
                "follower": 0,
                "description": "Gain 2 followers on Barracks."
              },
              {
                "cost": 0,
                "follower": 3,
                "description": "Sacrifice 1 follower on Barracks to do 1 damage."
              }
            ]
          }
        },
        {
          "name": "Replicator",
          "url": "http://time-barons.com/cardbible/replicator/#top",
          "stats": {
            "image": "images/cards/replicator.png",
            "set": "Expansion",
            "level": "IV",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 111,
            "cost": 1,
            "abilities": [
              {
                "cost": 1,
                "follower": 0,
                "description": "Take 1 site out of the discard pile and play it for no actions. Then do 1 structural damage to Replicator."
              }
            ]
          }
        },
        {
          "name": "University",
          "url": "http://time-barons.com/cardbible/university/#top",
          "stats": {
            "image": "images/cards/university.png",
            "set": "Expansion",
            "level": "II",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 90,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 1,
                "description": "When activating another site's ability, you may do so with 1 fewer follower than that ability currently requires."
              },
              {
                "cost": 2,
                "follower": 3,
                "description": "Upgrade."
              }
            ]
          }
        },
        {
          "name": "Military Base",
          "url": "http://time-barons.com/cardbible/military-base/#top",
          "stats": {
            "image": "images/cards/military-base.png",
            "set": "Core",
            "level": "II",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 36,
            "cost": 2,
            "abilities": [
              {
                "cost": 1,
                "follower": 0,
                "description": "Sacrifice any number of followers on Military Base. Then do 1 damage for each follower sacrificed, all to a single site."
              }
            ]
          }
        },
        {
          "name": "Shelling",
          "url": "http://time-barons.com/cardbible/shelling/#top",
          "stats": {
            "image": "images/cards/shelling.png",
            "set": "Core",
            "level": "II",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 46,
            "cost": 3,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Do 3 damage divided among up to 3 sites."
              }
            ]
          }
        },
        {
          "name": "Trade Agreement",
          "url": "http://time-barons.com/cardbible/trade-agreement/#top",
          "stats": {
            "image": "images/cards/trade-agreement.png",
            "set": "Expansion",
            "level": "III",
            "type": "Reaction",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 108,
            "cost": 0,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When an opponent plays a card, discard that card with no effect. They still lose the actions required to play that card, but they also draw 1 card of your level or lower."
              }
            ]
          }
        },
        {
          "name": "Sanctions",
          "url": "http://time-barons.com/cardbible/sanctions/#top",
          "stats": {
            "image": "images/cards/sanctions.png",
            "set": "Expansion",
            "level": "III",
            "type": "Attachment",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 109,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "At the start of site owner's turn, do 1 structural damage to this site. Followers cannot be relocated off this site."
              }
            ]
          }
        },
        {
          "name": "Loss of Faith",
          "url": "http://time-barons.com/cardbible/loss-of-faith/#top",
          "stats": {
            "image": "images/cards/loss-of-faith.png",
            "set": "Core",
            "level": "II",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 49,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "An opponent starts their next turn with 1 fewer action and may not activate site abilities for that turn."
              }
            ]
          }
        },
        {
          "name": "Martyr",
          "url": "http://time-barons.com/cardbible/martyr/#top",
          "stats": {
            "image": "images/cards/martyr.png",
            "set": "Core",
            "level": "II",
            "type": "Reaction",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 50,
            "cost": 0,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "When any number of your followers are killed, draw 1 card for each killed follower."
              }
            ]
          }
        },
        {
          "name": "Doomsday Laser",
          "url": "http://time-barons.com/cardbible/doomsday-laser/#top",
          "stats": {
            "image": "images/cards/doomsday-laser.png",
            "set": "Core",
            "level": "IV",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 61,
            "cost": 1,
            "abilities": [
              {
                "cost": 2,
                "follower": 3,
                "description": "Do 8 damage to a single site."
              }
            ]
          }
        },
        {
          "name": "Railroad",
          "url": "http://time-barons.com/cardbible/railroad/#top",
          "stats": {
            "image": "images/cards/railroad.png",
            "set": "Core",
            "level": "II",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 42,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 1,
                "description": "Relocate."
              }
            ]
          }
        },
        {
          "name": "Supply Depot",
          "url": "http://time-barons.com/cardbible/supply-depot/#top",
          "stats": {
            "image": "images/cards/supply-depot.png",
            "set": "Expansion",
            "level": "II",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 91,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 2,
                "description": "Remove 1 damage counter from any other site."
              },
              {
                "cost": 1,
                "follower": 2,
                "description": "Remove an attachment from any site and then attach it to another site owned by the same player."
              }
            ]
          }
        },
        {
          "name": "Research",
          "url": "http://time-barons.com/cardbible/research/#top",
          "stats": {
            "image": "images/cards/research.png",
            "set": "Expansion",
            "level": "II",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 95,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Draw 1 card. You may play 1 card from your hand for no actions."
              },
              {
                "cost": 0,
                "follower": 0,
                "description": "Tuck 1 card from your hand under any site to draw cards equal to your level."
              }
            ]
          }
        },
        {
          "name": "Siege",
          "url": "http://time-barons.com/cardbible/siege/#top",
          "stats": {
            "image": "images/cards/siege.png",
            "set": "Core",
            "level": "I",
            "type": "Event",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 0,
            "id": 29,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Do 2 damage to a single site."
              }
            ]
          }
        },
        {
          "name": "Fanaticism",
          "url": "http://time-barons.com/cardbible/fanaticism/#top",
          "stats": {
            "image": "images/cards/fanaticism.png",
            "set": "Core",
            "level": "I",
            "type": "Event",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 0,
            "id": 31,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Sacrifice up to 3 followers on a single site. Then do 1 damage for each follower sacrificed, all to a single site."
              }
            ]
          }
        },
        {
          "name": "Plague",
          "url": "http://time-barons.com/cardbible/plague/#top",
          "stats": {
            "image": "images/cards/plague.png",
            "set": "Core",
            "level": "I",
            "type": "Attachment",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 0,
            "id": 27,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "At the start of site owner's turn, kill 1 follower on this site. If this site becomes unoccupied, immediately discard Plague."
              }
            ]
          }
        },
        {
          "name": "Temple",
          "url": "http://time-barons.com/cardbible/temple/#top",
          "stats": {
            "image": "images/cards/temple.png",
            "set": "Core",
            "level": "I",
            "type": "Site",
            "quantity": "2",
            "clarifications": "None.",
            "integrity": 3,
            "id": 19,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 2,
                "description": "Sacrifice 1 follower on Temple to gain 1 action."
              }
            ]
          }
        },
        {
          "name": "Spy Agency",
          "url": "http://time-barons.com/cardbible/spy-agency/#top",
          "stats": {
            "image": "images/cards/spy-agency.png",
            "set": "Expansion",
            "level": "II",
            "type": "Site",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 92,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 2,
                "description": "After an opponent relocates, draw 1 card of their level or lower."
              },
              {
                "cost": 0,
                "follower": 3,
                "description": "Kill 1 follower."
              }
            ]
          }
        },
        {
          "name": "Mind Control",
          "url": "http://time-barons.com/cardbible/mind-control/#top",
          "stats": {
            "image": "images/cards/mind-control.png",
            "set": "Core",
            "level": "IV",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 65,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Steal all the followers on a single site and place them on any combination of sites you own."
              }
            ]
          }
        },
        {
          "name": "Threat",
          "url": "http://time-barons.com/cardbible/threat/#top",
          "stats": {
            "image": "images/cards/threat.png",
            "set": "Expansion",
            "level": "II",
            "type": "Attachment",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 99,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Upon attachment, site owner must immediately relocate all followers off this site, if able. Followers cannot be gained or relocated onto this site. At the end of site owner's turn, discard Threat."
              }
            ]
          }
        },
        {
          "name": "Surgical Strike",
          "url": "http://time-barons.com/cardbible/surgical-strike/#top",
          "stats": {
            "image": "images/cards/surgical-strike.png",
            "set": "Expansion",
            "level": "III",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 110,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Kill up to 3 followers, divided among up to 2 sites."
              }
            ]
          }
        },
        {
          "name": "Retrofitting",
          "url": "http://time-barons.com/cardbible/retrofitting/#top",
          "stats": {
            "image": "images/cards/retrofitting.png",
            "set": "Expansion",
            "level": "II",
            "type": "Attachment",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 3,
            "id": 97,
            "cost": 1,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Site gains +3 integrity."
              }
            ]
          }
        },
        {
          "name": "Revolt",
          "url": "http://time-barons.com/cardbible/revolt/#top",
          "stats": {
            "image": "images/cards/revolt.png",
            "set": "Expansion",
            "level": "II",
            "type": "Event",
            "quantity": "1",
            "clarifications": "None.",
            "integrity": 0,
            "id": 100,
            "cost": 2,
            "abilities": [
              {
                "cost": 0,
                "follower": 0,
                "description": "Do 1 damage for each occupied site an opponent owns, divided among up to 2 of their sites."
              }
            ]
          }
        }
      ]
    }
  },
  computed: {
    count: function() {
      return this.cards.reduce((result, current) => {
        if (current.stats.class === 'show' || current.stats.class === undefined)
          return 1 + result;
        else
          return result;
      }, 0)
    },
    filter: function() {
      return this.cards.filter(function(card) {
        if (this.filters.name !== '') {
          let name = new RegExp(this.filters.name, 'i');

          var abilities = function() {
            return card.stats.abilities.reduce((result, current) => {
              return name.test(current.description) || result;
            }, false);
          }

          if (name.test(card.name) || abilities())
            this.$set(card.stats, 'class', 'show');
          else
            this.$set(card.stats, 'class', 'hide');

          return true;
        } else {
          if (((card.stats.set === 'Core' && this.filters.set.core) ||
          (card.stats.set === 'Expansion' && this.filters.set.expansion)) &&

          ((card.stats.level === 'I' && this.filters.level.i) ||
          (card.stats.level === 'II' && this.filters.level.ii) ||
          (card.stats.level === 'III' && this.filters.level.iii) ||
          (card.stats.level === 'IV' && this.filters.level.iv)) &&

          ((card.stats.type === 'Site' && this.filters.type.site) ||
          (card.stats.type === 'Attachment' && this.filters.type.attachment) ||
          (card.stats.type === 'Event' && this.filters.type.event) ||
          (card.stats.type === 'Reaction' && this.filters.type.reaction)) &&

          ((card.stats.cost === 0 && this.filters.cost.zero) ||
          (card.stats.cost === 1 && this.filters.cost.one) ||
          (card.stats.cost === 2 && this.filters.cost.two) ||
          (card.stats.cost === 3 && this.filters.cost.three)))
            this.$set(card.stats, 'class', 'show');
          else
            this.$set(card.stats, 'class', 'hide');

          return true;
        }
      }, this)
    },
    sort: function() {
      return this.filter.sort(function(a, b) {
        if (a.stats.level > b.stats.level)
          return 1;
        if (a.stats.level < b.stats.level)
          return -1;
        else
          return 0;
      })
    }
  },
  methods: {
    toggleFilters: function() {
      this.showFilters = !this.showFilters;
    }
  },
  mounted: function() {
    document.getElementById('search').focus();
  }
});

var app = new Vue({
  el: '#app',
});