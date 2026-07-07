--- 
title: vpc_endpoint_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_associations
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoint_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoint_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_endpoint_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_endpoint_associations"
    values={[
        { label: 'describe_vpc_endpoint_associations', value: 'describe_vpc_endpoint_associations' }
    ]}
>
<TabItem value="describe_vpc_endpoint_associations">

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
    <td><CopyableCode code="AssociatedResourceAccessibility" /></td>
    <td><code>string</code></td>
    <td>The connectivity status of the resources associated to a VPC endpoint. The resource is accessible if the associated resource configuration is AVAILABLE, otherwise the resource is inaccessible.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated resource.</td>
</tr>
<tr>
    <td><CopyableCode code="DnsEntry" /></td>
    <td><code>string</code></td>
    <td>The DNS entry of the VPC endpoint association.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureCode" /></td>
    <td><code>string</code></td>
    <td>An error code related to why an VPC endpoint association failed.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>A message related to why an VPC endpoint association failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint association.</td>
</tr>
<tr>
    <td><CopyableCode code="PrivateDnsEntry" /></td>
    <td><code>string</code></td>
    <td>The private DNS entry of the VPC endpoint association.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceConfigurationGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource configuration group.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceNetworkName" /></td>
    <td><code>string</code></td>
    <td>The name of the service network.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags to apply to the VPC endpoint association.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint.</td>
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
    <td><a href="#describe_vpc_endpoint_associations"><CopyableCode code="describe_vpc_endpoint_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the VPC resources, VPC endpoint services, Amazon Lattice services, or service networks associated with the VPC endpoint.</td>
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
    <td>The filters. vpc-endpoint-id - The ID of the VPC endpoint. associated-resource-accessibility - The association state. When the state is accessible, it returns AVAILABLE. When the state is inaccessible, it returns PENDING or FAILED. association-id - The ID of the VPC endpoint association. associated-resource-id - The ID of the associated resource configuration. service-network-arn - The Amazon Resource Name (ARN) of the associated service network. Only VPC endpoints of type service network will be returned. resource-configuration-group-arn - The Amazon Resource Name (ARN) of the resource configuration of type GROUP.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum page size.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token.</td>
</tr>
<tr id="parameter-VpcEndpointId">
    <td><CopyableCode code="VpcEndpointId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPC endpoints.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_endpoint_associations"
    values={[
        { label: 'describe_vpc_endpoint_associations', value: 'describe_vpc_endpoint_associations' }
    ]}
>
<TabItem value="describe_vpc_endpoint_associations">

Describes the VPC resources, VPC endpoint services, Amazon Lattice services, or service networks associated with the VPC endpoint.

```sql
SELECT
AssociatedResourceAccessibility,
AssociatedResourceArn,
DnsEntry,
FailureCode,
FailureReason,
Id,
PrivateDnsEntry,
ResourceConfigurationGroupArn,
ServiceNetworkArn,
ServiceNetworkName,
Tags,
VpcEndpointId
FROM aws.ec2.vpc_endpoint_associations
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND VpcEndpointId = '{{ VpcEndpointId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
