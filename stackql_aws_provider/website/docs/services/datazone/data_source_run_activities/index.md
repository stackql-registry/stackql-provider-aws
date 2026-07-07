--- 
title: data_source_run_activities
hide_title: false
hide_table_of_contents: false
keywords:
  - data_source_run_activities
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

Creates, updates, deletes, gets or lists a <code>data_source_run_activities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_source_run_activities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.data_source_run_activities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_source_run_activities"
    values={[
        { label: 'list_data_source_run_activities', value: 'list_data_source_run_activities' }
    ]}
>
<TabItem value="list_data_source_run_activities">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when data source run activity was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataAssetId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asset included in the data source run activity.</td>
</tr>
<tr>
    <td><CopyableCode code="dataAssetStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the asset included in the data source run activity. (FAILED, PUBLISHING_FAILED, SUCCEEDED_CREATED, SUCCEEDED_UPDATED, SKIPPED_ALREADY_IMPORTED, SKIPPED_ARCHIVED, SKIPPED_NO_ACCESS, UNCHANGED)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceRunId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source for the data source run activity. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="database" /></td>
    <td><code>string</code></td>
    <td>The database included in the data source run activity.</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>object</code></td>
    <td>The details of the error message that is returned if the operation cannot be successfully completed.</td>
</tr>
<tr>
    <td><CopyableCode code="lineageSummary" /></td>
    <td><code>object</code></td>
    <td>The data lineage summary.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The project ID included in the data source run activity. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="technicalDescription" /></td>
    <td><code>string</code></td>
    <td>The technical description included in the data source run activity.</td>
</tr>
<tr>
    <td><CopyableCode code="technicalName" /></td>
    <td><code>string</code></td>
    <td>The technical name included in the data source run activity.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when data source run activity was updated.</td>
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
    <td><a href="#list_data_source_run_activities"><CopyableCode code="list_data_source_run_activities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists data source run activities.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which to list data source run activities.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source run.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of activities to return in a single call to ListDataSourceRunActivities. When the number of activities to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataSourceRunActivities to list the next set of activities.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of activities is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of activities, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataSourceRunActivities to list the next set of activities.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source run.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_data_source_run_activities"
    values={[
        { label: 'list_data_source_run_activities', value: 'list_data_source_run_activities' }
    ]}
>
<TabItem value="list_data_source_run_activities">

Lists data source run activities.

```sql
SELECT
createdAt,
dataAssetId,
dataAssetStatus,
dataSourceRunId,
database,
errorMessage,
lineageSummary,
projectId,
technicalDescription,
technicalName,
updatedAt
FROM aws.datazone.data_source_run_activities
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
