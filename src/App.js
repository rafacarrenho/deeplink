import { useState } from "react";
import * as S from "./App.styled.js";

function App() {
  const [deepLink, setDeepLink] = useState("");

  const handleClick = () => {
    window.location.href = deepLink;
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Input
          placeholder="Informe o deeplink, Ex: minhaclaro://ClaroAppStoreDetail?appId=186"
          value={deepLink}
          onChange={(e) => setDeepLink(e.target.value)}
          rows={7}
        />
        <S.Button onClick={handleClick} disabled={!deepLink}>
          Chamar deepLink
        </S.Button>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
