import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import Navbar from '@/components/Navbar'
const Page = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Navbar/>
      <h1>
        {t('top_bar_title')}
      </h1>
      <button onClick={() => i18next.changeLanguage("en")}>en</button>
      <button onClick={() => i18next.changeLanguage("bn")}>bn</button>
    </div>

  )
}

export default Page
