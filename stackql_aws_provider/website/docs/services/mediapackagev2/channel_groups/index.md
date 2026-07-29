--- 
title: channel_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_groups
  - mediapackagev2
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

Creates, updates, deletes, gets or lists a <code>channel_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackagev2.channel_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel_group"
    values={[
        { label: 'get_channel_group', value: 'get_channel_group' },
        { label: 'list_channel_groups', value: 'list_channel_groups' }
    ]}
>
<TabItem value="get_channel_group">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_group_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the channel group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for your channel group.</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="egress_domain" /></td>
    <td><code>string</code></td>
    <td>The output domain where the source stream should be sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the channel group was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The comma-separated list of tag key:value pairs assigned to the channel group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_channel_groups">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_group_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the channel group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Any descriptive information that you want to add to the channel group for future identification purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the channel group was modified.</td>
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
    <td><a href="#get_channel_group"><CopyableCode code="get_channel_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified channel group that's configured in AWS Elemental MediaPackage.</td>
</tr>
<tr>
    <td><a href="#list_channel_groups"><CopyableCode code="list_channel_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves all channel groups that are configured in Elemental MediaPackage.</td>
</tr>
<tr>
    <td><a href="#create_channel_group"><CopyableCode code="create_channel_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelGroupName"><code>ChannelGroupName</code></a></td>
    <td><a href="#parameter-x-amzn-client-token"><code>x-amzn-client-token</code></a></td>
    <td>Create a channel group to group your channels and origin endpoints. A channel group is the top-level resource that consists of channels and origin endpoints that are associated with it and that provides predictable URLs for stream delivery. All channels and origin endpoints within the channel group are guaranteed to share the DNS. You can create only one channel group with each request.</td>
</tr>
<tr>
    <td><a href="#update_channel_group"><CopyableCode code="update_channel_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amzn-update-if-match"><code>x-amzn-update-if-match</code></a></td>
    <td>Update the specified channel group. You can edit the description on a channel group for easier identification later from the AWS Elemental MediaPackage console. You can't edit the name of the channel group. Any edits you make that impact the video output may not be reflected for a few minutes.</td>
</tr>
<tr>
    <td><a href="#delete_channel_group"><CopyableCode code="delete_channel_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a channel group. You must delete the channel group's channels and origin endpoints before you can delete the channel group. If you delete a channel group, you'll lose access to the egress domain and will have to create a new channel group to replace it.</td>
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
<tr id="parameter-channel_group_name">
    <td><CopyableCode code="channel_group_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the GET list request. Use the token to fetch the next page of results.</td>
</tr>
<tr id="parameter-x-amzn-client-token">
    <td><CopyableCode code="x-amzn-client-token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-x-amzn-update-if-match">
    <td><CopyableCode code="x-amzn-update-if-match" /></td>
    <td><code>string</code></td>
    <td>The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_channel_group"
    values={[
        { label: 'get_channel_group', value: 'get_channel_group' },
        { label: 'list_channel_groups', value: 'list_channel_groups' }
    ]}
>
<TabItem value="get_channel_group">

Retrieves the specified channel group that's configured in AWS Elemental MediaPackage.

```sql
SELECT
arn,
channel_group_name,
created_at,
description,
e_tag,
egress_domain,
modified_at,
tags
FROM aws.mediapackagev2.channel_groups
WHERE channel_group_name = '{{ channel_group_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channel_groups">

Retrieves all channel groups that are configured in Elemental MediaPackage.

```sql
SELECT
arn,
channel_group_name,
created_at,
description,
modified_at
FROM aws.mediapackagev2.channel_groups
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel_group"
    values={[
        { label: 'create_channel_group', value: 'create_channel_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel_group">

Create a channel group to group your channels and origin endpoints. A channel group is the top-level resource that consists of channels and origin endpoints that are associated with it and that provides predictable URLs for stream delivery. All channels and origin endpoints within the channel group are guaranteed to share the DNS. You can create only one channel group with each request.

```sql
INSERT INTO aws.mediapackagev2.channel_groups (
ChannelGroupName,
Description,
Tags,
region,
`x-amzn-client-token`
)
SELECT 
'{{ ChannelGroupName }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
'{{ region }}',
'{{ x-amzn-client-token }}'
RETURNING
arn,
channel_group_name,
created_at,
description,
e_tag,
egress_domain,
modified_at,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channel_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channel_groups resource.
    - name: ChannelGroupName
      value: "{{ ChannelGroupName }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: x-amzn-client-token
      value: "{{ x-amzn-client-token }}"
      description: A unique, case-sensitive token that you provide to ensure the idempotency of the request.
      description: A unique, case-sensitive token that you provide to ensure the idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_channel_group"
    values={[
        { label: 'update_channel_group', value: 'update_channel_group' }
    ]}
>
<TabItem value="update_channel_group">

Update the specified channel group. You can edit the description on a channel group for easier identification later from the AWS Elemental MediaPackage console. You can't edit the name of the channel group. Any edits you make that impact the video output may not be reflected for a few minutes.

```sql
UPDATE aws.mediapackagev2.channel_groups
SET 
Description = '{{ Description }}'
WHERE 
channel_group_name = '{{ channel_group_name }}' --required
AND region = '{{ region }}' --required
AND `x-amzn-update-if-match` = '{{ x-amzn-update-if-match}}'
RETURNING
arn,
channel_group_name,
created_at,
description,
e_tag,
egress_domain,
modified_at,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel_group"
    values={[
        { label: 'delete_channel_group', value: 'delete_channel_group' }
    ]}
>
<TabItem value="delete_channel_group">

Delete a channel group. You must delete the channel group's channels and origin endpoints before you can delete the channel group. If you delete a channel group, you'll lose access to the egress domain and will have to create a new channel group to replace it.

```sql
DELETE FROM aws.mediapackagev2.channel_groups
WHERE channel_group_name = '{{ channel_group_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
