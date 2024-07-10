import { UserConfig } from 'vite';
import { GenerateConfigOptions } from './src';
/** 构建普通的纯 TS / JS 模块的预设 */
export declare function generateConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig): Promise<UserConfig>;
