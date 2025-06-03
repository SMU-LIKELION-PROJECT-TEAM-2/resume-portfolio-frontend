import { useState } from "react";
import { dummyPosts } from "../../pages/Community/Community";
import BoardItem from "./BoardItem";

const BoardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const totalPages = Math.ceil(dummyPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = dummyPosts.slice(startIndex, startIndex + postsPerPage);
  const emptyCount = postsPerPage - currentPosts.length;
  return (
    <main>
      {currentPosts.map((post) => (
        <BoardItem key={post.id} post={post} />
      ))}

      {Array.from({ length: emptyCount }).map((_, i) => (
        <div
          key={`empty-${i}`}
          style={{
            flex: 1,
            marginInline: "40px",
            padding: "30px 40px 32px 40px",
            backgroundColor: "#f2f2f2",
            borderRadius: "4px",
            marginTop: "10px",
            visibility: "hidden",
          }}
        />
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          marginBottom: "20px",
        }}
      >
        {Array.from({ length: totalPages }, (_, i) => (
          <p
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? "bold" : "500",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            {i + 1}
          </p>
        ))}

        <p
          style={{
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "20px",
          }}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          →
        </p>
      </div>
    </main>
  );
};

export default BoardTable;
