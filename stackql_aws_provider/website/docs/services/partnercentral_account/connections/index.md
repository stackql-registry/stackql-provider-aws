--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - partnercentral_account
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_account.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' },
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="get_connection">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:partnercentral:&#91;a-z0-9\-&#93;*::catalog/&#91;a-zA-Z&#93;+/connection/pac-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier where the connection exists. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionTypes" /></td>
    <td><code>object</code></td>
    <td>The list of connection types active between the partners.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the connection. (pattern: &lt;code&gt;pac-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OtherParticipantAccountId" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the other participant in the connection. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the connection was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connections">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:partnercentral:&#91;a-z0-9\-&#93;*::catalog/&#91;a-zA-Z&#93;+/connection/pac-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier where the connection exists. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionTypes" /></td>
    <td><code>object</code></td>
    <td>A map of connection types and their summary information for this connection.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the connection. (pattern: &lt;code&gt;pac-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OtherParticipantAccountId" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the other participant in the connection. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the connection was last updated.</td>
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
    <td><a href="#get_connection"><CopyableCode code="get_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific connection between partners.</td>
</tr>
<tr>
    <td><a href="#list_connections"><CopyableCode code="list_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists active connections for the partner account, with optional filtering by connection type and participant.</td>
</tr>
<tr>
    <td><a href="#accept_connection_invitation"><CopyableCode code="accept_connection_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Accepts a connection invitation from another partner, establishing a formal partnership connection between the two parties.</td>
</tr>
<tr>
    <td><a href="#cancel_connection_invitation"><CopyableCode code="cancel_connection_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Cancels a pending connection invitation before it has been accepted or rejected.</td>
</tr>
<tr>
    <td><a href="#reject_connection_invitation"><CopyableCode code="reject_connection_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Rejects a connection invitation from another partner, declining the partnership request.</td>
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
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' },
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="get_connection">

Retrieves detailed information about a specific connection between partners.

```sql
SELECT
Arn,
Catalog,
ConnectionTypes,
Id,
OtherParticipantAccountId,
UpdatedAt
FROM aws.partnercentral_account.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connections">

Lists active connections for the partner account, with optional filtering by connection type and participant.

```sql
SELECT
Arn,
Catalog,
ConnectionTypes,
Id,
OtherParticipantAccountId,
UpdatedAt
FROM aws.partnercentral_account.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_connection_invitation"
    values={[
        { label: 'accept_connection_invitation', value: 'accept_connection_invitation' },
        { label: 'cancel_connection_invitation', value: 'cancel_connection_invitation' },
        { label: 'reject_connection_invitation', value: 'reject_connection_invitation' }
    ]}
>
<TabItem value="accept_connection_invitation">

Accepts a connection invitation from another partner, establishing a formal partnership connection between the two parties.

```sql
EXEC aws.partnercentral_account.connections.accept_connection_invitation 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"Identifier": "{{ Identifier }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="cancel_connection_invitation">

Cancels a pending connection invitation before it has been accepted or rejected.

```sql
EXEC aws.partnercentral_account.connections.cancel_connection_invitation 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"Identifier": "{{ Identifier }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="reject_connection_invitation">

Rejects a connection invitation from another partner, declining the partnership request.

```sql
EXEC aws.partnercentral_account.connections.reject_connection_invitation 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"Identifier": "{{ Identifier }}", 
"ClientToken": "{{ ClientToken }}", 
"Reason": "{{ Reason }}"
}'
;
```
</TabItem>
</Tabs>
