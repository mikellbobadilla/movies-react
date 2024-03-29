import { useId } from 'react'
import { Spinner } from './Spinner'

export function Search({ handleSubmit, handleChange, search, error, loading }) {
    const searchId = useId()

    return (
        <form className='w-full max-w-sm mx-auto' onSubmit={handleSubmit}>
            <label htmlFor={searchId} className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-cruise-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    onChange={handleChange}
                    value={search}
                    type="search"
                    id={searchId}
                    name='search'
                    className="block w-full py-3 px-4 ps-10 text-bas rounded-md bg-[#3d3d3d]/50 hover:border-cruise-500 focus:border-cruise-600 outline-none border border-transparent transition"
                    placeholder="Avengers, The Matrix, ..."
                    autoComplete='off'
                />
                
                <button
                    type="submit"
                    className={`absolute  end-2.5 bottom-[7px] w-[75px] text-piano-black bg-cruise-500 hover:bg-cruise-400 active:bg-cruise-200 transition font-medium rounded-md text-sm px-4 py-2 outline-none`}
                    disabled={loading}
                >
                    {
                        loading
                            ? <Spinner />
                            : 'Search'
                    }
                </button>
            </div>
            {error && <p className='text-red-500/80 text-sm text-center mt-3'>{error}</p>}
        </form>
    )
}