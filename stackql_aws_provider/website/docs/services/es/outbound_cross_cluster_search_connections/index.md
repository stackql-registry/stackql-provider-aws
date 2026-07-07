--- 
title: outbound_cross_cluster_search_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - outbound_cross_cluster_search_connections
  - es
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

Creates, updates, deletes, gets or lists an <code>outbound_cross_cluster_search_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outbound_cross_cluster_search_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.outbound_cross_cluster_search_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_outbound_cross_cluster_search_connections"
    values={[
        { label: 'describe_outbound_cross_cluster_search_connections', value: 'describe_outbound_cross_cluster_search_connections' }
    ]}
>
<TabItem value="describe_outbound_cross_cluster_search_connections">

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
    <td><CopyableCode code="CrossClusterSearchConnections" /></td>
    <td><code>array</code></td>
    <td>Consists of list of OutboundCrossClusterSearchConnection matching the specified filter criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results.</td>
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
    <td><a href="#describe_outbound_cross_cluster_search_connections"><CopyableCode code="describe_outbound_cross_cluster_search_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the outbound cross-cluster search connections for a source domain.</td>
</tr>
<tr>
    <td><a href="#create_outbound_cross_cluster_search_connection"><CopyableCode code="create_outbound_cross_cluster_search_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceDomainInfo"><code>SourceDomainInfo</code></a>, <a href="#parameter-DestinationDomainInfo"><code>DestinationDomainInfo</code></a>, <a href="#parameter-ConnectionAlias"><code>ConnectionAlias</code></a></td>
    <td></td>
    <td>Creates a new cross-cluster search connection from a source domain to a destination domain.</td>
</tr>
<tr>
    <td><a href="#delete_outbound_cross_cluster_search_connection"><CopyableCode code="delete_outbound_cross_cluster_search_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows the source domain owner to delete an existing outbound cross-cluster search connection.</td>
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
    <td>The id of the outbound connection that you want to permanently delete.</td>
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
    defaultValue="describe_outbound_cross_cluster_search_connections"
    values={[
        { label: 'describe_outbound_cross_cluster_search_connections', value: 'describe_outbound_cross_cluster_search_connections' }
    ]}
>
<TabItem value="describe_outbound_cross_cluster_search_connections">

Lists all the outbound cross-cluster search connections for a source domain.

```sql
SELECT
CrossClusterSearchConnections,
NextToken
FROM aws.es.outbound_cross_cluster_search_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_outbound_cross_cluster_search_connection"
    values={[
        { label: 'create_outbound_cross_cluster_search_connection', value: 'create_outbound_cross_cluster_search_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_outbound_cross_cluster_search_connection">

Creates a new cross-cluster search connection from a source domain to a destination domain.

```sql
INSERT INTO aws.es.outbound_cross_cluster_search_connections (
SourceDomainInfo,
DestinationDomainInfo,
ConnectionAlias,
region
)
SELECT 
'{{ SourceDomainInfo }}' /* required */,
'{{ DestinationDomainInfo }}' /* required */,
'{{ ConnectionAlias }}' /* required */,
'{{ region }}'
RETURNING
ConnectionAlias,
ConnectionStatus,
CrossClusterSearchConnectionId,
DestinationDomainInfo,
SourceDomainInfo
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: outbound_cross_cluster_search_connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the outbound_cross_cluster_search_connections resource.
    - name: SourceDomainInfo
      value:
        OwnerId: "{{ OwnerId }}"
        DomainName: "{{ DomainName }}"
        Region: "{{ Region }}"
    - name: DestinationDomainInfo
      value:
        OwnerId: "{{ OwnerId }}"
        DomainName: "{{ DomainName }}"
        Region: "{{ Region }}"
    - name: ConnectionAlias
      value: "{{ ConnectionAlias }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_outbound_cross_cluster_search_connection"
    values={[
        { label: 'delete_outbound_cross_cluster_search_connection', value: 'delete_outbound_cross_cluster_search_connection' }
    ]}
>
<TabItem value="delete_outbound_cross_cluster_search_connection">

Allows the source domain owner to delete an existing outbound cross-cluster search connection.

```sql
DELETE FROM aws.es.outbound_cross_cluster_search_connections
WHERE connection_id = '{{ connection_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
