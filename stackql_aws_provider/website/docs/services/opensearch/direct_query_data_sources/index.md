--- 
title: direct_query_data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - direct_query_data_sources
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>direct_query_data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="direct_query_data_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.direct_query_data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_direct_query_data_source"
    values={[
        { label: 'get_direct_query_data_source', value: 'get_direct_query_data_source' },
        { label: 'list_direct_query_data_sources', value: 'list_direct_query_data_sources' }
    ]}
>
<TabItem value="get_direct_query_data_source">

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
    <td><CopyableCode code="DataSourceAccessPolicy" /></td>
    <td><code>string</code></td>
    <td>Access policy rules for an Amazon OpenSearch Service domain endpoint. For more information, see Configuring access policies. The maximum size of a policy document is 100 KB. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceArn" /></td>
    <td><code>string</code></td>
    <td>The unique, system-generated identifier that represents the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceName" /></td>
    <td><code>string</code></td>
    <td>A unique, user-defined label to identify the data source within your OpenSearch Service environment. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceType" /></td>
    <td><code>object</code></td>
    <td>The type of data source that is used for direct queries. This is a supported Amazon Web Services service, such as CloudWatch Logs or Security Lake.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description that provides additional context and details about the data source. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9_&#93;)*&#91;\\a-zA-Z0-9_@#%*+=:?./!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OpenSearchArns" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Resource Names (ARNs) for the OpenSearch collections that are associated with the direct query data source.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_direct_query_data_sources">

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
    <td><CopyableCode code="DirectQueryDataSources" /></td>
    <td><code>array</code></td>
    <td>A list of the direct query data sources that are returned by the ListDirectQueryDataSources API operation.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
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
    <td><a href="#get_direct_query_data_source"><CopyableCode code="get_direct_query_data_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-data_source_name"><code>data_source_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed configuration information for a specific direct query data source in Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#list_direct_query_data_sources"><CopyableCode code="list_direct_query_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nexttoken"><code>nexttoken</code></a></td>
    <td>Lists an inventory of all the direct query data sources that you have configured within Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#add_direct_query_data_source"><CopyableCode code="add_direct_query_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceName"><code>DataSourceName</code></a>, <a href="#parameter-DataSourceType"><code>DataSourceType</code></a></td>
    <td></td>
    <td>Adds a new data source in Amazon OpenSearch Service so that you can perform direct queries on external data.</td>
</tr>
<tr>
    <td><a href="#update_direct_query_data_source"><CopyableCode code="update_direct_query_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data_source_name"><code>data_source_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceType"><code>DataSourceType</code></a></td>
    <td></td>
    <td>Updates the configuration or properties of an existing direct query data source in Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#delete_direct_query_data_source"><CopyableCode code="delete_direct_query_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-data_source_name"><code>data_source_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a previously configured direct query data source from Amazon OpenSearch Service.</td>
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
<tr id="parameter-data_source_name">
    <td><CopyableCode code="data_source_name" /></td>
    <td><code>string</code></td>
    <td>A unique, user-defined label to identify the data source within your OpenSearch Service environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-nexttoken">
    <td><CopyableCode code="nexttoken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_direct_query_data_source"
    values={[
        { label: 'get_direct_query_data_source', value: 'get_direct_query_data_source' },
        { label: 'list_direct_query_data_sources', value: 'list_direct_query_data_sources' }
    ]}
>
<TabItem value="get_direct_query_data_source">

Returns detailed configuration information for a specific direct query data source in Amazon OpenSearch Service.

```sql
SELECT
DataSourceAccessPolicy,
DataSourceArn,
DataSourceName,
DataSourceType,
Description,
OpenSearchArns
FROM aws.opensearch.direct_query_data_sources
WHERE data_source_name = '{{ data_source_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_direct_query_data_sources">

Lists an inventory of all the direct query data sources that you have configured within Amazon OpenSearch Service.

```sql
SELECT
DirectQueryDataSources,
NextToken
FROM aws.opensearch.direct_query_data_sources
WHERE region = '{{ region }}' -- required
AND nexttoken = '{{ nexttoken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_direct_query_data_source"
    values={[
        { label: 'add_direct_query_data_source', value: 'add_direct_query_data_source' },
        { label: 'update_direct_query_data_source', value: 'update_direct_query_data_source' }
    ]}
>
<TabItem value="add_direct_query_data_source">

Adds a new data source in Amazon OpenSearch Service so that you can perform direct queries on external data.

```sql
UPDATE aws.opensearch.direct_query_data_sources
SET 
DataSourceName = '{{ DataSourceName }}',
DataSourceType = '{{ DataSourceType }}',
Description = '{{ Description }}',
OpenSearchArns = '{{ OpenSearchArns }}',
DataSourceAccessPolicy = '{{ DataSourceAccessPolicy }}',
TagList = '{{ TagList }}'
WHERE 
region = '{{ region }}' --required
AND DataSourceName = '{{ DataSourceName }}' --required
AND DataSourceType = '{{ DataSourceType }}' --required
RETURNING
DataSourceArn;
```
</TabItem>
<TabItem value="update_direct_query_data_source">

Updates the configuration or properties of an existing direct query data source in Amazon OpenSearch Service.

```sql
UPDATE aws.opensearch.direct_query_data_sources
SET 
DataSourceType = '{{ DataSourceType }}',
Description = '{{ Description }}',
OpenSearchArns = '{{ OpenSearchArns }}',
DataSourceAccessPolicy = '{{ DataSourceAccessPolicy }}'
WHERE 
data_source_name = '{{ data_source_name }}' --required
AND region = '{{ region }}' --required
AND DataSourceType = '{{ DataSourceType }}' --required
RETURNING
DataSourceArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_direct_query_data_source"
    values={[
        { label: 'delete_direct_query_data_source', value: 'delete_direct_query_data_source' }
    ]}
>
<TabItem value="delete_direct_query_data_source">

Deletes a previously configured direct query data source from Amazon OpenSearch Service.

```sql
DELETE FROM aws.opensearch.direct_query_data_sources
WHERE data_source_name = '{{ data_source_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
