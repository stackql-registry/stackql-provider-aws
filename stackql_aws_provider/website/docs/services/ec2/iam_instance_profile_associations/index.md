--- 
title: iam_instance_profile_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - iam_instance_profile_associations
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

Creates, updates, deletes, gets or lists an <code>iam_instance_profile_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="iam_instance_profile_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.iam_instance_profile_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_iam_instance_profile_associations"
    values={[
        { label: 'describe_iam_instance_profile_associations', value: 'describe_iam_instance_profile_associations' }
    ]}
>
<TabItem value="describe_iam_instance_profile_associations">

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
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="IamInstanceProfile" /></td>
    <td><code>string</code></td>
    <td>The IAM instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="Timestamp" /></td>
    <td><code>string</code></td>
    <td>The time the IAM instance profile was associated with the instance.</td>
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
    <td><a href="#describe_iam_instance_profile_associations"><CopyableCode code="describe_iam_instance_profile_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes your IAM instance profile associations.</td>
</tr>
<tr>
    <td><a href="#replace_iam_instance_profile_association"><CopyableCode code="replace_iam_instance_profile_association" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-IamInstanceProfile"><code>IamInstanceProfile</code></a>, <a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Replaces an IAM instance profile for the specified running instance. You can use this action to change the IAM instance profile that's associated with an instance without having to disassociate the existing IAM instance profile first. Use DescribeIamInstanceProfileAssociations to get the association ID.</td>
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
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the existing IAM instance profile association.</td>
</tr>
<tr id="parameter-IamInstanceProfile">
    <td><CopyableCode code="IamInstanceProfile" /></td>
    <td><code>object</code></td>
    <td>The IAM instance profile.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>array</code></td>
    <td>The IAM instance profile associations.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. instance-id - The ID of the instance. state - The state of the association (associating | associated | disassociating).</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_iam_instance_profile_associations"
    values={[
        { label: 'describe_iam_instance_profile_associations', value: 'describe_iam_instance_profile_associations' }
    ]}
>
<TabItem value="describe_iam_instance_profile_associations">

Describes your IAM instance profile associations.

```sql
SELECT
AssociationId,
IamInstanceProfile,
InstanceId,
State,
Timestamp
FROM aws.ec2.iam_instance_profile_associations
WHERE region = '{{ region }}' -- required
AND AssociationId = '{{ AssociationId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_iam_instance_profile_association"
    values={[
        { label: 'replace_iam_instance_profile_association', value: 'replace_iam_instance_profile_association' }
    ]}
>
<TabItem value="replace_iam_instance_profile_association">

Replaces an IAM instance profile for the specified running instance. You can use this action to change the IAM instance profile that's associated with an instance without having to disassociate the existing IAM instance profile first. Use DescribeIamInstanceProfileAssociations to get the association ID.

```sql
REPLACE aws.ec2.iam_instance_profile_associations
SET 
-- No updatable properties
WHERE 
IamInstanceProfile = '{{ IamInstanceProfile }}' --required
AND AssociationId = '{{ AssociationId }}' --required
AND region = '{{ region }}' --required
RETURNING
AssociationId,
IamInstanceProfile,
InstanceId,
State,
Timestamp;
```
</TabItem>
</Tabs>
