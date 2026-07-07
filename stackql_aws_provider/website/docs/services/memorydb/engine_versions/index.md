--- 
title: engine_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - engine_versions
  - memorydb
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

Creates, updates, deletes, gets or lists an <code>engine_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engine_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.engine_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_engine_versions"
    values={[
        { label: 'describe_engine_versions', value: 'describe_engine_versions' }
    ]}
>
<TabItem value="describe_engine_versions">

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
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the engine for which version information is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="EnginePatchVersion" /></td>
    <td><code>string</code></td>
    <td>The patched engine version</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The engine version</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the parameter group family to which the engine default parameters apply.</td>
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
    <td><a href="#describe_engine_versions"><CopyableCode code="describe_engine_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the available Redis OSS engine versions.</td>
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
    defaultValue="describe_engine_versions"
    values={[
        { label: 'describe_engine_versions', value: 'describe_engine_versions' }
    ]}
>
<TabItem value="describe_engine_versions">

Returns a list of the available Redis OSS engine versions.

```sql
SELECT
Engine,
EnginePatchVersion,
EngineVersion,
ParameterGroupFamily
FROM aws.memorydb.engine_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
