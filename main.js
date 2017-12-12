Vue.component('cards', {
  template: '#cards',
  data: function() {
    return {
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
            }
          },
          {
            "name": "Mason&#x2019;s Guild",
            "url": "http://time-barons.com/cardbible/masons-guild/#top",
            "stats": {
              "image": "images/cards/masons-guild.png",
              "set": "Expansion",
              "level": "I",
              "type": "Site",
              "quantity": "1",
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
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
              "clarifications": "None."
            }
          }
      ]
    }
  },
  computed: {
    filter: function() {
      return this.cards.filter(function(card) {
        if (this.filters.name !== '') {
          let name = new RegExp(this.filters.name, 'i')
          return name.test(card.name)
        } else {
          return ((card.stats.set === 'Core' && this.filters.set.core) ||
          (card.stats.set === 'Expansion' && this.filters.set.expansion)) &&
          ((card.stats.level === 'I' && this.filters.level.i) ||
          (card.stats.level === 'II' && this.filters.level.ii) ||
          (card.stats.level === 'III' && this.filters.level.iii) ||
          (card.stats.level === 'IV' && this.filters.level.iv)) &&
          ((card.stats.type === 'Site' && this.filters.type.site) ||
          (card.stats.type === 'Attachment' && this.filters.type.attachment) ||
          (card.stats.type === 'Event' && this.filters.type.event) ||
          (card.stats.type === 'Reaction' && this.filters.type.reaction))
        }
      }, this)
    },
    sort: function() {
      return this.filter.sort(function(a, b) {
        if (a.stats.level > b.stats.level)
          return 1
        if (a.stats.level < b.stats.level)
          return -1
        else
          return 0
      })
    }
  }
});

var app = new Vue({
  el: '#app',
});