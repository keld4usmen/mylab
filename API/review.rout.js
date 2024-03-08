import express from "express"
import ReviewsCrtl from "./reviews.controller.js"

const router = express.Router()

//router.route("/").get((req, res) => res.send("Hello my people"))

router.route("/movie/:id").get(ReviewsCrtl.apiGetReviews) 
                               router.route("/new").post(ReviewsCrtl.apiPostReview)
  router.route("/:id") 
.get(ReviewsCrtl.apiGetReview) 
.put(ReviewsCrtl.apiUpdateReview) 
.delete(ReviewsCrtl.apiDeleteReview) 


export default router