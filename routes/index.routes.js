const express = require("express")
const router  =express.Router()
// const path = require("path") bss dekhne ke loye kiya ye meri choice the so waise koi jaruri nii the yha path use krne ki

router.get("/", (req,res,next) => {
  // console.log(path.join(__dirname),'fffffffff')
  res.render("index")
})

module.exports = router