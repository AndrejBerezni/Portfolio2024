import { motion } from 'framer-motion'

import NavbarLink from './NavbarLink'

export default function DropDownMenu({
  links,
}: {
  links: { name: string; address: string }[]
}) {
  return (
    <motion.ul
      initial={{
        scaleY: 0,
        translateY: '-50%',
      }}
      animate={{
        scaleY: 1,
        translateY: '0%',
      }}
      transition={{
        duration: 1,
        type: 'spring',
      }}
      className="absolute top-full z-10 flex w-full flex-col gap-3 bg-background px-1 py-2 md:hidden"
    >
      {[
        ...links,
        {
          name: 'get in touch',
          address: '/contact',
        },
      ].map((link) => (
        <NavbarLink link={link} key={`${link.name}-navbar-dropdown-link`} />
      ))}
    </motion.ul>
  )
}
