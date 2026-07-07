--- 
title: time_series_data_points
hide_title: false
hide_table_of_contents: false
keywords:
  - time_series_data_points
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

Creates, updates, deletes, gets or lists a <code>time_series_data_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="time_series_data_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.time_series_data_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_time_series_data_point"
    values={[
        { label: 'get_time_series_data_point', value: 'get_time_series_data_point' },
        { label: 'list_time_series_data_points', value: 'list_time_series_data_points' }
    ]}
>
<TabItem value="get_time_series_data_point">

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
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain that houses the asset data point that you want to get. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entityId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset for which you want to get the data point. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entityType" /></td>
    <td><code>string</code></td>
    <td>The type of the asset for which you want to get the data point. (ASSET, LISTING)</td>
</tr>
<tr>
    <td><CopyableCode code="form" /></td>
    <td><code>object</code></td>
    <td>The time series data points form.</td>
</tr>
<tr>
    <td><CopyableCode code="formName" /></td>
    <td><code>string</code></td>
    <td>The name of the time series form that houses the data point that you want to get.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_time_series_data_points">

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
    <td>The ID of the time series data points summary form. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;0,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contentSummary" /></td>
    <td><code>string</code></td>
    <td>The content of the summary of the time series data points form.</td>
</tr>
<tr>
    <td><CopyableCode code="formName" /></td>
    <td><code>string</code></td>
    <td>The name of the time series data points summary form.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the time series data points summary form.</td>
</tr>
<tr>
    <td><CopyableCode code="typeIdentifier" /></td>
    <td><code>string</code></td>
    <td>The type ID of the time series data points summary form. (pattern: &lt;code&gt;(?!\.)&#91;\w\.&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="typeRevision" /></td>
    <td><code>string</code></td>
    <td>The type revision of the time series data points summary form.</td>
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
    <td><a href="#get_time_series_data_point"><CopyableCode code="get_time_series_data_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-formName"><code>formName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the existing data point for the asset.</td>
</tr>
<tr>
    <td><a href="#list_time_series_data_points"><CopyableCode code="list_time_series_data_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-formName"><code>formName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-startedAt"><code>startedAt</code></a>, <a href="#parameter-endedAt"><code>endedAt</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists time series data points.</td>
</tr>
<tr>
    <td><a href="#delete_time_series_data_points"><CopyableCode code="delete_time_series_data_points" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-formName"><code>formName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the specified time series form for the specified asset.</td>
</tr>
<tr>
    <td><a href="#post_time_series_data_points"><CopyableCode code="post_time_series_data_points" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-forms"><code>forms</code></a></td>
    <td></td>
    <td>Posts time series data points to Amazon DataZone for the specified asset.</td>
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
    <td>The ID of the Amazon DataZone domain in which you want to post time series data points.</td>
</tr>
<tr id="parameter-entity_identifier">
    <td><CopyableCode code="entity_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset for which you want to post time series data points.</td>
</tr>
<tr id="parameter-entity_type">
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>The type of the asset for which you want to post data points.</td>
</tr>
<tr id="parameter-formName">
    <td><CopyableCode code="formName" /></td>
    <td><code>string</code></td>
    <td>The name of the time series form that you want to delete.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the data point that you want to get.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided.</td>
</tr>
<tr id="parameter-endedAt">
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the data points that you wanted to list ended.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of data points to return in a single call to ListTimeSeriesDataPoints. When the number of data points to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListTimeSeriesDataPoints to list the next set of data points.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of data points is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data points, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListTimeSeriesDataPoints to list the next set of data points.</td>
</tr>
<tr id="parameter-startedAt">
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the data points that you want to list started.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_time_series_data_point"
    values={[
        { label: 'get_time_series_data_point', value: 'get_time_series_data_point' },
        { label: 'list_time_series_data_points', value: 'list_time_series_data_points' }
    ]}
>
<TabItem value="get_time_series_data_point">

Gets the existing data point for the asset.

```sql
SELECT
domainId,
entityId,
entityType,
form,
formName
FROM aws.datazone.time_series_data_points
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND entity_identifier = '{{ entity_identifier }}' -- required
AND entity_type = '{{ entity_type }}' -- required
AND identifier = '{{ identifier }}' -- required
AND formName = '{{ formName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_time_series_data_points">

Lists time series data points.

```sql
SELECT
id,
contentSummary,
formName,
timestamp,
typeIdentifier,
typeRevision
FROM aws.datazone.time_series_data_points
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND entity_identifier = '{{ entity_identifier }}' -- required
AND entity_type = '{{ entity_type }}' -- required
AND formName = '{{ formName }}' -- required
AND region = '{{ region }}' -- required
AND startedAt = '{{ startedAt }}'
AND endedAt = '{{ endedAt }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_time_series_data_points"
    values={[
        { label: 'delete_time_series_data_points', value: 'delete_time_series_data_points' }
    ]}
>
<TabItem value="delete_time_series_data_points">

Deletes the specified time series form for the specified asset.

```sql
DELETE FROM aws.datazone.time_series_data_points
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND entity_identifier = '{{ entity_identifier }}' --required
AND entity_type = '{{ entity_type }}' --required
AND formName = '{{ formName }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="post_time_series_data_points"
    values={[
        { label: 'post_time_series_data_points', value: 'post_time_series_data_points' }
    ]}
>
<TabItem value="post_time_series_data_points">

Posts time series data points to Amazon DataZone for the specified asset.

```sql
EXEC aws.datazone.time_series_data_points.post_time_series_data_points 
@domain_identifier='{{ domain_identifier }}' --required, 
@entity_identifier='{{ entity_identifier }}' --required, 
@entity_type='{{ entity_type }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"forms": "{{ forms }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
