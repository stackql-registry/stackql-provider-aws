--- 
title: keywords_for_data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - keywords_for_data_sources
  - auditmanager
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

Creates, updates, deletes, gets or lists a <code>keywords_for_data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keywords_for_data_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.keywords_for_data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_keywords_for_data_source"
    values={[
        { label: 'list_keywords_for_data_source', value: 'list_keywords_for_data_source' }
    ]}
>
<TabItem value="list_keywords_for_data_source">

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
    <td><CopyableCode code="keyword" /></td>
    <td><code>string</code></td>
    <td>The list of keywords for the control mapping source.</td>
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
    <td><a href="#list_keywords_for_data_source"><CopyableCode code="list_keywords_for_data_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-source"><code>source</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of keywords that are pre-mapped to the specified control data source.</td>
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
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The control mapping data source that the keywords apply to.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Represents the maximum number of results on a page or for an API request call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_keywords_for_data_source"
    values={[
        { label: 'list_keywords_for_data_source', value: 'list_keywords_for_data_source' }
    ]}
>
<TabItem value="list_keywords_for_data_source">

Returns a list of keywords that are pre-mapped to the specified control data source.

```sql
SELECT
keyword
FROM aws.auditmanager.keywords_for_data_sources
WHERE source = '{{ source }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
