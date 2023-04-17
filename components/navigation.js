import Link from 'next/link'

const Navigation = ()  => {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link legacyBehavior href='/'>
                    <a class="navbar-brand" href="#">Home</a>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link legacyBehavior href='/about'><a class="nav-link">About</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link legacyBehavior href='/services'><a class="nav-link">Services</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;