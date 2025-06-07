import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from './_components/carousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>비엔시스템</title>
      </Head>

      {/* 헤더 */}
      <header className="bg-gray-900 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold tracking-wider">Vienne</h1>
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition">홈</a></li>
               <Link href="/carousel" className="hover:text-gray-300 transition">
                캐러샐
              </Link>
              <li><a href="#" className="hover:text-gray-300 transition">주요실적</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero 섹션 */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">3D · 4D 솔루션의 선두주자</h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            비엔시스템은 입체영상 재생 플레이어와 VR/4D 컨트롤러를 개발하는 전문 기업입니다.
          </p>
        </div>
      </section>

      {/* 본문 소개 섹션 */}
      <main className="container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Image
            src="/img/main.jpg"
            alt="main"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />

          <div className="bg-white rounded-xl shadow-md p-6 space-y-4 text-gray-800 text-[16px] leading-relaxed tracking-wide">
            <p>
              2005년 소프트웨어 기반의 입체영상 플레이어 출시 이후 꾸준한 연구개발을 통해
              현장에서 요구되는 편리한 사용성과 다양한 기능을 갖춘 제품을 선보이고 있습니다.
            </p>
            <p>
              다양한 특수효과 지원을 위한 4D 컨트롤러도 자체 기술로 제작하여 제공하고 있습니다.
            </p>
            <p>
              축적된 경험을 바탕으로 타사 시스템과의 연동 기술도 보유하고 있으며,
              스마트폰을 활용한 VR 시뮬레이터 제어 미들웨어도 개발하고 있습니다.
            </p>
            <div className="border-t pt-4">
              <p><strong>문의처:</strong> jtji20@naver.com</p>
              <p>031-456-5621, 010-3319-5621</p>
            </div>
          </div>
        </div>

        {/* 서브 이미지 */}
        <Carousel/>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        <div className="space-y-2">
          <p>문의처: jtj20@naver.com | 031-456-5621, 010-3319-5621</p>
          <p>경기도 안양시 동안구 흥안대로 427번길 57-2, 408A호</p>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} 비엔시스템. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
