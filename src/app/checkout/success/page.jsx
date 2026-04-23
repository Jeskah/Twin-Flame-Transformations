
export default function SuccessPage() {
    return (

        <div className="min-h-screen flex flex-col items-center justify-center text-center gap-6 text-mauve-500 p-10">

        <div className="absolute -z-10 top-77">
            <video width={170} height={170} autoPlay loop muted playsInline>
            <source src="/Confetti.webm" type="video/webm" />
            </video>
        </div>

            <h1>Success!</h1>

    <p className="text-mauve-700 max-w-sm text-lg">
        Thank you for booking. You`ll receive a confirmation email shortly 
        and Connie will be in touch soon.
    </p>
    <p className="text-mauve-400">Please allow for 3 workings days</p>
        </div>
    )
}
