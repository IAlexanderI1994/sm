import Link from 'next/link'

import { LogoLink } from './elements'
import { Logo } from './elements'

const LogoSpartak = ({headerFixed}: boolean) => {
  return (
    <Link href="/" passHref>
      <LogoLink data-element="header-logo">
        <Logo className={headerFixed && 'fixed'} src="/images/logo/LogoSchool.svg" alt="spartak" loading="lazy" />
      </LogoLink>
    </Link>
  )
}

export default LogoSpartak
