// import {BlockArrow, BlockCodeItem, BlockCountryCode, BlockFlag,
//     BlockFlagItem,
//     BlockNameItem,
//     ContainerInputPhone,
//     ContainerItemCountry,
//     ContainerListCountryCode, ContainerPhone, ContainerSelect, WrapperListCountry } from './elements'
// import country from '/shared/country.json'
//
// const ListCountry = () => {
//     return (
//         <WrapperListCountry>
//             <ContainerSelect>
//                 <BlockFlag></BlockFlag>
//                 <BlockArrow></BlockArrow>
//                 <BlockCountryCode></BlockCountryCode>
//             </ContainerSelect>
//             <ContainerPhone>
//                 <ContainerListCountryCode>
//                     {
//                         country.map(item => (
//                             <ContainerItemCountry>
//                                 <BlockNameItem>{item.name}</BlockNameItem>
//                                 <BlockCodeItem>{item.dialCode}</BlockCodeItem>
//                                 <BlockFlagItem src={item.flag}/>
//                             </ContainerItemCountry>
//                         ))
//                     }
//                 </ContainerListCountryCode>
//                 <ContainerInputPhone>
//                     <InputField
//                         placeholder='Введите номер'
//                         value={values.phone}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         id='phone'
//                         name='phone'
//                         type='number'
//                     />
//                 </ContainerInputPhone>
//             </ContainerPhone>
//         </WrapperListCountry>
//     )
// }
//
// export default ListCountry