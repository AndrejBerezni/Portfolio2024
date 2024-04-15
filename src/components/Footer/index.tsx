import Link from 'next/link'
import { LuGithub, LuLinkedin, LuFacebook } from 'react-icons/lu'

import { links } from '@/lib/links'

import CallForActionButtons from '../CallForActionButtons'
import PageLink from '../PageLink'

export default function Footer() {
  const socialMediaLinks = [
    {
      name: 'github',
      address: 'https://github.com/AndrejBerezni',
      icon: <LuGithub />,
    },
    {
      name: 'linkedin',
      address: 'https://www.linkedin.com/in/andrej-berezni',
      icon: <LuLinkedin />,
    },
    {
      name: 'facebook',
      address: 'https://www.facebook.com/andrej.berezni',
      icon: <LuFacebook />,
    },
  ]

  return (
    <footer className="pb-12 text-secondary md:pb-16">
      <div className="mb-6 flex flex-col items-center gap-6 md:mb-16 md:flex-row md:justify-between md:gap-8">
        {/* Page links */}
        <ul className="flex items-center gap-4 max-[350px]:text-xs md:text-xl">
          {links.map((link) => (
            <PageLink key={`${link.name}-footer-link`} link={link} />
          ))}
        </ul>

        {/* Social media links */}
        <div className="flex gap-6 text-2xl md:text-4xl">
          {socialMediaLinks.map((link) => (
            <Link
              key={`${link.name}-footer-link`}
              href={link.address}
              className="duration-200 hover:scale-110 hover:text-brand"
              target="_blank"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8">
        {/* Call for action */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h3 className="text-center text-xl font-semibold md:text-start md:text-3xl">
            Interested in working together<span className="text-brand">?</span>
          </h3>
          <CallForActionButtons />
        </div>

        {/* Signature */}
        <div className="text-center text-lg md:text-end">
          <p>©2024 All Rights Reserved.</p>
          <p>Made with 💜 by Andrej Berežni</p>
        </div>
      </div>
    </footer>
  )
}
