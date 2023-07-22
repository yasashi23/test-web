import React from 'react'
import BlockChain from './rightContent/blockChain'
import Token from './rightContent/token'
import CreatorToken from './rightContent/creatorToken'
import Faq from './rightContent/faq'

const RightSide = React.memo(({selectContent}) => {

    const contentSelected = () => {
        switch (selectContent) {
            case 'blockchain':
                return <BlockChain/>
            case 'token':
                return <Token/>
            case 'creatorToken':
                return <CreatorToken/>
            case 'faq':
                return <Faq/>
            default:
                return <BlockChain/>
        }
    }

  return (
    <div className='rightSide'>
        {contentSelected()}
    </div>
  )
})

export default RightSide;