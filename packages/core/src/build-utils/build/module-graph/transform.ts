import { Plugin } from '@rsdoctor/types';
import { getModuleGraphByStats as transform } from '@/build-utils/common/module-graph';
import { TransformContext, appendModuleGraphByCompilation } from '.';
import { Graph } from '@rsdoctor/sdk';

export function getModuleGraphByStats(
  compilation: Plugin.BaseCompilation,
  stats: Plugin.StatsCompilation,
  root: string,
  chunkGraph: Graph.ChunkGraph,
  features?: Plugin.DoctorWebpackPluginFeatures,
  context?: TransformContext,
) {
  return appendModuleGraphByCompilation(
    compilation,
    transform(stats, root, chunkGraph),
    features,
    context,
  );
}
