import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': '84c35b565amsh8a0e2c0d1a980d9p113696jsn9b1d361a68ca',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com'
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
});