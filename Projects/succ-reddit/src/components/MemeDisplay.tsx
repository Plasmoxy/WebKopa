import { faHeart, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState, memo } from "react"
import { Button, ButtonGroup, ProgressBar } from "react-bootstrap"
import { fetchRandomMeme, Meme } from "../api/MemeApi"
import MemeCard from "./MemeCard"
import { useDispatch } from "react-redux"
import { increaseMemesRead } from "../model/AppReducer"

function MemeDisplay() {

  const dispatch = useDispatch()
  const [meme, setMeme] = useState<Meme | null>(null)
  const [memeSubreddit] = useState("dankmemes")
  
  async function nextMeme() {
    setMeme(null)
    try {
      // get 1 meme
      const meme = await fetchRandomMeme(memeSubreddit)
      // apply it to UI state if current
      setMeme(meme)

      // dispatch meme read to redux
      dispatch(increaseMemesRead())
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    nextMeme()
  }, [memeSubreddit])

  return (
    <div className="meme-display">
      {meme ? (
        <>
          <MemeCard key={meme.postLink} meme={meme} />
          
          <div className="text-center">
            <ButtonGroup>
              
              <Button href={meme.url} type="submit" variant="outline-danger"><FontAwesomeIcon icon={faArrowCircleDown} /> Open image</Button>

              <Button variant="outline-primary" onClick={nextMeme}>👏Next meme👏</Button>
            </ButtonGroup>
          </div>
        </>
      ) : (
        <div className="text-center">
          <ProgressBar animated now={100} />
          <h1>
            Loading your meme
            <FontAwesomeIcon icon={faHeart} color="#dc3545" />
            ...
          </h1>
        </div>
      )}
    </div>
  )
}

export default memo(MemeDisplay)