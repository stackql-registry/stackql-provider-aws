--- 
title: inbound_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - inbound_integrations
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

Creates, updates, deletes, gets or lists an <code>inbound_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inbound_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.inbound_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_inbound_integrations"
    values={[
        { label: 'describe_inbound_integrations', value: 'describe_inbound_integrations' }
    ]}
>
<TabItem value="describe_inbound_integrations">

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
    <td><CopyableCode code="InboundIntegrations" /></td>
    <td><code>array</code></td>
    <td>A list of inbound integrations.</td>
</tr>
<tr>
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the starting point for the next set of response records in a subsequent request.</td>
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
    <td><a href="#describe_inbound_integrations"><CopyableCode code="describe_inbound_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of inbound integrations for the specified integration.</td>
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
    defaultValue="describe_inbound_integrations"
    values={[
        { label: 'describe_inbound_integrations', value: 'describe_inbound_integrations' }
    ]}
>
<TabItem value="describe_inbound_integrations">

Returns a list of inbound integrations for the specified integration.

```sql
SELECT
InboundIntegrations,
Marker
FROM aws.glue.inbound_integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
