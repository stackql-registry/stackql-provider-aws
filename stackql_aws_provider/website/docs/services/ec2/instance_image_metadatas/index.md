--- 
title: instance_image_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_image_metadatas
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

Creates, updates, deletes, gets or lists an <code>instance_image_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_image_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_image_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_image_metadata"
    values={[
        { label: 'describe_instance_image_metadata', value: 'describe_instance_image_metadata' }
    ]}
>
<TabItem value="describe_instance_image_metadata">

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
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone or Local Zone of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="image_metadata" /></td>
    <td><code>string</code></td>
    <td>Information about the AMI used to launch the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_time" /></td>
    <td><code>string</code></td>
    <td>The time the instance was launched.</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>The entity that manages the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone or Local Zone of the instance.</td>
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
    <td><a href="#describe_instance_image_metadata"><CopyableCode code="describe_instance_image_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the AMI that was used to launch an instance, even if the AMI is deprecated, deregistered, made private (no longer public or shared with your account), or not allowed. If you specify instance IDs, the output includes information for only the specified instances. If you specify filters, the output includes information for only those instances that meet the filter criteria. If you do not specify instance IDs or filters, the output includes information for all instances, which can affect performance. If you specify an instance ID that is not valid, an instance that doesn't exist, or an instance that you do not own, an error (InvalidInstanceID.NotFound) is returned. Recently terminated instances might appear in the returned results. This interval is usually less than one hour. In the rare case where an Availability Zone is experiencing a service disruption and you specify instance IDs that are in the affected Availability Zone, or do not specify any instance IDs at all, the call fails. If you specify only instance IDs that are in an unaffected Availability Zone, the call works normally. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
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
    <td>The filters. availability-zone - The name of the Availability Zone (for example, us-west-2a) or Local Zone (for example, us-west-2-lax-1b) of the instance. instance-id - The ID of the instance. image-allowed - A Boolean that indicates whether the image meets the criteria specified for Allowed AMIs. instance-state-name - The state of the instance (pending | running | shutting-down | terminated | stopping | stopped). instance-type - The type of instance (for example, t3.micro). launch-time - The time when the instance was launched, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, 2023-09-29T11:04:43.305Z. You can use a wildcard (*), for example, 2023-09-29T*, which matches an entire day. owner-alias - The owner alias (amazon | aws-marketplace | aws-backup-vault). The valid aliases are defined in an Amazon-maintained list. This is not the Amazon Web Services account alias that can be set using the IAM console. We recommend that you use the Owner request parameter instead of this filter. owner-id - The Amazon Web Services account ID of the owner. We recommend that you use the Owner request parameter instead of this filter. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. zone-id - The ID of the Availability Zone (for example, usw2-az2) or Local Zone (for example, usw2-lax1-az1) of the instance.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>array</code></td>
    <td>The instance IDs. If you don't specify an instance ID or filters, the output includes information for all instances.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination. Default: 1000</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_image_metadata"
    values={[
        { label: 'describe_instance_image_metadata', value: 'describe_instance_image_metadata' }
    ]}
>
<TabItem value="describe_instance_image_metadata">

Describes the AMI that was used to launch an instance, even if the AMI is deprecated, deregistered, made private (no longer public or shared with your account), or not allowed. If you specify instance IDs, the output includes information for only the specified instances. If you specify filters, the output includes information for only those instances that meet the filter criteria. If you do not specify instance IDs or filters, the output includes information for all instances, which can affect performance. If you specify an instance ID that is not valid, an instance that doesn't exist, or an instance that you do not own, an error (InvalidInstanceID.NotFound) is returned. Recently terminated instances might appear in the returned results. This interval is usually less than one hour. In the rare case where an Availability Zone is experiencing a service disruption and you specify instance IDs that are in the affected Availability Zone, or do not specify any instance IDs at all, the call fails. If you specify only instance IDs that are in an unaffected Availability Zone, the call works normally. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
availability_zone,
image_metadata,
instance_id,
instance_type,
launch_time,
operator,
owner_id,
state,
tags,
zone_id
FROM aws.ec2.instance_image_metadatas
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND InstanceId = '{{ InstanceId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
