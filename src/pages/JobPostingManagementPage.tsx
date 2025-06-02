import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';

const JobPostingManagementPage = () => {
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
                  채용 관리
                </h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobPostingManagementPage;
