import Image from "next/image";
import ParentComponent from "./components/ParentComponent";
import State from "./components/State";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <State />
            <ParentComponent />
            <section className="w-full py-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    <div className="relative w-full h-40">
                        <Image src="/pic1.png" alt="Image 1" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="relative w-full h-40">
                        <Image src="/pic2.png" alt="Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="relative w-full h-40">
                        <Image src="/pic3.png" alt="Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="relative w-full h-40">
                        <Image src="/pic4.png" alt="Image 4" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="relative w-full h-40">
                        <Image src="/pic5.png" alt="Image 5" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="relative w-full h-40">
                        <Image src="/pic1.png" alt="Image 6" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                </div>
            </section>
        </main>
    );
}
