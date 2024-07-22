import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Pirooz 🖤
      </h1>
      <p>
        I'm a 4th year Computer Science and Cognitive Science student at UofT. My interests have 
        lately been closely related to the intersection between Machine Learning and Psychology, and
        how Neural Network algorithms can be used to help us better understand the human mind.
      </p>
      
      <p>Currently, I'm working as a Software Engineer Intern at the Wayfair Toronto office. 
      I'm also quite passionate about powerlifting, having recently participated in my <a href="https://www.youtube.com/live/9J_myHh0vXg?si=CL5_0vqpjYzmch_4&t=12485" className='text-blue-600'>first competition.</a></p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
