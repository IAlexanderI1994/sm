import Link from 'next/link'
import Image from 'next/image'

import styles from './Logo.module.scss'

interface IProps {
  isFixed: boolean
}

const Logo = ({ isFixed }: IProps) => {
  const width = isFixed ? '180px' : '256px'
  const height = isFixed ? '63px' : '58px'

  return (
    <Link href="/" passHref>
      <a className={styles.root}>
        <Image src="/images/logo/LogoSchool.svg" width={width} height={height} layout="fixed" alt="Футбольная школа «Спартак Юниор»" />
      </a>
    </Link>
  )
}

export default Logo
