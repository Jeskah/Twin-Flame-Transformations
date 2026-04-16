import Image from "next/image"
import connie from "../../../../public/assets/connie.webp"

export default function AboutMe () {
    return (
        
<div className="flex flex-col justify-center relative w-screen">

  <div className="flex gap-5 flex-col p-10 items-center">
      <Image 
      src={connie}
      alt=""
      width={700}
      height={300}
      className="flex bottom-10 p-4 rounded-3xl"
      />

      <span className="font-calligraphy text-[50px]"> my journey</span>

<div className="text-center gap-5 flex flex-col px-8">
      <p>Hi, thank you for being here. What a journey this Twin Flame path is! When I first had soul recognition and started looking into Twin Flames, I remember thinking “Okay, I’ll just do my inner work and then I’ll get my twin back.”</p>

      <p>Hahaha. How wrong I was.</p>

      <p>So much has changed since then.</p>

      <p>I’ve been to the depths of my own soul, through relentless inner work, energy clearing, and facing the mirror of my twin again and again. I’ve had days crying on the floor of my summer house, feeling like I was breaking into pieces and wondering if the pain would ever end</p> 
      
      <p>I’ve also had moments of laughing and crying over the sheer beauty of this world, those glimmers of awe that keep pulling me forward.</p>

      <p>This path made me conscious of the patterns still holding me hostage. Of the places I still betrayed myself in the name of love. I thought that if I just loved enough, forgave enough, waited long enough, he would change.</p>
      
      <p>He didn’t. But I did.</p>

      <p>What changed was me — and everything around me shifted with it.</p>

      <p>I stopped trying to love him into rising. I started reclaiming my energy, my dharmic purpose, my life. I stopped orbiting him and began anchoring in me. And from that place… the attachment dissolved. The longing eased. The clarity returned.</p>

      <p>I still love him. I always will. But I’m no longer waiting for him to meet me.
That kind of love, rooted in compassion but detached from outcome is the only thing that can ever truly pull someone forward, if they’re willing to rise.</p>

<p>These days, I’m deeply grateful for the life I’ve built. I’m a mother, a mentor, and a radically unschooling parent. I’ve created a home that honours all our souls. One where healing, truth, and joy get to lead.</p>

<p>I’m also an alternative healthcare practitioner and intuitive mentor, devoted to helping others reclaim their energy, deepen their sovereignty, and come home to themselves. I support those on the Twin Flame path, not just to “get their twin back,” but to remember who they are.</p>

<p>I want to travel more. Keep deepening my connection with my children, and work with people who are ready to stop surviving and start thriving, because that’s what this path is really about.</p>

<span className="font-calligraphy text-[28px] leading-9 p-5">Thank you for being here</span>
</div>
    </div>
  </div>
  )
}