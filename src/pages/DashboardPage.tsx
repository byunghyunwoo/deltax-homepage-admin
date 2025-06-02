import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';

const DashboardPage = () => {
  return (
    <div className='flex h-[100dvh] overflow-hidden'>
      <Sidebar />
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden -full'>
        <Header />
        <main className='bg-neutral-50 h-full'>
          <div className='flex flex-col px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto h-full'>
            <div className='sm:flex sm:justify-between sm:items-center mb-8'>
              <div className='mb-4 sm:mb-0'>
                <h1 className='text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold'>
                  Dashboard
                </h1>
              </div>
            </div>
            <div className='flex flex-row w-full gap-6'>
              <div className='flex-1 flex flex-col bg-white shadow-xs rounded-xl p-5'>
                <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                  진행 중인 채용 건수
                </h2>
                <p className='text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2'>
                  {`123건`}
                </p>
              </div>
              <div className='flex-1 flex flex-col bg-white shadow-xs rounded-xl p-5'>
                <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                  문의사항 건수
                </h2>
                <p className='text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2'>
                  {`123건`}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
