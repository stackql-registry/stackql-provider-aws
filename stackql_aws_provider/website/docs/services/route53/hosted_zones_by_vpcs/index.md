--- 
title: hosted_zones_by_vpcs
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_zones_by_vpcs
  - route53
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

Creates, updates, deletes, gets or lists a <code>hosted_zones_by_vpcs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosted_zones_by_vpcs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.hosted_zones_by_vpcs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_hosted_zones_by_vpc"
    values={[
        { label: 'list_hosted_zones_by_vpc', value: 'list_hosted_zones_by_vpc' }
    ]}
>
<TabItem value="list_hosted_zones_by_vpc">

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
    <td><CopyableCode code="HostedZoneId" /></td>
    <td><code>string</code></td>
    <td>The Route 53 hosted zone ID of a private hosted zone that the specified VPC is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the private hosted zone, such as example.com.</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The owner of a private hosted zone that the specified VPC is associated with. The owner can be either an Amazon Web Services account or an Amazon Web Services service.</td>
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
    <td><a href="#list_hosted_zones_by_vpc"><CopyableCode code="list_hosted_zones_by_vpc" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vpcid"><code>vpcid</code></a>, <a href="#parameter-vpcregion"><code>vpcregion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxitems"><code>maxitems</code></a>, <a href="#parameter-nexttoken"><code>nexttoken</code></a></td>
    <td>Lists all the private hosted zones that a specified VPC is associated with, regardless of which Amazon Web Services account or Amazon Web Services service owns the hosted zones. The HostedZoneOwner structure in the response contains one of the following values: An OwningAccount element, which contains the account number of either the current Amazon Web Services account or another Amazon Web Services account. Some services, such as Cloud Map, create hosted zones using the current account. An OwningService element, which identifies the Amazon Web Services service that created and owns the hosted zone. For example, if a hosted zone was created by Amazon Elastic File System (Amazon EFS), the value of Owner is efs.amazonaws.com. ListHostedZonesByVPC returns the hosted zones associated with the specified VPC and does not reflect the hosted zone associations to VPCs via Route 53 Profiles. To get the associations to a Profile, call the ListProfileResourceAssociations API. When listing private hosted zones, the hosted zone and the Amazon VPC must belong to the same partition where the hosted zones were created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions: aws - Amazon Web Services Regions aws-cn - China Regions aws-us-gov - Amazon Web Services GovCloud (US) Region For more information, see Access Management in the Amazon Web Services General Reference.</td>
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
<tr id="parameter-vpcid">
    <td><CopyableCode code="vpcid" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon VPC that you want to list hosted zones for.</td>
</tr>
<tr id="parameter-vpcregion">
    <td><CopyableCode code="vpcregion" /></td>
    <td><code>string</code></td>
    <td>For the Amazon VPC that you specified for VPCId, the Amazon Web Services Region that you created the VPC in.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>(Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If the specified VPC is associated with more than MaxItems hosted zones, the response includes a NextToken element. NextToken contains an encrypted token that identifies the first hosted zone that Route 53 will return if you submit another request.</td>
</tr>
<tr id="parameter-nexttoken">
    <td><CopyableCode code="nexttoken" /></td>
    <td><code>string</code></td>
    <td>If the previous response included a NextToken element, the specified VPC is associated with more hosted zones. To get more hosted zones, submit another ListHostedZonesByVPC request. For the value of NextToken, specify the value of NextToken from the previous response. If the previous response didn't include a NextToken element, there are no more hosted zones to get.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_hosted_zones_by_vpc"
    values={[
        { label: 'list_hosted_zones_by_vpc', value: 'list_hosted_zones_by_vpc' }
    ]}
>
<TabItem value="list_hosted_zones_by_vpc">

Lists all the private hosted zones that a specified VPC is associated with, regardless of which Amazon Web Services account or Amazon Web Services service owns the hosted zones. The HostedZoneOwner structure in the response contains one of the following values: An OwningAccount element, which contains the account number of either the current Amazon Web Services account or another Amazon Web Services account. Some services, such as Cloud Map, create hosted zones using the current account. An OwningService element, which identifies the Amazon Web Services service that created and owns the hosted zone. For example, if a hosted zone was created by Amazon Elastic File System (Amazon EFS), the value of Owner is efs.amazonaws.com. ListHostedZonesByVPC returns the hosted zones associated with the specified VPC and does not reflect the hosted zone associations to VPCs via Route 53 Profiles. To get the associations to a Profile, call the ListProfileResourceAssociations API. When listing private hosted zones, the hosted zone and the Amazon VPC must belong to the same partition where the hosted zones were created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions: aws - Amazon Web Services Regions aws-cn - China Regions aws-us-gov - Amazon Web Services GovCloud (US) Region For more information, see Access Management in the Amazon Web Services General Reference.

```sql
SELECT
HostedZoneId,
Name,
Owner
FROM aws.route53.hosted_zones_by_vpcs
WHERE vpcid = '{{ vpcid }}' -- required
AND vpcregion = '{{ vpcregion }}' -- required
AND region = '{{ region }}' -- required
AND maxitems = '{{ maxitems }}'
AND nexttoken = '{{ nexttoken }}'
;
```
</TabItem>
</Tabs>
