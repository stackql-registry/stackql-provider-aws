--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connections"
    values={[
        { label: 'get_connections', value: 'get_connections' }
    ]}
>
<TabItem value="get_connections">

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
    <td><CopyableCode code="connected_device_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the second device in the connection. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connected_link_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the link for the second device in the connection. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the connection. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the first device in the connection. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="global_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="link_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the link for the first device in the connection. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the connection. (PENDING, AVAILABLE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags for the connection.</td>
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
    <td><a href="#get_connections"><CopyableCode code="get_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-connectionIds"><code>connectionIds</code></a>, <a href="#parameter-deviceId"><code>deviceId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets information about one or more of your connections in a global network.</td>
</tr>
<tr>
    <td><a href="#create_connection"><CopyableCode code="create_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceId"><code>DeviceId</code></a>, <a href="#parameter-ConnectedDeviceId"><code>ConnectedDeviceId</code></a></td>
    <td></td>
    <td>Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.</td>
</tr>
<tr>
    <td><a href="#update_connection"><CopyableCode code="update_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the information for an existing connection. To remove information for any of the parameters, specify an empty string.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified connection in your global network.</td>
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
    <td>The ID of the connection.</td>
</tr>
<tr id="parameter-global_network_id">
    <td><CopyableCode code="global_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-connectionIds">
    <td><CopyableCode code="connectionIds" /></td>
    <td><code>array</code></td>
    <td>One or more connection IDs.</td>
</tr>
<tr id="parameter-deviceId">
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the device.</td>
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
    defaultValue="get_connections"
    values={[
        { label: 'get_connections', value: 'get_connections' }
    ]}
>
<TabItem value="get_connections">

Gets information about one or more of your connections in a global network.

```sql
SELECT
connected_device_id,
connected_link_id,
connection_arn,
connection_id,
created_at,
description,
device_id,
global_network_id,
link_id,
state,
tags
FROM aws.networkmanager.connections
WHERE global_network_id = '{{ global_network_id }}' -- required
AND region = '{{ region }}' -- required
AND connectionIds = '{{ connectionIds }}'
AND deviceId = '{{ deviceId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection"
    values={[
        { label: 'create_connection', value: 'create_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection">

Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.

```sql
INSERT INTO aws.networkmanager.connections (
DeviceId,
ConnectedDeviceId,
LinkId,
ConnectedLinkId,
Description,
Tags,
global_network_id,
region
)
SELECT 
'{{ DeviceId }}' /* required */,
'{{ ConnectedDeviceId }}' /* required */,
'{{ LinkId }}',
'{{ ConnectedLinkId }}',
'{{ Description }}',
'{{ Tags }}',
'{{ global_network_id }}',
'{{ region }}'
RETURNING
connection
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connections
  props:
    - name: global_network_id
      value: "{{ global_network_id }}"
      description: Required parameter for the connections resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connections resource.
    - name: DeviceId
      value: "{{ DeviceId }}"
    - name: ConnectedDeviceId
      value: "{{ ConnectedDeviceId }}"
    - name: LinkId
      value: "{{ LinkId }}"
    - name: ConnectedLinkId
      value: "{{ ConnectedLinkId }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection"
    values={[
        { label: 'update_connection', value: 'update_connection' }
    ]}
>
<TabItem value="update_connection">

Updates the information for an existing connection. To remove information for any of the parameters, specify an empty string.

```sql
UPDATE aws.networkmanager.connections
SET 
LinkId = '{{ LinkId }}',
ConnectedLinkId = '{{ ConnectedLinkId }}',
Description = '{{ Description }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND connection_id = '{{ connection_id }}' --required
AND region = '{{ region }}' --required
RETURNING
connection;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Deletes the specified connection in your global network.

```sql
DELETE FROM aws.networkmanager.connections
WHERE global_network_id = '{{ global_network_id }}' --required
AND connection_id = '{{ connection_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
