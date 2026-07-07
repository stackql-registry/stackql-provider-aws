--- 
title: regions
hide_title: false
hide_table_of_contents: false
keywords:
  - regions
  - sso_admin
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

Creates, updates, deletes, gets or lists a <code>regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_region"
    values={[
        { label: 'describe_region', value: 'describe_region' },
        { label: 'list_regions', value: 'list_regions' }
    ]}
>
<TabItem value="describe_region">

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
    <td><CopyableCode code="AddedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the Region was added to the IAM Identity Center instance. For the primary Region, this is the IAM Identity Center instance creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="IsPrimaryRegion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the primary Region where the IAM Identity Center instance was originally enabled. For more information on the difference between the primary Region and additional Regions, see IAM Identity Center User Guide</td>
</tr>
<tr>
    <td><CopyableCode code="RegionName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region name. (pattern: &lt;code&gt;(&#91;a-z&#93;+-)&#123;2,3&#125;\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Region. Valid values are ACTIVE (Region is operational), ADDING (Region replication workflow is in progress), or REMOVING (Region removal workflow is in progress). (ACTIVE, ADDING, REMOVING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_regions">

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
    <td><CopyableCode code="AddedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the Region was added to the IAM Identity Center instance. For the primary Region, this is the instance creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="IsPrimaryRegion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the primary Region where the IAM Identity Center instance was originally enabled. The primary Region cannot be removed.</td>
</tr>
<tr>
    <td><CopyableCode code="RegionName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region name. (pattern: &lt;code&gt;(&#91;a-z&#93;+-)&#123;2,3&#125;\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Region. Valid values are ACTIVE (Region is operational), ADDING (Region extension workflow is in progress), or REMOVING (Region removal workflow is in progress). (ACTIVE, ADDING, REMOVING)</td>
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
    <td><a href="#describe_region"><CopyableCode code="describe_region" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific Region enabled in an IAM Identity Center instance. Details include the Region name, current status (ACTIVE, ADDING, or REMOVING), the date when the Region was added, and whether it is the primary Region. The request must be made from one of the enabled Regions of the IAM Identity Center instance. The following actions are related to DescribeRegion: AddRegion RemoveRegion ListRegions</td>
</tr>
<tr>
    <td><a href="#list_regions"><CopyableCode code="list_regions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all enabled Regions of an IAM Identity Center instance, including those that are being added or removed. This operation returns Regions with ACTIVE, ADDING, or REMOVING status. The following actions are related to ListRegions: AddRegion RemoveRegion DescribeRegion</td>
</tr>
<tr>
    <td><a href="#add_region"><CopyableCode code="add_region" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-RegionName"><code>RegionName</code></a></td>
    <td></td>
    <td>Adds a Region to an IAM Identity Center instance. This operation initiates an asynchronous workflow to replicate the IAM Identity Center instance to the target Region. The Region status is set to ADDING at first and changes to ACTIVE when the workflow completes. To use this operation, your IAM Identity Center instance and the target Region must meet the requirements described in the IAM Identity Center User Guide. The following actions are related to AddRegion: RemoveRegion DescribeRegion ListRegions</td>
</tr>
<tr>
    <td><a href="#remove_region"><CopyableCode code="remove_region" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-RegionName"><code>RegionName</code></a></td>
    <td></td>
    <td>Removes an additional Region from an IAM Identity Center instance. This operation initiates an asynchronous workflow to clean up IAM Identity Center resources in the specified additional Region. The Region status is set to REMOVING and the Region record is deleted when the workflow completes. The request must be made from the primary Region. The target Region cannot be the primary Region, and no other add or remove Region workflows can be in progress. The following actions are related to RemoveRegion: AddRegion DescribeRegion ListRegions</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_region"
    values={[
        { label: 'describe_region', value: 'describe_region' },
        { label: 'list_regions', value: 'list_regions' }
    ]}
>
<TabItem value="describe_region">

Retrieves details about a specific Region enabled in an IAM Identity Center instance. Details include the Region name, current status (ACTIVE, ADDING, or REMOVING), the date when the Region was added, and whether it is the primary Region. The request must be made from one of the enabled Regions of the IAM Identity Center instance. The following actions are related to DescribeRegion: AddRegion RemoveRegion ListRegions

```sql
SELECT
AddedDate,
IsPrimaryRegion,
RegionName,
Status
FROM aws.sso_admin.regions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_regions">

Lists all enabled Regions of an IAM Identity Center instance, including those that are being added or removed. This operation returns Regions with ACTIVE, ADDING, or REMOVING status. The following actions are related to ListRegions: AddRegion RemoveRegion DescribeRegion

```sql
SELECT
AddedDate,
IsPrimaryRegion,
RegionName,
Status
FROM aws.sso_admin.regions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_region"
    values={[
        { label: 'add_region', value: 'add_region' }
    ]}
>
<TabItem value="add_region">

Adds a Region to an IAM Identity Center instance. This operation initiates an asynchronous workflow to replicate the IAM Identity Center instance to the target Region. The Region status is set to ADDING at first and changes to ACTIVE when the workflow completes. To use this operation, your IAM Identity Center instance and the target Region must meet the requirements described in the IAM Identity Center User Guide. The following actions are related to AddRegion: RemoveRegion DescribeRegion ListRegions

```sql
UPDATE aws.sso_admin.regions
SET 
InstanceArn = '{{ InstanceArn }}',
RegionName = '{{ RegionName }}'
WHERE 
region = '{{ region }}' --required
AND InstanceArn = '{{ InstanceArn }}' --required
AND RegionName = '{{ RegionName }}' --required
RETURNING
Status;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_region"
    values={[
        { label: 'remove_region', value: 'remove_region' }
    ]}
>
<TabItem value="remove_region">

Removes an additional Region from an IAM Identity Center instance. This operation initiates an asynchronous workflow to clean up IAM Identity Center resources in the specified additional Region. The Region status is set to REMOVING and the Region record is deleted when the workflow completes. The request must be made from the primary Region. The target Region cannot be the primary Region, and no other add or remove Region workflows can be in progress. The following actions are related to RemoveRegion: AddRegion DescribeRegion ListRegions

```sql
EXEC aws.sso_admin.regions.remove_region 
@region='{{ region }}' --required 
@@json=
'{
"InstanceArn": "{{ InstanceArn }}", 
"RegionName": "{{ RegionName }}"
}'
;
```
</TabItem>
</Tabs>
