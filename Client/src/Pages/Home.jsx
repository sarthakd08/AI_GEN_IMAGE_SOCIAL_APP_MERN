
import React, { useState } from 'react'
import {Loader, FormField, Card} from '../Components'

function Home() {

  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState(null)
  const [searchText, setSearchText] = useState(null)

  return (
    <>
      <section className='mx-auto max-w-7xl'> 
        <div>
          <h1 className='font-extrabold text-[#222328] text-[32px] leading-10'>The Community Showcase</h1>
          <p className='mt-4 text-[#666e75] text-[16px]'>Browse through the collection of AI gemerated images through DALL-E AI Model</p>
        </div>

        <div className='mt-16'>
          <FormField />
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {searchText && (
                <h2 className="font-medium text-[#666e75] text-xl mb-3">
                  Showing Resuls for <span className="text-[#222328]">{searchText}</span>:
                </h2>
              )}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                {searchText ? (
                  <RenderCards
                    data={[]}
                    title="No Search Results Found"
                  />
                ) : (
                  <RenderCards
                    data={[]}
                    title="No Posts Yet"
                  />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Home


const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};