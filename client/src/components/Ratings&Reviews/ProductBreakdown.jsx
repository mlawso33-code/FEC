import React, { useContext } from "react"
import RatingsAndReviewsContext from "./RatingsandReviewsContext.jsx"
import ProductBar from "./ProductBar.jsx"

const ProductBreakdown = () => {
  const { metaData } = useContext(RatingsAndReviewsContext)
  const chartics = metaData.characteristics

  return (
    <div>
      {chartics &&
      <div>
        {chartics.Size &&
          <div>
            <div>Size</div>
            <ProductBar />
            <div>
              <span>Too small</span>
              <span>Perfect</span>
              <span>Too large</span>
            </div>
          </div>
        }

        {chartics.Width &&
          <div>
            <div>Width</div>
            <ProductBar />
            <div>
              <span>Too small</span>
              <span>Perfect</span>
              <span>Too large</span>
            </div>
          </div>
        }

        {chartics.Length &&
          <div>
            <div>Length</div>
            <ProductBar />
            <div>
              <span>Too small</span>
              <span>Perfect</span>
              <span>Too large</span>
            </div>
          </div>
        }

        {chartics.Fit &&
          <div>
            <div>Fit</div>
            <ProductBar />
            <div>
              <span>Too small</span>
              <span>Perfect</span>
              <span>Too large</span>
            </div>
          </div>
        }

        {chartics.Comfort &&
          <div>
            <div>Comfort</div>
            <ProductBar />
            <div>
              <span>Poor</span>
              <span>Great</span>
            </div>
          </div>
        }

        {chartics.Quality &&
          <div>
            <div>Quality</div>
            <ProductBar />
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