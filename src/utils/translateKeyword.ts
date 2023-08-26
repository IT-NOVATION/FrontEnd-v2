const keywordsMap = new Map();
keywordsMap.set('hasGoodStory', '스토리가 좋아요');
keywordsMap.set('hasGoodProduction', '작품성이 높아요');
keywordsMap.set('hasGoodScenario', '시나리오 소재가 참신해요');
keywordsMap.set('hasGoodDirecting', '연출력이 좋아요!');
keywordsMap.set('hasGoodOst', 'OST가 좋아요');
keywordsMap.set('hasGoodVisual', '영상미가 아름다워요');
keywordsMap.set('hasGoodActing', '배우들의 연기가 훌륭해요');
keywordsMap.set('hasGoodCharacterCharming', '캐릭터가 매력적이에요');
keywordsMap.set('hasGoodDiction', '대사 전달이 정확해요');
export function translateKeyword(keyword: string) {
  return keywordsMap.get(keyword);
}
