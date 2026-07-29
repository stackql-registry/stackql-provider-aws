--- 
title: egress_only_internet_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - egress_only_internet_gateways
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

Creates, updates, deletes, gets or lists an <code>egress_only_internet_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="egress_only_internet_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.egress_only_internet_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_egress_only_internet_gateways"
    values={[
        { label: 'describe_egress_only_internet_gateways', value: 'describe_egress_only_internet_gateways' }
    ]}
>
<TabItem value="describe_egress_only_internet_gateways">

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
    <td><CopyableCode code="attachments" /></td>
    <td><code>string</code></td>
    <td>Information about the attachment of the egress-only internet gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="egress_only_internet_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the egress-only internet gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the egress-only internet gateway.</td>
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
    <td><a href="#describe_egress_only_internet_gateways"><CopyableCode code="describe_egress_only_internet_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-EgressOnlyInternetGatewayId"><code>EgressOnlyInternetGatewayId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes your egress-only internet gateways. The default is to describe all your egress-only internet gateways. Alternatively, you can specify specific egress-only internet gateway IDs or filter the results to include only the egress-only internet gateways that match specific criteria.</td>
</tr>
<tr>
    <td><a href="#create_egress_only_internet_gateway"><CopyableCode code="create_egress_only_internet_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>&#91;IPv6 only&#93; Creates an egress-only internet gateway for your VPC. An egress-only internet gateway is used to enable outbound communication over IPv6 from instances in your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6 connection with your instance.</td>
</tr>
<tr>
    <td><a href="#delete_egress_only_internet_gateway"><CopyableCode code="delete_egress_only_internet_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-EgressOnlyInternetGatewayId"><code>EgressOnlyInternetGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes an egress-only internet gateway.</td>
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
<tr id="parameter-EgressOnlyInternetGatewayId">
    <td><CopyableCode code="EgressOnlyInternetGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the egress-only internet gateway.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for which to create the egress-only internet gateway.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EgressOnlyInternetGatewayId">
    <td><CopyableCode code="EgressOnlyInternetGatewayId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the egress-only internet gateways.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the egress-only internet gateway.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_egress_only_internet_gateways"
    values={[
        { label: 'describe_egress_only_internet_gateways', value: 'describe_egress_only_internet_gateways' }
    ]}
>
<TabItem value="describe_egress_only_internet_gateways">

Describes your egress-only internet gateways. The default is to describe all your egress-only internet gateways. Alternatively, you can specify specific egress-only internet gateway IDs or filter the results to include only the egress-only internet gateways that match specific criteria.

```sql
SELECT
attachments,
egress_only_internet_gateway_id,
tags
FROM aws.ec2.egress_only_internet_gateways
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND EgressOnlyInternetGatewayId = '{{ EgressOnlyInternetGatewayId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_egress_only_internet_gateway"
    values={[
        { label: 'create_egress_only_internet_gateway', value: 'create_egress_only_internet_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_egress_only_internet_gateway">

[IPv6 only] Creates an egress-only internet gateway for your VPC. An egress-only internet gateway is used to enable outbound communication over IPv6 from instances in your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6 connection with your instance.

```sql
INSERT INTO aws.ec2.egress_only_internet_gateways (
VpcId,
region,
ClientToken,
DryRun,
TagSpecification
)
SELECT 
'{{ VpcId }}',
'{{ region }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ TagSpecification }}'
RETURNING
attachments,
egress_only_internet_gateway_id,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: egress_only_internet_gateways
  props:
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the egress_only_internet_gateways resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the egress_only_internet_gateways resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the egress-only internet gateway.
      description: The tags to assign to the egress-only internet gateway.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_egress_only_internet_gateway"
    values={[
        { label: 'delete_egress_only_internet_gateway', value: 'delete_egress_only_internet_gateway' }
    ]}
>
<TabItem value="delete_egress_only_internet_gateway">

Deletes an egress-only internet gateway.

```sql
DELETE FROM aws.ec2.egress_only_internet_gateways
WHERE EgressOnlyInternetGatewayId = '{{ EgressOnlyInternetGatewayId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
