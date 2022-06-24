import React from 'react'
import { useSelector } from 'react-redux'

export default function Tab() {
    const memeList = useSelector(state => state.savedMemes.value)
    return (
        <section className={memeList ? "tab py-large dark" : "tab py-large"}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="text mb-medium">
                            <h3 className='font-weight-bold'>
                                Made with our tools
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tabs">

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto d-flex">
                        <div className="details text-center"><h3>4.1<span>M</span><span className="plus"></span></h3> <p>Monthly users</p></div>
                        <div className="details text-center"><h3>107.1<span>M</span><span className="plus"></span></h3> <p>Videos made</p></div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
