import React, { useState } from "react"

const Data = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState<{
    country: string
    city: string
  } | null>(null)

  const handleFetch = async () => {
    setLoading(true)

    try {
      const res = await fetch("https://api.ipify.org?format=json")
      const data = await res.json()
      const userData = data.ip

      const response = await fetch(
        `https://ipinfo.io/${userData}/json?token=${process.env.PLASMO_TOKEN}`
      )
      const Data = await response.json()

      setLocation({
        country: Data.country,
        city: Data.city
      })
    } catch (error) {
      console.error("Error fetching location:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="plasmo-w-64 plamo-h-64 plasmo-px-10 plasmo-py-10 plasmo-mt-20 plasmo-bg-green-500  plasmo-text-white">
      {location && (
        <p className="plasmo-mt-4 plasmo-text-center ">
          Your country is {location.country} and city is {location.city}
        </p>
      )}
      <button
        type="button"
        className="plasmo-text-center plasmo-w-full plasmo-bg-blue-500 plasmo-text-white plasmo-rounded-2xl plasmo-mt-2"
        onClick={handleFetch}
        disabled={loading}>
        {loading ? "Loading..." : "Show my location"}
      </button>
    </div>
  )
}

export default Data
