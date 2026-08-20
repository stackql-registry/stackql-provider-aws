--- 
title: share_invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - share_invitations
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>share_invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="share_invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.share_invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_share_invitations"
    values={[
        { label: 'list_share_invitations', value: 'list_share_invitations' }
    ]}
>
<TabItem value="list_share_invitations">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+\/=_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="share_invitation_summaries" /></td>
    <td><code>array</code></td>
    <td>List of share invitation summaries in a workload.</td>
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
    <td><a href="#list_share_invitations"><CopyableCode code="list_share_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-WorkloadNamePrefix"><code>WorkloadNamePrefix</code></a>, <a href="#parameter-LensNamePrefix"><code>LensNamePrefix</code></a>, <a href="#parameter-ShareResourceType"><code>ShareResourceType</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-ProfileNamePrefix"><code>ProfileNamePrefix</code></a>, <a href="#parameter-TemplateNamePrefix"><code>TemplateNamePrefix</code></a></td>
    <td>List the share invitations. WorkloadNamePrefix, LensNamePrefix, ProfileNamePrefix, and TemplateNamePrefix are mutually exclusive. Use the parameter that matches your ShareResourceType.</td>
</tr>
<tr>
    <td><a href="#update_share_invitation"><CopyableCode code="update_share_invitation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-share_invitation_id"><code>share_invitation_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ShareInvitationAction"><code>ShareInvitationAction</code></a></td>
    <td></td>
    <td>Update a workload or custom lens share invitation. This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</td>
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
<tr id="parameter-share_invitation_id">
    <td><CopyableCode code="share_invitation_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the share invitation.</td>
</tr>
<tr id="parameter-LensNamePrefix">
    <td><CopyableCode code="LensNamePrefix" /></td>
    <td><code>string</code></td>
    <td>An optional string added to the beginning of each lens name returned in the results.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for this request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ProfileNamePrefix">
    <td><CopyableCode code="ProfileNamePrefix" /></td>
    <td><code>string</code></td>
    <td>An optional string added to the beginning of each profile name returned in the results.</td>
</tr>
<tr id="parameter-ShareResourceType">
    <td><CopyableCode code="ShareResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of share invitations to be returned.</td>
</tr>
<tr id="parameter-TemplateNamePrefix">
    <td><CopyableCode code="TemplateNamePrefix" /></td>
    <td><code>string</code></td>
    <td>An optional string added to the beginning of each review template name returned in the results.</td>
</tr>
<tr id="parameter-WorkloadNamePrefix">
    <td><CopyableCode code="WorkloadNamePrefix" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_share_invitations"
    values={[
        { label: 'list_share_invitations', value: 'list_share_invitations' }
    ]}
>
<TabItem value="list_share_invitations">

List the share invitations. WorkloadNamePrefix, LensNamePrefix, ProfileNamePrefix, and TemplateNamePrefix are mutually exclusive. Use the parameter that matches your ShareResourceType.

```sql
SELECT
next_token,
share_invitation_summaries
FROM aws.wellarchitected.share_invitations
WHERE region = '{{ region }}' -- required
AND WorkloadNamePrefix = '{{ WorkloadNamePrefix }}'
AND LensNamePrefix = '{{ LensNamePrefix }}'
AND ShareResourceType = '{{ ShareResourceType }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND ProfileNamePrefix = '{{ ProfileNamePrefix }}'
AND TemplateNamePrefix = '{{ TemplateNamePrefix }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_share_invitation"
    values={[
        { label: 'update_share_invitation', value: 'update_share_invitation' }
    ]}
>
<TabItem value="update_share_invitation">

Update a workload or custom lens share invitation. This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.

```sql
UPDATE aws.wellarchitected.share_invitations
SET 
ShareInvitationAction = '{{ ShareInvitationAction }}'
WHERE 
share_invitation_id = '{{ share_invitation_id }}' --required
AND region = '{{ region }}' --required
AND ShareInvitationAction = '{{ ShareInvitationAction }}' --required
RETURNING
share_invitation;
```
</TabItem>
</Tabs>
