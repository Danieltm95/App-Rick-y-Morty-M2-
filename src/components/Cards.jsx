import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   let i = 0;
   return(
   <div className='multiCards'>
      {characters.map(card => <Card key={i++} name={card.name} species={card.species} gender={card.gender} image={card.image} onClose={() => window.alert('Emulamos que se cierra la card')}/>)}
   </div>
   );
}
