import { DUMMY_NEWS } from '@/dummy-news'
import { notFound } from 'next/navigation'

export default function ImagePage({ params }) {
    const newsItemsId = params.id

    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemsId)

    if (!newsItem) {
        notFound()
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}
