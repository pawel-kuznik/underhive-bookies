import type { Equipment } from './equipmentStore';

export const initialEquipment: Equipment[] = [
    {
        id: '1',
        name: 'Grapnel Launcher',
        cost: 30,
        description: 'A device that fires a grappling hook, allowing the user to quickly ascend or descend vertical surfaces. Can be used to move vertically up to 6" in a single action.'
    },
    {
        id: '2',
        name: 'Photo-goggles',
        cost: 25,
        description: 'Specialized goggles that enhance vision in low-light conditions. The wearer can ignore the effects of darkness and smoke grenades.'
    },
    {
        id: '3',
        name: 'Stimm-slug Stash',
        cost: 35,
        description: 'A collection of stimm-slugs that can be used to heal wounds. When used, roll a D6. On a 4+, the fighter regains one wound.'
    },
    {
        id: '4',
        name: 'Filter Plugs',
        cost: 15,
        description: 'Small devices inserted into the nostrils that filter out toxic gases and airborne contaminants. The wearer is immune to the effects of gas weapons and toxic terrain.'
    },
    {
        id: '5',
        name: 'Medicae Kit',
        cost: 40,
        description: 'A comprehensive medical kit containing various tools and supplies for treating injuries. When used, roll a D6. On a 4+, the fighter regains D3 wounds.'
    },
    {
        id: '6',
        name: 'Smoke Grenades',
        cost: 20,
        description: 'Grenades that create a dense cloud of smoke when detonated. Creates a 3" radius area of dense smoke that blocks line of sight.'
    },
    {
        id: '7',
        name: 'Infra-sight',
        cost: 45,
        description: 'A targeting system that allows the user to see heat signatures. The wearer can ignore the effects of darkness and smoke grenades, and gets +1 to hit when shooting at targets in darkness.'
    },
    {
        id: '8',
        name: 'Armored Undersuit',
        cost: 50,
        description: 'A lightweight, flexible suit of armor worn under regular clothing. Provides a 6+ save and can be worn with other armor.'
    }
]; 