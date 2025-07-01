import styled from "@emotion/styled";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { NavLink } from "react-router-dom";

const Layout = styled.div`
  background-color: #f2f2f2;
  margin: 60px 480px 120px 240px;
  height: 80dvh;
  overflow-y: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #d2d2d2;
  height: 96px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding-inline: 40px;
  align-items: center;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: large;
`;

const Content = styled.div`
  flex: 1;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DropdownRow = styled.div`
  display: flex;
  gap: 10px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const TitleInput = styled.input`
  font-size: 20px;
  padding: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #ccc;
  outline: none;
`;

const Toolbar = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  color: #333;
`;

const Tool = styled.span`
  cursor: pointer;
  font-weight: bold;
`;

const EditorWrapper = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-y: auto;

  img {
    max-width: 50%;
    height: auto;
    display: block;
    margin: 12px 0;
  }

  .is-empty::before {
    content: attr(data-placeholder);
    color: #aaa;
    float: left;
    height: 0;
    pointer-events: none;
  }
`;

const WriteMain = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "당신의 이야기를 적어보세요!",
        emptyEditorClass: "is-empty",
      }),
      Image,
    ],
    content: "",
  });
  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        editor?.chain().focus().setImage({ src: base64 }).run();
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Layout>
      <Header>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <NavLink
            to={-1}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "large",
              color: "inherit",
            }}
          >
            ←
          </NavLink>
          <Text>글쓰기</Text>
        </div>
        <div style={{ display: "flex", gap: "50px" }}>
          <Text>임시저장</Text>
          <Text>발행하기</Text>
        </div>
      </Header>

      <Content>
        <DropdownRow>
          <Select defaultValue="" style={{ color: "#878787" }}>
            <option value="" disabled>
              게시판
            </option>
            <option value="all">전체</option>
            <option value="daily">일상</option>
            <option value="qa">Q&A</option>
            <option value="feedback">피드백</option>
            <option value="study">팀매칭-스터디</option>
            <option value="project">팀매칭-프로젝트</option>
          </Select>
          <Select defaultValue="" style={{ color: "#878787" }}>
            <option value="" disabled>
              분야 선택
            </option>
            <option value="dev">개발</option>
            <option value="design">디자인</option>
            <option value="plan">기획</option>
            <option value="marketing">마케팅</option>
            <option value="management">경영/인사</option>
            <option value="business">영업</option>
          </Select>
        </DropdownRow>

        <TitleInput placeholder="제목" />

        <Toolbar>
          <Tool
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            H1
          </Tool>
          <Tool
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            H2
          </Tool>
          <Tool
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            H3
          </Tool>
          <Tool onClick={() => editor?.chain().focus().toggleBold().run()}>
            B
          </Tool>
          <Tool onClick={() => editor?.chain().focus().toggleItalic().run()}>
            I
          </Tool>
          <Tool>
            <label style={{ cursor: "pointer" }}>
              🖼
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </label>
          </Tool>
        </Toolbar>

        <EditorWrapper>
          <EditorContent editor={editor} />
        </EditorWrapper>
      </Content>
    </Layout>
  );
};

export default WriteMain;
