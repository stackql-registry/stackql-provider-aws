--- 
title: core_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - core_networks
  - networkmanager
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

Creates, updates, deletes, gets or lists a <code>core_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="core_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.core_networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_core_network"
    values={[
        { label: 'get_core_network', value: 'get_core_network' },
        { label: 'list_core_networks', value: 'list_core_networks' }
    ]}
>
<TabItem value="get_core_network">

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
    <td><CopyableCode code="CoreNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a core network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when a core network was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of a core network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Edges" /></td>
    <td><code>array</code></td>
    <td>The edges within a core network.</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network that your core network is a part of. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkFunctionGroups" /></td>
    <td><code>array</code></td>
    <td>The network function groups associated with a core network.</td>
</tr>
<tr>
    <td><CopyableCode code="Segments" /></td>
    <td><code>array</code></td>
    <td>The segments within a core network.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of a core network. (CREATING, UPDATING, AVAILABLE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The list of key-value tags associated with a core network.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_core_networks">

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
    <td><CopyableCode code="CoreNetworkArn" /></td>
    <td><code>string</code></td>
    <td>a core network ARN. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of a core network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalNetworkId" /></td>
    <td><code>string</code></td>
    <td>The global network ID. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the account owner. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of a core network. (CREATING, UPDATING, AVAILABLE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The key-value tags associated with a core network summary.</td>
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
    <td><a href="#get_core_network"><CopyableCode code="get_core_network" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the LIVE policy for a core network.</td>
</tr>
<tr>
    <td><a href="#list_core_networks"><CopyableCode code="list_core_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of owned and shared core networks.</td>
</tr>
<tr>
    <td><a href="#create_core_network"><CopyableCode code="create_core_network" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GlobalNetworkId"><code>GlobalNetworkId</code></a></td>
    <td></td>
    <td>Creates a core network as part of your global network, and optionally, with a core network policy.</td>
</tr>
<tr>
    <td><a href="#update_core_network"><CopyableCode code="update_core_network" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the description of a core network.</td>
</tr>
<tr>
    <td><a href="#delete_core_network"><CopyableCode code="delete_core_network" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.</td>
</tr>
<tr>
    <td><a href="#execute_core_network_change_set"><CopyableCode code="execute_core_network_change_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-policy_version_id"><code>policy_version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Executes a change set on your core network. Deploys changes globally based on the policy submitted..</td>
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
<tr id="parameter-core_network_id">
    <td><CopyableCode code="core_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network.</td>
</tr>
<tr id="parameter-policy_version_id">
    <td><CopyableCode code="policy_version_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the policy version.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_core_network"
    values={[
        { label: 'get_core_network', value: 'get_core_network' },
        { label: 'list_core_networks', value: 'list_core_networks' }
    ]}
>
<TabItem value="get_core_network">

Returns information about the LIVE policy for a core network.

```sql
SELECT
CoreNetworkArn,
CoreNetworkId,
CreatedAt,
Description,
Edges,
GlobalNetworkId,
NetworkFunctionGroups,
Segments,
State,
Tags
FROM aws.networkmanager.core_networks
WHERE core_network_id = '{{ core_network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_core_networks">

Returns a list of owned and shared core networks.

```sql
SELECT
CoreNetworkArn,
CoreNetworkId,
Description,
GlobalNetworkId,
OwnerAccountId,
State,
Tags
FROM aws.networkmanager.core_networks
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_core_network"
    values={[
        { label: 'create_core_network', value: 'create_core_network' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_core_network">

Creates a core network as part of your global network, and optionally, with a core network policy.

```sql
INSERT INTO aws.networkmanager.core_networks (
GlobalNetworkId,
Description,
Tags,
PolicyDocument,
ClientToken,
region
)
SELECT 
'{{ GlobalNetworkId }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
'{{ PolicyDocument }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
CoreNetwork
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: core_networks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the core_networks resource.
    - name: GlobalNetworkId
      value: "{{ GlobalNetworkId }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: PolicyDocument
      value: "{{ PolicyDocument }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_core_network"
    values={[
        { label: 'update_core_network', value: 'update_core_network' }
    ]}
>
<TabItem value="update_core_network">

Updates the description of a core network.

```sql
UPDATE aws.networkmanager.core_networks
SET 
Description = '{{ Description }}'
WHERE 
core_network_id = '{{ core_network_id }}' --required
AND region = '{{ region }}' --required
RETURNING
CoreNetwork;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_core_network"
    values={[
        { label: 'delete_core_network', value: 'delete_core_network' }
    ]}
>
<TabItem value="delete_core_network">

Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.

```sql
DELETE FROM aws.networkmanager.core_networks
WHERE core_network_id = '{{ core_network_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_core_network_change_set"
    values={[
        { label: 'execute_core_network_change_set', value: 'execute_core_network_change_set' }
    ]}
>
<TabItem value="execute_core_network_change_set">

Executes a change set on your core network. Deploys changes globally based on the policy submitted..

```sql
EXEC aws.networkmanager.core_networks.execute_core_network_change_set 
@core_network_id='{{ core_network_id }}' --required, 
@policy_version_id='{{ policy_version_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
