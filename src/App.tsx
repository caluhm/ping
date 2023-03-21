import Logo from '/src/images/logo.svg';
import Facebook from '/src/images/icon-facebook.svg';
import Twitter from '/src/images/icon-twitter.svg';
import Instagram from '/src/images/icon-instagram.svg';
import Illustration from '/src/images/illustration-dashboard.png';

function App() {
  let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = document.getElementById('email') as HTMLInputElement;
    if (!validEmail.test(email.value)) {
      alert('Email is invalid!');
      email.value = '';
    }
    if (validEmail.test(email.value)) {
      alert('Thank you for subscribing!');
      console.log(email.value);
      email.value = '';
    }
    
  }

  return (
    <div className='font-mono m-0 py-8 px-3 box-border flex flex-col justify-center items-center h-[100vh] overflow-x-hidden'>
      <main className='flex flex-col items-center justify-between h-full sm:w-[600px] w-full'>
        <img src={Logo} alt="" className='mb-8'/>
        <div className='flex flex-col items-center justify-center w-full'>
          <h1 className='sm:text-3xl text-xl font-normal text-[#969696]'>We are launching <span className='font-bold text-[#151F29]'>soon!</span></h1>
          <h2 className='sm:text-lg text-sm font-light text-[#151F29] mt-4'>Subscribe and get notified.</h2>
        </div>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='w-full flex gap-3 mt-4 mb-8 sm:flex-row flex-col'>
            <input id="email" type="email" placeholder="Your email address..." className='border-2 border-[#969696] rounded-3xl sm:w-[65%] w-auto p-3 pl-5 font-semibold'/>
            <button id="submit" type="submit" className='border-none rounded-3xl sm:w-[30%] w-full p-3 font-semibold tracking-[0.75px] bg-[#4f7df3] text-white cursor-pointer transition ease-in-out drop-shadow-lg hover:bg-[#C2D3FF]'>Notify Me</button>
          </div>
        </form>
        <div>
          <img src={Illustration} alt="" className='w-full'/>
        </div>
        <footer>
          <ul className='list-none flex justify-center mt-5 mb-2 p-0'>
            <li><a href="https://facebook.com/" target="_blank" className='flex justify-center items-center border-[#969696] border-2 mb-4 mx-2 p-2 rounded-3xl transition ease-in-out hover:bg-[#4f7df3] hover:border-[#4f7df3]'><img src={Facebook} alt="Facebok Link" className='sm:w-[18px] sm:h[[18px] w-[14px] h[14px]'/></a></li>
            <li><a href="https://twitter.com/" target="_blank" className='flex justify-center items-center border-[#969696] border-2 mb-4 mx-2 p-2 rounded-3xl transition ease-in-out hover:bg-[#4f7df3] hover:border-[#4f7df3]'><img src={Twitter} alt="Twitter Link" className='sm:w-[18px] sm:h[[18px] w-[14px] h[14px]'/></a></li>
            <li><a href="https://instagram.com/" target="_blank" className='flex justify-center items-center border-[#969696] border-2 mb-4 mx-2 p-2 rounded-3xl transition ease-in-out hover:bg-[#4f7df3] hover:border-[#4f7df3]'><img src={Instagram} alt="Instagram Link" className='sm:w-[18px] sm:h[[18px] w-[14px] h[14px]'/></a></li>
          </ul>
          <p className='text-xs sm:text-md text-center font-semibold text-[#969696]'>&copy; Copyright Ping. All rights reserved.</p>
        </footer>
    </main>
  </div>
  )
}

export default App
