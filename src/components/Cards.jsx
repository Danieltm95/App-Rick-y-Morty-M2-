import Card from './Card';
import styles from '../../src/App.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   let i = 0;
   return (
      <div className={styles.multiCards}>
         {characters.length === 0 ?
            (<p style={{color: "white", marginTop: "300px",marginBottom: "300px", fontSize: "50px"}}>Busca un Personaje!</p>)
            :
            ( characters.map(card => <Card key={i++} id={card.id} name={card.name} species={card.species} gender={card.gender} image={card.image} onClose={() => onClose(card.id)} />) )

         }


      </div>
   );
}
