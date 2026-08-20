--- 
title: application_shader_caches
hide_title: false
hide_table_of_contents: false
keywords:
  - application_shader_caches
  - gameliftstreams
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

Creates, updates, deletes, gets or lists an <code>application_shader_caches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_shader_caches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gameliftstreams.application_shader_caches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_application_shader_caches"
    values={[
        { label: 'list_application_shader_caches', value: 'list_application_shader_caches' }
    ]}
>
<TabItem value="list_application_shader_caches">

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A collection of shader cache metadata for the specified Amazon GameLift Streams application. Each item includes the shader cache status, associated stream groups, and storage size.</td>
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
    <td><a href="#list_application_shader_caches"><CopyableCode code="list_application_shader_caches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the shader caches associated with an Amazon GameLift Streams application. Each shader cache entry includes its status, associated stream groups, and size in bytes. Returns shader caches associated with the specified Amazon GameLift Streams application in all statuses.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6.</td>
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
    defaultValue="list_application_shader_caches"
    values={[
        { label: 'list_application_shader_caches', value: 'list_application_shader_caches' }
    ]}
>
<TabItem value="list_application_shader_caches">

Lists the shader caches associated with an Amazon GameLift Streams application. Each shader cache entry includes its status, associated stream groups, and size in bytes. Returns shader caches associated with the specified Amazon GameLift Streams application in all statuses.

```sql
SELECT
items
FROM aws.gameliftstreams.application_shader_caches
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
