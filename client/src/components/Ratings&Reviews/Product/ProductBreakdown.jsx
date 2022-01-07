import React, { useContext } from "react"
// import RatingsAndReviewsContext from "../RatingsandReviewsContext.jsx"
import AppContext from "../../App/AppContext.jsx"
import ProductBar from "./ProductBar.jsx"

const ProductBreakdown = () => {
  const { metaData } = useContext(AppContext)
  const chartics = metaData.characteristics

  return (
    <div>
      {chartics &&
      <div className="chartics">
        {chartics.Size &&
          <div className="charticBreakdown">
            <div className="charticTitle">Size</div>
            <ProductBar chartic={chartics.Size}/>
            <div className="scaleMeaning">
              <span>Too small</span>
              <span className="perfect">Perfect</span>
              <span className="tooLarge">Too large</span>
            </div>
          </div>
        }

        {chartics.Width &&
          <div className="charticBreakdown">
            <div className="charticTitle">Width</div>
            <ProductBar chartic={chartics.Width}/>
            <div className="scaleMeaning">
              <span>Too small</span>
              <span className="perfect">Perfect</span>
              <span className="tooLarge">Too large</span>
            </div>
          </div>
        }

        {chartics.Length &&
          <div className="charticBreakdown">
            <div className="charticTitle">Length</div>
            <ProductBar chartic={chartics.Length}/>
            <div className="scaleMeaning">
              <span>Too small</span>
              <span className="perfect">Perfect</span>
              <span className="tooLarge">Too large</span>
            </div>
          </div>
        }

        {chartics.Fit &&
          <div className="charticBreakdown">
            <div className="charticTitle">Fit</div>
            <ProductBar chartic={chartics.Fit}/>
            <div className="scaleMeaning">
              <span>Too small</span>
              <span className="perfect">Perfect</span>
              <span className="tooLarge">Too large</span>
            </div>
          </div>
        }

        {chartics.Comfort &&
          <div className="charticBreakdown">
            <div className="charticTitle">Comfort</div>
            <ProductBar chartic={chartics.Comfort}/>
            <div className="scaleMeaning">
              <span>Poor</span>
              <span className="great">Great</span>
            </div>
          </div>
        }

        {chartics.Quality &&
          <div className="charticBreakdown">
            <div className="charticTitle">Quality</div>
            <ProductBar chartic={chartics.Quality}/>
            <div className="scaleMeaning">
              <span>Poor</span>
              <span className="great">Great</span>
            </div>
          </div>
        }
      </div>
    }
    </div>
  )
}

export default ProductBreakdown