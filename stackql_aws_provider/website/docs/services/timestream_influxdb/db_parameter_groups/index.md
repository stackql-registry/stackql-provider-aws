--- 
title: db_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_parameter_groups
  - timestream_influxdb
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>db_parameter_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_parameter_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_influxdb.db_parameter_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_db_parameter_group"
    values={[
        { label: 'get_db_parameter_group', value: 'get_db_parameter_group' },
        { label: 'list_db_parameter_groups', value: 'list_db_parameter_groups' }
    ]}
>
<TabItem value="get_db_parameter_group">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A service-generated unique identifier. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;*(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB parameter group. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:timestream\-influxdb:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:(db\-instance|db\-cluster|db\-parameter\-group)/&#91;a-zA-Z0-9&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the DB parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters that comprise the DB parameter group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_db_parameter_groups">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A service-generated unique identifier. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>This customer-supplied name uniquely identifies the parameter group. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;*(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB parameter group. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:timestream\-influxdb:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:(db\-instance|db\-cluster|db\-parameter\-group)/&#91;a-zA-Z0-9&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the DB parameter group.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_db_parameter_group"><CopyableCode code="get_db_parameter_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a Timestream for InfluxDB DB parameter group.</td>
</tr>
<tr>
    <td><a href="#list_db_parameter_groups"><CopyableCode code="list_db_parameter_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Timestream for InfluxDB DB parameter groups.</td>
</tr>
<tr>
    <td><a href="#create_db_parameter_group"><CopyableCode code="create_db_parameter_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new Timestream for InfluxDB DB parameter group to associate with DB instances.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_db_parameter_group"
    values={[
        { label: 'get_db_parameter_group', value: 'get_db_parameter_group' },
        { label: 'list_db_parameter_groups', value: 'list_db_parameter_groups' }
    ]}
>
<TabItem value="get_db_parameter_group">

Returns a Timestream for InfluxDB DB parameter group.

```sql
SELECT
id,
name,
arn,
description,
parameters
FROM aws.timestream_influxdb.db_parameter_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_db_parameter_groups">

Returns a list of Timestream for InfluxDB DB parameter groups.

```sql
SELECT
id,
name,
arn,
description
FROM aws.timestream_influxdb.db_parameter_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_parameter_group"
    values={[
        { label: 'create_db_parameter_group', value: 'create_db_parameter_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_parameter_group">

Creates a new Timestream for InfluxDB DB parameter group to associate with DB instances.

```sql
INSERT INTO aws.timestream_influxdb.db_parameter_groups (
name,
description,
parameters,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ parameters }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
description,
parameters
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_parameter_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_parameter_groups resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the DB parameter group. The name must be unique per customer and per region.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the DB parameter group.
    - name: parameters
      description: |
        A list of the parameters that comprise the DB parameter group.
      value:
        InfluxDBv2:
          fluxLogEnabled: {{ fluxLogEnabled }}
          logLevel: "{{ logLevel }}"
          noTasks: {{ noTasks }}
          queryConcurrency: {{ queryConcurrency }}
          queryQueueSize: {{ queryQueueSize }}
          tracingType: "{{ tracingType }}"
          metricsDisabled: {{ metricsDisabled }}
          httpIdleTimeout:
            durationType: "{{ durationType }}"
            value: {{ value }}
          httpReadHeaderTimeout:
            durationType: "{{ durationType }}"
            value: {{ value }}
          httpReadTimeout:
            durationType: "{{ durationType }}"
            value: {{ value }}
          httpWriteTimeout:
            durationType: "{{ durationType }}"
            value: {{ value }}
          influxqlMaxSelectBuckets: {{ influxqlMaxSelectBuckets }}
          influxqlMaxSelectPoint: {{ influxqlMaxSelectPoint }}
          influxqlMaxSelectSeries: {{ influxqlMaxSelectSeries }}
          pprofDisabled: {{ pprofDisabled }}
          queryInitialMemoryBytes: {{ queryInitialMemoryBytes }}
          queryMaxMemoryBytes: {{ queryMaxMemoryBytes }}
          queryMemoryBytes: {{ queryMemoryBytes }}
          sessionLength: {{ sessionLength }}
          sessionRenewDisabled: {{ sessionRenewDisabled }}
          storageCacheMaxMemorySize: {{ storageCacheMaxMemorySize }}
          storageCacheSnapshotMemorySize: {{ storageCacheSnapshotMemorySize }}
          storageCacheSnapshotWriteColdDuration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          storageCompactFullWriteColdDuration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          storageCompactThroughputBurst: {{ storageCompactThroughputBurst }}
          storageMaxConcurrentCompactions: {{ storageMaxConcurrentCompactions }}
          storageMaxIndexLogFileSize: {{ storageMaxIndexLogFileSize }}
          storageNoValidateFieldSize: {{ storageNoValidateFieldSize }}
          storageRetentionCheckInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          storageSeriesFileMaxConcurrentSnapshotCompactions: {{ storageSeriesFileMaxConcurrentSnapshotCompactions }}
          storageSeriesIdSetCacheSize: {{ storageSeriesIdSetCacheSize }}
          storageWalMaxConcurrentWrites: {{ storageWalMaxConcurrentWrites }}
          storageWalMaxWriteDelay:
            durationType: "{{ durationType }}"
            value: {{ value }}
          uiDisabled: {{ uiDisabled }}
        InfluxDBv3Core:
          queryFileLimit: {{ queryFileLimit }}
          queryLogSize: {{ queryLogSize }}
          logFilter: "{{ logFilter }}"
          logFormat: "{{ logFormat }}"
          dataFusionNumThreads: {{ dataFusionNumThreads }}
          dataFusionRuntimeType: "{{ dataFusionRuntimeType }}"
          dataFusionRuntimeDisableLifoSlot: {{ dataFusionRuntimeDisableLifoSlot }}
          dataFusionRuntimeEventInterval: {{ dataFusionRuntimeEventInterval }}
          dataFusionRuntimeGlobalQueueInterval: {{ dataFusionRuntimeGlobalQueueInterval }}
          dataFusionRuntimeMaxBlockingThreads: {{ dataFusionRuntimeMaxBlockingThreads }}
          dataFusionRuntimeMaxIoEventsPerTick: {{ dataFusionRuntimeMaxIoEventsPerTick }}
          dataFusionRuntimeThreadKeepAlive:
            durationType: "{{ durationType }}"
            value: {{ value }}
          dataFusionRuntimeThreadPriority: {{ dataFusionRuntimeThreadPriority }}
          dataFusionMaxParquetFanout: {{ dataFusionMaxParquetFanout }}
          dataFusionUseCachedParquetLoader: {{ dataFusionUseCachedParquetLoader }}
          dataFusionConfig: "{{ dataFusionConfig }}"
          maxHttpRequestSize: {{ maxHttpRequestSize }}
          forceSnapshotMemThreshold:
            percent: "{{ percent }}"
            absolute: {{ absolute }}
          walSnapshotSize: {{ walSnapshotSize }}
          walMaxWriteBufferSize: {{ walMaxWriteBufferSize }}
          snapshottedWalFilesToKeep: {{ snapshottedWalFilesToKeep }}
          preemptiveCacheAge:
            durationType: "{{ durationType }}"
            value: {{ value }}
          parquetMemCachePrunePercentage: {{ parquetMemCachePrunePercentage }}
          parquetMemCachePruneInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          disableParquetMemCache: {{ disableParquetMemCache }}
          parquetMemCacheQueryPathDuration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          lastCacheEvictionInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          distinctCacheEvictionInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          gen1Duration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          execMemPoolBytes:
            percent: "{{ percent }}"
            absolute: {{ absolute }}
          parquetMemCacheSize:
            percent: "{{ percent }}"
            absolute: {{ absolute }}
          walReplayFailOnError: {{ walReplayFailOnError }}
          walReplayConcurrencyLimit: {{ walReplayConcurrencyLimit }}
          tableIndexCacheMaxEntries: {{ tableIndexCacheMaxEntries }}
          tableIndexCacheConcurrencyLimit: {{ tableIndexCacheConcurrencyLimit }}
          gen1LookbackDuration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          retentionCheckInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          deleteGracePeriod:
            durationType: "{{ durationType }}"
            value: {{ value }}
          hardDeleteDefaultDuration:
            durationType: "{{ durationType }}"
            value: {{ value }}
        InfluxDBv3Enterprise:
          queryFileLimit: {{ queryFileLimit }}
          queryLogSize: {{ queryLogSize }}
          logFilter: "{{ logFilter }}"
          logFormat: "{{ logFormat }}"
          dataFusionNumThreads: {{ dataFusionNumThreads }}
          dataFusionRuntimeType: "{{ dataFusionRuntimeType }}"
          dataFusionRuntimeDisableLifoSlot: {{ dataFusionRuntimeDisableLifoSlot }}
          dataFusionRuntimeEventInterval: {{ dataFusionRuntimeEventInterval }}
          dataFusionRuntimeGlobalQueueInterval: {{ dataFusionRuntimeGlobalQueueInterval }}
          dataFusionRuntimeMaxBlockingThreads: {{ dataFusionRuntimeMaxBlockingThreads }}
          dataFusionRuntimeMaxIoEventsPerTick: {{ dataFusionRuntimeMaxIoEventsPerTick }}
          dataFusionRuntimeThreadKeepAlive:
            durationType: "{{ durationType }}"
            value: {{ value }}
          dataFusionRuntimeThreadPriority: {{ dataFusionRuntimeThreadPriority }}
          dataFusionMaxParquetFanout: {{ dataFusionMaxParquetFanout }}
          dataFusionUseCachedParquetLoader: {{ dataFusionUseCachedParquetLoader }}
          dataFusionConfig: "{{ dataFusionConfig }}"
          maxHttpRequestSize: {{ maxHttpRequestSize }}
          forceSnapshotMemThreshold:
            percent: "{{ percent }}"
            absolute: {{ absolute }}
          walSnapshotSize: {{ walSnapshotSize }}
          walMaxWriteBufferSize: {{ walMaxWriteBufferSize }}
          snapshottedWalFilesToKeep: {{ snapshottedWalFilesToKeep }}
          preemptiveCacheAge:
            durationType: "{{ durationType }}"
            value: {{ value }}
          parquetMemCachePrunePercentage: {{ parquetMemCachePrunePercentage }}
          parquetMemCachePruneInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          disableParquetMemCache: {{ disableParquetMemCache }}
          parquetMemCacheQueryPathDuration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          lastCacheEvictionInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          distinctCacheEvictionInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          gen1Duration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          execMemPoolBytes:
            percent: "{{ percent }}"
            absolute: {{ absolute }}
          parquetMemCacheSize:
            percent: "{{ percent }}"
            absolute: {{ absolute }}
          walReplayFailOnError: {{ walReplayFailOnError }}
          walReplayConcurrencyLimit: {{ walReplayConcurrencyLimit }}
          tableIndexCacheMaxEntries: {{ tableIndexCacheMaxEntries }}
          tableIndexCacheConcurrencyLimit: {{ tableIndexCacheConcurrencyLimit }}
          gen1LookbackDuration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          retentionCheckInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          deleteGracePeriod:
            durationType: "{{ durationType }}"
            value: {{ value }}
          hardDeleteDefaultDuration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          ingestQueryInstances: {{ ingestQueryInstances }}
          queryOnlyInstances: {{ queryOnlyInstances }}
          dedicatedCompactor: {{ dedicatedCompactor }}
          compactionRowLimit: {{ compactionRowLimit }}
          compactionMaxNumFilesPerPlan: {{ compactionMaxNumFilesPerPlan }}
          compactionGen2Duration:
            durationType: "{{ durationType }}"
            value: {{ value }}
          compactionMultipliers: "{{ compactionMultipliers }}"
          compactionCleanupWait:
            durationType: "{{ durationType }}"
            value: {{ value }}
          compactionCheckInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          lastValueCacheDisableFromHistory: {{ lastValueCacheDisableFromHistory }}
          distinctValueCacheDisableFromHistory: {{ distinctValueCacheDisableFromHistory }}
          replicationInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
          catalogSyncInterval:
            durationType: "{{ durationType }}"
            value: {{ value }}
    - name: tags
      value: "{{ tags }}"
      description: |
        A list of key-value pairs to associate with the DB parameter group.
`}</CodeBlock>

</TabItem>
</Tabs>
