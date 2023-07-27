import type { Article } from './global';

/** 一级分类项 */
export interface CategoryTopItem {
  /** 二级分类集合[ 二级分类项 ] */
  children: Child[];
  /** 一级分类id */
  id: string;
  /** 一级分类图片集[ 一级分类图片项 ] */
  imageBanners: string[];
  /** 一级分类名称 */
  name: string;
  /** 一级分类图片 */
  picture: string;
}

/** 二级分类项 */
export interface Child {
  /** 文章集合[ 文章项 ] */
  article: Article[];
  /** 二级分类id */
  id: string;
  /** 二级分类名称 */
  name: string;
  /** 二级分类图片 */
  picture: string;
}
