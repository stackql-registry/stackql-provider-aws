--- 
title: input_device_transfers
hide_title: false
hide_table_of_contents: false
keywords:
  - input_device_transfers
  - medialive
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

Creates, updates, deletes, gets or lists an <code>input_device_transfers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="input_device_transfers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.input_device_transfers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_input_device_transfers"
    values={[
        { label: 'list_input_device_transfers', value: 'list_input_device_transfers' }
    ]}
>
<TabItem value="list_input_device_transfers">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="TargetCustomerId" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="TransferType" /></td>
    <td><code>string</code></td>
    <td>The type (direction) of the input device transfer. (OUTGOING, INCOMING)</td>
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
    <td><a href="#list_input_device_transfers"><CopyableCode code="list_input_device_transfers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-transferType"><code>transferType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.</td>
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
<tr id="parameter-transferType">
    <td><CopyableCode code="transferType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_input_device_transfers"
    values={[
        { label: 'list_input_device_transfers', value: 'list_input_device_transfers' }
    ]}
>
<TabItem value="list_input_device_transfers">

List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.

```sql
SELECT
Id,
Message,
TargetCustomerId,
TransferType
FROM aws.medialive.input_device_transfers
WHERE transferType = '{{ transferType }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
