--- 
title: runtime_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - runtime_versions
  - synthetics
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

Creates, updates, deletes, gets or lists a <code>runtime_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runtime_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.synthetics.runtime_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_runtime_versions"
    values={[
        { label: 'describe_runtime_versions', value: 'describe_runtime_versions' }
    ]}
>
<TabItem value="describe_runtime_versions">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates that there is more data available. You can use this token in a subsequent DescribeRuntimeVersions operation to retrieve the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="RuntimeVersions" /></td>
    <td><code>array</code></td>
    <td>An array of objects that display the details about each Synthetics canary runtime version.</td>
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
    <td><a href="#describe_runtime_versions"><CopyableCode code="describe_runtime_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Synthetics canary runtime versions. For more information, see Canary Runtime Versions.</td>
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
    defaultValue="describe_runtime_versions"
    values={[
        { label: 'describe_runtime_versions', value: 'describe_runtime_versions' }
    ]}
>
<TabItem value="describe_runtime_versions">

Returns a list of Synthetics canary runtime versions. For more information, see Canary Runtime Versions.

```sql
SELECT
NextToken,
RuntimeVersions
FROM aws.synthetics.runtime_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
