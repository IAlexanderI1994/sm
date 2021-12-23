import Link from 'next/link'

import { LogoLink } from './elements'
import { Logo } from './elements'

const LogoSpartak = () => {
  return (
    <Link href="/" passHref>
      <LogoLink data-element="header-logo">
        <Logo src="/images/logo/LogoSchool.svg" alt="spartak" loading="lazy" />
      </LogoLink>
    </Link>
  )
}

export default LogoSpartak
