import ReactSlider from 'react-slider'
import { useState, useEffect } from 'react'
import { useAppDispatch } from 'src/redux/hooks/selectors'
import { addFilterPrice } from 'src/redux/modules/filters/filter/filter';

export default function SlickSlider () {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState([0, 2000])

	useEffect(() => {
		dispatch(addFilterPrice({ ftr_priceMin: value[0], ftr_priceMax: value[1] }))
        console.log(value)
	},[value]);

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
                onChange={() => {}}
                withTracks
                onAfterChange={(value, index) => handleSlickChange(value)}
            />
        </>
    )
}