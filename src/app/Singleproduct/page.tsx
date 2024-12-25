import React from 'react'
import Description from './Description'
import Mainproduct from './Mainproduct'
import TopPicks from '../Picksforyou/Picksforyou'
import Picksforyou from '../Picksforyou/Picksforyou'

const page = () => {
  return (
    <div>
      <Mainproduct/>
      <Description/>
      {/* Top Picks / Related Products */}
      <Picksforyou title="Related Products" showDescription={false} />
    </div>
  )
}

export default page
