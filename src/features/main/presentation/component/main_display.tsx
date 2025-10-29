import { useRef } from "react";
import styled from "styled-components";
import { AppColor } from "../../../../core/styles/color/app_color";
import type { HomeData } from "../../data/dto/home_data";

const Container = styled.div`
    padding: 24px 10%;
`;

const CarouselWrapper = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`;

const Row = styled.div`
    display: flex;
    gap: 40px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 20px 0;
    
    /* 스크롤바 숨기기 */
    scrollbar-width: none;
`;

const Card = styled.div`
    flex-shrink: 0; /* 카드 크기 유지 */
    
    img{
        width: 180px;
        height: 270px;
        border-radius: 12px;
        object-fit: cover;
    }

    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.05);
    }
`;

const Stack = styled.div`
    position: relative;
    
    h2 {
        position: absolute;
        bottom: 10px;
        left: -24px;
        color: ${AppColor.black};
        font-size: 80px;
        text-shadow: 2px 2px 4px ${AppColor.gray1F};
        -webkit-text-stroke: 1px ${AppColor.white};
    }
`;

const ScrollButton = styled.button<{ direction: 'left' | 'right' }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${props => props.direction === 'left' ? 'left: -50px;' : 'right: -50px;'}
    
    width: 20px;
    height: 100px;
    border-radius: 20px;
    cursor: pointer;
    z-index: 10;
    color: ${AppColor.white};
    background: ${AppColor.black};
    border: none;
    font-size: 24px;
    
    &:hover {
        background: ${AppColor.gray1F};
    }
    
    &:active {
        transform: translateY(-50%) scale(0.95);
    }
`;

export function MainDisplay({ data, setShowCardData }: { data: HomeData[], setShowCardData: (item: HomeData) => void }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollWidth } = scrollRef.current;

            scrollRef.current.scrollTo({
                left: direction === 'left' ? 0 : scrollWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Container>
            <h2>지금 뜨는 콘텐츠</h2>
            <br />
            <CarouselWrapper>
                <ScrollButton direction="left" onClick={() => scroll('left')}>
                    ＜
                </ScrollButton>
                <Row ref={scrollRef}>
                    {data.map((item, index) => (
                        <Card key={index} onClick={() => setShowCardData(item)}>
                            <Stack>
                                <img src={item.url} />
                                <h2>{index + 1}</h2>
                            </Stack>
                        </Card>
                    ))}
                </Row>
                <ScrollButton direction="right" onClick={() => scroll('right')}>
                    ＞
                </ScrollButton>
            </CarouselWrapper>
        </Container>
    )
}