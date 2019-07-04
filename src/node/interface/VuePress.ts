import { FrontmatterClassificationPage } from './Frontmatter'
import { SerializedPagination } from './Pagination'

interface BaseContext {
  isProd: boolean,
  pages: Array<BasePage>,
  sourceDir: string,
  tempPath: string,
  outDir: string,
  base: string,
  writeTemp,
  themeAPI,
  addPage
}

interface BasePage {
  _filePath: string,
  _computed,
  _content,
  _strippedContent,
  key: string,
  frontmatter,
  regularPath: string,
  path: string,
}

export interface VuePressContext extends BaseContext {
  frontmatterClassificationPages: FrontmatterClassificationPage[];
  serializedPaginations: SerializedPagination[];
  pageFilters: any;
  pageSorters: any;
  getLayout: (name?: string, fallback?: string) => string | undefined;
}

export interface VuePressPage extends BasePage {}
