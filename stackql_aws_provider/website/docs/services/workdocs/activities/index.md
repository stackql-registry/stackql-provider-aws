--- 
title: activities
hide_title: false
hide_table_of_contents: false
keywords:
  - activities
  - workdocs
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

Creates, updates, deletes, gets or lists an <code>activities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="activities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.activities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_activities"
    values={[
        { label: 'describe_activities', value: 'describe_activities' }
    ]}
>
<TabItem value="describe_activities">

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
    <td><CopyableCode code="comment_metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata of the commenting activity. This is an optional field and is filled for commenting activities.</td>
</tr>
<tr>
    <td><CopyableCode code="initiator" /></td>
    <td><code>object</code></td>
    <td>The user who performed the action.</td>
</tr>
<tr>
    <td><CopyableCode code="is_indirect_activity" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether an activity is indirect or direct. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the organization. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="original_parent" /></td>
    <td><code>object</code></td>
    <td>The original parent of the resource. This is an optional field and is filled for move activities.</td>
</tr>
<tr>
    <td><CopyableCode code="participants" /></td>
    <td><code>object</code></td>
    <td>The list of users or groups impacted by this action. This is an optional field and is filled for the following sharing activities: DOCUMENT_SHARED, DOCUMENT_SHARED, DOCUMENT_UNSHARED, FOLDER_SHARED, FOLDER_UNSHARED.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the resource involved in the user action.</td>
</tr>
<tr>
    <td><CopyableCode code="time_stamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the action was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The activity type. (DOCUMENT_CHECKED_IN, DOCUMENT_CHECKED_OUT, DOCUMENT_RENAMED, DOCUMENT_VERSION_UPLOADED, DOCUMENT_VERSION_DELETED, DOCUMENT_VERSION_VIEWED, DOCUMENT_VERSION_DOWNLOADED, DOCUMENT_RECYCLED, DOCUMENT_RESTORED, DOCUMENT_REVERTED, DOCUMENT_SHARED, DOCUMENT_UNSHARED, DOCUMENT_SHARE_PERMISSION_CHANGED, DOCUMENT_SHAREABLE_LINK_CREATED, DOCUMENT_SHAREABLE_LINK_REMOVED, DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED, DOCUMENT_MOVED, DOCUMENT_COMMENT_ADDED, DOCUMENT_COMMENT_DELETED, DOCUMENT_ANNOTATION_ADDED, DOCUMENT_ANNOTATION_DELETED, FOLDER_CREATED, FOLDER_DELETED, FOLDER_RENAMED, FOLDER_RECYCLED, FOLDER_RESTORED, FOLDER_SHARED, FOLDER_UNSHARED, FOLDER_SHARE_PERMISSION_CHANGED, FOLDER_SHAREABLE_LINK_CREATED, FOLDER_SHAREABLE_LINK_REMOVED, FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED, FOLDER_MOVED)</td>
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
    <td><a href="#describe_activities"><CopyableCode code="describe_activities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-organizationId"><code>organizationId</code></a>, <a href="#parameter-activityTypes"><code>activityTypes</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-includeIndirectActivities"><code>includeIndirectActivities</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a></td>
    <td>Describes the user activities in a specified time period.</td>
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
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-activityTypes">
    <td><CopyableCode code="activityTypes" /></td>
    <td><code>string</code></td>
    <td>Specifies which activity types to include in the response. If this field is left empty, all activity types are returned.</td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that determines the end time of the activities. The response includes the activities performed before the specified timestamp.</td>
</tr>
<tr id="parameter-includeIndirectActivities">
    <td><CopyableCode code="includeIndirectActivities" /></td>
    <td><code>boolean</code></td>
    <td>Includes indirect activities. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results.</td>
</tr>
<tr id="parameter-organizationId">
    <td><CopyableCode code="organizationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the organization. This is a mandatory parameter when using administrative API (SigV4) requests.</td>
</tr>
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The document or folder ID for which to describe activity types.</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that determines the starting time of the activities. The response includes the activities performed after the specified timestamp.</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The ID of the user who performed the action. The response includes activities pertaining to this user. This is an optional parameter and is only applicable for administrative API (SigV4) requests.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_activities"
    values={[
        { label: 'describe_activities', value: 'describe_activities' }
    ]}
>
<TabItem value="describe_activities">

Describes the user activities in a specified time period.

```sql
SELECT
comment_metadata,
initiator,
is_indirect_activity,
organization_id,
original_parent,
participants,
resource_metadata,
time_stamp,
type
FROM aws.workdocs.activities
WHERE region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
AND organizationId = '{{ organizationId }}'
AND activityTypes = '{{ activityTypes }}'
AND resourceId = '{{ resourceId }}'
AND userId = '{{ userId }}'
AND includeIndirectActivities = '{{ includeIndirectActivities }}'
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
;
```
</TabItem>
</Tabs>
