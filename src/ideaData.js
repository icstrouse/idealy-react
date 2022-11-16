export const idea1 = {
  id: 1,
  text: 'Idealy',
  thots: [
    { id: 1, ideaId: 1, parent: null, text: 'Ideas -> thoughts', format: 'big' },
    { id: 2, ideaId: 1, parent: null, text: 'Working with concept of nesting and bullets', format: 'bold', createdAt: '11-11-22', children: [
      { id: 3, ideaId: 1, parent: 2, text: 'Each idea can have multiple thoughts' },
      { id: 4, ideaId: 1, parent: 2, text: 'Each thought can have bullet points, and those bullet points can have children, etc (ad infinitum)' },
      { id: 5, ideaId: 1, parent: 2, text: 'User can click and drag to reorder thoughts (and same for bullets within a thought)' },
      { id: 6, ideaId: 1, parent: 2, text: 'This means rethinking title / description', children: [
        { id: 7, ideaId: 1, parent: 6, text: 'Maybe this is just one field, so the idea is one chunk of text, and a thought is another chunk nested under the idea' },
      ]},
      { id: 8, ideaId: 1, parent: 2, text: 'The main thing then, is the idea screen. This is where we create a new idea or edit an existing one. Super flexible and all the same screen.' },
      { id: 9, ideaId: 1, parent: 2, text: 'Thoughts are collapsable' },
    ]},
    { id: 10, ideaId: 1, parent: null, text: '1: Enter Idea', children: [
      { id: 11, ideaId: 1, parent: 10, text: 'Option for tag' },
      { id: 12, ideaId: 1, parent: 10, text: 'Automatically saves time and location' },
    ]},
    { id: 13, ideaId: 1, parent: null, text: '2: Review', children: [
      { id: 14, ideaId: 1, parent: 13, text: 'List ideas/thoughts by time' },
      { id: 15, ideaId: 1, parent: 13, text: 'Filter idea by location' },
      { id: 16, ideaId: 1, parent: 13, text: 'I’m feeling lucky' },
      { id: 17, ideaId: 1, parent: 13, text: 'Filter by tag' },
    ]},
    { id: 18, ideaId: 1, parent: null, text: '3: Develop', children: [
      { id: 19, ideaId: 1, parent: 18, text: 'Add tag' },
      { id: 20, ideaId: 1, parent: 18, text: 'Categorize by medium / type of project (ie. business, movie, etc.)' },
      { id: 21, ideaId: 1, parent: 18, text: 'Combine with other ideas' },
      { id: 22, ideaId: 1, parent: 18, text: 'Expand idea' },
    ]},
    { id: 23, ideaId: 1, parent: null, text: 'Extra Credit:', children: [
      { id: 24, ideaId: 1, parent: 23, text: 'Organize ideas into goal hierarchy (from Grit)' },
    ]},
    { id: 25, ideaId: 1, parent: null, text: 'No prompt for preview - 144 chars', children: [
      { id: 26, ideaId: 1, parent: 25, text: '“Want to elaborate/expand?”' },
    ]},
    { id: 27, ideaId: 1, parent: null, text: 'Name & Description always on', children: [
      { id: 28, ideaId: 1, parent: 27, text: 'Can select category instead of name (if you only have a description) and it will fill in (eg. Game Idea #5)' },
    ]},
    { id: 29, ideaId: 1, parent: null, text: 'Notes - like what we’re doing here. Essentially adding more descriptions.', children: [
      { id: 30, ideaId: 1, parent: 27, text: 'Maybe call it detail, make it a foreign key and use for both description and notes?' },
    ]},
    { id: 31, ideaId: 1, parent: null, text: 'Star' }
  ]
}

export const idea2 = {
  id: 1,
  text: 'Party Island (working title)',
  thots: [
    { id: 1, ideaId: 2, parent: null, text: 'Phase 1 (MVP)', format: 'big' },
    {
      id: 2, ideaId: 2, parent: null, 
      text: 'Layer 1: can’t leave apartment because of pandemic lockdown.',
      children: [
        {
          id: 6, ideaId: 2, parent: 2, 
          text: 'thot bubble prompts:',
          children: [
            {  id: 7, ideaId: 2, parent: 6, text: 'What’s on the news?' },
            {  id: 8, ideaId: 2, parent: 6, text: 'What if I put on these glasses?' }
          ]
        }
      ]
    },
    {
      id: 3, ideaId: 2, parent: null, text: 'Put on glasses to reveal…',
    },
    {
      id: 4, ideaId: 2, parent: null, 
      text: 'Layer 2: party on an island',
      children: [
        { id: 9, ideaId: 2, parent: 4, text: 'Just main island for now' },
        { id: 10, ideaId: 2, parent: 4, text: 'Restrict to 21 and over?' },
        { id: 11, ideaId: 2, parent: 4, text: 'Must be online/multiplayer (it’s a party, duh)' },
        {
          id: 12, ideaId: 2, parent: 4, 
          text: 'Activities / mini games (separate islands later, maybe some in buildings for now)',
          children: [
            { id: 34, ideaId: 2, parent: 12, text: 'dance club' },
            { id: 35, ideaId: 2, parent: 12, text: 'Pillow fight hut and/or brawl game' },
            { id: 36, ideaId: 2, parent: 12, text: 'table games' },
            { id: 37, ideaId: 2, parent: 12, text: 'Beach games: Volley ball, dodge ball, frisbee' },
            { id: 38, ideaId: 2, parent: 12, text: 'Extreme sports: climbing, cliff diving, wing suit flying, etc (island has big features)' },
            { id: 39, ideaId: 2, parent: 12, text: 'Can jump from big cliff and fall to ground, further off from lagoon, or sail to wherever ' },
            { id: 40, ideaId: 2, parent: 12, text: 'Trampoline' },
            { id: 41, ideaId: 2, parent: 12, text: 'Snorkling/swimming (limited time under so I don’t have to build out too far)' },
            { id: 42, ideaId: 2, parent: 12, text: 'Scuba diving (later)' },
            { id: 43, ideaId: 2, parent: 12, text: 'Hunting (bow & arrow)' },
            { id: 44, ideaId: 2, parent: 12, text: 'Fishing' },
            { id: 45, ideaId: 2, parent: 12, text: 'Sailing game (like space team on a boat)' },
          ]
        },
        {
          id: 13, ideaId: 2, parent: 4, 
          text: 'Don’t have to do games/activities, can just wander around',
          children: [
            { id: 46, ideaId: 2, parent: 13, text: 'Social spaces' },
            { id: 47, ideaId: 2, parent: 13, text: 'Explore / climb / jump off things (there’s a blurry line between “activities” and “exploring”)' },
            { id: 48, ideaId: 2, parent: 13, text: 'Drinks handed out. Why? Party vibe. Comfort object for socializing.' },
            { id: 49, ideaId: 2, parent: 13, text: 'Can set down a drink to do other things. Timer starts and drink eventually vanishes.' },
          ]
        },
        { id: 14, ideaId: 2, parent: 4, text: 'Can be invisible but can’t go in private areas or games', format: 'strikethrough' },
        { id: 15, ideaId: 2, parent: 4, text: 'Set calendar appointment for 1, 2, or 3 hours. Game kicks you off after?' },
        { id: 16, ideaId: 2, parent: 4, text: 'Sell assets like wing suit or scuba gear (not too much, maybe $1 a pop)' },
        { id: 17, ideaId: 2, parent: 4, text: 'Wild side of island' },
        { id: 18, ideaId: 2, parent: 4, text: 'Can you get drunk? Slowed response time. Hug toilet, pass out in bushes, etc.', format: 'strikethrough' },
        { id: 19, ideaId: 2, parent: 4, text: 'Lake in the middle of the island (or lagoon?), cliffs overlooking, definitely needs a waterfall' },
        { id: 20, ideaId: 2, parent: 4, text: 'Spawn at lagoon' },
        { id: 21, ideaId: 2, parent: 4, text: 'Island 1km diameter?' },
        { id: 22, ideaId: 2, parent: 4, text: 'Cliffs 1/3 km high?' },
        { id: 23, ideaId: 2, parent: 4, text: 'Latency is a challenge, how to deal with in dance system? Moves partially automated to keep beat?' },
        { id: 24, ideaId: 2, parent: 4, text: 'Climb trees, treehouses, swing between?, bridges?' },
        { id: 25, ideaId: 2, parent: 4, text: 'Whole island slopy, very 3D' },
        { id: 26, ideaId: 2, parent: 4, text: 'Little beach hangout spots (walk up beach from starting point and find little nooks w/ hammock tiki stuff etc)' },
      ]
    },
    {
      id: 5, ideaId: 2, parent: null, 
      text: 'Practice projects / mini-games:',
      children: [
        { id: 27, ideaId: 2, parent: 5, text: 'Wingsuit flying', format: 'bold' },
        { id: 28, ideaId: 2, parent: 5, text: 'Pillow fight' },
        { id: 29, ideaId: 2, parent: 5, text: 'Frisbee, volleyball, dodgeball' },
        { id: 30, ideaId: 2, parent: 5, text: 'Fishing' },
        { id: 31, ideaId: 2, parent: 5, text: 'Swimming' },
        { id: 32, ideaId: 2, parent: 5, text: 'dance club that’s also a game, but mainly a party (think spore social dynamics)' },
        { id: 33, ideaId: 2, parent: 5, text: 'apartment' },
      ]
    },
  ]
}
