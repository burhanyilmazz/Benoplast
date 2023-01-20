import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => { 
  return (
    <Link href='/'>
      <Image src={'/images/logo/logo.svg'} width={'244'} height={'35'} alt={'Benoplast'} fetchpriority="high" />
    </Link>
  )
}
