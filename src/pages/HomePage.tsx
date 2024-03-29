import Hawa from '../assets/hawa.jpeg';
import MotionDiv from '../components/MotionDiv';
import Team from '../assets/about.jpg';
import Box from '../assets/box-indicating-points.svg';
import Model from '../assets/cfd.mp4';

export default function HomePage() {
  return (
    <MotionDiv style='appear'>
      <div className='h-dvh flex items-center justify-between bg-hero-pattern bg-fixed bg-cover px-14'>
        <h1 className='relative tracking-tighter text-[8.5dvw] text-[#EBE8DA]/10 leading-[1] mt-[7.5dvw]'>
          Powering Innovation
          <span className='absolute w-full -top-[0.25dvw] -left-[0.25dvw] text-black'>
            Powering Innovation
          </span>
          <span className='absolute w-full -top-[0.25dvw] -left-[0.5dvw] text-white'>
            Powering Innovation
          </span>
          <p className='text-gray-100 tracking-[0.6rem] border-4 border-transparent font-semibold mt-8 shadow-[0_0_2000px_12px_#000] w-fit text-xs'>
            Redefining Innovative Energy Solutions
          </p>
        </h1>
        <img src={Hawa} alt='' className='w-[40dvw] mt-[calc(7.5dvw+0.5rem)]' />
      </div>
      <MotionDiv
        style='slide-up'
        className='pb-12 bg-[url("/src/assets/bg-elem.svg")] bg-cover bg-fixed bg-center px-14'
      >
        <h1 className='py-10 text-7xl tracking-tighter relative underline-offset-[12px]'>
          <p className='blur-md scale-y-105'>Our Product</p>
          <span className='absolute left-0 top-[2.5rem] underline'>
            Our Product
          </span>
        </h1>
        <p className='-translate-y-6'>
          An initiative that aims to upcycle the unused wind energy, upscale our
          developed products and uplift communities.
        </p>
        <div className='flex items-center justify-around'>
          <div className='max-w-[40%] space-y-6'>
            <p className='flex items-center'>
              <img src={Box} className='mr-4' width={20} />
              <p>
                SOLARBREEZE is making a great stride toward goal 7 (affordable
                and clean energy) of UNSD (United Nations Sustainable
                Development) and envisioning a sustainable
              </p>
            </p>
            <p className='flex items-center'>
              <img src={Box} className='mr-4' width={20} />
              <p>
                Project SOLARBREEZE quintessentially tackles daunting issues
                that torment our planet and bring about adverse climate changes.
              </p>
            </p>
            <p className='flex items-center'>
              <img src={Box} className='mr-4' width={20} />
              <p>
                It is not just conserving energy but its remarkable product is
                also giving electricity back to the grid which doesn't just
                reduce CO2 emissions but also generates revenue.
              </p>
            </p>
            <p className='flex items-center'>
              <img src={Box} className='mr-4' width={20} />
              <p>
                We are efficiently minimizing wasted car fuel and using the
                generated air currents clubbed with the natural wind to power
                our innovative product.
              </p>
            </p>
            <p className='flex items-center'>
              <img src={Box} className='mr-4' width={20} />
              <p>
                Not just wind energy but SOLARBREEZE through its installed solar
                panel utilizes Solar energy as well. By combining both wind and
                solar, our project aims to electrify the product throughout the
                year, even in adverse conditions.
              </p>
            </p>
            <p className='flex items-center'>
              <img src={Box} className='mr-4' width={20} />
              <p>
                We aim to impact people from multiple facets of life, we aspire
                to connect our beneficiaries with the government who is
                collaborating with us on this revolutionary project.
              </p>
            </p>
          </div>
          <div className='w-2/5'>
            <video src={Model} className='' autoPlay loop />
          </div>
        </div>
      </MotionDiv>
      <MotionDiv
        style='slide-up'
        className='h-[calc(100dvh-7.5dvw-1rem)] pl-14'
      >
        <h1 className='py-10 text-7xl tracking-tighter flex items-center justify-between pr-14'>
          <p>Key Features</p>
          <svg
            width='132'
            height='132'
            viewBox='0 0 132 132'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d_4_108)'>
              <circle cx='66' cy='66' r='55' fill='white' />
            </g>
            <g clip-path='url(#clip0_4_108)'>
              <path
                d='M67.0453 31C67.7198 31.0848 68.3962 31.1601 69.0669 31.2581C77.5244 32.5016 83.8285 36.9272 88.06 44.2901C89.9554 47.5891 90.9276 51.2027 91.1386 55.0216C91.4777 61.1994 89.8028 66.7649 86.1647 71.7501C85.7766 72.2833 85.3583 72.8014 84.9061 73.28C84.567 73.6398 84.5727 73.9149 84.8176 74.3369C88.2258 80.2039 91.6134 86.0821 95.0084 91.9566C95.2778 92.4219 95.5171 92.8515 95.1667 93.4073C94.6391 94.2494 94.1662 94.4567 93.2299 94.0893C91.0689 93.2415 88.9173 92.3767 86.76 91.5195C86.1911 91.2934 85.6202 91.0692 84.9457 90.8035C84.8176 91.625 84.6857 92.3974 84.5764 93.1718C84.2825 95.2235 83.998 97.2752 83.7079 99.327C83.6721 99.5757 83.6382 99.8262 83.5685 100.066C83.2934 101.021 82.1573 101.3 81.4659 100.572C81.2661 100.361 81.1192 100.096 80.9704 99.8413C77.5696 93.9706 74.1689 88.0999 70.7852 82.2179C70.5384 81.7883 70.3236 81.6112 69.7885 81.7092C66.9606 82.2179 64.1232 82.1972 61.2952 81.6998C60.8072 81.6131 60.6188 81.7865 60.4003 82.1651C57.0147 88.0453 53.6139 93.916 50.2189 99.7904C49.8458 100.435 49.4822 101.122 48.5854 100.985C47.6245 100.838 47.5586 100.043 47.4512 99.2761C47.0574 96.482 46.643 93.6918 46.2266 90.8186C45.9402 90.9222 45.6915 91.0051 45.4485 91.1012C43.018 92.0696 40.5895 93.0418 38.1572 94.0083C37.9462 94.0912 37.7295 94.1684 37.5091 94.2155C36.5294 94.4265 35.7795 93.6447 36.0584 92.6857C36.145 92.3842 36.3071 92.0997 36.4653 91.8266C39.7982 86.0482 43.1254 80.266 46.4885 74.5046C46.8276 73.9224 46.7503 73.589 46.3396 73.1029C41.5165 67.4093 39.444 60.8038 40.4199 53.4334C41.6879 43.8398 46.9727 37.0817 55.7278 33.0555C58.2638 31.8893 60.9806 31.2732 63.7822 31.1055C63.9593 31.0942 64.1345 31.0358 64.3097 31C65.2216 31 66.1335 31 67.0453 31ZM88.6422 56.4271C88.5951 43.7644 78.4193 33.5529 65.7171 33.5284C53.028 33.5039 42.7524 43.8963 42.7731 56.5779C42.7938 69.3932 52.9451 79.4728 65.7114 79.5124C78.3082 79.552 88.6912 69.0371 88.6441 56.4271H88.6422ZM91.0519 90.3871C91.0839 90.3476 91.1179 90.308 91.1499 90.2684C88.3257 85.385 85.5015 80.5015 82.7244 75.6972C81.1606 76.7466 79.7269 77.845 78.1669 78.7192C76.5918 79.601 74.8924 80.2585 73.2005 81.0366C75.9965 85.9106 78.8244 90.8355 81.6505 95.7605C82.1177 93.5109 82.4493 91.3292 82.7753 89.1474C82.9618 87.9002 83.6777 87.4801 84.859 87.9454C86.5528 88.6105 88.2428 89.2831 89.9347 89.9519C90.3058 90.0989 90.6789 90.2421 91.05 90.3871H91.0519ZM48.6702 75.701C45.8893 80.511 43.0633 85.3963 40.1486 90.4324C40.5368 90.2986 40.7496 90.2364 40.955 90.1554C42.8372 89.4112 44.7137 88.6576 46.5977 87.919C47.6566 87.5045 48.4102 87.9228 48.5892 89.0306C48.8285 90.5134 49.0432 91.9999 49.2712 93.4826C49.3861 94.2268 49.5067 94.9692 49.6235 95.7134C49.6725 95.7152 49.7215 95.7171 49.7705 95.719C52.5909 90.8016 55.4094 85.8843 58.1903 81.0347C56.4758 80.2472 54.7952 79.5972 53.239 78.7249C51.679 77.8507 50.2434 76.7542 48.6702 75.701Z'
                fill='black'
              />
              <path
                d='M88.6422 56.4272C88.6893 69.0371 78.3063 79.552 65.7096 79.5124C52.9433 79.4729 42.792 69.3932 42.7713 56.5779C42.7505 43.8964 53.0262 33.5039 65.7152 33.5284C78.4175 33.5529 88.5933 43.7645 88.6404 56.4272H88.6422ZM65.7171 76.4019C76.7124 76.3793 85.5298 67.56 85.5825 56.5346C85.6334 45.5845 76.6484 36.5957 65.6794 36.6277C54.6822 36.6597 45.8442 45.5072 45.8272 56.5044C45.8084 67.511 54.7199 76.4245 65.719 76.4019H65.7171Z'
                fill='#22B573'
              />
              <path
                d='M65.7171 76.4018C54.7181 76.4244 45.8065 67.5091 45.8253 56.5044C45.8442 45.5072 54.6804 36.6597 65.6776 36.6276C76.6446 36.5956 85.6316 45.5844 85.5807 56.5345C85.5298 67.56 76.7106 76.3811 65.7153 76.4018H65.7171ZM48.3198 56.5364C48.3349 66.0716 56.1349 73.8697 65.6908 73.8998C75.3183 73.93 83.0711 66.1394 83.0579 56.4422C83.0466 46.8863 75.2523 39.092 65.7002 39.0826C56.2083 39.075 48.3048 47.0106 48.3179 56.5364H48.3198Z'
                fill='black'
              />
              <path
                d='M65.8754 64.0161C64.4812 65.0278 63.1134 66.0452 61.7211 67.0287C60.2082 68.097 58.4296 67.6994 57.5102 66.1112C57.1259 65.4461 57.0637 64.7358 57.2992 64.0048C57.7683 62.556 58.2243 61.1015 58.7292 59.664C58.8931 59.2005 58.846 58.9443 58.4183 58.6541C57.156 57.7987 55.9106 56.9151 54.6954 55.9938C53.7383 55.2685 53.3823 54.2548 53.6422 53.0849C53.8796 52.0204 54.5711 51.3327 55.6299 51.0501C55.888 50.9804 56.1688 50.9672 56.4382 50.9653C57.919 50.9559 59.3999 50.9389 60.8808 50.9709C61.3499 50.9804 61.5609 50.8428 61.6947 50.3907C62.1355 48.9079 62.5877 47.4289 63.0983 45.9707C63.6541 44.3824 65.2329 43.6816 66.808 44.2769C67.7349 44.6274 68.2342 45.3753 68.5262 46.2759C68.969 47.6381 69.4061 49.004 69.8112 50.3756C69.9412 50.8127 70.1296 50.986 70.6157 50.9747C72.1417 50.9389 73.6678 50.954 75.1939 50.9709C76.5071 50.986 77.5037 51.7604 77.9201 53.0547C78.3403 54.3585 78.0369 55.2892 76.8745 56.1408C75.68 57.015 74.4798 57.8816 73.2609 58.7182C72.9123 58.9574 72.852 59.1703 72.9877 59.5603C73.4738 60.9564 73.9127 62.3676 74.3875 63.7674C74.8077 65.0071 74.478 66.2186 73.4813 67.0193C72.5299 67.7823 71.2657 67.8539 70.1748 67.1173C68.9502 66.2883 67.7726 65.3896 66.5725 64.521C66.3521 64.3609 66.1316 64.2045 65.8735 64.0218L65.8754 64.0161ZM59.4225 53.4146C58.5332 53.4146 57.6459 53.3938 56.7585 53.4278C56.4966 53.4372 56.2422 53.5954 55.9822 53.6859C56.133 53.8931 56.2441 54.1493 56.4382 54.3001C57.7646 55.3401 59.106 56.3574 60.4437 57.3843C61.3405 58.0719 61.414 58.3018 61.0729 59.3587C60.5435 61.0035 59.999 62.6445 59.4866 64.2931C59.415 64.5229 59.4866 64.7961 59.4922 65.0486C59.7372 64.9789 60.0216 64.9676 60.2176 64.8281C61.6457 63.8108 63.0531 62.7651 64.4699 61.7326C65.3592 61.0864 65.8 61.0864 66.6836 61.7308C68.027 62.7086 69.359 63.7034 70.7155 64.6642C70.9887 64.8583 71.3429 64.9355 71.6594 65.0674C71.6425 64.7339 71.6933 64.3797 71.5972 64.0708C71.1149 62.507 70.5931 60.9545 70.0862 59.3983C69.7528 58.3677 69.8677 58.0135 70.7588 57.3616C72.1926 56.3122 73.632 55.2741 75.0601 54.2172C75.2448 54.0796 75.3691 53.8592 75.5198 53.6783C75.2843 53.5898 75.0488 53.4278 74.8133 53.4259C73.1045 53.4033 71.3957 53.4146 69.6887 53.4146C68.4754 53.4146 68.1231 53.1602 67.7519 52.0147C67.247 50.4566 66.7552 48.8966 66.2334 47.3442C66.1392 47.0653 65.93 46.826 65.7718 46.5679C65.6022 46.8336 65.3723 47.0785 65.2744 47.3686C64.7431 48.9418 64.2476 50.5263 63.7351 52.1033C63.3922 53.1564 63.0437 53.4108 61.9509 53.4127C61.1087 53.4146 60.2647 53.4127 59.4225 53.4127V53.4146Z'
                fill='black'
              />
              <path
                d='M59.4206 53.4145C60.2628 53.4145 61.1068 53.4164 61.949 53.4145C63.0418 53.4107 63.3903 53.1583 63.7332 52.1051C64.2457 50.5263 64.7412 48.9418 65.2725 47.3705C65.3705 47.0803 65.6003 46.8354 65.7699 46.5698C65.9262 46.8279 66.1373 47.0672 66.2315 47.346C66.7533 48.8984 67.2451 50.4584 67.75 52.0166C68.1212 53.1621 68.4716 53.4164 69.6868 53.4164C71.3956 53.4164 73.1045 53.407 74.8114 53.4277C75.0488 53.4315 75.2824 53.5916 75.5179 53.6802C75.3653 53.861 75.2429 54.0815 75.0582 54.219C73.6301 55.276 72.1907 56.3141 70.757 57.3635C69.8658 58.0154 69.7509 58.3696 70.0843 59.4001C70.5893 60.9564 71.1112 62.5088 71.5954 64.0726C71.6914 64.3816 71.6406 64.7358 71.6575 65.0693C71.341 64.9374 70.9868 64.8601 70.7136 64.6661C69.3571 63.7052 68.0251 62.7104 66.6818 61.7326C65.7981 61.0883 65.3573 61.0883 64.468 61.7345C63.0493 62.7651 61.6419 63.8107 60.2157 64.83C60.0216 64.9694 59.7353 64.9788 59.4903 65.0504C59.4847 64.7979 59.4131 64.5248 59.4847 64.2949C59.9971 62.6445 60.5416 61.0054 61.0711 59.3606C61.4121 58.3036 61.3367 58.0757 60.4418 57.3861C59.106 56.3593 57.7627 55.3419 56.4363 54.3019C56.2422 54.1493 56.1311 53.8949 55.9803 53.6877C56.2385 53.5973 56.4947 53.439 56.7566 53.4296C57.644 53.3976 58.5332 53.4164 59.4206 53.4164V53.4145Z'
                fill='#22B573'
              />
            </g>
            <defs>
              <filter
                id='filter0_d_4_108'
                x='0'
                y='0'
                width='132'
                height='132'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feMorphology
                  radius='1'
                  operator='dilate'
                  in='SourceAlpha'
                  result='effect1_dropShadow_4_108'
                />
                <feOffset />
                <feGaussianBlur stdDeviation='5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.545098 0 0 0 0 0.823529 0 0 0 0 0.627451 0 0 0 0.4 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_4_108'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_4_108'
                  result='shape'
                />
              </filter>
              <clipPath id='clip0_4_108'>
                <rect
                  width='59.34'
                  height='70'
                  fill='white'
                  transform='translate(36 31)'
                />
              </clipPath>
            </defs>
          </svg>
        </h1>
        <div className='mt-6 tracking-tighter'>
          <div className='flex border-t border-[#81865E] justify-between'>
            <div className='flex max-w-[40%] items-center justify-center gap-[1.5dvw] py-4 pl-24'>
              <h1 className='text-6xl'>01</h1>
              <p>A helical blade capturing wind breezes from all directions</p>
            </div>
            <div className='flex max-w-[40%] items-center justify-center gap-[1.5dvw] py-4 pr-24'>
              <h1 className='text-6xl'>04</h1>
              <p>
                Low starting speeds and sustainance at high speeds to reduce
                cutoffs
              </p>
            </div>
          </div>
          <div className='flex border-y border-[#81865E] justify-between'>
            <div className='flex max-w-[40%] items-center justify-center gap-[1.5dvw] py-4 pl-24'>
              <h1 className='text-6xl'>02</h1>
              <p>
                A low noise setup to eliminate unexpected and unprecedented
                frequency from propeller
              </p>
            </div>
            <div className='flex max-w-[40%] items-center justify-center gap-[1.5dvw] py-4 pr-24'>
              <h1 className='text-6xl'>05</h1>
              <p>
                Low setup cost and flow maintenance cost for the helical model
              </p>
            </div>
          </div>
          <div className='flex border-b border-[#81865E] justify-between'>
            <div className='flex max-w-[40%] items-center justify-center gap-[1.5dvw] py-4 pl-24'>
              <h1 className='text-6xl'>03</h1>
              <p>
                Sleek and compact design, occupied minimum floor space of 0.5m x
                0.5m
              </p>
            </div>
            <div className='flex max-w-[40%] items-center justify-center gap-[1.5dvw] py-4 pr-24'>
              <h1 className='text-6xl'>06</h1>
              <p>
                A low noise setup to eliminate unexpected and unprecedented
                frequency from propeller
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>
      <div className='h-[calc(100dvh-7.5dvw-1rem)] bg-[#81865E]'>
        <h1 className='flex w-full items-center justify-center text-7xl font-medium py-10 tracking-tighter bg-black text-white'>
          About Us
        </h1>
        <div className='flex w-full items-center justify-evenly h-[calc(100%-9.5rem)]'>
          <div className=' max-w-[50%]'>
            <p className='text-lg'>
              At SOLARBREEZE, we are a team of five passionate individuals
              dedicated to combating the pressing issue of air pollution through
              innovative solutions. Our project, aptly named SOLARBREEZE,
              harnesses the power of Vertical Axis Wind Turbines (VAWT) to
              tackle air pollution head-on.
            </p>
            <h1 className='text-2xl pt-8 pb-2 underline underline-offset-8'>
              Our Mission
            </h1>
            <p className='text-lg'>
              Our mission is clear: to create a cleaner, healthier environment
              for current and future generations by reducing air pollution
              levels through sustainable technology. We believe that everyone
              deserves access to clean air, and we are committed to making this
              vision a reality.
            </p>
          </div>
          <img src={Team} alt='' className='h-96 rounded-xl' />
        </div>
      </div>
    </MotionDiv>
  );
}
