--- 
title: network_analyzer_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - network_analyzer_configurations
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>network_analyzer_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_analyzer_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.network_analyzer_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_analyzer_configuration"
    values={[
        { label: 'get_network_analyzer_configuration', value: 'get_network_analyzer_configuration' },
        { label: 'list_network_analyzer_configurations', value: 'list_network_analyzer_configurations' }
    ]}
>
<TabItem value="get_network_analyzer_configuration">

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
    <td>The Amazon Resource Name of the new resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the new resource.</td>
</tr>
<tr>
    <td><CopyableCode code="MulticastGroups" /></td>
    <td><code>array</code></td>
    <td>List of multicast group resources that have been added to the network analyzer configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the network analyzer configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TraceContent" /></td>
    <td><code>object</code></td>
    <td>Trace content for your wireless devices, gateways, and multicast groups.</td>
</tr>
<tr>
    <td><CopyableCode code="WirelessDevices" /></td>
    <td><code>array</code></td>
    <td>List of wireless device resources that have been added to the network analyzer configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="WirelessGateways" /></td>
    <td><code>array</code></td>
    <td>List of wireless gateway resources that have been added to the network analyzer configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_network_analyzer_configurations">

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
    <td><CopyableCode code="NetworkAnalyzerConfigurationList" /></td>
    <td><code>array</code></td>
    <td>The list of network analyzer configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
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
    <td><a href="#get_network_analyzer_configuration"><CopyableCode code="get_network_analyzer_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configuration_name"><code>configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get network analyzer configuration.</td>
</tr>
<tr>
    <td><a href="#list_network_analyzer_configurations"><CopyableCode code="list_network_analyzer_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the network analyzer configurations.</td>
</tr>
<tr>
    <td><a href="#create_network_analyzer_configuration"><CopyableCode code="create_network_analyzer_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new network analyzer configuration.</td>
</tr>
<tr>
    <td><a href="#update_network_analyzer_configuration"><CopyableCode code="update_network_analyzer_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-configuration_name"><code>configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update network analyzer configuration.</td>
</tr>
<tr>
    <td><a href="#delete_network_analyzer_configuration"><CopyableCode code="delete_network_analyzer_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configuration_name"><code>configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a network analyzer configuration.</td>
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
<tr id="parameter-configuration_name">
    <td><CopyableCode code="configuration_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_network_analyzer_configuration"
    values={[
        { label: 'get_network_analyzer_configuration', value: 'get_network_analyzer_configuration' },
        { label: 'list_network_analyzer_configurations', value: 'list_network_analyzer_configurations' }
    ]}
>
<TabItem value="get_network_analyzer_configuration">

Get network analyzer configuration.

```sql
SELECT
Arn,
Description,
MulticastGroups,
Name,
TraceContent,
WirelessDevices,
WirelessGateways
FROM aws.iotwireless.network_analyzer_configurations
WHERE configuration_name = '{{ configuration_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_network_analyzer_configurations">

Lists the network analyzer configurations.

```sql
SELECT
NetworkAnalyzerConfigurationList,
NextToken
FROM aws.iotwireless.network_analyzer_configurations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_analyzer_configuration"
    values={[
        { label: 'create_network_analyzer_configuration', value: 'create_network_analyzer_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_analyzer_configuration">

Creates a new network analyzer configuration.

```sql
INSERT INTO aws.iotwireless.network_analyzer_configurations (
Name,
TraceContent,
WirelessDevices,
WirelessGateways,
Description,
Tags,
ClientRequestToken,
MulticastGroups,
region
)
SELECT 
'{{ Name }}',
'{{ TraceContent }}',
'{{ WirelessDevices }}',
'{{ WirelessGateways }}',
'{{ Description }}',
'{{ Tags }}',
'{{ ClientRequestToken }}',
'{{ MulticastGroups }}',
'{{ region }}'
RETURNING
Arn,
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_analyzer_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_analyzer_configurations resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Name of the network analyzer configuration.
    - name: TraceContent
      description: |
        Trace content for your wireless devices, gateways, and multicast groups.
      value:
        WirelessDeviceFrameInfo: "{{ WirelessDeviceFrameInfo }}"
        LogLevel: "{{ LogLevel }}"
        MulticastFrameInfo: "{{ MulticastFrameInfo }}"
    - name: WirelessDevices
      value:
        - "{{ WirelessDevices }}"
    - name: WirelessGateways
      value:
        - "{{ WirelessGateways }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the new resource.
    - name: Tags
      description: |
        The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests.
    - name: MulticastGroups
      value:
        - "{{ MulticastGroups }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_network_analyzer_configuration"
    values={[
        { label: 'update_network_analyzer_configuration', value: 'update_network_analyzer_configuration' }
    ]}
>
<TabItem value="update_network_analyzer_configuration">

Update network analyzer configuration.

```sql
UPDATE aws.iotwireless.network_analyzer_configurations
SET 
TraceContent = '{{ TraceContent }}',
WirelessDevicesToAdd = '{{ WirelessDevicesToAdd }}',
WirelessDevicesToRemove = '{{ WirelessDevicesToRemove }}',
WirelessGatewaysToAdd = '{{ WirelessGatewaysToAdd }}',
WirelessGatewaysToRemove = '{{ WirelessGatewaysToRemove }}',
Description = '{{ Description }}',
MulticastGroupsToAdd = '{{ MulticastGroupsToAdd }}',
MulticastGroupsToRemove = '{{ MulticastGroupsToRemove }}'
WHERE 
configuration_name = '{{ configuration_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_analyzer_configuration"
    values={[
        { label: 'delete_network_analyzer_configuration', value: 'delete_network_analyzer_configuration' }
    ]}
>
<TabItem value="delete_network_analyzer_configuration">

Deletes a network analyzer configuration.

```sql
DELETE FROM aws.iotwireless.network_analyzer_configurations
WHERE configuration_name = '{{ configuration_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
