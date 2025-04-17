import { ContentLoading } from "@/config/config";

export default function MouseOver({ content }: ContentLoading) {
    console.log(content);
    console.log(typeof(content))

    return (
        <div>
            {(content == 'bolsas') ? (
                <p>hello</p>
            ) : ''}
        </div>
    );
}