import {ContainerRegistration, WrapperForm, WrapperMap, WrapperRegistration,FormRegistrationTrimBlock,FormRegistrationTrimImage } from "./elements"
import YandexMap from "./YandexMap/YandexMap";
import FormRegistration from "./FormRegistration/FormRegistration";


const Registration = () => {
    return (
        <WrapperRegistration>
            <ContainerRegistration>
                <WrapperMap>
                    <YandexMap/>
                </WrapperMap>
                <WrapperForm>
                    <FormRegistration/>
                    <FormRegistrationTrimBlock>
                        <FormRegistrationTrimImage src='/images/Trim.svg'/>
                    </FormRegistrationTrimBlock>
                </WrapperForm>
            </ContainerRegistration>
        </WrapperRegistration>
    )
}

export default Registration