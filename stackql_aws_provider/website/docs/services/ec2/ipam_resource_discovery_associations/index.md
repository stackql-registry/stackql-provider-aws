--- 
title: ipam_resource_discovery_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_resource_discovery_associations
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

Creates, updates, deletes, gets or lists an <code>ipam_resource_discovery_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_resource_discovery_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_resource_discovery_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_resource_discovery_associations"
    values={[
        { label: 'describe_ipam_resource_discovery_associations', value: 'describe_ipam_resource_discovery_associations' }
    ]}
>
<TabItem value="describe_ipam_resource_discovery_associations">

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
    <td><CopyableCode code="ipam_arn" /></td>
    <td><code>string</code></td>
    <td>The IPAM ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_id" /></td>
    <td><code>string</code></td>
    <td>The IPAM ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_region" /></td>
    <td><code>string</code></td>
    <td>The IPAM home Region.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_resource_discovery_association_arn" /></td>
    <td><code>string</code></td>
    <td>The resource discovery association Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_resource_discovery_association_id" /></td>
    <td><code>string</code></td>
    <td>The resource discovery association ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_resource_discovery_id" /></td>
    <td><code>string</code></td>
    <td>The resource discovery ID.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the resource discovery is the default. When you create an IPAM, a default resource discovery is created for your IPAM and it's associated with your IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the resource discovery owner.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_discovery_status" /></td>
    <td><code>string</code></td>
    <td>The resource discovery status. active - Connection or permissions required to read the results of the resource discovery are intact. not-found - Connection or permissions required to read the results of the resource discovery are broken. This may happen if the owner of the resource discovery stopped sharing it or deleted the resource discovery. Verify the resource discovery still exists and the Amazon Web Services RAM resource share is still intact.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the association when you associate or disassociate a resource discovery. associate-in-progress - Resource discovery is being associated. associate-complete - Resource discovery association is complete. associate-failed - Resource discovery association has failed. disassociate-in-progress - Resource discovery is being disassociated. disassociate-complete - Resource discovery disassociation is complete. disassociate-failed - Resource discovery disassociation has failed. isolate-in-progress - Amazon Web Services account that created the resource discovery association has been removed and the resource discovery association is being isolated. isolate-complete - Resource discovery isolation is complete. restore-in-progress - Resource discovery is being restored.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</td>
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
    <td><a href="#describe_ipam_resource_discovery_associations"><CopyableCode code="describe_ipam_resource_discovery_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-IpamResourceDiscoveryAssociationId"><code>IpamResourceDiscoveryAssociationId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes resource discovery association with an Amazon VPC IPAM. An associated resource discovery is a resource discovery that has been associated with an IPAM..</td>
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
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The resource discovery association filters.</td>
</tr>
<tr id="parameter-IpamResourceDiscoveryAssociationId">
    <td><CopyableCode code="IpamResourceDiscoveryAssociationId" /></td>
    <td><code>array</code></td>
    <td>The resource discovery association IDs.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resource discovery associations to return in one page of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_resource_discovery_associations"
    values={[
        { label: 'describe_ipam_resource_discovery_associations', value: 'describe_ipam_resource_discovery_associations' }
    ]}
>
<TabItem value="describe_ipam_resource_discovery_associations">

Describes resource discovery association with an Amazon VPC IPAM. An associated resource discovery is a resource discovery that has been associated with an IPAM..

```sql
SELECT
ipam_arn,
ipam_id,
ipam_region,
ipam_resource_discovery_association_arn,
ipam_resource_discovery_association_id,
ipam_resource_discovery_id,
is_default,
owner_id,
resource_discovery_status,
state,
tags
FROM aws.ec2.ipam_resource_discovery_associations
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND IpamResourceDiscoveryAssociationId = '{{ IpamResourceDiscoveryAssociationId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>
