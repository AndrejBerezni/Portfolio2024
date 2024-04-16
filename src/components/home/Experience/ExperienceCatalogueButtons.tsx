import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from 'react-icons/io5'

export default function ExperienceCatalogueButtons({
  changeSlide,
  currentSlide,
  maxSlide,
}: {
  changeSlide: (direction: 'right' | 'left') => void
  currentSlide: number
  maxSlide: number
}) {
  return (
    <div className="flex items-center gap-6 self-center text-3xl md:hidden">
      {currentSlide !== 0 && (
        <button
          onClick={() => changeSlide('left')}
          className="active:text-brand"
        >
          <IoArrowBackCircleOutline />
        </button>
      )}
      {currentSlide < maxSlide && (
        <button
          onClick={() => changeSlide('right')}
          className="active:text-brand"
        >
          <IoArrowForwardCircleOutline />
        </button>
      )}
    </div>
  )
}
