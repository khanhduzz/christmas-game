export default function PickControls({
  onGreen,
  onRed,
  disabled,
}: {
  onGreen: () => void
  onRed: () => void
  disabled: boolean
}) {
  return (
    <div className="flex justify-center gap-12 mt-10">
      <button
        disabled={disabled}
        onClick={onGreen}
        className="px-10 py-5 bg-green-500 rounded-2xl text-2xl font-bold"
      >
        🟢 Pick Green
      </button>

      <button
        disabled={disabled}
        onClick={onRed}
        className="px-10 py-5 bg-red-500 rounded-2xl text-2xl font-bold"
      >
        🔴 Pick Red
      </button>
    </div>
  )
}
