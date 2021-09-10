# Getting Started with useDimension

- create a reference with useRef()
- attach that ref to the dom element we wish to measure.
- supply the ref to the useDimension hook

## Example
```
import React, { useRef } from 'react'
import useDimension from `./useDimension`

const App = () => {
  const myRef = useRef(null)
  const [dimensions] = useDimensions(myRef)

  return (
    <div ref={myRef}>
      oh, hi... I'm {dimensions.height}px tall and {dimensions.width}px wide.
    </div>
  )
}
```

## To run demo

`yarn`
`yarn start`