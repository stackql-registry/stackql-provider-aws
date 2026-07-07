--- 
title: received_data_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - received_data_grants
  - dataexchange
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

Creates, updates, deletes, gets or lists a <code>received_data_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="received_data_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dataexchange.received_data_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_received_data_grant"
    values={[
        { label: 'get_received_data_grant', value: 'get_received_data_grant' },
        { label: 'list_received_data_grants', value: 'list_received_data_grants' }
    ]}
>
<TabItem value="get_received_data_grant">

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
    <td><CopyableCode code="AcceptanceState" /></td>
    <td><code>string</code></td>
    <td>The acceptance state of the data grant. (PENDING_RECEIVER_ACCEPTANCE, ACCEPTED)</td>
</tr>
<tr>
    <td><CopyableCode code="AcceptedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the data set associated to the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="EndsAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when access to the associated data set ends.</td>
</tr>
<tr>
    <td><CopyableCode code="GrantDistributionScope" /></td>
    <td><code>string</code></td>
    <td>The distribution scope for the data grant. (AWS_ORGANIZATION, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="ReceiverPrincipal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the data grant receiver. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SenderPrincipal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the data grant sender. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_received_data_grants">

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
    <td><CopyableCode code="AcceptanceState" /></td>
    <td><code>string</code></td>
    <td>The acceptance state of the data grant. (PENDING_RECEIVER_ACCEPTANCE, ACCEPTED)</td>
</tr>
<tr>
    <td><CopyableCode code="AcceptedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the data set associated to the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndsAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when access to the associated data set ends.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="ReceiverPrincipal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the data grant receiver. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SenderPrincipal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the data grant sender. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was last updated.</td>
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
    <td><a href="#get_received_data_grant"><CopyableCode code="get_received_data_grant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-data_grant_arn"><code>data_grant_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns information about a received data grant.</td>
</tr>
<tr>
    <td><a href="#list_received_data_grants"><CopyableCode code="list_received_data_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-acceptanceState"><code>acceptanceState</code></a></td>
    <td>This operation returns information about all received data grants.</td>
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
<tr id="parameter-data_grant_arn">
    <td><CopyableCode code="data_grant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data grant.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-acceptanceState">
    <td><CopyableCode code="acceptanceState" /></td>
    <td><code>array</code></td>
    <td>The acceptance state of the data grants to list.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be included in the next page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_received_data_grant"
    values={[
        { label: 'get_received_data_grant', value: 'get_received_data_grant' },
        { label: 'list_received_data_grants', value: 'list_received_data_grants' }
    ]}
>
<TabItem value="get_received_data_grant">

This operation returns information about a received data grant.

```sql
SELECT
AcceptanceState,
AcceptedAt,
Arn,
CreatedAt,
DataSetId,
Description,
EndsAt,
GrantDistributionScope,
Id,
Name,
ReceiverPrincipal,
SenderPrincipal,
UpdatedAt
FROM aws.dataexchange.received_data_grants
WHERE data_grant_arn = '{{ data_grant_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_received_data_grants">

This operation returns information about all received data grants.

```sql
SELECT
AcceptanceState,
AcceptedAt,
Arn,
CreatedAt,
DataSetId,
EndsAt,
Id,
Name,
ReceiverPrincipal,
SenderPrincipal,
UpdatedAt
FROM aws.dataexchange.received_data_grants
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND acceptanceState = '{{ acceptanceState }}'
;
```
</TabItem>
</Tabs>
