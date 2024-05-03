// Comentários são para fetch de data cliet side, agora está fazendo fetch de data server side
//'use client'

import NewsList from '@/components/newsList/news-list'
import { getNews } from '@/services/news'
// import { useQuery } from '@tanstack/react-query'
// import { getNews } from '@/services/news'

export default async function NewsPage() {
    /* 
    ---------   Fetch usando tanStackQuery --------------- client side
    const { data, isPending, isError } = useQuery({                   
        queryKey: ['news'],
        queryFn: getNews,
    })

    if (isPending) {
        return <h1>Loading...</h1>
    } else if (isError) {
        throw new Error('Impossible to obtain news.')
    } */

    const response = await fetch('http://localhost:8080/news')

    if (!response.ok) {
        throw new Error('Failed to fetch news.')
    }

    const data = await response.json()

    return (
        <div>
            <h1>News Page</h1>
            <NewsList news={data} />
        </div>
    )
}
