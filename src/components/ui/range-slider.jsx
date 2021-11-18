import ReactSlider from 'react-slider'
import { useState } from 'react'

export default function SlickSlider () {
    const [value, setValue] = useState([0, 2000])

    const handleSlickChange = (state) => {
        setValue(state)
    }
    return (
        <>
            <div className="text-black flex justify-between">
                <span>{value[0]}</span>
                <span>{value[1]}</span>
            </div>
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[0, 2000]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                max={2000}
                pearling
                minDistance={10}
                onChange={(value, index) => handleSlickChange(value)}
                withTracks
            />
        </>
    )
}