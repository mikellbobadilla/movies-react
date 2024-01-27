import { Header } from '../components/Header'
import { Movies } from '../components/Movies'

export function Home() {
    return (
        <>
            <Header />
            <main className='container p-3 mx-auto'>
                <Movies />
            </main>
        </>
    )
}