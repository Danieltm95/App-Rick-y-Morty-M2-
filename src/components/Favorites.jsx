import Card from "./Card"
import { connect } from "react-redux"
import styles from '../../src/App.module.css';


export function Favorites({ myFavorites }) {
    var i =0;
    return (
        <div className={styles.multiCards}>
            {myFavorites?.map(card => <Card key={i++} id={card.id} name={card.name} species={card.species} gender={card.gender} image={card.image} />)
            }
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites)