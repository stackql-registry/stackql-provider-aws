--- 
title: network_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - network_resources
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

Creates, updates, deletes, gets or lists a <code>network_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.network_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_resources"
    values={[
        { label: 'get_network_resources', value: 'get_network_resources' }
    ]}
>
<TabItem value="get_network_resources">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AwsRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CoreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Definition" /></td>
    <td><code>string</code></td>
    <td>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DefinitionTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the resource definition was retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>object</code></td>
    <td>The resource metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="RegisteredGatewayArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the gateway. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type. The following are the supported resource types for Direct Connect: dxcon dx-gateway dx-vif The following are the supported resource types for Network Manager: attachment connect-peer connection core-network device link peering site The following are the supported resource types for Amazon VPC: customer-gateway transit-gateway transit-gateway-attachment transit-gateway-connect-peer transit-gateway-route-table vpn-connection (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags.</td>
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
    <td><a href="#get_network_resources"><CopyableCode code="get_network_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-coreNetworkId"><code>coreNetworkId</code></a>, <a href="#parameter-registeredGatewayArn"><code>registeredGatewayArn</code></a>, <a href="#parameter-awsRegion"><code>awsRegion</code></a>, <a href="#parameter-accountId"><code>accountId</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Describes the network resources for the specified global network. The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.</td>
</tr>
<tr>
    <td><a href="#update_network_resource_metadata"><CopyableCode code="update_network_resource_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the resource metadata for the specified global network.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource.</td>
</tr>
<tr id="parameter-accountId">
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-awsRegion">
    <td><CopyableCode code="awsRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region.</td>
</tr>
<tr id="parameter-coreNetworkId">
    <td><CopyableCode code="coreNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network.</td>
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
<tr id="parameter-registeredGatewayArn">
    <td><CopyableCode code="registeredGatewayArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the gateway.</td>
</tr>
<tr id="parameter-resourceArn">
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource.</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type. The following are the supported resource types for Direct Connect: dxcon dx-gateway dx-vif The following are the supported resource types for Network Manager: attachment connect-peer connection core-network device link peering site The following are the supported resource types for Amazon VPC: customer-gateway transit-gateway transit-gateway-attachment transit-gateway-connect-peer transit-gateway-route-table vpn-connection</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_network_resources"
    values={[
        { label: 'get_network_resources', value: 'get_network_resources' }
    ]}
>
<TabItem value="get_network_resources">

Describes the network resources for the specified global network. The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.

```sql
SELECT
AccountId,
AwsRegion,
CoreNetworkId,
Definition,
DefinitionTimestamp,
Metadata,
RegisteredGatewayArn,
ResourceArn,
ResourceId,
ResourceType,
Tags
FROM aws.networkmanager.network_resources
WHERE global_network_id = '{{ global_network_id }}' -- required
AND region = '{{ region }}' -- required
AND coreNetworkId = '{{ coreNetworkId }}'
AND registeredGatewayArn = '{{ registeredGatewayArn }}'
AND awsRegion = '{{ awsRegion }}'
AND accountId = '{{ accountId }}'
AND resourceType = '{{ resourceType }}'
AND resourceArn = '{{ resourceArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_network_resource_metadata"
    values={[
        { label: 'update_network_resource_metadata', value: 'update_network_resource_metadata' }
    ]}
>
<TabItem value="update_network_resource_metadata">

Updates the resource metadata for the specified global network.

```sql
UPDATE aws.networkmanager.network_resources
SET 
Metadata = '{{ Metadata }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
Metadata,
ResourceArn;
```
</TabItem>
</Tabs>
