import itemData from './assets/itemData';
import objectives from './assets/objectives';
import rewards from './assets/rewards';



const stateData = {
    bow: {has: false, current: itemData.bow, counter: 0},
    boomerang: {has: false, current: itemData.boomerang, counter: 0},
    hookshot: {has: false, current: itemData.hookshot, counter: 0},
    bomb: {has: false, current: itemData.bomb, counter: 0},
    powder: {has: false, current: itemData.powder, counter: 0},
    mushroom: {has: false, current: itemData.mushroom, counter: 0},
    EP: {has: false, current: objectives.EP, counter: 0, rewards: rewards},
    firerod: {has: false, current: itemData.firerod, counter: 0},
    icerod: {has: false, current: itemData.icerod, counter: 0},
    bombos: {has: false, current: itemData.bombos, counter: 0},
    ether: {has: false, current: itemData.ether, counter: 0},
    quake: {has: false, current: itemData.quake, counter: 0},
    shovel: {has: false, current: itemData.shovel, counter: 0},
    DP: {has: false, current: objectives.DP, counter: 0, rewards: rewards},
    lantern: {has: false, current: itemData.lantern, counter: 0},
    hammer: {has: false, current: itemData.hammer, counter: 0},
    flute: {has: false, current: itemData.flute, counter: 0},
    net: {has: false, current: itemData.net, counter: 0},
    book: {has: false, current: itemData.book, counter: 0},
    moonPearl: {has: false, current: itemData.moonPearl, counter: 0},
    TH: {has: false, current: objectives.TH, counter: 0, rewards: rewards},
    bottle: {has: false, current: itemData.bottle, counter: 0},
    somaria: {has: false, current: itemData.somaria, counter: 0},
    byrna: {has: false, current: itemData.byrna, counter: 0},
    cape: {has: false, current: itemData.cape, counter: 0},
    mirror: {has: false, current: itemData.mirror, counter: 0},
    gomode: {has: false, current: objectives.gomode, counter: 0},
    agahnim: {has: false, current: objectives.agahnim, counter: 0},
    gloves: {has: false, current: itemData.gloves, counter: 0},
    boots: {has: false, current: itemData.boots, counter: 0},
    flippers: {has: false, current: itemData.flippers, counter: 0},
    magic: {has: false, current: itemData.magic, counter: 0},
    sword: {has: false, current: itemData.sword, counter: 0},
    shield: {has: false, current: itemData.shield, counter: 0},
    tunic: {has: false, current: itemData.tunic, counter: 0},
    PD: {has: false, current: objectives.PD, counter: 0, rewards: rewards},
    SP: {has: false, current: objectives.SP, counter: 0, rewards: rewards},
    SW: {has: false, current: objectives.SW, counter: 0, rewards: rewards},
    TT: {has: false, current: objectives.TT, counter: 0, rewards: rewards},
    IP: {has: false, current: objectives.IP, counter: 0, rewards: rewards},
    MM: {has: false, current: objectives.MM, counter: 0, rewards: rewards},
    TR: {has: false, current: objectives.TR, counter: 0, rewards: rewards},
    // crystal: {has: false, current: crystal.crystal, counter: 0}
}

export default stateData;