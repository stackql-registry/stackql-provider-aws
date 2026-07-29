--- 
title: namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - namespaces
  - iotthingsgraph
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

Creates, updates, deletes, gets or lists a <code>namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.namespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_namespace"
    values={[
        { label: 'describe_namespace', value: 'describe_namespace' }
    ]}
>
<TabItem value="describe_namespace">

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
    <td><CopyableCode code="namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the user's namespace to describe.</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the public namespace that the latest namespace version is tracking.</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_namespace_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the public namespace that the latest version is tracking.</td>
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
    <td><a href="#describe_namespace"><CopyableCode code="describe_namespace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the latest version of the user's namespace and the public version that it is tracking.</td>
</tr>
<tr>
    <td><a href="#delete_namespace"><CopyableCode code="delete_namespace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters.</td>
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
    defaultValue="describe_namespace"
    values={[
        { label: 'describe_namespace', value: 'describe_namespace' }
    ]}
>
<TabItem value="describe_namespace">

Gets the latest version of the user's namespace and the public version that it is tracking.

```sql
SELECT
namespace_arn,
namespace_name,
namespace_version,
tracking_namespace_name,
tracking_namespace_version
FROM aws.iotthingsgraph.namespaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_namespace"
    values={[
        { label: 'delete_namespace', value: 'delete_namespace' }
    ]}
>
<TabItem value="delete_namespace">

Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters.

```sql
DELETE FROM aws.iotthingsgraph.namespaces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
