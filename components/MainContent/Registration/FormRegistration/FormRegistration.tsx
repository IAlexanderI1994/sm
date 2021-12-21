import {
    ButtonForm, InputField, TitleFormRegistration, WrapperButton,
    WrapperFormIn, WrapperInput, WrapperInputCountry, WrapperTitle, BlockArrow, BlockCodeItem,
    BlockCountryCode,
    BlockFlag, BlockFlagItem, BlockNameItem, ContainerInputPhone, ContainerItemCountry,
    ContainerListCountryCode,
    ContainerPhone,
    ContainerSelect, WrapperListCountry, InputFieldCountry, WrapperSelect, SelectField, OptionField, WrapperCheckbox, CheckboxField, BlockCheckbox, BlockTextCheckbox, TitleCheckbox, LinkPolicy, TitleLinkPolicy, ArrowImg
} from "./elements"
import {useFormik} from "formik";
import * as Yup from 'yup'
import country from '/shared/country.json'
import {useState} from "react";

const arrayAddresses = [
    {
        name: 'Выберите школу (необязательно)',
        address: ''
    },
    {
        name: 'Спортивный комплекс «Речной»',
        address: 'Фестивальная 4Б'
    },
    {
        name: 'ТРЦ Флотилия',
        address: 'Флотская 7 стр.1'
    },
    {
        name: 'Стадион «Наука»',
        address: 'Большая Академическая улица, 38 стр.2'
    }
]

const FormRegistration = () => {
    const [open, setOpened] = useState(false)
const { handleSubmit, handleChange, values, touched, errors,handleBlur} = useFormik({
    initialValues: {
        nameChildren: '',
        nameParent: '',
        phone: ''
    },
    onSubmit: (values) => {
        console.log(values.nameChildren, values.nameParent, values.phone)
    },
    validationSchema: Yup.object({
        nameChildren: Yup.string()
            .trim('Не может включать начальные и конечные пробелы.')
            .min(2, 'Минимальное количество символов - 4')
            .max(10, 'Максимальное количество символов - 10')
            .required('Обязательное поле'),
        nameParent: Yup.string()
            .trim('Не может включать начальные и конечные пробелы.')
            .min(2, 'Минимальное количество символов - 4')
            .max(10, 'Максимальное количество символов - 10')
            .required('Обязательное поле'),
        phone: Yup.string()
            .trim('Не может включать начальные и конечные пробелы.')
            .min(2, 'Минимальное количество символов - 4')
            .max(10, 'Максимальное количество символов - 10')
            .required('Обязательное поле'),
    })
})

    const codeHandler = () => {
        setOpened(!open)
    }

return (
    <>
        <WrapperTitle>
            <TitleFormRegistration fontSize='18px' fontWeight='600' lineH='28px' textTr='uppercase'>
                Записаться на пробное занятие
            </TitleFormRegistration>
        </WrapperTitle>
        <form onSubmit={handleSubmit}>
            <WrapperFormIn>
                <WrapperInput>
                    <InputField
                        placeholder='Имя ребёнка'
                        value={values.nameChildren}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id='nameChildren'
                        name='nameChildren'
                        type='text'
                    />
                    {touched.nameChildren && errors.nameChildren ? (
                        <div>{errors.nameChildren}</div>
                    ): null}
                </WrapperInput>

                <WrapperInput>
                    <InputField
                        placeholder='Ваше имя'
                        value={values.nameParent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id='nameParent'
                        name='nameParent'
                        type='text'
                    />
                    {touched.nameParent && errors.nameParent ? (
                        <div>{errors.nameParent}</div>
                    ): null}
                </WrapperInput>
                <WrapperInputCountry>
                    <WrapperListCountry>
                        <ContainerSelect onClick={codeHandler}>
                            <BlockFlag>flag</BlockFlag>
                            <BlockArrow><ArrowImg src='/images/arrow.svg'/></BlockArrow>
                            <BlockCountryCode>code</BlockCountryCode>
                        </ContainerSelect>
                        <ContainerPhone>
                            {open && (
                                <ContainerListCountryCode>
                                    {
                                        country.map(item => (
                                            <ContainerItemCountry>
                                                <BlockNameItem>{item.name}</BlockNameItem>
                                                <BlockCodeItem>{item.dialCode}</BlockCodeItem>
                                                <BlockFlagItem src={item.flag}/>
                                            </ContainerItemCountry>
                                        ))
                                    }
                                </ContainerListCountryCode>
                            )}
                            <ContainerInputPhone>
                                <InputFieldCountry
                                    placeholder='Введите номер'
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id='phone'
                                    name='phone'
                                    type='tel'
                                />
                            </ContainerInputPhone>
                        </ContainerPhone>
                    </WrapperListCountry>
                    {touched.phone && errors.phone ? (
                        <div>{errors.phone}</div>
                    ): null}
                </WrapperInputCountry>
                <WrapperSelect>
                    <SelectField>
                        {
                            arrayAddresses.map(item => (
                                <OptionField value={item.name && item.address?`${item.name}, ${item.address}`: item.name}>
                                    {item.name && item.address?`${item.name}, ${item.address}`: item.name}
                                </OptionField>
                            ))
                        }

                    </SelectField>
                </WrapperSelect>
                <WrapperCheckbox>
                    <BlockCheckbox>
                        <CheckboxField type='checkbox' name='Checkbox' value='yes'/>
                    </BlockCheckbox>
                    <BlockTextCheckbox>
                        <TitleCheckbox fontSize='14px' fontWeight='400'>Я принимаю</TitleCheckbox>
                        <LinkPolicy><TitleLinkPolicy fontSize='14px' fontWeight='400'>Условия cоглашения</TitleLinkPolicy></LinkPolicy>
                    </BlockTextCheckbox>
                </WrapperCheckbox>
                <WrapperButton>
                    <ButtonForm textTr='uppercase' fontSize='16px' fontWeight='600' >Записаться бесплатно</ButtonForm>
                </WrapperButton>
            </WrapperFormIn>

        </form>
    </>
)
}

export default FormRegistration


