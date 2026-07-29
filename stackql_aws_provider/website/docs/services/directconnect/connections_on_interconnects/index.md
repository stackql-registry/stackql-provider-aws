--- 
title: connections_on_interconnects
hide_title: false
hide_table_of_contents: false
keywords:
  - connections_on_interconnects
  - directconnect
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

Creates, updates, deletes, gets or lists a <code>connections_on_interconnects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections_on_interconnects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.connections_on_interconnects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connections_on_interconnect"
    values={[
        { label: 'describe_connections_on_interconnect', value: 'describe_connections_on_interconnect' }
    ]}
>
<TabItem value="describe_connections_on_interconnect">

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
    <td><CopyableCode code="connections" /></td>
    <td><code>array</code></td>
    <td>The connections.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
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
    <td><a href="#describe_connections_on_interconnect"><CopyableCode code="describe_connections_on_interconnect" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the specified interconnect. Intended for use by Direct Connect Partners only.</td>
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
    defaultValue="describe_connections_on_interconnect"
    values={[
        { label: 'describe_connections_on_interconnect', value: 'describe_connections_on_interconnect' }
    ]}
>
<TabItem value="describe_connections_on_interconnect">

Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the specified interconnect. Intended for use by Direct Connect Partners only.

```sql
SELECT
connections,
next_token
FROM aws.directconnect.connections_on_interconnects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
