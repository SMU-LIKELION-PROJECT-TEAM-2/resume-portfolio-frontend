import styled from "@emotion/styled";
const Layout = styled.section`
  width: 790px;
  height: 610px;
  background-color: #eeeeee;
  border-radius: 8px;
`;
const ProfileImg = styled.div``;

const ProfileForm = styled.div``;

const TextBox = styled.div``;

const TextArea = styled.textarea``;

const DocumentEdit = () => {
  return (
    <Layout>
      <ProfileImg />
      <ProfileForm>
        <TextBox>
          이름
          <TextArea />
        </TextBox>
        <TextBox>
          직업
          <TextArea />
        </TextBox>
        <TextBox>
          자기소개
          <TextArea />
        </TextBox>
      </ProfileForm>
    </Layout>
  );
};

export default DocumentEdit;
