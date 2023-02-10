import React from 'react'

const Footer=()=>{
    return(
        <>
          <div className="bg-dark text-secondary px-4 py-5 text-center mt-5">
        <div className="py-5">
          <h1 className="display-6 fw-bold text-white">Parallel Universe</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 mt-2 footertext">
           A website to explore universes
              <br></br>
            
            </p>
          
          </div>
        </div>
        <div className="simple d-flex justify-content-center align-items-center">
          <p>
            <font>
              <font>© 2019--2021 Company, Inc. </font>
              <font>· </font>
            </font>
            <a href="https://www.websitepolicies.com/blog/terms-conditions-vs-privacy-policy">
              <font>
                <font>Privacy</font>
              </font>
            </a>
            <font>
              <font> · </font>
            </font>
            <a href="https://www.websitepolicies.com/blog/terms-conditions-vs-privacy-policy">
              <font>
                <font>Terms</font>
              </font>
            </a>
          </p>
        </div>
      </div>
        </>
    )
}

export default Footer;