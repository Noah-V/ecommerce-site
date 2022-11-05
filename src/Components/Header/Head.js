import React from 'react'

export const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container d_flex">
                <div className="left row">
                    <i className="fa fa-phone"></i>
                    <label>+234902981983 </label>
                    <i className="fa fa-envelope"></i>
                    <label>example@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label>Theme FAQ's</label>
                    <label>Need Help?</label>
                    <span>🏁</span>
                    <label>EN</label>
                    <span></span>
                    <label>USA</label>
                </div>
            </div>
        </section>
    </>
  )
}
