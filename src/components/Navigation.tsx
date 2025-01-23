import NavigationLink from "./NavigationLink";

export default function Navigation() {
    return (
        <div>
            <nav className="container flex justify-between p-2">
                <div>
                    <NavigationLink href="/">Home</NavigationLink>
                    <NavigationLink href="/about">About</NavigationLink>
                </div>
            </nav>

        </div>
    )
}