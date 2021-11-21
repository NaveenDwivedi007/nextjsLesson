import { useRouter } from 'next/router'
import React from 'react'

// this is called catch all route

//  localhost:3000/notes/1/2/3/4

// params is an array of [1,2,3,4]
export default function MultiParams() {
    const router = useRouter()

    const {params} = router.query
    console.log(params);
    return (
        <div>
            Test {params}
        </div>
    )
}
