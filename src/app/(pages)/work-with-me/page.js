import Image from "next/image"
import connie from "../../../../public/assets/connie.webp"

export default function WorkWithMe () {
    return (
        <div className="flex flex-col justify-center p-10 gap-10 items-center text-center">
            <h2>WORK WITH ME</h2>
            <p>
There are a number of ways to engage with this work, depending on where you are on your path and what kind of support you are seeking. All work is offered within a grounded, ethical, and trauma-aware container, with a strong emphasis on self-responsibility, integration, and inner union.
I aim to support you on the journey back to your true self, helping you heal core wounds, integrate fragmented parts, clear and strengthen your energy system, and move toward greater inner alignment and sovereignty.
            </p>

<div className="flex gap-10 flex-col">
<p className="text-semibold text-shadow-sm"><strong>Spot the difference 👀</strong></p>
<div className="flex-row flex gap-10">
<Image 
    src={connie}
    alt="bear kemode"
    width={200}
    height={200}
    className="object-cover rounded-full"
/>

    <Image 
        src={"https://dinoanimals.com/wp-content/uploads/2023/11/Kermode-bear-10.jpg"}
        alt="bear kemode"
        width={200}
        height={200}
        className="object-cover rounded-full"
    />
</div>
</div>

        </div>
    )
}