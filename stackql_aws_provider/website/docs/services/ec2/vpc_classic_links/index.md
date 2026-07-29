--- 
title: vpc_classic_links
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_classic_links
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

Creates, updates, deletes, gets or lists a <code>vpc_classic_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_classic_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_classic_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_classic_link"
    values={[
        { label: 'describe_vpc_classic_link', value: 'describe_vpc_classic_link' }
    ]}
>
<TabItem value="describe_vpc_classic_link">

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
    <td><CopyableCode code="classic_link_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the VPC is enabled for ClassicLink.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the VPC.</td>
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
    <td><a href="#describe_vpc_classic_link"><CopyableCode code="describe_vpc_classic_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>This action is deprecated. Describes the ClassicLink status of the specified VPCs.</td>
</tr>
<tr>
    <td><a href="#disable_vpc_classic_link_dns_support"><CopyableCode code="disable_vpc_classic_link_dns_support" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a></td>
    <td>This action is deprecated. Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to public IP addresses when addressed between a linked EC2-Classic instance and instances in the VPC to which it's linked. You must specify a VPC ID in the request.</td>
</tr>
<tr>
    <td><a href="#enable_vpc_classic_link_dns_support"><CopyableCode code="enable_vpc_classic_link_dns_support" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a></td>
    <td>This action is deprecated. Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled, the DNS hostname of a linked EC2-Classic instance resolves to its private IP address when addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname of an instance in a VPC resolves to its private IP address when addressed from a linked EC2-Classic instance. You must specify a VPC ID in the request.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. is-classic-link-enabled - Whether the VPC is enabled for ClassicLink (true | false). tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_classic_link"
    values={[
        { label: 'describe_vpc_classic_link', value: 'describe_vpc_classic_link' }
    ]}
>
<TabItem value="describe_vpc_classic_link">

This action is deprecated. Describes the ClassicLink status of the specified VPCs.

```sql
SELECT
classic_link_enabled,
tags,
vpc_id
FROM aws.ec2.vpc_classic_links
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND VpcId = '{{ VpcId }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_vpc_classic_link_dns_support"
    values={[
        { label: 'disable_vpc_classic_link_dns_support', value: 'disable_vpc_classic_link_dns_support' },
        { label: 'enable_vpc_classic_link_dns_support', value: 'enable_vpc_classic_link_dns_support' }
    ]}
>
<TabItem value="disable_vpc_classic_link_dns_support">

This action is deprecated. Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to public IP addresses when addressed between a linked EC2-Classic instance and instances in the VPC to which it's linked. You must specify a VPC ID in the request.

```sql
EXEC aws.ec2.vpc_classic_links.disable_vpc_classic_link_dns_support 
@region='{{ region }}' --required, 
@VpcId='{{ VpcId }}'
;
```
</TabItem>
<TabItem value="enable_vpc_classic_link_dns_support">

This action is deprecated. Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled, the DNS hostname of a linked EC2-Classic instance resolves to its private IP address when addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname of an instance in a VPC resolves to its private IP address when addressed from a linked EC2-Classic instance. You must specify a VPC ID in the request.

```sql
EXEC aws.ec2.vpc_classic_links.enable_vpc_classic_link_dns_support 
@region='{{ region }}' --required, 
@VpcId='{{ VpcId }}'
;
```
</TabItem>
</Tabs>
