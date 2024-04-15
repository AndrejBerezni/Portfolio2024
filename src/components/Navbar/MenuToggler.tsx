import clsx from 'clsx'
export default function MenuToggler({
  toggle,
  open,
}: {
  toggle: () => void
  open: boolean
}) {
  return (
    <button onClick={toggle} className="flex flex-col gap-2 pr-2 md:hidden">
      <div
        className={clsx('h-[4px] w-[32px] bg-gray-400 duration-300 ', {
          'rotate-0': !open,
          'translate-y-1 rotate-45': open,
        })}
      ></div>
      <div
        className={clsx('h-[4px] w-[32px] bg-gray-400 duration-300', {
          'rotate-0': !open,
          '-translate-y-2 -rotate-45': open,
        })}
      ></div>
    </button>
  )
}
