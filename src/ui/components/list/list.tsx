/* eslint-disable react/jsx-key */
import { Button } from '@mui/material'
import * as S from './List.style'
import {Pet} from '../../../data/@types/pet'

interface ListProps {
    pets: Pet[];
    onSelect: (pet:Pet) => void;
}

export default function List(props: ListProps){
    return(
        <S.ListStyled>
                {props.pets.map(pet =>(        
                    <S.ItemList key={pet.id}>
                        <S.Photo src={pet.photo} alt = {pet.name} />
                        <S.Info> 
                            <S.Name>{pet.name}</S.Name>
                            <S.Description>{pet.history}</S.Description>
                            <Button variant={'contained'} fullWidth>Adotar {pet.name} </Button>
                        </S.Info>
                    </S.ItemList>
                 ))} 
            </S.ListStyled>
    )
}