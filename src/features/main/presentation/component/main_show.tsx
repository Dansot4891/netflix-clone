import styled from "styled-components";
import { device } from "../../../../core/styles/reponsive/responsive";
import { AppColor } from "../../../../core/styles/color/app_color";

const MainShowComponent = styled.div`
    padding: 24px 10%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;

    @media ${device.mobile} {
        flex-direction: column;
    }

    @media ${device.tablet} {
        flex-wrap: wrap;
        > div {
            flex: 0 0 calc(50% - 12px);  // 2개씩 2줄
        }
    }

    @media ${device.desktop} {
        flex-direction: row;
    }
`;

const Box = styled.div`
    color: ${AppColor.white};
    background-color: ${AppColor.gray3E};
    padding: 24px;
    border-radius: 12px;
    height: 320px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease;

    h2{
        margin-bottom: 12px;
    }

    img{
        width: 40px;
        margin-top: auto;  // 아래로 밀기
        align-self: flex-end;  // 오른쪽 정렬
    }

    &:hover{
        transform: scale(1.05);
        opacity: 0.9;
    }
`;

export function MainShow() {
    const data = [
        {
            title: "TV로 즐기세요",
            contents: "스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
            image: "https://cdn-icons-png.flaticon.com/512/535/535239.png"
        },
        {
            title: "즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요",
            contents: "간편하게 저장하고 빈틈없이 즐겨보세요.",
            image: "https://cdn-icons-png.flaticon.com/512/159/159833.png"
        },
        {
            title: "다양한 디바이스로 시청하세요",
            contents: "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.",
            image: "https://cdn-icons-png.flaticon.com/512/660/660026.png"
        },
        {
            title: "어린이 전용 프로필을 만들어 보세요",
            contents: "자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.",
            image: "https://cdn-icons-png.flaticon.com/512/1643/1643927.png"
        },
    ];
    return (
        <MainShowComponent>
            <h2>가입해야 하는 또 다른 이유</h2>
            <br />
            <Row>
                {data.map((item) => (
                    <Box key={item.title}>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.contents}</p>
                        </div>
                        <img src={item.image} />
                    </Box>
                ))}
            </Row>
        </MainShowComponent>
    )
}