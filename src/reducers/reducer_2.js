let Books={Books:[
    {
     
      title: "Fall of a Sparrow",
      pages: 200,
      author: "Salim Ali",
      description: "The book is a tribute to a century of bird spotting, identification and leisure watching. From his first notes of a sparrow he felled in 1906 when he was barely 10, of visiting the Bombay Natural History Society and identifying it as a yellow throated sparrow, till his death in 1987, Ali literally led bird watchers from a few to a flock to now virtually a movement."
    },
    {
      title: "Gitanjali",
      pages: 99,
      author: "Rabindra Nath Tagore",
      description:"The word gitanjali is composed from geet, song, and anjali, offering, and thus means – An offering of songs; but the word for offering, anjali, has a strong devotional connotation, so the title may also be interpreted as prayer offering of song"
    },
    {
      title: "It is always possible",
      pages: 234,
      author:"Kiran Bedi",
      description:"Kiran Bedi Ph.D. is a trailblazer, admired and loved by many in India. She broke new ground by joining the élite Indian Police Service in 1972, being the first woman in India to do so. She is today the most celebrated police officer, having been awarded the Ramon Magsaysay Award for government service, also called the Asian Nobel Prize, the Joseph Beuys Award by a German foundation and the Asia Region Award for Drug Prevention & Control by the International organization of Good Templars (IOGT) a Norwegian organization"
    }
   
  ]
}
export default function (state =Books , action) {
  console.log(action.type);
  switch (action.type) {
        case "Add_Book":
          return Object.assign({}, state,{ 
           Books: [
              ...state.Books,
              {
                title:action.text1,
                pages: action.text2,
                author: action.text3,
                description:action.text4
              }
            ]}
          );
    default:
      return state;
  }
}