import {
  ButtonForm,
  InputField,
  TitleFormRegistration,
  WrapperButton,
  WrapperFormIn,
  WrapperInput,
  WrapperInputCountry,
  WrapperTitle,
  BlockArrow,
  BlockYellowArrow,
  BlockCodeItem,
  BlockCountryCode,
  BlockFlag,
  BlockFlagItem,
  BlockNameItem,
  ContainerInputPhone,
  ContainerItemCountry,
  ContainerListCountryCode,
  ContainerPhone,
  ContainerSelect,
  WrapperListCountry,
  InputFieldCountry,
  WrapperSelect,
  SelectField,
  OptionField,
  WrapperCheckbox,
  CheckboxField,
  BlockCheckbox,
  BlockTextCheckbox,
  TitleCheckbox,
  LinkPolicy,
  TitleLinkPolicy,
  ArrowImg,
  ImgYellowArrow
} from './elements'

import country from 'shared/country.json'
import React, { useEffect, useState } from 'react'

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
  const [open, setOpened] = useState<boolean>(false)
  const [codeCountry, setCodeCountry] = useState<string>()
  const [flagCountry, setFlagCountry] = useState<string>()
  const [formValid, setFormValid] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)

  const codeHandler = () => {
    setOpened(true)
  }

  const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const parentElement = e.currentTarget
    setCodeCountry(parentElement?.dataset?.code)
    setFlagCountry(parentElement?.dataset?.flag)
    setOpened(false)
  }

  function handleChangeCheckbox() {
    setChecked(!checked)
  }

  return (
    <>
      <WrapperTitle>
        <TitleFormRegistration fontSize="18px" fontWeight="600" lineH="28px" textTr="uppercase">
          Записаться на пробное занятие
        </TitleFormRegistration>
      </WrapperTitle>
      <form>
        <WrapperFormIn>
          <WrapperInput>
            <InputField placeholder="Имя Ребёнка" id="nameChildren" name="nameChildren" type="text" />
          </WrapperInput>

          <WrapperInput>
            <InputField placeholder="Ваше имя" id="nameParent" name="nameParent" type="text" />
          </WrapperInput>
          <WrapperInputCountry>
            <WrapperListCountry>
              <ContainerSelect onClick={codeHandler}>
                <BlockFlag>
                  <BlockFlagItem src={flagCountry} />
                </BlockFlag>
                <BlockArrow>
                  <ArrowImg src="/images/arrow.svg" />
                </BlockArrow>
                <BlockCountryCode>{codeCountry}</BlockCountryCode>
              </ContainerSelect>
              <ContainerPhone>
                {open && (
                  <ContainerListCountryCode>
                    {country.map((item: ICountry, index: number) => (
                      <ContainerItemCountry
                        key={index}
                        onClick={selectHandler}
                        id={index + `_${item.isoCode}`}
                        data-name={item.name}
                        data-iso={item.isoCode}
                        data-code={item.dialCode}
                        data-flag={item.flag}
                      >
                        <BlockNameItem>{item.name}</BlockNameItem>
                        <BlockCodeItem>{item.dialCode}</BlockCodeItem>
                        <BlockFlagItem src={item.flag} />
                      </ContainerItemCountry>
                    ))}
                  </ContainerListCountryCode>
                )}
                <ContainerInputPhone>
                  <InputFieldCountry placeholder="(999) 999-99-99" id="phone" name="phone" type="tel" />
                </ContainerInputPhone>
              </ContainerPhone>
            </WrapperListCountry>
          </WrapperInputCountry>
          <WrapperSelect>
            <SelectField>
              {arrayAddresses.map((item) => (
                <OptionField key={item.name} value={item.name && item.address ? `${item.name}, ${item.address}` : item.name}>
                  {item.name && item.address ? `${item.name}, ${item.address}` : item.name}
                </OptionField>
              ))}
            </SelectField>
          </WrapperSelect>
          <WrapperCheckbox>
            <BlockCheckbox>
              <CheckboxField onChange={handleChangeCheckbox} type="checkbox" name="Checkbox" value="yes" />
            </BlockCheckbox>
            <BlockTextCheckbox>
              <TitleCheckbox fontSize="14px" fontWeight="400">
                Я принимаю
              </TitleCheckbox>
              <LinkPolicy>
                <TitleLinkPolicy fontSize="14px" fontWeight="400">
                  Условия cоглашения
                </TitleLinkPolicy>
              </LinkPolicy>
            </BlockTextCheckbox>
          </WrapperCheckbox>
          <WrapperButton>
            <ButtonForm disabled={!formValid} type="submit">
              Записаться бесплатно
            </ButtonForm>
            <BlockYellowArrow>
              <ImgYellowArrow src="/images/YellowArrow.svg" />
            </BlockYellowArrow>
          </WrapperButton>
        </WrapperFormIn>
      </form>
    </>
  )
}

export default FormRegistration
