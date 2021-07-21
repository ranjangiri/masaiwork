
export function BlogCard({ data }) {
    return <div>
        {data.map((el) => {
            console.log(el);
            return <div>
                <div><h1>{el.title}</h1><span>Category:</span><span>{el.category}</span></div>
                <div><p>{el.body}</p></div>
                <div><span>Author:</span><span>{el.author}</span></div>
            </div>
        })}
    </div>

}

