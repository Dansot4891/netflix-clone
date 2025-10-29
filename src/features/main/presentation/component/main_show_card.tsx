import styled from "styled-components";
import { AppColor } from "../../../../core/styles/color/app_color";
import type { HomeData } from "../../data/dto/home_data";
import { AppButton } from "../../../../shared/presentation/compoenent/button/app_button";

const MainShowCardComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${AppColor.blackOpacity};
    z-index: 1000;
    
    /* 가운데 정렬 */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    position: relative;
    max-width: 800px;
    width: 100%;
    background: ${AppColor.gray1F};
    border-radius: 12px;
    
    img{
        height: 300px;
        width: 100%;
        border-radius: 12px 12px 0 0;
        object-fit: cover;
    }
`;

const Content = styled.div`
    padding: 40px;
    color: ${AppColor.white};
    
    h1 {
        font-size: 48px;
        margin: 24px 0;
        font-weight: bold;
    }
    
    p {
        font-size: 18px;
        margin-bottom: 24px;
        color: ${AppColor.white};
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${AppColor.gray9D};
    border: none;
    color: ${AppColor.white};
    font-size: 24px;
    cursor: pointer;
    z-index: 10;
    
    &:hover {
        background: ${AppColor.gray30};
    }
`;

const TagContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    background-color: ${AppColor.gray30};
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 14px;
    color: ${AppColor.white};
`;

export function MainShowCard({ item, setShowCardData }: { item: HomeData, setShowCardData: () => void }) {
    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // 배경 클릭 시에만 닫기 (카드 내부 클릭은 무시)
        if (e.target === e.currentTarget) {
            setShowCardData();
        }
    };

    return (
        <MainShowCardComponent onClick={handleBackgroundClick}>
            <Card>
                <CloseButton onClick={() => setShowCardData()}>
                    ✕
                </CloseButton>
                <img src={item.url} />
                <Content>
                    <TagContainer>
                        {item.tag.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </TagContainer>
                    <p>{item.content}</p>
                    <AppButton $color={AppColor.red} $width="auto" $textColor={AppColor.white}>
                        시작하기 ＞
                    </AppButton>
                </Content>
            </Card>
        </MainShowCardComponent>
    )
}