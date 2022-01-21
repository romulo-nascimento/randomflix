import { ChangeEvent, useState } from "react"

const SearchBar = ({ onChange }) => {
    const [searchString, setSearchString] = useState('')
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        setSearchString(value)
        onChange(value)
    }
    
    return (
        <div>
            <input
                type="text"
                value={searchString}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar