import { motion } from 'framer-motion'

import { links } from '@/lib/links'

import PageLink from '../PageLink'

export default function DropDownMenu({ onClick }: { onClick: () => void }) {
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
      className="absolute top-full z-10 -ml-4 flex w-screen flex-col gap-3 bg-background px-5 py-3 md:hidden"
    >
      {links.map((link) => (
        <PageLink
          link={link}
          key={`${link.name}-navbar-dropdown-link`}
          onClick={onClick}
        />
      ))}
    </motion.ul>
  )
}
