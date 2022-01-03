import {
    ButtonForm, InputField, TitleFormRegistration, WrapperButton,
    WrapperFormIn, WrapperInput, WrapperInputCountry, WrapperTitle, BlockArrow,BlockYellowArrow, BlockCodeItem,
    BlockCountryCode,
    BlockFlag, BlockFlagItem, BlockNameItem, ContainerInputPhone, ContainerItemCountry,
    ContainerListCountryCode,
    ContainerPhone,
    ContainerSelect, WrapperListCountry, InputFieldCountry, WrapperSelect, SelectField, OptionField, WrapperCheckbox, CheckboxField, BlockCheckbox, BlockTextCheckbox, TitleCheckbox, LinkPolicy, TitleLinkPolicy, ArrowImg,
    ImgYellowArrow
} from "./elements"

import country from '/shared/country.json'
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

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

interface ICountry {
    name: string
    dialCode: string
    isoCode: string
    flag: string
}

type Profile = {
    nameChildren: string
    nameParent: string
    phone: number
}

const FormRegistration = () => {
    const {register, handleSubmit,formState:{errors}} = useForm({mode: "onBlur"})
    const [open, setOpened] = useState<boolean>(false)
    const [codeCountry, setCodeCountry] = useState<string>()
    const [flagCountry, setFlagCountry] = useState<string>()
    const [formValid, setFormValid] = useState<boolean>(false)
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        if(errors.length || !checked){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [errors,checked])

    const codeHandler = () => {
        setOpened(true)
    }

    const selectHandler = (e: React.MouseEvent <HTMLDivElement>) => {
        const parentElement = e.currentTarget
        setCodeCountry(parentElement?.dataset?.code)
        setFlagCountry(parentElement?.dataset?.flag)
        setOpened(false)
    }

    const onSubmit = (data: Profile) => {
        console.log(data)
    }

    function handleChangeCheckbox() {
        setChecked(!checked);
    }

    console.log(errors)
return (
    <>
        <WrapperTitle>
            <TitleFormRegistration fontSize='18px' fontWeight='600' lineH='28px' textTr='uppercase'>
                Записаться на пробное занятие
            </TitleFormRegistration>
        </WrapperTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
            <WrapperFormIn>
                <WrapperInput>
                    <InputField
                        {...register('nameChildren',{required:true, minLength: 2,maxLength: 7})}
                        placeholder='Имя Ребёнка'
                        id='nameChildren'
                        name='nameChildren'
                        type='text'
                    />
                    {
                        errors.nameChildren && <div>Количество символов от 2 до 7</div>
                    }
                </WrapperInput>

                <WrapperInput>
                    <InputField
                        {...register('nameParent',{required:true, minLength: 2,maxLength: 7})}
                        placeholder='Ваше имя'
                        id='nameParent'
                        name='nameParent'
                        type='text'
                    />
                    {
                        errors.nameParent && <div>Количество символов от 2 до 7</div>
                    }
                </WrapperInput>
                <WrapperInputCountry>
                    <WrapperListCountry>
                        <ContainerSelect onClick={codeHandler}>
                            <BlockFlag><BlockFlagItem src={flagCountry}/></BlockFlag>
                            <BlockArrow><ArrowImg src='/images/arrow.svg'/></BlockArrow>
                            <BlockCountryCode>{codeCountry}</BlockCountryCode>
                        </ContainerSelect>
                        <ContainerPhone>
                            {open && (
                                <ContainerListCountryCode>
                                    {
                                        country.map((item: ICountry,index: number) => (
                                            <ContainerItemCountry
                                                onClick={selectHandler}
                                                id={index +`_${item.isoCode}`}
                                                data-name={item.name}
                                                data-iso={item.isoCode}
                                                data-code={item.dialCode}
                                                data-flag={item.flag}
                                            >
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
                                    {...register('phone',{required:true, minLength: 12,maxLength: 12})}
                                    placeholder='(999) 999-99-99'
                                    id='phone'
                                    name='phone'
                                    type='tel'
                                />

                            </ContainerInputPhone>
                        </ContainerPhone>
                    </WrapperListCountry>
                    {
                        errors.phone && <div>Введите 12 символов</div>
                    }
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
                        <CheckboxField onChange={handleChangeCheckbox} type='checkbox' name='Checkbox' value='yes'/>
                    </BlockCheckbox>
                    <BlockTextCheckbox>
                        <TitleCheckbox fontSize='14px' fontWeight='400'>Я принимаю</TitleCheckbox>
                        <LinkPolicy><TitleLinkPolicy fontSize='14px' fontWeight='400'>Условия cоглашения</TitleLinkPolicy></LinkPolicy>
                    </BlockTextCheckbox>
                </WrapperCheckbox>
                <WrapperButton>
                    <ButtonForm
                        disabled={!formValid}
                        type='submit'>Записаться бесплатно
                    </ButtonForm>
                    <BlockYellowArrow>
                        <ImgYellowArrow src='/images/YellowArrow.svg'/>
                    </BlockYellowArrow>
                </WrapperButton>
            </WrapperFormIn>
        </form>
    </>
)
}

export default FormRegistration


