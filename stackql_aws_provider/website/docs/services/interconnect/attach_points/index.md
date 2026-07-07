--- 
title: attach_points
hide_title: false
hide_table_of_contents: false
keywords:
  - attach_points
  - interconnect
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

Creates, updates, deletes, gets or lists an <code>attach_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attach_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.interconnect.attach_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attach_points"
    values={[
        { label: 'list_attach_points', value: 'list_attach_points' }
    ]}
>
<TabItem value="list_attach_points">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the identifier attach point.</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the specific type of the AttachPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of this AttachPoint, which will dictate the syntax of the identifier. Current types include: ARN DirectConnect Gateway (DirectConnectGateway)</td>
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
    <td><a href="#list_attach_points"><CopyableCode code="list_attach_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Attach Points the caller has access to that are valid for the specified Environment.</td>
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
    defaultValue="list_attach_points"
    values={[
        { label: 'list_attach_points', value: 'list_attach_points' }
    ]}
>
<TabItem value="list_attach_points">

Lists all Attach Points the caller has access to that are valid for the specified Environment.

```sql
SELECT
name,
identifier,
type_
FROM aws.interconnect.attach_points
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
