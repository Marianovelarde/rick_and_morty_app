import Card from '../Card/Card';
import styled from "styled-components"
const Div = styled.div`
display: flex;
justify-content: space-evenly;

`;

export default function Cards(props) {
   
   const { characters } = props;

   return ( 
   <Div>
    {
   characters.map((char, index) => { 
      return (  
      <Card
      id={char.id}
      key={index} 
      name={char.name}
      species={char.species}
      gender={char.gender}
      image={char.image}
      onClose={props.onClose}
      />
      
      )

    })
   }
   </Div>
   )
   
}

