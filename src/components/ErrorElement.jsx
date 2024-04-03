import PageLayout from "./PageLayout";

export default function ErrorElement({title, message}){
    return(
        <>
            <PageLayout>
            <h2>{title}</h2>
            <h5>{message}</h5>
            </PageLayout>
        </>
    )
}