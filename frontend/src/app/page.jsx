import Slider from '../components/slider';
import Service from './servicios/page';

export default function Home() {
  
  return (
    <main className="min-h-screen bg-gray-900">
      <Slider />
      <div className="mt-10">
        <Service />
      </div>
    </main>
  )
}