import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>비엔시스템</title>
      </Head>
      
      {/* 헤더 */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Vienne</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">홈</a></li>
              <li><a href="#" className="hover:text-gray-300">제품소개</a></li>
              <li><a href="#" className="hover:text-gray-300">주요실적</a></li>
              <li><a href="#" className="hover:text-gray-300">유틸리티</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* 메인 섹션 */}
      <main className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">비엔시스템</h2>
        <p className="text-gray-700 mb-6">
          비엔시스템은 입체영상 재생용 플레이어 및 특수효과 제어용 컨트롤러, VR 시뮬레이터용 미들웨어를 개발 공급하는 3D, 4D 솔루션 전문 기업입니다.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Image src="/images/vr1.jpg" alt="VR Olympics" width={500} height={300} className="rounded-lg" />
          <Image src="/images/vr2.jpg" alt="PyeongChang 2018" width={500} height={300} className="rounded-lg" />
        </div>
      </main>
      
      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>문의처: jtj20@naver.com | 031-456-5621, 010-3319-5621</p>
        <p>경기도 안양시 동안구 흥안대로 427번길 57-2, 408A호</p>
      </footer>
    </div>
  );
}
