import type { GetArticleRelevantData, ArticleRelevantItem, ArticleResult } from '@/types/article';
import { http } from '@/utils/http';

/**
 * 文章详情
 * @param id 文章id
 */
export function getArticleById(id: string) {
  return http<ArticleResult>({
    method: 'GET',
    url: '/article',
    data: { id }
  });
}

/**
 * 同类推荐(也支持猜你喜欢)
 * @param data 请求参数
 */
export function getArticleRelevant(data: GetArticleRelevantData) {
  return http<ArticleRelevantItem[]>({
    method: 'GET',
    url: '/article/relevant',
    data: data
  });
}
