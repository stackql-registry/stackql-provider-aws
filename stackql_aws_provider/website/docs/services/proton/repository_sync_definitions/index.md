--- 
title: repository_sync_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_sync_definitions
  - proton
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

Creates, updates, deletes, gets or lists a <code>repository_sync_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_sync_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.repository_sync_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repository_sync_definitions"
    values={[
        { label: 'list_repository_sync_definitions', value: 'list_repository_sync_definitions' }
    ]}
>
<TabItem value="list_repository_sync_definitions">

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
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>The repository branch.</td>
</tr>
<tr>
    <td><CopyableCode code="directory" /></td>
    <td><code>string</code></td>
    <td>The directory in the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td>The resource that is synced from.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The resource that is synced to.</td>
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
    <td><a href="#list_repository_sync_definitions"><CopyableCode code="list_repository_sync_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List repository sync definitions with detail data.</td>
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
    defaultValue="list_repository_sync_definitions"
    values={[
        { label: 'list_repository_sync_definitions', value: 'list_repository_sync_definitions' }
    ]}
>
<TabItem value="list_repository_sync_definitions">

List repository sync definitions with detail data.

```sql
SELECT
branch,
directory,
parent,
target
FROM aws.proton.repository_sync_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
