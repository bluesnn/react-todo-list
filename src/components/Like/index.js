import React, { useState } from 'react'

function Like() {
  const [isLike, setLike] = useState(false)

  return (
    <div>
      <span onClick={() => setLike(!isLike)}>
        {isLike ? '❤️' : '💔'}
      </span>
    </div>
  )
}

export default Like
