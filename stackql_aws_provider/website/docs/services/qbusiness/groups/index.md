--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="get_group">

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
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="statusHistory" /></td>
    <td><code>array</code></td>
    <td>The status history of the group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_groups">

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
    <td><CopyableCode code="groupName" /></td>
    <td><code>string</code></td>
    <td>The name of the group the summary information is for. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
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
    <td><a href="#get_group"><CopyableCode code="get_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dataSourceId"><code>dataSourceId</code></a></td>
    <td>Describes a group by group name.</td>
</tr>
<tr>
    <td><a href="#list_groups"><CopyableCode code="list_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-updatedEarlierThan"><code>updatedEarlierThan</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dataSourceId"><code>dataSourceId</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides a list of groups that are mapped to users.</td>
</tr>
<tr>
    <td><a href="#put_group"><CopyableCode code="put_group" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-groupName"><code>groupName</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-groupMembers"><code>groupMembers</code></a></td>
    <td></td>
    <td>Create, or updates, a mapping of users—who have access to a document—to groups. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their Amazon Q Business chat results. There are two options for creating groups, either passing group members inline or using an S3 file via the S3PathForGroupMembers field. For inline groups, there is a limit of 1000 members per group and for provided S3 files there is a limit of 100 thousand members. When creating a group using an S3 file, you provide both an S3 file and a RoleArn for Amazon Q Buisness to access the file.</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dataSourceId"><code>dataSourceId</code></a></td>
    <td>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their chat results. If you want to delete, update, or replace users or sub groups of a group, you need to use the PutGroup operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutGroup.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the application in which the group mapping belongs.</td>
</tr>
<tr id="parameter-group_name">
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the group you want to delete.</td>
</tr>
<tr id="parameter-index_id">
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index you want to delete the group from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-updatedEarlierThan">
    <td><CopyableCode code="updatedEarlierThan" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp identifier used for the latest PUT or DELETE action for mapping users to their groups.</td>
</tr>
<tr id="parameter-dataSourceId">
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source linked to the group A group can be tied to multiple data sources. You can delete a group from accessing documents in a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. You want to delete "Research" and "Engineering" groups from Salesforce, so that these groups cannot access customer-related documents stored in Salesforce. Only "Sales and Marketing" should access documents in the Salesforce data source.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned groups that are mapped to users.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the previous response was incomplete (because there is more data to retrieve), Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of groups that are mapped to users.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="get_group">

Describes a group by group name.

```sql
SELECT
status,
statusHistory
FROM aws.qbusiness.groups
WHERE application_id = '{{ application_id }}' -- required
AND index_id = '{{ index_id }}' -- required
AND group_name = '{{ group_name }}' -- required
AND region = '{{ region }}' -- required
AND dataSourceId = '{{ dataSourceId }}'
;
```
</TabItem>
<TabItem value="list_groups">

Provides a list of groups that are mapped to users.

```sql
SELECT
groupName
FROM aws.qbusiness.groups
WHERE application_id = '{{ application_id }}' -- required
AND index_id = '{{ index_id }}' -- required
AND updatedEarlierThan = '{{ updatedEarlierThan }}' -- required
AND region = '{{ region }}' -- required
AND dataSourceId = '{{ dataSourceId }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_group"
    values={[
        { label: 'put_group', value: 'put_group' }
    ]}
>
<TabItem value="put_group">

Create, or updates, a mapping of users—who have access to a document—to groups. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their Amazon Q Business chat results. There are two options for creating groups, either passing group members inline or using an S3 file via the S3PathForGroupMembers field. For inline groups, there is a limit of 1000 members per group and for provided S3 files there is a limit of 100 thousand members. When creating a group using an S3 file, you provide both an S3 file and a RoleArn for Amazon Q Buisness to access the file.

```sql
REPLACE aws.qbusiness.groups
SET 
groupName = '{{ groupName }}',
dataSourceId = '{{ dataSourceId }}',
type = '{{ type }}',
groupMembers = '{{ groupMembers }}',
roleArn = '{{ roleArn }}'
WHERE 
application_id = '{{ application_id }}' --required
AND index_id = '{{ index_id }}' --required
AND region = '{{ region }}' --required
AND groupName = '{{ groupName }}' --required
AND type = '{{ type }}' --required
AND groupMembers = '{{ groupMembers }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_group"
    values={[
        { label: 'delete_group', value: 'delete_group' }
    ]}
>
<TabItem value="delete_group">

Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their chat results. If you want to delete, update, or replace users or sub groups of a group, you need to use the PutGroup operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutGroup.

```sql
DELETE FROM aws.qbusiness.groups
WHERE application_id = '{{ application_id }}' --required
AND index_id = '{{ index_id }}' --required
AND group_name = '{{ group_name }}' --required
AND region = '{{ region }}' --required
AND dataSourceId = '{{ dataSourceId }}'
;
```
</TabItem>
</Tabs>
