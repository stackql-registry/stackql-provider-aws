--- 
title: gateway_informations
hide_title: false
hide_table_of_contents: false
keywords:
  - gateway_informations
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>gateway_informations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateway_informations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.gateway_informations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_gateway_information"
    values={[
        { label: 'describe_gateway_information', value: 'describe_gateway_information' }
    ]}
>
<TabItem value="describe_gateway_information">

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
    <td><CopyableCode code="CloudWatchLogGroupARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor events in the gateway. This field only only exist and returns once it have been chosen and set by the SGW service, based on the OS version of the gateway VM</td>
</tr>
<tr>
    <td><CopyableCode code="DeprecationDate" /></td>
    <td><code>string</code></td>
    <td>Date after which this gateway will not receive software updates for new features and bug fixes.</td>
</tr>
<tr>
    <td><CopyableCode code="Ec2InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon EC2 instance that was used to launch the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Ec2InstanceRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the Amazon EC2 instance is located.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of endpoint for your gateway. Valid Values: STANDARD | FIPS</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayCapacity" /></td>
    <td><code>string</code></td>
    <td>Specifies the size of the gateway's metadata cache. (Small, Medium, Large)</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayName" /></td>
    <td><code>string</code></td>
    <td>The name you configured for your gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayNetworkInterfaces" /></td>
    <td><code>array</code></td>
    <td>A NetworkInterface array that contains descriptions of the gateway network interfaces.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayState" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the operating state of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayTimezone" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the time zone configured for the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayType" /></td>
    <td><code>string</code></td>
    <td>The type of the gateway. Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit this blog post.</td>
</tr>
<tr>
    <td><CopyableCode code="HostEnvironment" /></td>
    <td><code>string</code></td>
    <td>The type of hardware or software platform on which the gateway is running. Tape Gateway is no longer available on Snow Family devices. (VMWARE, HYPER-V, EC2, KVM, OTHER, SNOWBALL)</td>
</tr>
<tr>
    <td><CopyableCode code="HostEnvironmentId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the specific instance of the host platform running the gateway. This value is only available for certain host environments, and its format depends on the host environment type.</td>
</tr>
<tr>
    <td><CopyableCode code="LastSoftwareUpdate" /></td>
    <td><code>string</code></td>
    <td>The date on which the last software update was applied to the gateway. If the gateway has never been updated, this field does not return a value in the response. This only only exist and returns once it have been chosen and set by the SGW service, based on the OS version of the gateway VM</td>
</tr>
<tr>
    <td><CopyableCode code="NextUpdateAvailabilityDate" /></td>
    <td><code>string</code></td>
    <td>The date on which an update to the gateway is available. This date is in the time zone of the gateway. If the gateway is not available for an update this field is not returned in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="SoftwareUpdatesEndDate" /></td>
    <td><code>string</code></td>
    <td>Date after which this gateway will not receive software updates for new features.</td>
</tr>
<tr>
    <td><CopyableCode code="SoftwareVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the software running on the gateway appliance.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedGatewayCapacities" /></td>
    <td><code>array</code></td>
    <td>A list of the metadata cache sizes that the gateway can support based on its current hardware specifications.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation.</td>
</tr>
<tr>
    <td><CopyableCode code="VPCEndpoint" /></td>
    <td><code>string</code></td>
    <td>The configuration settings for the virtual private cloud (VPC) endpoint for your gateway.</td>
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
    <td><a href="#describe_gateway_information"><CopyableCode code="describe_gateway_information" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</td>
</tr>
<tr>
    <td><a href="#update_gateway_information"><CopyableCode code="update_gateway_information" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache size. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request. For gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.</td>
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
    defaultValue="describe_gateway_information"
    values={[
        { label: 'describe_gateway_information', value: 'describe_gateway_information' }
    ]}
>
<TabItem value="describe_gateway_information">

Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

```sql
SELECT
CloudWatchLogGroupARN,
DeprecationDate,
Ec2InstanceId,
Ec2InstanceRegion,
EndpointType,
GatewayARN,
GatewayCapacity,
GatewayId,
GatewayName,
GatewayNetworkInterfaces,
GatewayState,
GatewayTimezone,
GatewayType,
HostEnvironment,
HostEnvironmentId,
LastSoftwareUpdate,
NextUpdateAvailabilityDate,
SoftwareUpdatesEndDate,
SoftwareVersion,
SupportedGatewayCapacities,
Tags,
VPCEndpoint
FROM aws.storagegateway.gateway_informations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gateway_information"
    values={[
        { label: 'update_gateway_information', value: 'update_gateway_information' }
    ]}
>
<TabItem value="update_gateway_information">

Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache size. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request. For gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.

```sql
UPDATE aws.storagegateway.gateway_informations
SET 
GatewayARN = '{{ GatewayARN }}',
GatewayName = '{{ GatewayName }}',
GatewayTimezone = '{{ GatewayTimezone }}',
CloudWatchLogGroupARN = '{{ CloudWatchLogGroupARN }}',
GatewayCapacity = '{{ GatewayCapacity }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
RETURNING
GatewayARN,
GatewayName;
```
</TabItem>
</Tabs>
