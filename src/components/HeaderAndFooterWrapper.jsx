import React from 'react'
import Header from './organisms/Header'
import SubHeader from './organisms/SubHeader'
import Footer from './organisms/Footer'

const HeaderAndFooterWrapper = ({
  children,
  showHeader = true,
  showSubHeader = true,
  showFooter = true,
}) => {
  return (
    <div className="relative flex flex-col min-h-screen ">
      <div className='flex flex-col fixed top-0 mx-auto z-50 w-full max-w-[1510px]'>
        {showHeader && (
          <Header />
        )}
        {showSubHeader && (
          <SubHeader />
        )}
      </div>
      <main className="flex-1 gap-[100px]">
        {children}
      </main>
      {showFooter && (
        <Footer />
      )}
    </div>
  )
}

export default HeaderAndFooterWrapper
