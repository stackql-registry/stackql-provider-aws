--- 
title: data_source_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_source_runs
  - datazone
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

Creates, updates, deletes, gets or lists a <code>data_source_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_source_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.data_source_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_source_run"
    values={[
        { label: 'get_data_source_run', value: 'get_data_source_run' },
        { label: 'list_data_source_runs', value: 'list_data_source_runs' }
    ]}
>
<TabItem value="get_data_source_run">

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
    <td>The ID of the data source run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data source run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceConfigurationSnapshot" /></td>
    <td><code>string</code></td>
    <td>The configuration snapshot of the data source run.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the data source for this data source run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain in which this data source run was performed. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>object</code></td>
    <td>The details of the error message that is returned if the operation cannot be successfully completed.</td>
</tr>
<tr>
    <td><CopyableCode code="lineageSummary" /></td>
    <td><code>object</code></td>
    <td>The summary of the data lineage.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project in which this data source run occured. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runStatisticsForAssets" /></td>
    <td><code>object</code></td>
    <td>The asset statistics from this data source run.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this data source run started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this data source run. (REQUESTED, RUNNING, FAILED, PARTIALLY_SUCCEEDED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="stoppedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this data source run stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of this data source run. (PRIORITIZED, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this data source run was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_source_runs">

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
    <td>The identifier of the data source run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when a data source run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source of the data source run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>object</code></td>
    <td>The details of the error message that is returned if the operation cannot be successfully completed.</td>
</tr>
<tr>
    <td><CopyableCode code="lineageSummary" /></td>
    <td><code>object</code></td>
    <td>The run lineage summary of a data source.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The project ID of the data source run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runStatisticsForAssets" /></td>
    <td><code>object</code></td>
    <td>The asset statistics from the data source run.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when a data source run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source run. (REQUESTED, RUNNING, FAILED, PARTIALLY_SUCCEEDED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="stoppedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when a data source run was stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the data source run. (PRIORITIZED, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when a data source run was updated.</td>
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
    <td><a href="#get_data_source_run"><CopyableCode code="get_data_source_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon DataZone data source run.</td>
</tr>
<tr>
    <td><a href="#list_data_source_runs"><CopyableCode code="list_data_source_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-data_source_identifier"><code>data_source_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists data source runs in Amazon DataZone.</td>
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
<tr id="parameter-data_source_identifier">
    <td><CopyableCode code="data_source_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source.</td>
</tr>
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which to invoke the ListDataSourceRuns action.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the data source run.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of runs to return in a single call to ListDataSourceRuns. When the number of runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataSourceRuns to list the next set of runs.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataSourceRuns to list the next set of runs.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_source_run"
    values={[
        { label: 'get_data_source_run', value: 'get_data_source_run' },
        { label: 'list_data_source_runs', value: 'list_data_source_runs' }
    ]}
>
<TabItem value="get_data_source_run">

Gets an Amazon DataZone data source run.

```sql
SELECT
id,
createdAt,
dataSourceConfigurationSnapshot,
dataSourceId,
domainId,
errorMessage,
lineageSummary,
projectId,
runStatisticsForAssets,
startedAt,
status,
stoppedAt,
type_,
updatedAt
FROM aws.datazone.data_source_runs
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_source_runs">

Lists data source runs in Amazon DataZone.

```sql
SELECT
id,
createdAt,
dataSourceId,
errorMessage,
lineageSummary,
projectId,
runStatisticsForAssets,
startedAt,
status,
stoppedAt,
type_,
updatedAt
FROM aws.datazone.data_source_runs
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND data_source_identifier = '{{ data_source_identifier }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
