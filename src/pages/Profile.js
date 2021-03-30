import { Link } from 'react-router-dom';

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function subscribe() {
  const key = "BFU28NcY0EjONuGJsCfi5cWYn0s7tQ2rbndMkLertt6tNvpWB-8rBbRPemTcgO64APWgKTCe1rVMxT4-d1-MS24";

  try {
    const sub = await global.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(key)
    });
    console.log("Subscribe!");
  } catch (error) {
    console.error("Cannot subscribe.");
  }
}

function Profile() {
  return (
    <>
      <header className="w-full z-50 px-4">
        <div className="container mx-auto py-5">
          <div className="flex flex-stretch items-center">
            <div className="w-56 items-center flex">
              <Link to="/">
                <img
                  src="images/content/logo.png"
                  alt="Luxspace | Fulfill your house with beautiful furniture"
                />
              </Link>
            </div>
            <div className="w-full"></div>
            <div className="w-auto">
              <ul
                className="fixed bg-white inset-0 z-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center"
                id="menu"
              >
                <li className="mx-3 py-6 md:py-0">
                  <a href="/" className="text-black md:text-black hover:underline"
                  >Showcase</a
                  >
                </li>
                <li className="mx-3 py-6 md:py-0">
                  <a href="/" className="text-black md:text-black hover:underline"
                  >Catalog</a
                  >
                </li>
                <li className="mx-3 py-6 md:py-0">
                  <a href="/" className="text-black md:text-black hover:underline"
                  >Delivery</a
                  >
                </li>
                <li className="mx-3 py-6 md:py-0">
                  <a href="/" className="text-black md:text-black hover:underline"
                  >Rewards</a
                  >
                </li>
              </ul>
            </div>
            <div className="w-auto">
              <ul className="items-center flex">
                <li className="ml-6 block md:hidden">
                  <button
                    id="menu-toggler"
                    className="relative flex z-50 items-center justify-center w-8 h-8 text-black md:text-black focus:outline-none"
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                    >
                      <path
                        d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z"
                      />
                      <path
                        d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z"
                      />
                      <path
                        d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="ml-6">
                  <a
                    id="header-cart"
                    href="cart.html"
                    className="flex items-center justify-center w-8 h-8 text-black cart cart-filled"
                  >
                    <svg
                      className="fill-current"
                      width="29"
                      height="25"
                      viewBox="0 0 29 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8754 19.9824C9.61762 19.9824 8.59436 21.023 8.59436 22.3021C8.59436 23.5812 9.61762 24.6218 10.8754 24.6218C12.1331 24.6218 13.1564 23.5812 13.1564 22.3021C13.1563 21.023 12.1331 19.9824 10.8754 19.9824ZM10.8754 23.3265C10.3199 23.3265 9.86796 22.8669 9.86796 22.302C9.86796 21.7371 10.3199 21.2775 10.8754 21.2775C11.4308 21.2775 11.8828 21.7371 11.8828 22.302C11.8828 22.867 11.4308 23.3265 10.8754 23.3265Z"
                      />
                      <path
                        d="M18.8764 19.9824C17.6186 19.9824 16.5953 21.023 16.5953 22.3021C16.5953 23.5812 17.6186 24.6218 18.8764 24.6218C20.1342 24.6218 21.1575 23.5812 21.1575 22.3021C21.1574 21.023 20.1341 19.9824 18.8764 19.9824ZM18.8764 23.3265C18.3209 23.3265 17.869 22.8669 17.869 22.302C17.869 21.7371 18.3209 21.2775 18.8764 21.2775C19.4319 21.2775 19.8838 21.7371 19.8838 22.302C19.8838 22.867 19.4319 23.3265 18.8764 23.3265Z"
                      />
                      <path
                        d="M19.438 7.76947H10.3122C9.96051 7.76947 9.67542 8.0594 9.67542 8.41707C9.67542 8.77474 9.96056 9.06467 10.3122 9.06467H19.438C19.7897 9.06467 20.0748 8.77474 20.0748 8.41707C20.0748 8.05935 19.7897 7.76947 19.438 7.76947Z"
                      />
                      <path
                        d="M18.9414 11.1324H10.8089C10.4572 11.1324 10.1721 11.4223 10.1721 11.78C10.1721 12.1377 10.4572 12.4276 10.8089 12.4276H18.9413C19.293 12.4276 19.5781 12.1377 19.5781 11.78C19.5781 11.4224 19.293 11.1324 18.9414 11.1324Z"
                      />
                      <path
                        d="M25.6499 4.88404C25.407 4.58092 25.0472 4.40711 24.6626 4.40711H4.82655L4.42595 2.42947C4.34232 2.01694 4.06563 1.67055 3.68565 1.50276L0.890528 0.268963C0.567841 0.126419 0.192825 0.276999 0.0528584 0.60505C-0.0872597 0.933204 0.0608116 1.31463 0.383347 1.45696L3.17852 2.69081L6.2598 17.9014C6.38117 18.5004 6.90578 18.9352 7.50723 18.9352H22.7635C23.1152 18.9352 23.4003 18.6452 23.4003 18.2876C23.4003 17.9299 23.1152 17.64 22.7635 17.64H7.50728L7.13247 15.7897H22.8814C23.4828 15.7897 24.0075 15.3549 24.1288 14.7559L25.9101 5.96349C25.9876 5.58063 25.8928 5.1871 25.6499 4.88404ZM22.8814 14.4946H6.87012L5.08895 5.70226L24.6626 5.70231L22.8814 14.4946Z"
                      />
                      <g className="text-pink-400">
                        <circle
                          cx="25"
                          cy="4.89023"
                          r="4"
                          className="fill-current dot"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile" aria-label="current-page">My Profile</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <div
                className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 mt-20"
              >
                <img
                  src="./images/content/my-profile.png"
                  alt="my-profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold mb-1">Masayoshi Angga</h2>
              <p className="text-lg mb-12">Jr. Website Developer</p>
            </div>
          </div>
          <ul className="max-w-full md:max-w-lg mx-auto">
            <li
              className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100"
            >
              <span>Subscribe to Notification</span>
              <button className="hover:underline appearance-none" onClick={subscribe}>Subscribe</button>
            </li>
            <li
              className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100"
            >
              <span>Test Notification</span>
              <button className="hover:underline appearance-none">Push Now</button>
            </li>
          </ul>
          <div className="text-center mt-12">
            <Link
              to="/"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Shop
          </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile;