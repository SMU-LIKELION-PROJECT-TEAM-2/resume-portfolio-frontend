import styled from "@emotion/styled";
import { Plus } from "lucide-react";
const Layout = styled.section`
  width: 710px;
  height: 610px;
  background-color: #eeeeee;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  gap: 120px;
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 185px;
  align-items: center;
`;

const ProfileImg = styled.img`
  height: 145px;
  width: 145px;
  border-radius: 100%;
  background-color: #d0d0d0;
`;

const StackBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const ProfileStack = styled.p`
  margin: 0;
  display: flex;
  background-color: #d9d9d9;
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 38px;
`;

const PlusButton = styled.button`
  margin: 0;
  display: flex;
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 38px;
  border: 1px dotted;
`;

const ProfileForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Text = styled.input`
  border-radius: 10px;
  border: none;
  height: 50px;
  padding-inline: 10px;
  font-size: 16px;
`;
const TextArea = styled.textarea`
  resize: none;
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-size: 20px;
`;

const DocumentEdit = () => {
  return (
    <Layout>
      <ImgBox>
        <ProfileImg />
        <StackBox>
          <ProfileStack>UIUX</ProfileStack>
          <ProfileStack>BX</ProfileStack>
          <PlusButton>
            <Plus size={16} />
          </PlusButton>
        </StackBox>
      </ImgBox>
      <ProfileForm>
        <TextBox>
          이름
          <Text placeholder="NAME" />
        </TextBox>
        <TextBox>
          직업
          <Text placeholder="ex) UIUX 디자이너" />
        </TextBox>
        <TextBox>
          자기소개
          <TextArea rows={14} placeholder="본인에 대한 설명을 쓰는 칸입니다." />
        </TextBox>
      </ProfileForm>
    </Layout>
  );
};

export default DocumentEdit;
