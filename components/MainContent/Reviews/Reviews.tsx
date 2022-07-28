import { WrapperRewiews, ListRewiew, WrapperRewiew, TextRewiew } from './elements'
//import { View } from '../../elements'
import { useMenuCustomers } from './useMenuCustomers'

const Reviwes = () => {
  return (
    <WrapperRewiews>
      <ListRewiew>
        {useMenuCustomers.map(({ fullName, address, rewiew, id }) => (
          <li key={id}>
            <WrapperRewiew>
              <TextRewiew>{rewiew}</TextRewiew>
              <p>{fullName}</p>
              <p>{address}</p>
            </WrapperRewiew>
          </li>
        ))}
      </ListRewiew>
    </WrapperRewiews>
  )
}

export default Reviwes
