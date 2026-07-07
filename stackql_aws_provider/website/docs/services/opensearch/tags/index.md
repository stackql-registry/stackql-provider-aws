--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags"
    values={[
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="list_tags">

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
    <td><CopyableCode code="TagList" /></td>
    <td><code>array</code></td>
    <td>A list of tags attached to a domain.</td>
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
    <td><a href="#list_tags"><CopyableCode code="list_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all resource tags for an Amazon OpenSearch Service domain, data source, or application. For more information, see Tagging Amazon OpenSearch Service resources.</td>
</tr>
<tr>
    <td><a href="#add_tags"><CopyableCode code="add_tags" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TagList"><code>TagList</code></a></td>
    <td></td>
    <td>Attaches tags to an existing Amazon OpenSearch Service domain, data source, or application. Tags are a set of case-sensitive key-value pairs. A domain, data source, or application can have up to 10 tags. For more information, see Tagging Amazon OpenSearch Service resources.</td>
</tr>
<tr>
    <td><a href="#remove_tags"><CopyableCode code="remove_tags" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Removes the specified set of tags from an Amazon OpenSearch Service domain, data source, or application. For more information, see Tagging Amazon OpenSearch Service resources.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the domain, data source, or application to view tags for.</td>
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
    defaultValue="list_tags"
    values={[
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="list_tags">

Returns all resource tags for an Amazon OpenSearch Service domain, data source, or application. For more information, see Tagging Amazon OpenSearch Service resources.

```sql
SELECT
TagList
FROM aws.opensearch.tags
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_tags"
    values={[
        { label: 'add_tags', value: 'add_tags' },
        { label: 'remove_tags', value: 'remove_tags' }
    ]}
>
<TabItem value="add_tags">

Attaches tags to an existing Amazon OpenSearch Service domain, data source, or application. Tags are a set of case-sensitive key-value pairs. A domain, data source, or application can have up to 10 tags. For more information, see Tagging Amazon OpenSearch Service resources.

```sql
UPDATE aws.opensearch.tags
SET 
ARN = '{{ ARN }}',
TagList = '{{ TagList }}'
WHERE 
region = '{{ region }}' --required
AND TagList = '{{ TagList }}' --required;
```
</TabItem>
<TabItem value="remove_tags">

Removes the specified set of tags from an Amazon OpenSearch Service domain, data source, or application. For more information, see Tagging Amazon OpenSearch Service resources.

```sql
UPDATE aws.opensearch.tags
SET 
ARN = '{{ ARN }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
</Tabs>
