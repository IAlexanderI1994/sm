import {ContainerRegistration, WrapperForm, WrapperMap, WrapperRegistration } from "./elements"
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
                </WrapperForm>
            </ContainerRegistration>
        </WrapperRegistration>
    )
}

export default Registration