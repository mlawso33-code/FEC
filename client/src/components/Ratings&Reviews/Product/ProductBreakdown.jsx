import React, { useContext } from "react"
import RatingsAndReviewsContext from "../RatingsandReviewsContext.jsx"
import ProductBar from "./ProductBar.jsx"

const ProductBreakdown = () => {
  const { metaData } = useContext(RatingsAndReviewsContext)
  const chartics = metaData.characteristics

  return (
    <div>
      {chartics &&
      <div>
        {chartics.Size &&
          <div className="charticBreakdown">
            <div className="charticTitle">Size</div>
            <ProductBar chartic={chartics.Size}/>
            <div>
              <span>Too small</span>
              <span>Perfect</span>
              <span>Too large</span>
            </div>
          </div>
        }

        {chartics.Width &&
          <div className="charticBreakdown">
            <div>Width</div>
            <ProductBar chartic={chartics.Width}/>
            <div>
              <span>Too small</span>
              <span>Perfect</span>
              <span>Too large</span>
            </div>
          </div>
        }

        {chartics.Length &&
          <div className="charticBreakdown">
            <div>Length</div>
            <ProductBar chartic={chartics.Length}/>
            <div>
              <span>Too small</span>
              <span>Perfect</span>
              <span>Too large</span>
            </div>
          </div>
        }

        {chartics.Fit &&
          <div className="charticBreakdown">
            <div>Fit</div>
            <ProductBar chartic={chartics.Fit}/>
            <div>
              <span>Too small</span>
              <span>Perfect</span>
              <span>Too large</span>
            </div>
          </div>
        }

        {chartics.Comfort &&
          <div className="charticBreakdown">
            <div>Comfort</div>
            <ProductBar chartic={chartics.Comfort}/>
            <div>
              <span>Poor</span>
              <span>Great</span>
            </div>
          </div>
        }

        {chartics.Quality &&
          <div className="charticBreakdown">
            <div>Quality</div>
            <ProductBar chartic={chartics.Quality}/>
            <div>
              <span>Poor</span>
              <span>Great</span>
            </div>
          </div>
        }
      </div>
    }
    </div>
  )
}

export default ProductBreakdown