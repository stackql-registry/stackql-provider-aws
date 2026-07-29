--- 
title: networks
hide_title: false
hide_table_of_contents: false
keywords:
  - networks
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

Creates, updates, deletes, gets or lists a <code>networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_network"
    values={[
        { label: 'describe_network', value: 'describe_network' },
        { label: 'list_networks', value: 'list_networks' }
    ]}
>
<TabItem value="describe_network">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="associated_cluster_ids" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="ip_pools" /></td>
    <td><code>array</code></td>
    <td>An array of IpPools in your organization's network that identify a collection of IP addresses in this network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>array</code></td>
    <td>An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the Network. Only MediaLive Anywhere can change the state. (CREATING, CREATE_FAILED, ACTIVE, DELETING, IDLE, IN_USE, UPDATING, DELETE_FAILED, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_networks">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="associated_cluster_ids" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="ip_pools" /></td>
    <td><code>array</code></td>
    <td>An array of IpPools in your organization's network that identify a collection of IP addresses in your organization's network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>array</code></td>
    <td>An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the Network. Only MediaLive Anywhere can change the state. (CREATING, CREATE_FAILED, ACTIVE, DELETING, IDLE, IN_USE, UPDATING, DELETE_FAILED, DELETED)</td>
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
    <td><a href="#describe_network"><CopyableCode code="describe_network" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details about a Network.</td>
</tr>
<tr>
    <td><a href="#list_networks"><CopyableCode code="list_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieve the list of Networks.</td>
</tr>
<tr>
    <td><a href="#create_network"><CopyableCode code="create_network" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create as many Networks as you need. You will associate one or more Clusters with each Network.Each Network provides MediaLive Anywhere with required information about the network in your organization that you are using for video encoding using MediaLive.</td>
</tr>
<tr>
    <td><a href="#update_network"><CopyableCode code="update_network" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Change the settings for a Network.</td>
</tr>
<tr>
    <td><a href="#delete_network"><CopyableCode code="delete_network" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a Network. The Network must have no resources associated with it.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the network.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_network"
    values={[
        { label: 'describe_network', value: 'describe_network' },
        { label: 'list_networks', value: 'list_networks' }
    ]}
>
<TabItem value="describe_network">

Get details about a Network.

```sql
SELECT
arn,
associated_cluster_ids,
id,
ip_pools,
name,
routes,
state
FROM aws.medialive.networks
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_networks">

Retrieve the list of Networks.

```sql
SELECT
arn,
associated_cluster_ids,
id,
ip_pools,
name,
routes,
state
FROM aws.medialive.networks
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network"
    values={[
        { label: 'create_network', value: 'create_network' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network">

Create as many Networks as you need. You will associate one or more Clusters with each Network.Each Network provides MediaLive Anywhere with required information about the network in your organization that you are using for video encoding using MediaLive.

```sql
INSERT INTO aws.medialive.networks (
IpPools,
Name,
RequestId,
Routes,
Tags,
region
)
SELECT 
'{{ IpPools }}',
'{{ Name }}',
'{{ RequestId }}',
'{{ Routes }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
associated_cluster_ids,
id,
ip_pools,
name,
routes,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: networks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the networks resource.
    - name: IpPools
      description: |
        Placeholder documentation for __listOfIpPoolCreateRequest
      value:
        - Cidr: "{{ Cidr }}"
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __string
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __string
    - name: Routes
      description: |
        Placeholder documentation for __listOfRouteCreateRequest
      value:
        - Cidr: "{{ Cidr }}"
          Gateway: "{{ Gateway }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Placeholder documentation for Tags
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_network"
    values={[
        { label: 'update_network', value: 'update_network' }
    ]}
>
<TabItem value="update_network">

Change the settings for a Network.

```sql
UPDATE aws.medialive.networks
SET 
IpPools = '{{ IpPools }}',
Name = '{{ Name }}',
Routes = '{{ Routes }}'
WHERE 
network_id = '{{ network_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
associated_cluster_ids,
id,
ip_pools,
name,
routes,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network"
    values={[
        { label: 'delete_network', value: 'delete_network' }
    ]}
>
<TabItem value="delete_network">

Delete a Network. The Network must have no resources associated with it.

```sql
DELETE FROM aws.medialive.networks
WHERE network_id = '{{ network_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
