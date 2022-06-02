import * as S from "./Title.style";

interface TitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps){
    return(
    <>
        <S.Title>{props.title}</S.Title>
        <S.SubTitle>{props.subtitle}</S.SubTitle>
    </>
    )
}