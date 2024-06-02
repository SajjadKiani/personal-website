

export default function Page ({params}) {
    
    const {slug} = params;

    return (
        <p> Slug: {slug} </p>
    )
}