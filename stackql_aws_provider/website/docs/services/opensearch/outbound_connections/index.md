--- 
title: outbound_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - outbound_connections
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

Creates, updates, deletes, gets or lists an <code>outbound_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outbound_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.outbound_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_outbound_connections"
    values={[
        { label: 'describe_outbound_connections', value: 'describe_outbound_connections' }
    ]}
>
<TabItem value="describe_outbound_connections">

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
    <td><CopyableCode code="Connections" /></td>
    <td><code>array</code></td>
    <td>List of outbound connections that match the filter criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
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
    <td><a href="#describe_outbound_connections"><CopyableCode code="describe_outbound_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the outbound cross-cluster connections for a local (source) Amazon OpenSearch Service domain. For more information, see Cross-cluster search for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#create_outbound_connection"><CopyableCode code="create_outbound_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocalDomainInfo"><code>LocalDomainInfo</code></a>, <a href="#parameter-RemoteDomainInfo"><code>RemoteDomainInfo</code></a>, <a href="#parameter-ConnectionAlias"><code>ConnectionAlias</code></a></td>
    <td></td>
    <td>Creates a new cross-cluster search connection from a source Amazon OpenSearch Service domain to a destination domain. For more information, see Cross-cluster search for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#delete_outbound_connection"><CopyableCode code="delete_outbound_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows the source Amazon OpenSearch Service domain owner to delete an existing outbound cross-cluster search connection. For more information, see Cross-cluster search for Amazon OpenSearch Service.</td>
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
    <td>The ID of the outbound connection you want to permanently delete.</td>
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
    defaultValue="describe_outbound_connections"
    values={[
        { label: 'describe_outbound_connections', value: 'describe_outbound_connections' }
    ]}
>
<TabItem value="describe_outbound_connections">

Lists all the outbound cross-cluster connections for a local (source) Amazon OpenSearch Service domain. For more information, see Cross-cluster search for Amazon OpenSearch Service.

```sql
SELECT
Connections,
NextToken
FROM aws.opensearch.outbound_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_outbound_connection"
    values={[
        { label: 'create_outbound_connection', value: 'create_outbound_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_outbound_connection">

Creates a new cross-cluster search connection from a source Amazon OpenSearch Service domain to a destination domain. For more information, see Cross-cluster search for Amazon OpenSearch Service.

```sql
INSERT INTO aws.opensearch.outbound_connections (
LocalDomainInfo,
RemoteDomainInfo,
ConnectionAlias,
ConnectionMode,
ConnectionProperties,
region
)
SELECT 
'{{ LocalDomainInfo }}' /* required */,
'{{ RemoteDomainInfo }}' /* required */,
'{{ ConnectionAlias }}' /* required */,
'{{ ConnectionMode }}',
'{{ ConnectionProperties }}',
'{{ region }}'
RETURNING
ConnectionAlias,
ConnectionId,
ConnectionMode,
ConnectionProperties,
ConnectionStatus,
LocalDomainInfo,
RemoteDomainInfo
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: outbound_connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the outbound_connections resource.
    - name: LocalDomainInfo
      description: |
        Container for information about an OpenSearch Service domain.
      value:
        AWSDomainInformation:
          OwnerId: "{{ OwnerId }}"
          DomainName: "{{ DomainName }}"
          Region: "{{ Region }}"
    - name: RemoteDomainInfo
      description: |
        Container for information about an OpenSearch Service domain.
      value:
        AWSDomainInformation:
          OwnerId: "{{ OwnerId }}"
          DomainName: "{{ DomainName }}"
          Region: "{{ Region }}"
    - name: ConnectionAlias
      value: "{{ ConnectionAlias }}"
    - name: ConnectionMode
      value: "{{ ConnectionMode }}"
      description: |
        The connection mode for the cross-cluster connection. DIRECT - Used for cross-cluster search or cross-cluster replication. VPC_ENDPOINT - Used for remote reindex between Amazon OpenSearch Service VPC domains.
      valid_values: ['DIRECT', 'VPC_ENDPOINT']
    - name: ConnectionProperties
      description: |
        The connection properties of an outbound connection.
      value:
        Endpoint: "{{ Endpoint }}"
        CrossClusterSearch:
          SkipUnavailable: "{{ SkipUnavailable }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_outbound_connection"
    values={[
        { label: 'delete_outbound_connection', value: 'delete_outbound_connection' }
    ]}
>
<TabItem value="delete_outbound_connection">

Allows the source Amazon OpenSearch Service domain owner to delete an existing outbound cross-cluster search connection. For more information, see Cross-cluster search for Amazon OpenSearch Service.

```sql
DELETE FROM aws.opensearch.outbound_connections
WHERE connection_id = '{{ connection_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
