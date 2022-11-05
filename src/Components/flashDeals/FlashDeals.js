import React from 'react'
import { FlashCard } from './FlashCard'

export const FlashDeals = () => {
  return (
    <>
        <section className="flash background">
            <div className="container f_flex">
                <div className="heading f_flex">
                    <i className="fa fa-bolt"></i>
                    <h1>Flash Deals</h1>
                </div>
                <FlashCard/>
            </div>
        </section>
    </>
  )
}
