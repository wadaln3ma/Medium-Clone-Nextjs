import React from "react"
import Link from "next/link"
import {Post} from "../typing"
import { urlFor } from '../sanity'

type Props = {
  post : Post
}

const Post : React.FC<Props> = ({ post })=>{
  const { _id, title, description, slug, author, mainImage } = post
  return (
                <Link key={_id} href={`/post/${slug.current}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border">
                <img
                  className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={urlFor(mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between bg-white p-5">
                  <div>
                    <p className="text-lg font-bold">{title}</p>
                    <p>
                      {description} by {author.name}
                    </p>
                  </div>

                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
)}

export default Post
