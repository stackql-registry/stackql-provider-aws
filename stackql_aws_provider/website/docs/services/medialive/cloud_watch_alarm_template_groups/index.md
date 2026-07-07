--- 
title: cloud_watch_alarm_template_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_watch_alarm_template_groups
  - medialive
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

Creates, updates, deletes, gets or lists a <code>cloud_watch_alarm_template_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_watch_alarm_template_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.cloud_watch_alarm_template_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_watch_alarm_template_group"
    values={[
        { label: 'get_cloud_watch_alarm_template_group', value: 'get_cloud_watch_alarm_template_group' },
        { label: 'list_cloud_watch_alarm_template_groups', value: 'list_cloud_watch_alarm_template_groups' }
    ]}
>
<TabItem value="get_cloud_watch_alarm_template_group">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template group's ARN (Amazon Resource Name)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin0Max1024</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin7Max11PatternAws097</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max255PatternS</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cloud_watch_alarm_template_groups">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template group's ARN (Amazon Resource Name)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin0Max1024</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max255PatternS</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="TemplateCount" /></td>
    <td><code>integer</code></td>
    <td>The number of templates in a group.</td>
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
    <td><a href="#get_cloud_watch_alarm_template_group"><CopyableCode code="get_cloud_watch_alarm_template_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified cloudwatch alarm template group.</td>
</tr>
<tr>
    <td><a href="#list_cloud_watch_alarm_template_groups"><CopyableCode code="list_cloud_watch_alarm_template_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-signalMapIdentifier"><code>signalMapIdentifier</code></a></td>
    <td>Lists cloudwatch alarm template groups.</td>
</tr>
<tr>
    <td><a href="#create_cloud_watch_alarm_template_group"><CopyableCode code="create_cloud_watch_alarm_template_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a cloudwatch alarm template group to group your cloudwatch alarm templates and to attach to signal maps for dynamically creating alarms.</td>
</tr>
<tr>
    <td><a href="#update_cloud_watch_alarm_template_group"><CopyableCode code="update_cloud_watch_alarm_template_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified cloudwatch alarm template group.</td>
</tr>
<tr>
    <td><a href="#delete_cloud_watch_alarm_template_group"><CopyableCode code="delete_cloud_watch_alarm_template_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cloudwatch alarm template group. You must detach this group from all signal maps and ensure its existing templates are moved to another group or deleted.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template group's identifier. Can be either be its id or current name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to retrieve the next set of results in paginated list responses.</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Represents the scope of a resource, with options for all scopes, AWS provided resources, or local resources.</td>
</tr>
<tr id="parameter-signalMapIdentifier">
    <td><CopyableCode code="signalMapIdentifier" /></td>
    <td><code>string</code></td>
    <td>A signal map's identifier. Can be either be its id or current name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cloud_watch_alarm_template_group"
    values={[
        { label: 'get_cloud_watch_alarm_template_group', value: 'get_cloud_watch_alarm_template_group' },
        { label: 'list_cloud_watch_alarm_template_groups', value: 'list_cloud_watch_alarm_template_groups' }
    ]}
>
<TabItem value="get_cloud_watch_alarm_template_group">

Retrieves the specified cloudwatch alarm template group.

```sql
SELECT
Arn,
CreatedAt,
Description,
Id,
ModifiedAt,
Name,
Tags
FROM aws.medialive.cloud_watch_alarm_template_groups
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cloud_watch_alarm_template_groups">

Lists cloudwatch alarm template groups.

```sql
SELECT
Arn,
CreatedAt,
Description,
Id,
ModifiedAt,
Name,
Tags,
TemplateCount
FROM aws.medialive.cloud_watch_alarm_template_groups
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND scope = '{{ scope }}'
AND signalMapIdentifier = '{{ signalMapIdentifier }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_watch_alarm_template_group"
    values={[
        { label: 'create_cloud_watch_alarm_template_group', value: 'create_cloud_watch_alarm_template_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_watch_alarm_template_group">

Creates a cloudwatch alarm template group to group your cloudwatch alarm templates and to attach to signal maps for dynamically creating alarms.

```sql
INSERT INTO aws.medialive.cloud_watch_alarm_template_groups (
Description,
Name,
Tags,
RequestId,
region
)
SELECT 
'{{ Description }}',
'{{ Name }}',
'{{ Tags }}',
'{{ RequestId }}',
'{{ region }}'
RETURNING
Arn,
CreatedAt,
Description,
Id,
ModifiedAt,
Name,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_watch_alarm_template_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_watch_alarm_template_groups resource.
    - name: Description
      value: "{{ Description }}"
      description: |
        Placeholder documentation for __stringMin0Max1024
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __stringMin1Max255PatternS
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Represents the tags associated with a resource.
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __stringMin1Max256PatternS
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cloud_watch_alarm_template_group"
    values={[
        { label: 'update_cloud_watch_alarm_template_group', value: 'update_cloud_watch_alarm_template_group' }
    ]}
>
<TabItem value="update_cloud_watch_alarm_template_group">

Updates the specified cloudwatch alarm template group.

```sql
UPDATE aws.medialive.cloud_watch_alarm_template_groups
SET 
Description = '{{ Description }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
CreatedAt,
Description,
Id,
ModifiedAt,
Name,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cloud_watch_alarm_template_group"
    values={[
        { label: 'delete_cloud_watch_alarm_template_group', value: 'delete_cloud_watch_alarm_template_group' }
    ]}
>
<TabItem value="delete_cloud_watch_alarm_template_group">

Deletes a cloudwatch alarm template group. You must detach this group from all signal maps and ensure its existing templates are moved to another group or deleted.

```sql
DELETE FROM aws.medialive.cloud_watch_alarm_template_groups
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
