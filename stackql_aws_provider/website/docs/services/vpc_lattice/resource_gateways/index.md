--- 
title: resource_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_gateways
  - vpc_lattice
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

Creates, updates, deletes, gets or lists a <code>resource_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.resource_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_gateway"
    values={[
        { label: 'get_resource_gateway', value: 'get_resource_gateway' },
        { label: 'list_resource_gateways', value: 'list_resource_gateways' }
    ]}
>
<TabItem value="get_resource_gateway">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource gateway. (pattern: &lt;code&gt;rgw-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource gateway. (pattern: &lt;code&gt;(?!rgw-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource gateway. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourcegateway/rgw-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the resource gateway was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressType" /></td>
    <td><code>string</code></td>
    <td>The type of IP address for the resource gateway. (IPV4, IPV6, DUALSTACK)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4AddressesPerEni" /></td>
    <td><code>integer</code></td>
    <td>The number of IPv4 addresses in each ENI for the resource gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the resource gateway was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="managedBy" /></td>
    <td><code>string</code></td>
    <td>The AWS service that manages the resource gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigDnsResolution" /></td>
    <td><code>string</code></td>
    <td>The DNS resolution type for resource configurations that are associated with this resource gateway. (IN_VPC, PUBLIC)</td>
</tr>
<tr>
    <td><CopyableCode code="securityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The security group IDs associated with the resource gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceManaged" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the resource gateway is managed by an AWS service.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status for the resource gateway. (ACTIVE, CREATE_IN_PROGRESS, UPDATE_IN_PROGRESS, DELETE_IN_PROGRESS, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPC subnets for resource gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for the resource gateway. (pattern: &lt;code&gt;vpc-((&#91;0-9a-z&#93;&#123;8&#125;)|(&#91;0-9a-z&#93;&#123;17&#125;))&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resource_gateways">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource gateway. (pattern: &lt;code&gt;rgw-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource gateway. (pattern: &lt;code&gt;(?!rgw-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource gateway. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourcegateway/rgw-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the VPC endpoint association was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressType" /></td>
    <td><code>string</code></td>
    <td>The type of IP address used by the resource gateway. (IPV4, IPV6, DUALSTACK)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4AddressesPerEni" /></td>
    <td><code>integer</code></td>
    <td>The number of IPv4 addresses in each ENI for the resource gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date and time that the resource gateway was updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigDnsResolution" /></td>
    <td><code>string</code></td>
    <td>The DNS resolution type for resource configurations that are associated with this resource gateway. (IN_VPC, PUBLIC)</td>
</tr>
<tr>
    <td><CopyableCode code="securityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups applied to the resource gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The name of the resource gateway. (ACTIVE, CREATE_IN_PROGRESS, UPDATE_IN_PROGRESS, DELETE_IN_PROGRESS, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPC subnets for the resource gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for the resource gateway. (pattern: &lt;code&gt;vpc-((&#91;0-9a-z&#93;&#123;8&#125;)|(&#91;0-9a-z&#93;&#123;17&#125;))&lt;/code&gt;)</td>
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
    <td><a href="#get_resource_gateway"><CopyableCode code="get_resource_gateway" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_gateway_identifier"><code>resource_gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified resource gateway.</td>
</tr>
<tr>
    <td><a href="#list_resource_gateways"><CopyableCode code="list_resource_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the resource gateways that you own or that were shared with you.</td>
</tr>
<tr>
    <td><a href="#create_resource_gateway"><CopyableCode code="create_resource_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>A resource gateway is a point of ingress into the VPC where a resource resides. It spans multiple Availability Zones. For your resource to be accessible from all Availability Zones, you should create your resource gateways to span as many Availability Zones as possible. A VPC can have multiple resource gateways.</td>
</tr>
<tr>
    <td><a href="#update_resource_gateway"><CopyableCode code="update_resource_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_gateway_identifier"><code>resource_gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified resource gateway.</td>
</tr>
<tr>
    <td><a href="#delete_resource_gateway"><CopyableCode code="delete_resource_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_gateway_identifier"><code>resource_gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified resource gateway.</td>
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
<tr id="parameter-resource_gateway_identifier">
    <td><CopyableCode code="resource_gateway_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the resource gateway.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum page size.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, a pagination token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_gateway"
    values={[
        { label: 'get_resource_gateway', value: 'get_resource_gateway' },
        { label: 'list_resource_gateways', value: 'list_resource_gateways' }
    ]}
>
<TabItem value="get_resource_gateway">

Retrieves information about the specified resource gateway.

```sql
SELECT
id,
name,
arn,
createdAt,
ipAddressType,
ipv4AddressesPerEni,
lastUpdatedAt,
managedBy,
resourceConfigDnsResolution,
securityGroupIds,
serviceManaged,
status,
subnetIds,
vpcId
FROM aws.vpc_lattice.resource_gateways
WHERE resource_gateway_identifier = '{{ resource_gateway_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resource_gateways">

Lists the resource gateways that you own or that were shared with you.

```sql
SELECT
id,
name,
arn,
createdAt,
ipAddressType,
ipv4AddressesPerEni,
lastUpdatedAt,
resourceConfigDnsResolution,
securityGroupIds,
status,
subnetIds,
vpcIdentifier
FROM aws.vpc_lattice.resource_gateways
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_gateway"
    values={[
        { label: 'create_resource_gateway', value: 'create_resource_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_gateway">

A resource gateway is a point of ingress into the VPC where a resource resides. It spans multiple Availability Zones. For your resource to be accessible from all Availability Zones, you should create your resource gateways to span as many Availability Zones as possible. A VPC can have multiple resource gateways.

```sql
INSERT INTO aws.vpc_lattice.resource_gateways (
clientToken,
name,
vpcIdentifier,
subnetIds,
securityGroupIds,
ipAddressType,
ipv4AddressesPerEni,
resourceConfigDnsResolution,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ vpcIdentifier }}',
'{{ subnetIds }}',
'{{ securityGroupIds }}',
'{{ ipAddressType }}',
{{ ipv4AddressesPerEni }},
'{{ resourceConfigDnsResolution }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
ipAddressType,
ipv4AddressesPerEni,
resourceConfigDnsResolution,
securityGroupIds,
status,
subnetIds,
vpcIdentifier
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_gateways resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: vpcIdentifier
      value: "{{ vpcIdentifier }}"
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
    - name: ipAddressType
      value: "{{ ipAddressType }}"
      valid_values: ['IPV4', 'IPV6', 'DUALSTACK']
    - name: ipv4AddressesPerEni
      value: {{ ipv4AddressesPerEni }}
    - name: resourceConfigDnsResolution
      value: "{{ resourceConfigDnsResolution }}"
      valid_values: ['IN_VPC', 'PUBLIC']
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_gateway"
    values={[
        { label: 'update_resource_gateway', value: 'update_resource_gateway' }
    ]}
>
<TabItem value="update_resource_gateway">

Updates the specified resource gateway.

```sql
UPDATE aws.vpc_lattice.resource_gateways
SET 
securityGroupIds = '{{ securityGroupIds }}'
WHERE 
resource_gateway_identifier = '{{ resource_gateway_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
arn,
ipAddressType,
securityGroupIds,
status,
subnetIds,
vpcId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_gateway"
    values={[
        { label: 'delete_resource_gateway', value: 'delete_resource_gateway' }
    ]}
>
<TabItem value="delete_resource_gateway">

Deletes the specified resource gateway.

```sql
DELETE FROM aws.vpc_lattice.resource_gateways
WHERE resource_gateway_identifier = '{{ resource_gateway_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
