import { Container } from '@/components/container/index'
import { Hero } from '@/components/hero/index'
import { Footer } from '@/components/home/footer/index'
import { Services } from '@/components/home/services/index'
import { Submenu } from '@/components/home/submenu/index'
import { getDataHome, getSubMenu } from '@/utils/actions/get-data'
import { HomeProps } from '@/utils/actions/home.types'
import { MenuProps } from '@/utils/actions/menu.types'

import { Phone } from 'lucide-react'

export default async function Home() {
  const { object }: HomeProps = await getDataHome()
  const menu: MenuProps = await getSubMenu()

  return (
    <main>
      {menu?.objects.length > 0 && <Submenu menu={menu} />}
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cat_button.title}
        buttonUrl={object.metadata.cat_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={17} color="#fff" />}
      />
      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  )
}
