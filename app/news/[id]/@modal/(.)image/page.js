'use client'

import { DUMMY_NEWS } from '@/dummy-news'
import { notFound, useRouter } from 'next/navigation'

export default function ImagePage({ params }) {
    const router = useRouter()

    const newsItemsId = params.id

    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemsId)

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </div>
            </dialog>
        </>
    )
}
