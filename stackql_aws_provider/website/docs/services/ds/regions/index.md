--- 
title: regions
hide_title: false
hide_table_of_contents: false
keywords:
  - regions
  - ds
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_regions"
    values={[
        { label: 'describe_regions', value: 'describe_regions' }
    ]}
>
<TabItem value="describe_regions">

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
    <td><CopyableCode code="DesiredNumberOfDomainControllers" /></td>
    <td><code>integer</code></td>
    <td>The desired number of domain controllers in the specified Region for the specified directory.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the directory. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Region description was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies when the Region replication began.</td>
</tr>
<tr>
    <td><CopyableCode code="RegionName" /></td>
    <td><code>string</code></td>
    <td>The name of the Region. For example, us-east-1.</td>
</tr>
<tr>
    <td><CopyableCode code="RegionType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the Region is the primary Region or an additional Region. (Primary, Additional)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the replication process for the specified Region. (Requested, Creating, Created, Active, Inoperable, Impaired, Restoring, RestoreFailed, Deleting, Deleted, Failed, Updating)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusLastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Region status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcSettings" /></td>
    <td><code>object</code></td>
    <td>Contains VPC information for the CreateDirectory, CreateMicrosoftAD, or CreateHybridAD operation.</td>
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
    <td><a href="#describe_regions"><CopyableCode code="describe_regions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the Regions that are configured for multi-Region replication.</td>
</tr>
<tr>
    <td><a href="#add_region"><CopyableCode code="add_region" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-RegionName"><code>RegionName</code></a>, <a href="#parameter-VPCSettings"><code>VPCSettings</code></a></td>
    <td></td>
    <td>Adds two domain controllers in the specified Region for the specified directory.</td>
</tr>
<tr>
    <td><a href="#remove_region"><CopyableCode code="remove_region" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the DeleteDirectory API.</td>
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
    defaultValue="describe_regions"
    values={[
        { label: 'describe_regions', value: 'describe_regions' }
    ]}
>
<TabItem value="describe_regions">

Provides information about the Regions that are configured for multi-Region replication.

```sql
SELECT
DesiredNumberOfDomainControllers,
DirectoryId,
LastUpdatedDateTime,
LaunchTime,
RegionName,
RegionType,
Status,
StatusLastUpdatedDateTime,
VpcSettings
FROM aws.ds.regions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_region"
    values={[
        { label: 'add_region', value: 'add_region' },
        { label: 'remove_region', value: 'remove_region' }
    ]}
>
<TabItem value="add_region">

Adds two domain controllers in the specified Region for the specified directory.

```sql
UPDATE aws.ds.regions
SET 
DirectoryId = '{{ DirectoryId }}',
RegionName = '{{ RegionName }}',
VPCSettings = '{{ VPCSettings }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
AND RegionName = '{{ RegionName }}' --required
AND VPCSettings = '{{ VPCSettings }}' --required;
```
</TabItem>
<TabItem value="remove_region">

Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the DeleteDirectory API.

```sql
UPDATE aws.ds.regions
SET 
DirectoryId = '{{ DirectoryId }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required;
```
</TabItem>
</Tabs>
