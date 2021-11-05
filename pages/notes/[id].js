/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useRouter} from 'next/router'

export default function pageID() {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
            Notes pages {id}
        </div>
    )
}
