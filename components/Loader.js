export default function Loader() {
  return (
    <div className='flex items-center justify-center space-x-2'>
      <div className='w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin' />
      <span
        className='text-blue-600 font-medium'
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <svg
          style={{ width: 250, height: 250 }}
          viewBox='0 0 800 800'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            class='spin'
            cx='400'
            cy='400'
            fill='none'
            r='200'
            stroke-width='50'
            stroke='#57f254'
            stroke-dasharray='1006 1400'
            stroke-linecap='round'
          />
        </svg>
      </span>
    </div>
  )
}
