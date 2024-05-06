import React from "react";
import me from "C:/Users/dell/Desktop/myblog/me.jpeg"
export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
  <div className='max-w-2xl mx-auto p-3 text-center'>
    <div className='flex items-center justify-center mb-5'>
      <img
        src={me}
        alt='Sathwika Ganneboina'
        className='w-30 h-40 rounded-full mr-3'
      />
      <h1 className='text-3xl font-semibold text-center'>About Sathwika's Blog</h1>
    </div>
    <div className='text-md text-gray-500 flex flex-col gap-6'>
      <p>
        Welcome to Sathwika's Blog! This blog was created by Sathwika Ganneboina
        as a personal project to share my thoughts and ideas with the
        world. I am a passionate developer who loves to write about general stuff
        technology, coding, and everything in between.
      </p>

      <p>
        On this blog, you'll find weekly articles and tutorials on topics
        such as web development,current day scenarios , software engineering, and programming
        languages. is always learning and exploring new
        technologies, so be sure to check back often for new content!
      </p>

      <p>
        Iam glad to see my followers leave comments on my posts and engage with
        other readers. You can like other people's comments and reply to
        them as well. We believe that a community of learners can help
        each other grow and improve.
      </p>
    </div>
  </div>
</div>
 );
}