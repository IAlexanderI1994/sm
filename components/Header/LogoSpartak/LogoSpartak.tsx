import Link from 'next/link'

import { LogoLink } from './elements'
import { Logo } from './elements'

interface IProps {
    headerFixed: boolean;
}

const LogoSpartak = ({headerFixed}: IProps) => {
  return (
    <Link href="/" passHref>
      <LogoLink data-element="header-logo">
        <Logo className={headerFixed ? 'fixed': ''} src="/images/logo/LogoSchool.svg" alt="spartak" loading="lazy" />
      </LogoLink>
    </Link>
  )
}

export default LogoSpartak
