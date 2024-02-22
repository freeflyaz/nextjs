import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
    <title>The Story of Julia</title>
    <meta name="description" content="A beautiful story about Julia and her luminous presence." />
  </Head>
    <main>
<h1>The Story of Julia</h1>
        <p>Once upon a time, in a quaint village nestled between rolling green hills and vibrant meadows, there lived a young woman named Julia. Julia was known throughout the land not just for her kindness and grace, but also for her extraordinary beauty, marked distinctly by her long, flowing blonde hair that shimmered like gold under the sun's gentle caress.</p>

        <p>{`Julia's`} hair was the talk of the village; it was as if strands of the finest silk were spun with threads of sunlight. When she walked through the meadows, her hair flowed behind her like a golden cloak, dancing with the breeze and mingling with the rays of light that filtered through the trees. The flowers seemed to bow in her presence, as if acknowledging the radiance that she carried effortlessly.</p>

        <p>But Julia was much more than her beautiful appearance. She possessed a heart as pure as the clear blue skies above the village. Her laughter was infectious, bringing joy to those around her, and her compassion knew no bounds. She spent her days helping her neighbors, caring for the animals, and tending to the gardens, where she felt most at peace among the blooms that rivaled even her own beauty.</p>

        <p>One day, a traveler came to the village, weary from his long journey. He had heard tales of {`Julia's`} beauty but was unprepared for the sight that greeted him. It was not just her golden hair or her striking features that captivated him, but the light of kindness in her eyes and the warmth of her smile. As Julia welcomed the stranger with the same generosity she showed to all, he realized that her true beauty lay in her spirit, in her ability to make every soul feel seen and valued.</p>

        <p>The traveler stayed in the village for many days, enchanted by {`Julia's`} luminous presence and the simple yet profound joy that filled her life. He saw how the children adored her, how the elderly respected her wisdom, and how even the wildflowers seemed to lean towards her as she passed.</p>

        <p>When it was time for him to leave, the traveler carried with him the story of Julia, a tale more precious than any treasure. He spoke of her not just as the woman with long blonde hair that glistened like the morning dew but as a beacon of love and kindness that illuminated the hearts of all who knew her.</p>

        <p>And so, {`Julia's`} legend grew, spreading far beyond the village, inspiring countless others to find beauty not in outward appearances but in the goodness that resides within. For in her simple, graceful way, Julia had shown that true beauty transcends the physical, residing instead in the acts of kindness, in moments of connection, and in the love we share with the world around us.</p>
    
      <Link href='/users'>Users </Link>
      <ProductCard></ProductCard>
    </main>
    </>
  )
}
