--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
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

Creates, updates, deletes, gets or lists a <code>data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="get_data_source">

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
    <td><CopyableCode code="data_source_type" /></td>
    <td><code>object</code></td>
    <td>The type of data source.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the data source. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9_&#93;)*&#91;\\a-zA-Z0-9_@#%*+=:?./!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data source. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source. (ACTIVE, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_sources">

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
    <td><CopyableCode code="data_sources" /></td>
    <td><code>array</code></td>
    <td>A list of data sources associated with specified domain.</td>
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
    <td><a href="#get_data_source"><CopyableCode code="get_data_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-data_source_name"><code>data_source_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a direct query data source.</td>
</tr>
<tr>
    <td><a href="#list_data_sources"><CopyableCode code="list_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists direct-query data sources for a specific domain. For more information, see For more information, see Working with Amazon OpenSearch Service direct queries with Amazon S3.</td>
</tr>
<tr>
    <td><a href="#update_data_source"><CopyableCode code="update_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-data_source_name"><code>data_source_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceType"><code>DataSourceType</code></a></td>
    <td></td>
    <td>Updates a direct-query data source. For more information, see Working with Amazon OpenSearch Service data source integrations with Amazon S3.</td>
</tr>
<tr>
    <td><a href="#add_data_source"><CopyableCode code="add_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceType"><code>DataSourceType</code></a></td>
    <td></td>
    <td>Creates a new direct-query data source to the specified domain. For more information, see Creating Amazon OpenSearch Service data source integrations with Amazon S3.</td>
</tr>
<tr>
    <td><a href="#delete_data_source"><CopyableCode code="delete_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-data_source_name"><code>data_source_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a direct-query data source. For more information, see Deleting an Amazon OpenSearch Service data source with Amazon S3.</td>
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
    <td>The name of the data source to delete.</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="get_data_source">

Retrieves information about a direct query data source.

```sql
SELECT
data_source_type,
description,
name,
status
FROM aws.opensearch.data_sources
WHERE domain_name = '{{ domain_name }}' -- required
AND data_source_name = '{{ data_source_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_sources">

Lists direct-query data sources for a specific domain. For more information, see For more information, see Working with Amazon OpenSearch Service direct queries with Amazon S3.

```sql
SELECT
data_sources
FROM aws.opensearch.data_sources
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_source"
    values={[
        { label: 'update_data_source', value: 'update_data_source' },
        { label: 'add_data_source', value: 'add_data_source' }
    ]}
>
<TabItem value="update_data_source">

Updates a direct-query data source. For more information, see Working with Amazon OpenSearch Service data source integrations with Amazon S3.

```sql
UPDATE aws.opensearch.data_sources
SET 
DataSourceType = '{{ DataSourceType }}',
Description = '{{ Description }}',
Status = '{{ Status }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND data_source_name = '{{ data_source_name }}' --required
AND region = '{{ region }}' --required
AND DataSourceType = '{{ DataSourceType }}' --required
RETURNING
message;
```
</TabItem>
<TabItem value="add_data_source">

Creates a new direct-query data source to the specified domain. For more information, see Creating Amazon OpenSearch Service data source integrations with Amazon S3.

```sql
UPDATE aws.opensearch.data_sources
SET 
Name = '{{ Name }}',
DataSourceType = '{{ DataSourceType }}',
Description = '{{ Description }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND DataSourceType = '{{ DataSourceType }}' --required
RETURNING
message;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_source"
    values={[
        { label: 'delete_data_source', value: 'delete_data_source' }
    ]}
>
<TabItem value="delete_data_source">

Deletes a direct-query data source. For more information, see Deleting an Amazon OpenSearch Service data source with Amazon S3.

```sql
DELETE FROM aws.opensearch.data_sources
WHERE domain_name = '{{ domain_name }}' --required
AND data_source_name = '{{ data_source_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
