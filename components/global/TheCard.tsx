import React from "react";
// import Image from "next/image";
import Link from "next/link";

const TheCard = ({ article }: { article: Record<string, any> }) => {
  return (
    <Link href={`/articles/${article.slug}`}>
      <a className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* <Image
    width="100"
    height="100"
    layout="responsive"
    objectFit="contain"
    src="/images/ocean.jpeg"
    alt=""
  /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{article.title}</div>
          <div
            className="text-gray-700 text-base"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
        {article.tags.length > 0 && (
          <>
            {article.tags.map((item: Record<string, any>) => (
              <div className="px-6 pt-4 pb-2" key={item.tag.id}>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{item.tag.name}
                </span>
              </div>
            ))}
          </>
        )}
      </a>
    </Link>
  );
};

export default TheCard;
