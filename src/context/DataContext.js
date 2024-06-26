import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

// Business logic container
const DataContext = createContext({});
// Provides data to different components
export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    // data received by AxiosFetch
    const { data, fetchError, isLoading } = useAxiosFetch(
        "http://localhost:3500/posts"
    );

    useEffect(() => {
        setPosts(data);
    }, [data]);

    // (Replaced by useAxiosFetch custom hook)
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await api.get("/posts");
    //             setPosts(response.data);
    //         } catch (err) {
    //             if (err.response) {
    //                 // Not in HTTP 200 response range
    //                 console.log(err.response.data);
    //                 console.log(err.response.status);
    //                 console.log(err.response.headers);
    //             } else {
    //                 console.log(`Error: ${err.message}`);
    //             }
    //         }
    //     };
    //     fetchPosts();
    // }, []);

    useEffect(() => {
        const filteredResults = posts.filter(
            (post) =>
                post.body.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        );
        // Displays newest posts first
        setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    return (
        <DataContext.Provider
            value={{
                search,
                setSearch,
                searchResults,
                fetchError,
                isLoading,
                posts,
                setPosts,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
