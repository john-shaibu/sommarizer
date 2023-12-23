import {logo} from '../assets/'

const Hero = () => {
  return (
    <header 
    className="w-full flex justify-center items-center flex-col">
      <nav 
      className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summeriser logo" 
        className='w-28 object-contain' />
        <button
          type='button'
          onClick= {() => {
            window.open('https://github.com/john-shaibu/')
          }}
          className='black_btn'
        >
          Github
        </button>
      </nav>
      <h1 className='head_text font-paytone'>
          Simplify complexity with our<br className='max-md:hidden'/>
          <span className='orange_gradient'>OpenAI Summarizer</span>
      </h1>
      <h2 className='desc font-inter'>
          Elevate your content comprehension effortlessly with
          our OpenAI Summarizer, dilivering instant and leveraging the intelligence
          of OpenAi for sharp, concise content distillation.
      </h2>
    </header>
  )
}

export default Hero