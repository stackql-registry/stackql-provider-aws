--- 
title: vpc_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_attributes
  - ec2
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

Creates, updates, deletes, gets or lists a <code>vpc_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_attribute"
    values={[
        { label: 'describe_vpc_attribute', value: 'describe_vpc_attribute' }
    ]}
>
<TabItem value="describe_vpc_attribute">

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
    <td><CopyableCode code="enable_dns_hostnames" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_dns_support" /></td>
    <td><code>string</code></td>
    <td>Indicates whether DNS resolution is enabled for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_network_address_usage_metrics" /></td>
    <td><code>string</code></td>
    <td>Indicates whether Network Address Usage metrics are enabled for your VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
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
    <td><a href="#describe_vpc_attribute"><CopyableCode code="describe_vpc_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_attribute"><CopyableCode code="modify_vpc_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnableDnsHostnames"><code>EnableDnsHostnames</code></a>, <a href="#parameter-EnableDnsSupport"><code>EnableDnsSupport</code></a>, <a href="#parameter-EnableNetworkAddressUsageMetrics"><code>EnableNetworkAddressUsageMetrics</code></a></td>
    <td>Modifies the specified attribute of the specified VPC.</td>
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
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The VPC attribute.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EnableDnsHostnames">
    <td><CopyableCode code="EnableDnsHostnames" /></td>
    <td><code>object</code></td>
    <td>Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not. You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute. You can only enable DNS hostnames if you've enabled DNS support.</td>
</tr>
<tr id="parameter-EnableDnsSupport">
    <td><CopyableCode code="EnableDnsSupport" /></td>
    <td><code>object</code></td>
    <td>Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled. You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute.</td>
</tr>
<tr id="parameter-EnableNetworkAddressUsageMetrics">
    <td><CopyableCode code="EnableNetworkAddressUsageMetrics" /></td>
    <td><code>object</code></td>
    <td>Indicates whether Network Address Usage metrics are enabled for your VPC.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_attribute"
    values={[
        { label: 'describe_vpc_attribute', value: 'describe_vpc_attribute' }
    ]}
>
<TabItem value="describe_vpc_attribute">

Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.

```sql
SELECT
enable_dns_hostnames,
enable_dns_support,
enable_network_address_usage_metrics,
vpc_id
FROM aws.ec2.vpc_attributes
WHERE Attribute = '{{ Attribute }}' -- required
AND VpcId = '{{ VpcId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_attribute"
    values={[
        { label: 'modify_vpc_attribute', value: 'modify_vpc_attribute' }
    ]}
>
<TabItem value="modify_vpc_attribute">

Modifies the specified attribute of the specified VPC.

```sql
UPDATE aws.ec2.vpc_attributes
SET 
-- No updatable properties
WHERE 
VpcId = '{{ VpcId }}' --required
AND region = '{{ region }}' --required
AND EnableDnsHostnames = '{{ EnableDnsHostnames}}'
AND EnableDnsSupport = '{{ EnableDnsSupport}}'
AND EnableNetworkAddressUsageMetrics = '{{ EnableNetworkAddressUsageMetrics}}';
```
</TabItem>
</Tabs>
