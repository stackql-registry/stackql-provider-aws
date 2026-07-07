--- 
title: objects
hide_title: false
hide_table_of_contents: false
keywords:
  - objects
  - datapipeline
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

Creates, updates, deletes, gets or lists an <code>objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datapipeline.objects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_objects"
    values={[
        { label: 'describe_objects', value: 'describe_objects' }
    ]}
>
<TabItem value="describe_objects">

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
    <td>The ID of the object. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the object. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs that define the properties of the object.</td>
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
    <td><a href="#describe_objects"><CopyableCode code="describe_objects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.</td>
</tr>
<tr>
    <td><a href="#query_objects"><CopyableCode code="query_objects" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineId"><code>pipelineId</code></a>, <a href="#parameter-sphere"><code>sphere</code></a></td>
    <td></td>
    <td>Queries the specified pipeline for the names of objects that match the specified set of conditions.</td>
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
    defaultValue="describe_objects"
    values={[
        { label: 'describe_objects', value: 'describe_objects' }
    ]}
>
<TabItem value="describe_objects">

Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.

```sql
SELECT
id,
name,
fields
FROM aws.datapipeline.objects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="query_objects"
    values={[
        { label: 'query_objects', value: 'query_objects' }
    ]}
>
<TabItem value="query_objects">

Queries the specified pipeline for the names of objects that match the specified set of conditions.

```sql
EXEC aws.datapipeline.objects.query_objects 
@region='{{ region }}' --required 
@@json=
'{
"pipelineId": "{{ pipelineId }}", 
"query": "{{ query }}", 
"sphere": "{{ sphere }}", 
"marker": "{{ marker }}", 
"limit": {{ limit }}
}'
;
```
</TabItem>
</Tabs>
