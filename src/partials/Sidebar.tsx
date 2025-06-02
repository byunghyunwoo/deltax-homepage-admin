import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='flex flex-col w-[224px] h-dvh border-r'>
      <div className='flex w-full '>
        <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
          <Link className='block' to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='80'
              height='22'
              viewBox='0 0 80 22'
              fill='none'
            >
              <g clipPath='url(#clip0_4573_11583)'>
                <path
                  d='M6.23547 6.76758H0V22.0002H6.23547C10.6488 22.0002 12.7954 18.7141 12.7954 14.2984C12.7954 9.24178 9.98108 6.76758 6.23547 6.76758ZM6.01244 19.1842H3.17789V9.58364H5.44471C8.60368 9.58364 9.61476 11.5465 9.61476 14.6189C9.61476 17.9891 7.85347 19.1842 6.01108 19.1842H6.01244Z'
                  fill='#2C2C2C'
                />
                <path
                  d='M29.797 6.76758H26.6191V22.0002H36.8422V19.1842H29.797V6.76758Z'
                  fill='#2C2C2C'
                />
                <path
                  d='M48.1992 6.76758H36.3555V9.58364H40.6877V22.0002H43.867V9.58364H48.1992V6.76758Z'
                  fill='#2C2C2C'
                />
                <path
                  d='M52.6116 6.76758L47.125 22.0002H50.3448L52.3075 16.1117L54.1904 10.5223H54.231L56.0531 16.1117L56.883 18.6087L57.9766 22.0002H61.2775L55.872 6.76758H52.6116Z'
                  fill='#2C2C2C'
                />
                <path
                  d='M17.3273 19.1842V16.8809V15.4508H24.3332V12.8484H17.3273V9.58364H24.9604V6.76758H14.1494V22.0002H25.1227V19.1842H17.3273Z'
                  fill='#2C2C2C'
                />
                <path
                  d='M76.456 21.9998L71.7452 15.043L69.8271 17.8761L72.6198 21.9998H76.456Z'
                  fill='#2C2C2C'
                />
                <path
                  d='M62.7304 7.40429L64.2916 9.70329L65.9921 12.2131L66.9072 10.867L67.9156 9.3771L67.9183 9.37994L67.9196 9.37852L66.5747 7.39717L66.1462 6.76758H62.2979L62.3249 6.80746L62.7304 7.40429Z'
                  fill='#2C2C2C'
                />
                <path
                  d='M80 0H76.1773L72.621 5.25037H72.6196L61.2773 22H65.1135L76.4558 5.25037H76.4436L80 0Z'
                  fill='#2C2C2C'
                />
              </g>
              <defs>
                <clipPath id='clip0_4573_11583'>
                  <rect width='80' height='22' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-between'>
        <ul className='flex flex-col gap-6 px-4 sm:px-6 lg:px-8 mt-8'>
          <li className=''>
            <Link className='block' to='/info-management'>
              <p>관리자 정보 관리</p>
            </Link>
          </li>
          <li className=''>
            <Link className='block' to='/inquiries-management'>
              <p>문의 사항 관리</p>
            </Link>
          </li>
          <li className=''>
            <Link className='block' to='/create-job-posting'>
              <p>채용 등록</p>
            </Link>
          </li>
          <li className=''>
            <Link className='block' to='/job-posting-management'>
              <p>채용 관리</p>
            </Link>
          </li>
        </ul>
        {/* <div className='px-4 sm:px-6 lg:px-8 mt-8 pb-5'>
          <h4 className='mb-2'>Desktop download</h4>
          <ul className='flex flex-col gap-2 '>
            <li className='rounded-4xl border border-neutral-300'>
              <button className='w-full py-2 px-6'>
                <p className='text-center'>Linux</p>
              </button>
            </li>
            <li className='rounded-4xl border border-neutral-300'>
              <button className='w-full py-2 px-6'>
                <p className='text-center'>Window</p>
              </button>
            </li>
            <li className='rounded-4xl border border-neutral-300'>
              <button className='w-full py-2 px-6'>
                <p className='text-center'>Mac</p>
              </button>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
