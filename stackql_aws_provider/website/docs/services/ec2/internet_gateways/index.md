--- 
title: internet_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - internet_gateways
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

Creates, updates, deletes, gets or lists an <code>internet_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="internet_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.internet_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_internet_gateways"
    values={[
        { label: 'describe_internet_gateways', value: 'describe_internet_gateways' }
    ]}
>
<TabItem value="describe_internet_gateways">

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
    <td><CopyableCode code="Attachments" /></td>
    <td><code>string</code></td>
    <td>Any VPCs attached to the internet gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="InternetGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the internet gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the internet gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the internet gateway.</td>
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
    <td><a href="#describe_internet_gateways"><CopyableCode code="describe_internet_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-InternetGatewayId"><code>InternetGatewayId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes your internet gateways. The default is to describe all your internet gateways. Alternatively, you can specify specific internet gateway IDs or filter the results to include only the internet gateways that match specific criteria.</td>
</tr>
<tr>
    <td><a href="#create_internet_gateway"><CopyableCode code="create_internet_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC using AttachInternetGateway. For more information, see Internet gateways in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#attach_internet_gateway"><CopyableCode code="attach_internet_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InternetGatewayId"><code>InternetGatewayId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and the VPC. For more information, see Internet gateways in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_internet_gateway"><CopyableCode code="delete_internet_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-InternetGatewayId"><code>InternetGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified internet gateway. You must detach the internet gateway from the VPC before you can delete it.</td>
</tr>
<tr>
    <td><a href="#detach_internet_gateway"><CopyableCode code="detach_internet_gateway" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InternetGatewayId"><code>InternetGatewayId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Detaches an internet gateway from a VPC, disabling connectivity between the internet and the VPC. The VPC must not contain any running instances with Elastic IP addresses or public IPv4 addresses.</td>
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
<tr id="parameter-InternetGatewayId">
    <td><CopyableCode code="InternetGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the internet gateway.</td>
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
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. attachment.state - The current state of the attachment between the gateway and the VPC (available). Present only if a VPC is attached. attachment.vpc-id - The ID of an attached VPC. internet-gateway-id - The ID of the Internet gateway. owner-id - The ID of the Amazon Web Services account that owns the internet gateway. tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-InternetGatewayId">
    <td><CopyableCode code="InternetGatewayId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the internet gateways. Default: Describes all your internet gateways.</td>
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
    <td>The tags to assign to the internet gateway.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_internet_gateways"
    values={[
        { label: 'describe_internet_gateways', value: 'describe_internet_gateways' }
    ]}
>
<TabItem value="describe_internet_gateways">

Describes your internet gateways. The default is to describe all your internet gateways. Alternatively, you can specify specific internet gateway IDs or filter the results to include only the internet gateways that match specific criteria.

```sql
SELECT
Attachments,
InternetGatewayId,
OwnerId,
Tags
FROM aws.ec2.internet_gateways
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND InternetGatewayId = '{{ InternetGatewayId }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_internet_gateway"
    values={[
        { label: 'create_internet_gateway', value: 'create_internet_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_internet_gateway">

Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC using AttachInternetGateway. For more information, see Internet gateways in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.internet_gateways (
region,
TagSpecification,
DryRun
)
SELECT 
'{{ region }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
Attachments,
InternetGatewayId,
OwnerId,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: internet_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the internet_gateways resource.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the internet gateway.
      description: The tags to assign to the internet gateway.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_internet_gateway"
    values={[
        { label: 'attach_internet_gateway', value: 'attach_internet_gateway' }
    ]}
>
<TabItem value="attach_internet_gateway">

Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and the VPC. For more information, see Internet gateways in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.internet_gateways
SET 
-- No updatable properties
WHERE 
InternetGatewayId = '{{ InternetGatewayId }}' --required
AND VpcId = '{{ VpcId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}};
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_internet_gateway"
    values={[
        { label: 'delete_internet_gateway', value: 'delete_internet_gateway' }
    ]}
>
<TabItem value="delete_internet_gateway">

Deletes the specified internet gateway. You must detach the internet gateway from the VPC before you can delete it.

```sql
DELETE FROM aws.ec2.internet_gateways
WHERE InternetGatewayId = '{{ InternetGatewayId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_internet_gateway"
    values={[
        { label: 'detach_internet_gateway', value: 'detach_internet_gateway' }
    ]}
>
<TabItem value="detach_internet_gateway">

Detaches an internet gateway from a VPC, disabling connectivity between the internet and the VPC. The VPC must not contain any running instances with Elastic IP addresses or public IPv4 addresses.

```sql
EXEC aws.ec2.internet_gateways.detach_internet_gateway 
@InternetGatewayId='{{ InternetGatewayId }}' --required, 
@VpcId='{{ VpcId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
