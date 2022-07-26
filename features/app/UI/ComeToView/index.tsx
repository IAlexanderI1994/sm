import React from 'react'

import styles from './ComeToView.module.scss'

const ComeToView = () => {
  return (
    <>
      <div className={styles.rootTitle}>
        <div className="wrapper">
          <div className={styles.titleBLock}>
            <h4 className={styles.title}>Приходите на просмотр</h4>
            <span className={styles.subTitle}>Чтобы записаться, заполните форму</span>
          </div>
        </div>
      </div>
      <div className={styles.rootSignUp}>
        <div className="wrapper">
          <div className={styles.map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A903b37f2a906a0238054a34af8084e224d1f59f0ce87f75341ab9fc53e72716b&amp;source=constructor"
              width="660"
              height="540"
              frameborder="0"
            />
          </div>
          <div className={styles.form}></div>
        </div>
      </div>
    </>
  )
}

export default ComeToView
