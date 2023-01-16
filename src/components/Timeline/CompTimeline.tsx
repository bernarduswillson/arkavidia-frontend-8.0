import DiskImage from '@src/assets/images/disk.svg'
import Image from 'next/image'
import clsx from 'clsx'

interface AppProps {
  dates: {
    title: string
    startDate: Date
    endDate: Date
  }[]
}

interface DateProps {
  title: string
  startDate: Date
  endDate: Date
  isCurrent: boolean
}

function _DateComponent({ title, startDate, endDate, isCurrent }: DateProps) {
  const textColor: string = isCurrent ? 'text-white' : 'text-black'
  const borderColor: string = isCurrent ? 'border-white' : 'border-black'

  const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]

  return (
    <div className="flex flex-col items-center w-[40w] lg:w-[18vw] shrink-0 h-min">
      {/* Disk icon */}
      <div className="w-full relative flex items-center justify-center">
        <div
          className={clsx(
            'h-[50%] w-full border-b-8 absolute top-0',
            borderColor
          )}></div>
        <Image width={72} src={DiskImage} />
      </div>

      {/* Title and date */}
      <h6
        className={clsx(
          'mt-4 font-black text-2xl capitalize font-archivo px-1 text-center',
          textColor
        )}>
        {title}
      </h6>
      <p className={clsx('font-Helvatica font-bold text-base', textColor)}>
        {startDate.getDate() != endDate.getDate() ||
        startDate.getMonth() != endDate.getMonth() ||
        startDate.getFullYear() != endDate.getFullYear() ? (
          <>
            <span>
              {startDate.getDate()}
              {month[startDate.getMonth()] != month[endDate.getMonth()] &&
                ` ${month[startDate.getMonth()]}`}
              {startDate.getFullYear() != endDate.getFullYear() &&
                ` ${startDate.getFullYear()}`}
            </span>
            - <span>{endDate.getDate()}</span>{' '}
            <span>
              {month[endDate.getMonth()]} {endDate.getFullYear()}
            </span>
          </>
        ) : (
          <span>
            {startDate.getDate()} {month[startDate.getMonth()]}{' '}
            {startDate.getFullYear()}
          </span>
        )}
      </p>
    </div>
  )
}

export default function Timeline({ dates }: AppProps) {
  return (
    <div className="flex w-[83vw] overflow-x-auto scrollbar scrollbar-thumb-white scrollbar-track-yellow200 pt-16 pb-20 bg-gradient-to-b from-[rgba(217,217,217,0)] to-[#FF634B]">
      {dates.map(({ title, startDate, endDate }, idx) => (
        <_DateComponent
          key={idx}
          title={title}
          startDate={startDate}
          endDate={endDate}
          isCurrent={startDate.getTime() <= Date.now()}
        />
      ))}
    </div>
  )
}
