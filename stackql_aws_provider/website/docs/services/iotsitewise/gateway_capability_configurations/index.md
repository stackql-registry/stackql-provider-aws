--- 
title: gateway_capability_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - gateway_capability_configurations
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>gateway_capability_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateway_capability_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.gateway_capability_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_gateway_capability_configuration"
    values={[
        { label: 'describe_gateway_capability_configuration', value: 'describe_gateway_capability_configuration' }
    ]}
>
<TabItem value="describe_gateway_capability_configuration">

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
    <td><CopyableCode code="capability_configuration" /></td>
    <td><code>string</code></td>
    <td>The JSON document that defines the gateway capability's configuration. For more information, see Configuring data sources (CLI) in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="capability_namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the gateway capability. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;+:&#91;a-zA-Z&#93;+:&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capability_sync_status" /></td>
    <td><code>string</code></td>
    <td>The synchronization status of the gateway capability configuration. The sync status can be one of the following: IN_SYNC - The gateway is running with the latest configuration. OUT_OF_SYNC - The gateway hasn't received the latest configuration. SYNC_FAILED - The gateway rejected the latest configuration. UNKNOWN - The gateway hasn't reported its sync status. NOT_APPLICABLE - The gateway doesn't support this capability. This is most common when integrating partner data sources, because the data integration is handled externally by the partner. (IN_SYNC, OUT_OF_SYNC, SYNC_FAILED, UNKNOWN, NOT_APPLICABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the gateway that defines the capability configuration. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_gateway_capability_configuration"><CopyableCode code="describe_gateway_capability_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-capability_namespace"><code>capability_namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability. . The namespace follows the format service:capability:version, where: service - The service providing the capability, or iotsitewise. capability - The specific capability type. Options include: opcuacollector for the OPC UA data source collector, or publisher for data publisher capability. version - The version number of the capability. Option include 2 for Classic streams, V2 gateways, and 3 for MQTT-enabled, V3 gateways. After updating a capability configuration, the sync status becomes OUT_OF_SYNC until the gateway processes the configuration.Use DescribeGatewayCapabilityConfiguration to check the sync status and verify the configuration was applied. A gateway can have multiple capability configurations with different namespaces.</td>
</tr>
<tr>
    <td><a href="#update_gateway_capability_configuration"><CopyableCode code="update_gateway_capability_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-capabilityNamespace"><code>capabilityNamespace</code></a>, <a href="#parameter-capabilityConfiguration"><code>capabilityConfiguration</code></a></td>
    <td></td>
    <td>Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. Important workflow notes: Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability. . The namespace follows the format service:capability:version, where: service - The service providing the capability, or iotsitewise. capability - The specific capability type. Options include: opcuacollector for the OPC UA data source collector, or publisher for data publisher capability. version - The version number of the capability. Option include 2 for Classic streams, V2 gateways, and 3 for MQTT-enabled, V3 gateways. After updating a capability configuration, the sync status becomes OUT_OF_SYNC until the gateway processes the configuration.Use DescribeGatewayCapabilityConfiguration to check the sync status and verify the configuration was applied. A gateway can have multiple capability configurations with different namespaces.</td>
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
<tr id="parameter-capability_namespace">
    <td><CopyableCode code="capability_namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the capability configuration. For example, if you configure OPC UA sources for an MQTT-enabled gateway, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:3.</td>
</tr>
<tr id="parameter-gateway_id">
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the gateway to be updated.</td>
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
    defaultValue="describe_gateway_capability_configuration"
    values={[
        { label: 'describe_gateway_capability_configuration', value: 'describe_gateway_capability_configuration' }
    ]}
>
<TabItem value="describe_gateway_capability_configuration">

Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability. . The namespace follows the format service:capability:version, where: service - The service providing the capability, or iotsitewise. capability - The specific capability type. Options include: opcuacollector for the OPC UA data source collector, or publisher for data publisher capability. version - The version number of the capability. Option include 2 for Classic streams, V2 gateways, and 3 for MQTT-enabled, V3 gateways. After updating a capability configuration, the sync status becomes OUT_OF_SYNC until the gateway processes the configuration.Use DescribeGatewayCapabilityConfiguration to check the sync status and verify the configuration was applied. A gateway can have multiple capability configurations with different namespaces.

```sql
SELECT
capability_configuration,
capability_namespace,
capability_sync_status,
gateway_id
FROM aws.iotsitewise.gateway_capability_configurations
WHERE gateway_id = '{{ gateway_id }}' -- required
AND capability_namespace = '{{ capability_namespace }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gateway_capability_configuration"
    values={[
        { label: 'update_gateway_capability_configuration', value: 'update_gateway_capability_configuration' }
    ]}
>
<TabItem value="update_gateway_capability_configuration">

Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. Important workflow notes: Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability. . The namespace follows the format service:capability:version, where: service - The service providing the capability, or iotsitewise. capability - The specific capability type. Options include: opcuacollector for the OPC UA data source collector, or publisher for data publisher capability. version - The version number of the capability. Option include 2 for Classic streams, V2 gateways, and 3 for MQTT-enabled, V3 gateways. After updating a capability configuration, the sync status becomes OUT_OF_SYNC until the gateway processes the configuration.Use DescribeGatewayCapabilityConfiguration to check the sync status and verify the configuration was applied. A gateway can have multiple capability configurations with different namespaces.

```sql
UPDATE aws.iotsitewise.gateway_capability_configurations
SET 
capabilityNamespace = '{{ capabilityNamespace }}',
capabilityConfiguration = '{{ capabilityConfiguration }}'
WHERE 
gateway_id = '{{ gateway_id }}' --required
AND region = '{{ region }}' --required
AND capabilityNamespace = '{{ capabilityNamespace }}' --required
AND capabilityConfiguration = '{{ capabilityConfiguration }}' --required
RETURNING
capability_namespace,
capability_sync_status;
```
</TabItem>
</Tabs>
