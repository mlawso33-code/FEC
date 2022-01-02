import React, { useContext } from "react"
import RatingsAndReviews from "./Ratings&Reviews.jsx"
import RatingsAndReviewsContext from "./RatingsandReviewsContext.jsx"

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
          </div>
        }

        {chartics.Width &&
          <div>
            <div>Width</div>
          </div>
        }

        {chartics.Length &&
          <div>
            <div>Length</div>
          </div>
        }

        {chartics.Fit &&
          <div>
            <div>Fit</div>
          </div>
        }

        {chartics.Comfort &&
          <div>
            <div>Comfort</div>
          </div>
        }

        {chartics.Quality &&
          <div>
            <div>Quality</div>
          </div>
        }
      </div>
    }
    </div>
  )
}

export default ProductBreakdown