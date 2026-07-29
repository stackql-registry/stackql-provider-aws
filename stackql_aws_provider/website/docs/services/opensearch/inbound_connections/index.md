--- 
title: inbound_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - inbound_connections
  - opensearch
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

Creates, updates, deletes, gets or lists an <code>inbound_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inbound_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.inbound_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_inbound_connections"
    values={[
        { label: 'describe_inbound_connections', value: 'describe_inbound_connections' }
    ]}
>
<TabItem value="describe_inbound_connections">

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
    <td>List of inbound connections.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
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
    <td><a href="#describe_inbound_connections"><CopyableCode code="describe_inbound_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the inbound cross-cluster search connections for a destination (remote) Amazon OpenSearch Service domain. For more information, see Cross-cluster search for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#delete_inbound_connection"><CopyableCode code="delete_inbound_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows the destination Amazon OpenSearch Service domain owner to delete an existing inbound cross-cluster search connection. For more information, see Cross-cluster search for Amazon OpenSearch Service.</td>
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
<tr id="parameter-connection_id">
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the inbound connection to permanently delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_inbound_connections"
    values={[
        { label: 'describe_inbound_connections', value: 'describe_inbound_connections' }
    ]}
>
<TabItem value="describe_inbound_connections">

Lists all the inbound cross-cluster search connections for a destination (remote) Amazon OpenSearch Service domain. For more information, see Cross-cluster search for Amazon OpenSearch Service.

```sql
SELECT
connections,
next_token
FROM aws.opensearch.inbound_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_inbound_connection"
    values={[
        { label: 'delete_inbound_connection', value: 'delete_inbound_connection' }
    ]}
>
<TabItem value="delete_inbound_connection">

Allows the destination Amazon OpenSearch Service domain owner to delete an existing inbound cross-cluster search connection. For more information, see Cross-cluster search for Amazon OpenSearch Service.

```sql
DELETE FROM aws.opensearch.inbound_connections
WHERE connection_id = '{{ connection_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
