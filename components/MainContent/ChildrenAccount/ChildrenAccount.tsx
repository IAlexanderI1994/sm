import {ChaptersBlock, ContainerAccount, TitleAccount, TitleBlockAccount, WrapperAccount} from "./elements";
import ChapterRight from "./ChapterRight/ChapterRight";
import MainImage from "./MainImage/MainImage";
import ChapterLeft from "./ChapterLeft/ChapterLeft";

const ChildrenAccount = () => {
    return (
        <WrapperAccount>
            <ContainerAccount>
                <TitleBlockAccount><TitleAccount lineH='54px' fontSize='44px' fontWeight='600'>Личный кабинет ребёнка</TitleAccount></TitleBlockAccount>
                <ChaptersBlock>
                    <ChapterLeft/>
                    <MainImage/>
                    <ChapterRight/>
                </ChaptersBlock>
            </ContainerAccount>
        </WrapperAccount>
    )
}

export default ChildrenAccount