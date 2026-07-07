--- 
title: schema_versions_diffs
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_versions_diffs
  - glue
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

Creates, updates, deletes, gets or lists a <code>schema_versions_diffs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schema_versions_diffs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.schema_versions_diffs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema_versions_diff"
    values={[
        { label: 'get_schema_versions_diff', value: 'get_schema_versions_diff' }
    ]}
>
<TabItem value="get_schema_versions_diff">

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
    <td><CopyableCode code="Diff" /></td>
    <td><code>string</code></td>
    <td>The difference between schemas as a string in JsonPatch format. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_schema_versions_diff"><CopyableCode code="get_schema_versions_diff" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry. This API allows you to compare two schema versions between two schema definitions under the same schema.</td>
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
    defaultValue="get_schema_versions_diff"
    values={[
        { label: 'get_schema_versions_diff', value: 'get_schema_versions_diff' }
    ]}
>
<TabItem value="get_schema_versions_diff">

Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry. This API allows you to compare two schema versions between two schema definitions under the same schema.

```sql
SELECT
Diff
FROM aws.glue.schema_versions_diffs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
